import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // Initialize Gemini AI Client
  let ai: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
      console.log("Gemini AI Client initialized successfully.");
    } catch (err) {
      console.error("Failed to initialize Gemini AI Client:", err);
    }
  } else {
    console.warn("GEMINI_API_KEY is not defined in the environment. AI Chatbot will run in fallback mode.");
  }

  // API Route: Contact Form Submission
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required." });
    }

    console.log(`[Contact Submission] Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Simulate successful message storage / receipt
    return res.json({
      success: true,
      message: "Thank you for your message! Our team will get back to you shortly.",
    });
  });

  // API Route: Chatbot Assistant
  app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request. messages array is required." });
    }

    // Knowledge Base System Prompt
    const systemPrompt = `You are the TechMark Solutions AI Course Advisor, an expert virtual assistant designed to answer visitor questions about TechMark Solutions and its main offer, the AI Automation Course.

You must adhere strictly to the following knowledge base:

=== BRAND INFORMATION & GENERAL ===
- Company Name: TechMark Solutions
- Founder: Mark Diaz
- Founded: January 1, 2026
- Industry: AI Automation Training / Digital Education
- Main Offer: TechMark Solutions – AI Automation Course
- Course Level: Beginner to Intermediate
- Languages Available: English and Tagalog
- Description: TechMark Solutions is an online learning platform focused on teaching AI-powered workflow automation using beginner-friendly no-code and low-code tools.
- Mission: To help freelancers, virtual assistants, professionals, and business owners automate repetitive tasks, improve productivity, and build practical AI automation systems.

=== PRICING ===
- Course Price: ₱4,999 One-Time Payment. There are no monthly subscription fees or hidden costs!

=== WHO IS THIS COURSE FOR ===
- Virtual Assistants
- Freelancers
- Business Owners
- Administrative Professionals
- Digital Marketers
- Students
- Beginners interested in AI Automation

=== COURSE MODULES & TOPICS ===
- Module 1: Automation Fundamentals
  * Topics: Introduction to workflow automation, Understanding automation concepts, Business process mapping, Identifying automation opportunities, Automation best practices
- Module 2: n8n Workflow Automation
  * Topics: Building workflows from scratch, Triggers and actions, Connecting applications, API integrations, Error handling, Debugging workflows
- Module 3: Zapier & Make.com Automation
  * Topics: Creating multi-step workflows, Connecting applications, Webhooks, Data formatting, Workflow optimization
- Module 4: AI-Powered Automation
  * Topics: ChatGPT integration, OpenAI API usage, Prompt Engineering, AI assistants, AI content generation, AI workflow optimization
- Module 5: Real-World Automation Projects
  * Topics: Lead generation automation, CRM automation, Email automation, Google Drive automation, Google Sheets automation, Content repurposing workflows, Social media automation, Business process automation

=== TOOLS TAUGHT ===
- n8n, Zapier, Make.com, ChatGPT, OpenAI API, Google Sheets, Google Drive, Gmail, Google Forms, Webhooks, APIs, JSON, HTTP Requests

=== ENROLLMENT BONUSES ===
- Lifetime Course Access
- Private Community Access
- Ready-to-use Automation Templates
- Workflow Blueprints
- Downloadable Automation Resources
- Prompt Library
- Monthly Live Q&A Sessions
- Certificate of Completion
- Future Course Updates

=== CERTIFICATION ===
- Yes, students who successfully complete the course will receive a Certificate of Completion from TechMark Solutions as proof of their participation and achievement.

=== ENROLLMENT PROCESS ===
- Step 1: Complete the Enrollment Form at this URL: https://app.youform.com/forms/9kpqcl2s
- Step 2: Complete Payment. After submitting the enrollment form, students will receive payment instructions.
- Step 3: Receive Confirmation Email after payment verification.
- Step 4: Access Course. The confirmation email will include access to Lessons, Learning Materials, Downloadable Resources, Bonuses, and the Private Community.
- Step 5: Start Learning at your own pace with lifetime access.

=== BEHAVIOR & STYLE GUIDELINES ===
- Speak warmly, professionally, and helpfully.
- Keep answers concise and optimized for a chat interface.
- You can speak in English, Tagalog, or Taglish (Tagalog-English mix) depending on the visitor's preference or greeting.
- **CRITICAL DIRECTIVE**: If the user's question is NOT answered in the knowledge base, or if you do not have the specific information, you MUST respond exactly with this string:
"Thanks for your question! I don't have that specific information at the moment. Please send us a message, and our team will be happy to assist you as soon as possible."
- Do NOT make up any facts, contact numbers, extra dates, or other products. If it is not in the knowledge base, output the exact phrase above. Do not apologize, explain, or alter that text. Just output that exact string.

=== KNOWLEDGE BASE FAQ MATCHES ===
- Price: ₱4,999 one-time payment.
- Coding experience: No coding required. Beginner-friendly step-by-step instructions.
- Is certification included: Yes.
- Is Tagalog available: Yes, English and Tagalog lessons are available.
- Lifetime access: Yes, including future updates.`;

    if (!ai) {
      // Fallback response if Gemini API key is missing
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
      let reply = "Thanks for your question! I don't have that specific information at the moment. Please send us a message, and our team will be happy to assist you as soon as possible.";
      
      // Basic rule-based matcher if Gemini key is not configured yet (useful for initial dev or local offline checks)
      if (lastMessage.includes("price") || lastMessage.includes("how much") || lastMessage.includes("magkano") || lastMessage.includes("cost")) {
        reply = "The TechMark Solutions AI Automation Course is a one-time payment of ₱4,999 with lifetime access and no subscription fees.";
      } else if (lastMessage.includes("code") || lastMessage.includes("coding") || lastMessage.includes("program") || lastMessage.includes("developer")) {
        reply = "No coding experience is required! The course is designed for absolute beginners to intermediate level students, using friendly no-code/low-code tools.";
      } else if (lastMessage.includes("module") || lastMessage.includes("topic") || lastMessage.includes("lessons") || lastMessage.includes("what will I learn")) {
        reply = "The course has 5 core modules: 1) Automation Fundamentals, 2) n8n Workflow Automation, 3) Zapier & Make.com, 4) AI-Powered Automation with ChatGPT & OpenAI API, and 5) Real-World Projects (CRM, Lead Gen, Social Media).";
      } else if (lastMessage.includes("who") || lastMessage.includes("is this for") || lastMessage.includes("para kanino")) {
        reply = "This course is perfect for Virtual Assistants, Freelancers, Business Owners, Digital Marketers, Administrative Professionals, and anyone interested in AI Automation.";
      } else if (lastMessage.includes("enroll") || lastMessage.includes("how to join") || lastMessage.includes("register") || lastMessage.includes("sign up")) {
        reply = "To enroll: 1. Complete the Enrollment Form at https://app.youform.com/forms/9kpqcl2s 2. Receive payment instructions 3. Send payment 4. Receive confirmation 5. Access the lessons immediately!";
      } else if (lastMessage.includes("certif") || lastMessage.includes("cert") || lastMessage.includes("katibayan")) {
        reply = "Yes! A Certificate of Completion from TechMark Solutions is included once you finish the course.";
      } else if (lastMessage.includes("bonus")) {
        reply = "Enrolling gives you awesome bonuses: Lifetime course access, Private Community access, Ready-to-use n8n/Zapier templates, Prompt library, Monthly Live Q&A, and more!";
      }

      return res.json({ response: reply });
    }

    try {
      // Map client messages format (e.g., role: 'user' | 'assistant') to Gemini SDK contents structure
      const formattedContents = messages.map((m) => {
        return {
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        };
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.2, // Low temperature keeps it highly factual and faithful to the system instructions
        },
      });

      const text = response.text || "Thanks for your question! I don't have that specific information at the moment. Please send us a message, and our team will be happy to assist you as soon as possible.";
      return res.json({ response: text });
    } catch (err: any) {
      console.error("Gemini Generation Error:", err);
      return res.status(500).json({
        error: "Failed to generate chatbot response",
        response: "Thanks for your question! I don't have that specific information at the moment. Please send us a message, and our team will be happy to assist you as soon as possible.",
      });
    }
  });

  // Serve static client files or use Vite dev server
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite Dev Server Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static files in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[TechMark Solutions] Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical error starting server:", err);
});

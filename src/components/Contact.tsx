import React, { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setSubmitStatus("error");
      setErrorMessage("Unable to connect to the server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Contact Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          
          {/* Info block */}
          <div className="md:col-span-5 text-left flex flex-col justify-between py-2">
            <div className="space-y-6">
              <span className="inline-block text-[11px] font-bold font-mono uppercase tracking-widest text-[#2A9D8F] bg-[#2A9D8F]/10 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#264653] font-sans">
                Have Questions?
              </h2>
              <div className="w-16 h-1 bg-[#2A9D8F] rounded-full"></div>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Send us a message and our team will help you with your AI Automation Course questions.
              </p>
            </div>

            <div className="space-y-4 pt-8 md:pt-0 border-t border-gray-100 mt-8 md:mt-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#264653]/5 text-[#264653] p-2.5 rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">Email Address</span>
                  <span className="text-sm font-bold text-[#264653]">support@techmarksolutions.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#2A9D8F]/10 text-[#2A9D8F] p-2.5 rounded-xl">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">Support Level</span>
                  <span className="text-sm font-bold text-[#264653]">24-Hour Response Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="md:col-span-7 bg-[#EDF6F9]/40 border border-gray-100 p-8 rounded-3xl shadow-sm">
            {submitStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-4 animate-fadeIn">
                <div className="bg-emerald-500 text-white p-4 rounded-full shadow-lg shadow-emerald-500/10">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-[#264653]">Message Transmitted!</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-sm">
                  Thank you for your message! Our team at TechMark Solutions has cataloged your inquiry. We will reach back to your registered inbox as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-4 text-xs font-bold text-[#2A9D8F] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {submitStatus === "error" && (
                  <div className="bg-red-50 text-red-700 text-xs p-3.5 rounded-xl border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-[#264653] uppercase font-mono tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-gray-100 px-4 py-3 rounded-xl text-sm text-gray-800 outline-none focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-[#264653] uppercase font-mono tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-gray-100 px-4 py-3 rounded-xl text-sm text-gray-800 outline-none focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-[#264653] uppercase font-mono tracking-wider">
                    Message Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can Mark and the team help you with the AI Automation Course?"
                    className="w-full bg-white border border-gray-100 px-4 py-3 rounded-xl text-sm text-gray-800 outline-none focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#264653] hover:bg-[#264653]/95 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

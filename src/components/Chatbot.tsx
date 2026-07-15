import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Loader2, RefreshCw } from "lucide-react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi there! I'm your TechMark AI Advisor. Ask me anything about the AI Automation Course (pricing, modules, bonuses, etc.) and I'll help you out! 🤖",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "How much is the course?",
    "Do I need coding experience?",
    "What tools will I learn?",
    "Is certification included?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistoryForBackend = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatHistoryForBackend }),
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: data.response || "Thanks for your question! I don't have that specific information at the moment. Please send us a message, and our team will be happy to assist you as soon as possible.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat API Error:", err);
      // Fail safely with the exact fallback response requested by the user
      const fallbackMsg: ChatMessage = {
        role: "assistant",
        content: "Thanks for your question! I don't have that specific information at the moment. Please send us a message, and our team will be happy to assist you as soon as possible.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Toggle Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="chatbot-toggle-btn"
          className="bg-[#2A9D8F] hover:bg-[#2A9D8F]/95 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 relative group"
        >
          {/* Notification pulsing dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#E9C46A] border-2 border-[#2A9D8F] rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-[#E9C46A] border-2 border-[#2A9D8F] rounded-full"></span>
          
          <MessageSquare className="h-6 w-6" />
          <span className="absolute right-14 bg-[#264653]/95 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:inline-block">
            Have questions? Chat with AI Advisor
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-[#1f3741] border border-white/10 rounded-2xl shadow-2xl w-80 sm:w-96 h-[500px] flex flex-col overflow-hidden animate-fadeIn text-white">
          
          {/* Chat Header */}
          <div className="bg-[#264653] border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#2A9D8F] p-2 rounded-xl text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold">TechMark Solutions AI</h4>
                <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Admissions Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#1f3741] to-[#172b33]">
            {messages.map((msg, idx) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div key={idx} className={`flex ${isAssistant ? "justify-start" : "justify-end"} items-start gap-2.5`}>
                  {isAssistant && (
                    <div className="bg-[#2A9D8F]/15 text-[#2A9D8F] border border-[#2A9D8F]/20 p-1.5 rounded-lg flex-shrink-0">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div className="text-left max-w-[75%]">
                    <div className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isAssistant
                        ? "bg-[#264653] border border-white/5 text-gray-200 rounded-tl-none"
                        : "bg-[#2A9D8F] text-white rounded-tr-none"
                    }`}>
                      {msg.content}
                    </div>
                    <span className="block text-[9px] text-gray-500 mt-1 pl-1">{msg.timestamp}</span>
                  </div>
                </div>
              );
            })}

            {/* Thinking / Typing state */}
            {isLoading && (
              <div className="flex justify-start items-start gap-2.5">
                <div className="bg-[#2A9D8F]/15 text-[#2A9D8F] border border-[#2A9D8F]/20 p-1.5 rounded-lg flex-shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-[#264653] p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#2A9D8F] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#2A9D8F] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#2A9D8F] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips (only show when not loading) */}
          {!isLoading && messages.length < 5 && (
            <div className="px-4 py-2 border-t border-white/5 bg-[#172b33]/50 text-left flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="bg-[#264653] hover:bg-[#2A9D8F]/20 border border-white/5 hover:border-[#2A9D8F]/30 text-[10px] text-gray-300 hover:text-[#2A9D8F] px-2.5 py-1.5 rounded-lg transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Chat Form Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-[#16272e] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              placeholder="Ask about price, modules, certificates..."
              className="flex-1 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-[#2A9D8F] hover:bg-[#2A9D8F]/95 text-white px-3 py-2.5 rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-30 disabled:scale-100"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}

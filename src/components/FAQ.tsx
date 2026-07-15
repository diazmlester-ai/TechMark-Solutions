import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { FAQ_LIST } from "../data/courseData";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#EDF6F9] text-gray-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#264653]/5 border border-[#264653]/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#264653] uppercase">
            <HelpCircle className="h-4 w-4 text-[#2A9D8F]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#264653] font-sans">
            Got Questions? We Have Answers
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Everything you need to know about TechMark Solutions and our core AI Automation Course.
          </p>
          <div className="w-16 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#EDF6F9]/20 transition-colors duration-150 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#264653] font-sans pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#264653]/5 text-[#264653] transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#2A9D8F] text-white" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Expanded answer panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-48 border-t border-gray-50" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-xs sm:text-sm text-gray-600 leading-relaxed bg-[#EDF6F9]/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#2A9D8F]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-sm">
          <div className="flex gap-4">
            <div className="bg-[#2A9D8F]/10 text-[#2A9D8F] p-3 rounded-xl flex-shrink-0">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#264653]">Have a specific or unique question?</h4>
              <p className="text-xs text-gray-500 mt-0.5">Ask our AI Chatbot at the bottom right corner or send a message directly via our Contact Form!</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#264653] hover:bg-[#264653]/95 text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors"
          >
            Contact Team
          </button>
        </div>

      </div>
    </section>
  );
}

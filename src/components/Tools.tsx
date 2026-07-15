import React from "react";
import { Cpu, Terminal, Layers, Database, Sparkles } from "lucide-react";
import { TOOLS_LIST } from "../data/courseData";

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-white text-gray-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#2A9D8F] uppercase">
            <Cpu className="h-4 w-4 text-[#2A9D8F]" />
            Industry Standard Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#264653] font-sans">
            Automation & AI Tools Taught
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Our curriculum focuses on the world's most requested enterprise-level integration and artificial intelligence platforms.
          </p>
          <div className="w-16 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
          {TOOLS_LIST.map((tool, idx) => (
            <div 
              key={idx}
              className={`border rounded-2xl p-5 hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between ${tool.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase opacity-80">
                    {tool.category}
                  </span>
                  <Terminal className="h-3.5 w-3.5 opacity-60" />
                </div>
                
                <h4 className="text-lg font-black tracking-tight mb-2">
                  {tool.name}
                </h4>
                
                <p className="text-xs opacity-90 leading-relaxed font-sans">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Pitch Note */}
        <div className="mt-12 text-center text-xs font-mono text-gray-400">
          * Absolute zero coding experience required. We cover credentials, auth headers, and routing step-by-step.
        </div>

      </div>
    </section>
  );
}

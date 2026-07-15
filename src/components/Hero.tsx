import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Play, Cpu, Bot, Database, Zap, Sparkles } from "lucide-react";
import { ENROLLMENT_LINK, COURSE_PRICE } from "../data/courseData";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [activeNode, setActiveNode] = useState(0);

  // Loop simulation nodes in hero
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const trustBadges = [
    "Beginner Friendly",
    "No Coding Required",
    "Lifetime Access",
    "Certificate Included",
    "English & Tagalog Lessons",
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#264653] to-[#1d353f] pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
      {/* Background Decorative Mesh / Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2A9D8F_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2A9D8F] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#E9C46A] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text & Pitch */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#2A9D8F]/15 border border-[#2A9D8F]/30 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#2A9D8F] uppercase">
              <Bot className="h-3.5 w-3.5 animate-bounce" />
              Next-Gen Career Training
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-white leading-[1.1]">
              Learn AI Automation & Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] via-[#E9C46A] to-[#2A9D8F] bg-[size:200%] animate-pulse">
                Powerful Workflows
              </span>{" "}
              Without Coding
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
              Master AI-powered automation using <strong className="text-white">n8n</strong>, <strong className="text-white">Zapier</strong>, <strong className="text-white">Make.com</strong>, <strong className="text-white">ChatGPT</strong>, and modern API tools. Build real-world systems that save business hours and dramatically boost your earning potential.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={ENROLLMENT_LINK}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                id="hero-primary-cta"
                className="flex items-center justify-center gap-3 bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-[#2A9D8F]/20 hover:shadow-[#2A9D8F]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Enroll Now — {COURSE_PRICE}
                <ArrowRight className="h-5 w-5" />
              </a>
              <button
                onClick={() => scrollToSection("about")}
                id="hero-secondary-cta"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More
                <Play className="h-4 w-4 fill-white text-white" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2A9D8F] mb-4">
                What's Included
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#2A9D8F] flex-shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Premium Automation Simulation Visual */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[440px] bg-[#1a3039] rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden shadow-black/40">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-[11px] font-mono text-gray-400 ml-2">Live_n8n_Workflow.json</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#2A9D8F]/15 border border-[#2A9D8F]/30 px-2 py-0.5 rounded text-[10px] font-mono text-[#2A9D8F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Pipeline
                </div>
              </div>

              {/* Simulation Steps */}
              <div className="space-y-4 font-sans relative">
                {/* Node Connection Line */}
                <div className="absolute left-[33px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#2A9D8F] via-[#E9C46A] to-blue-500 pointer-events-none opacity-40"></div>

                {/* Node 1: Webhook Trigger */}
                <div
                  className={`flex gap-4 p-3 rounded-xl border transition-all duration-300 ${
                    activeNode === 0
                      ? "bg-[#2A9D8F]/20 border-[#2A9D8F] shadow-lg shadow-[#2A9D8F]/5 scale-[1.03]"
                      : "bg-[#1f3741]/50 border-white/5 opacity-70"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    activeNode === 0 ? "bg-[#2A9D8F] text-white" : "bg-gray-700 text-gray-300"
                  }`}>
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">1. Catch Webhook Trigger</h4>
                    <p className="text-xs text-gray-400">Incoming Typeform Lead data submitted</p>
                    {activeNode === 0 && (
                      <span className="inline-block mt-1.5 text-[10px] font-mono bg-[#2A9D8F]/30 text-[#2A9D8F] px-1.5 py-0.5 rounded font-bold animate-pulse">
                        Payload parsed...
                      </span>
                    )}
                  </div>
                </div>

                {/* Node 2: AI Processor */}
                <div
                  className={`flex gap-4 p-3 rounded-xl border transition-all duration-300 ${
                    activeNode === 1
                      ? "bg-[#E9C46A]/20 border-[#E9C46A] shadow-lg shadow-[#E9C46A]/5 scale-[1.03]"
                      : "bg-[#1f3741]/50 border-white/5 opacity-70"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    activeNode === 1 ? "bg-[#E9C46A] text-gray-900" : "bg-gray-700 text-gray-300"
                  }`}>
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">2. ChatGPT AI Engine</h4>
                    <p className="text-xs text-gray-400">Categorize interest & write draft pitch</p>
                    {activeNode === 1 && (
                      <span className="inline-block mt-1.5 text-[10px] font-mono bg-[#E9C46A]/30 text-[#E9C46A] px-1.5 py-0.5 rounded font-bold animate-pulse">
                        AI reasoning active...
                      </span>
                    )}
                  </div>
                </div>

                {/* Node 3: Database Storage */}
                <div
                  className={`flex gap-4 p-3 rounded-xl border transition-all duration-300 ${
                    activeNode === 2
                      ? "bg-blue-500/20 border-blue-500 shadow-lg shadow-blue-500/5 scale-[1.03]"
                      : "bg-[#1f3741]/50 border-white/5 opacity-70"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    activeNode === 2 ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}>
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">3. Google Sheets DB</h4>
                    <p className="text-xs text-gray-400">Append customer row with AI variables</p>
                    {activeNode === 2 && (
                      <span className="inline-block mt-1.5 text-[10px] font-mono bg-blue-500/30 text-blue-400 px-1.5 py-0.5 rounded font-bold animate-pulse">
                        Row added successfully!
                      </span>
                    )}
                  </div>
                </div>

                {/* Node 4: CRM Sync */}
                <div
                  className={`flex gap-4 p-3 rounded-xl border transition-all duration-300 ${
                    activeNode === 3
                      ? "bg-emerald-500/20 border-emerald-500 shadow-lg shadow-emerald-500/5 scale-[1.03]"
                      : "bg-[#1f3741]/50 border-white/5 opacity-70"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center ${
                    activeNode === 3 ? "bg-emerald-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}>
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">4. API CRM Routing</h4>
                    <p className="text-xs text-gray-400">Pings team chat and updates pipelines</p>
                    {activeNode === 3 && (
                      <span className="inline-block mt-1.5 text-[10px] font-mono bg-emerald-500/30 text-emerald-400 px-1.5 py-0.5 rounded font-bold animate-pulse">
                        Completed. Sync OK!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Automation Counter */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-gray-400">
                <span>Cycles Executed: <strong className="text-white">1,482</strong></span>
                <span>Time Saved: <strong className="text-[#E9C46A]">74.1 Hours</strong></span>
              </div>
            </div>

            {/* Glowing Accent Ring Behind Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[450px] h-[450px] rounded-full border border-dashed border-[#2A9D8F]/20 animate-spin-slow pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

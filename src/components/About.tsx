import React from "react";
import { User, Calendar, Target, Award, Rocket, Compass } from "lucide-react";
import { BRAND_NAME, FOUNDER_NAME, FOUNDING_DATE } from "../data/courseData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#EDF6F9] text-gray-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#264653]/5 border border-[#264653]/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#264653] uppercase">
            <Compass className="h-4 w-4 text-[#2A9D8F]" />
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#264653] font-sans">
            About TechMark Solutions
          </h2>
          <div className="w-16 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
        </div>

        {/* Story & Metrics Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Metric 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#2A9D8F]/10 shadow-sm hover:shadow-md transition-all">
              <div className="bg-[#264653]/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-[#264653]" />
              </div>
              <span className="block text-[11px] font-bold font-mono uppercase tracking-widest text-gray-400">Founder</span>
              <h3 className="text-lg font-bold text-[#264653] mt-1">{FOUNDER_NAME}</h3>
              <p className="text-xs text-gray-500 mt-1">AI Automation Educator</p>
            </div>

            {/* Metric 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#2A9D8F]/10 shadow-sm hover:shadow-md transition-all">
              <div className="bg-[#2A9D8F]/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-[#2A9D8F]" />
              </div>
              <span className="block text-[11px] font-bold font-mono uppercase tracking-widest text-gray-400">Founded</span>
              <h3 className="text-lg font-bold text-[#264653] mt-1">Jan 1, 2026</h3>
              <p className="text-xs text-gray-500 mt-1">Digital Training Pioneer</p>
            </div>

            {/* Metric 3 */}
            <div className="col-span-2 bg-gradient-to-r from-[#264653] to-[#1a3039] p-6 rounded-2xl text-white shadow-md relative overflow-hidden">
              <div className="absolute right-[-10px] bottom-[-10px] opacity-10 pointer-events-none">
                <Target className="w-36 h-36" />
              </div>
              <div className="flex gap-4">
                <div className="bg-[#2A9D8F] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold font-mono uppercase tracking-widest text-[#2A9D8F]">Our Core Mission</span>
                  <p className="text-sm text-gray-200 mt-2 leading-relaxed">
                    Help virtual assistants, freelancers, and small business owners automate repetitive manual entries, scale business operations, and command higher billable values using no-code AI tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-[#264653] font-sans">
              Teaching the Future of Work
            </h3>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Founded on <strong className="text-[#264653]">{FOUNDING_DATE}</strong> by automation strategist <strong className="text-[#264653]">{FOUNDER_NAME}</strong>, {BRAND_NAME} is an advanced digital education ecosystem designed to demystify complex APIs, webhooks, and AI pipelines.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              We operate under a simple truth: <strong className="text-[#2A9D8F]">you don't need to be a software developer to build industry-disrupting automation engines.</strong> Traditional developers are expensive, but low-code platforms have leveled the playing field. Our step-by-step masterclasses guide you from zero setup to deploying live, production-grade automated clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#2A9D8F]/10">
              <div className="flex gap-3">
                <div className="text-[#2A9D8F] mt-1">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#264653]">Structured Curriculum</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Lessons carefully formulated to cover n8n, Zapier, Make, and OpenAI step-by-step.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#2A9D8F] mt-1">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#264653]">Practical Outcomes</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Build active bots, auto-posting platforms, and lead scrapers directly during the course.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

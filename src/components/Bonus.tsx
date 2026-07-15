import React, { useState } from "react";
import { 
  Clock, 
  Users, 
  FileJson, 
  Map, 
  Download, 
  BookOpen, 
  Video, 
  Award, 
  RefreshCw, 
  Gift, 
  FileText,
  UserCheck,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { BONUS_LIST, BRAND_NAME, FOUNDER_NAME, FOUNDING_DATE } from "../data/courseData";

const BonusIconRenderer = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "Clock":
      return <Clock className={className} />;
    case "Users":
      return <Users className={className} />;
    case "FileJson":
      return <FileJson className={className} />;
    case "Map":
      return <Map className={className} />;
    case "Download":
      return <Download className={className} />;
    case "BookOpen":
      return <BookOpen className={className} />;
    case "Video":
      return <Video className={className} />;
    case "Award":
      return <Award className={className} />;
    case "RefreshCw":
      return <RefreshCw className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export default function Bonus() {
  const [studentName, setStudentName] = useState("Mark Diaz");

  return (
    <section id="bonus" className="py-24 bg-[#EDF6F9] text-gray-800 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bonus Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#2A9D8F] uppercase">
            <Gift className="h-4 w-4 text-[#2A9D8F]" />
            Extra Value Included
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#264653] font-sans">
            Premium Enrollment Bonuses
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Get instant access to these exclusive resources completely free when you join our course today.
          </p>
          <div className="w-16 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {BONUS_LIST.map((bonus) => (
            <div 
              key={bonus.id}
              className="bg-white rounded-2xl p-6 text-left border border-gray-100 shadow-sm hover:shadow-md hover:border-[#2A9D8F]/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner Accent badge */}
              <div className="absolute right-[-20px] top-[-20px] bg-[#2A9D8F]/10 w-16 h-16 rounded-full group-hover:bg-[#2A9D8F] transition-all duration-300 flex items-center justify-center p-4">
                <Gift className="h-4 w-4 text-[#2A9D8F] group-hover:text-white group-hover:scale-110 transition-all" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#264653]/5 text-[#264653] w-10 h-10 rounded-xl flex items-center justify-center">
                  <BonusIconRenderer name={bonus.iconName} className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#2A9D8F] uppercase bg-[#2A9D8F]/5 px-2 py-0.5 rounded-md">
                  {bonus.tag}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-extrabold text-[#264653] mb-2 font-sans">
                {bonus.title}
              </h4>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div className="border-t border-gray-200/50 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Description */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="inline-block text-[11px] font-bold font-mono uppercase tracking-widest text-[#2A9D8F] bg-[#2A9D8F]/10 px-3 py-1 rounded-full">
                Verify Your Authority
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#264653] font-sans">
                Earn Your AI Automation Certificate
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Students who successfully complete the course will receive a Certificate of Completion from TechMark Solutions as proof of their participation and achievement.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                You can upload this verified certificate directly to LinkedIn, present it to Upwork and Fiverr clients as ultimate credibility, or attach it to your CV to apply for high-paying remote roles.
              </p>

              {/* Live Preview Input */}
              <div className="bg-white/70 border border-gray-100 p-4 rounded-xl space-y-2">
                <label className="block text-xs font-bold text-[#264653] uppercase font-mono tracking-wider">
                  Type your name to preview:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter Student Name"
                    maxLength={30}
                    className="flex-1 bg-white border border-gray-200 px-4 py-2.5 rounded-lg text-sm text-gray-800 outline-none focus:border-[#2A9D8F] transition-colors"
                  />
                </div>
                <span className="block text-[10px] text-gray-400">Dynamic Certificate Preview generated instantly.</span>
              </div>
            </div>

            {/* Right Block: Dynamic Certificate Generator representation */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-double border-[#264653]/20 relative overflow-hidden text-center mx-auto max-w-[580px]">
                
                {/* Certificate Border Accents */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#264653]/10 pointer-events-none"></div>
                <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-double border-[#264653]/15 pointer-events-none"></div>

                {/* Ribbon Logo badge */}
                <div className="flex justify-center mb-6 relative">
                  <div className="bg-[#264653] p-4 rounded-full shadow-lg shadow-[#264653]/10 text-[#E9C46A]">
                    <Award className="h-10 w-10 animate-pulse" />
                  </div>
                </div>

                <span className="block text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#2A9D8F] uppercase">
                  Certificate of Achievement
                </span>
                
                <h4 className="text-xl sm:text-2xl font-serif text-[#264653] mt-2 mb-4 italic">
                  This is proudly presented to
                </h4>

                {/* Student Name */}
                <p className="text-2xl sm:text-3xl font-extrabold text-[#264653] font-sans tracking-tight border-b border-gray-200 py-3 max-w-sm mx-auto min-h-[50px] leading-none uppercase">
                  {studentName || "YOUR NAME HERE"}
                </p>

                <p className="text-xs text-gray-500 leading-relaxed max-w-md mx-auto mt-6">
                  for successfully finishing and mastering all 5 educational modules and projects associated with the official curriculum of
                </p>

                <p className="text-sm font-bold text-[#2A9D8F] mt-2 font-mono uppercase tracking-wider">
                  {BRAND_NAME} – AI Automation Course
                </p>

                {/* Signatures & Verification Stamp */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100 max-w-md mx-auto">
                  <div className="text-left font-sans">
                    <span className="block text-[11px] font-mono text-gray-400">Date Issued</span>
                    <span className="block text-sm font-bold text-gray-700 font-mono mt-1">{FOUNDING_DATE}</span>
                  </div>
                  <div className="text-right font-sans">
                    <span className="block text-[11px] font-mono text-gray-400">Instructor Signature</span>
                    <div className="h-6 flex items-center justify-end">
                      <span className="font-serif italic text-[#264653] text-base font-bold underline decoration-[#2A9D8F]/40 decoration-2">
                        {FOUNDER_NAME}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

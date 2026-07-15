import React from "react";
import { 
  User, 
  Briefcase, 
  Building, 
  FileText, 
  Megaphone, 
  GraduationCap, 
  Sparkles, 
  Globe, 
  Layers, 
  Clock, 
  ShieldCheck, 
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { AUDIENCE_LIST, COURSE_NAME, COURSE_PRICE, ENROLLMENT_LINK } from "../data/courseData";

// Render lucide icons dynamically
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "User":
      return <User className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Building":
      return <Building className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "Megaphone":
      return <Megaphone className={className} />;
    case "GraduationCap":
      return <GraduationCap className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export default function CourseInfo() {
  return (
    <section id="courses" className="py-24 bg-white text-gray-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Core Pricing & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Block: Description */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-block text-[11px] font-bold font-mono uppercase tracking-widest text-[#2A9D8F] bg-[#2A9D8F]/10 px-3 py-1 rounded-full">
              Our Main Flagship Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#264653] font-sans">
              {COURSE_NAME}
            </h2>
            <div className="w-16 h-1 bg-[#2A9D8F] rounded-full"></div>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              This course teaches beginners and professionals how to create AI-powered automation workflows without requiring programming experience.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              You will gain practical, career-defining mastery over standard integration tools to connect Gmail, Google Sheets, ChatGPT, and customer forms into self-operating pipelines. Perfect for anyone wanting to optimize their time, decrease manual stress, and command premium consultancy prices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#2A9D8F] flex-shrink-0" />
                <span className="text-sm font-medium text-[#264653]">English & Tagalog Lessons</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#2A9D8F] flex-shrink-0" />
                <span className="text-sm font-medium text-[#264653]">Lifetime Course Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#2A9D8F] flex-shrink-0" />
                <span className="text-sm font-medium text-[#264653]">Certificate of Completion Included</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#2A9D8F] flex-shrink-0" />
                <span className="text-sm font-medium text-[#264653]">Private Student Community Access</span>
              </div>
            </div>
          </div>

          {/* Right Block: Pitch Pricing Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#264653] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-[#2A9D8F]/20">
              {/* Background glow */}
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#2A9D8F]/20 rounded-full filter blur-3xl pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-[#E9C46A] uppercase bg-[#E9C46A]/10 border border-[#E9C46A]/20 px-2.5 py-1 rounded-md">
                    One-Time Lifetime Deal
                  </span>
                  <h3 className="text-xl font-bold mt-3">Course Access</h3>
                </div>
                <div className="text-right">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#E9C46A]">{COURSE_PRICE}</span>
                  <span className="text-[11px] font-mono text-gray-300">No monthly fees</span>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 pb-8 text-left text-sm text-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Skill Level:</span>
                  <span className="font-semibold text-white">Beginner to Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Lessons:</span>
                  <span className="font-semibold text-white">40+ Comprehensive Lectures</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Languages:</span>
                  <span className="font-semibold text-white">English and Tagalog</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Support:</span>
                  <span className="font-semibold text-white">Direct Instructor Q&A</span>
                </div>
              </div>

              <a
                href={ENROLLMENT_LINK}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                id="pricing-card-enroll-cta"
                className="block w-full text-center bg-[#2A9D8F] hover:bg-[#2A9D8F]/90 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#2A9D8F]/15"
              >
                Enroll Now & Secure Spot
              </a>
            </div>
          </div>
        </div>

        {/* Who is this course for Section */}
        <div className="border-t border-gray-100 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-[11px] font-bold font-mono uppercase tracking-widest text-[#2A9D8F] bg-[#2A9D8F]/10 px-3 py-1 rounded-full">
              Ideal Student Profile
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#264653] font-sans">
              Who Is This Course For?
            </h3>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
              Our curriculum has been carefully formatted to align with the unique bottlenecks of these individual careers.
            </p>
            <div className="w-12 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AUDIENCE_LIST.map((card) => (
              <div 
                key={card.id}
                className="bg-[#EDF6F9]/40 rounded-2xl border border-gray-100 p-6 text-left flex flex-col justify-between hover:bg-white hover:border-[#2A9D8F]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="bg-[#264653]/5 text-[#264653] w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2A9D8F] group-hover:text-white transition-colors">
                    <IconRenderer name={card.iconName} className="h-6 w-6" />
                  </div>
                  
                  <span className="text-[10px] font-bold font-mono tracking-wider text-[#2A9D8F] uppercase bg-[#2A9D8F]/5 border border-[#2A9D8F]/10 px-2 py-0.5 rounded-md">
                    {card.tagline}
                  </span>
                  
                  <h4 className="text-lg font-bold text-[#264653] mt-3 mb-2 font-sans">
                    {card.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

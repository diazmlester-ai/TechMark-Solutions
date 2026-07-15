import React from "react";
import { Sparkles, Mail, User, ShieldAlert } from "lucide-react";
import { BRAND_NAME, FOUNDER_NAME } from "../data/courseData";

interface FooterProps {
  activeView: "home" | "privacy";
  onNavigate: (view: "home" | "privacy", sectionId?: string) => void;
}

export default function Footer({ activeView, onNavigate }: FooterProps) {
  const handleNavClick = (sectionId: string) => {
    onNavigate("home", sectionId);
  };

  const handlePrivacyClick = () => {
    onNavigate("privacy");
  };

  const handleHomeClick = () => {
    onNavigate("home");
  };

  return (
    <footer className="bg-[#1d353f] text-gray-300 pt-16 pb-12 border-t border-white/5 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Branding & Pitch */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center cursor-pointer group" onClick={handleHomeClick}>
              <div className="bg-[#2A9D8F] p-2 rounded-lg mr-3 shadow-md shadow-[#2A9D8F]/10">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  Tech<span className="text-[#E9C46A]">Mark</span>
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-[#2A9D8F] uppercase font-bold">
                  Solutions
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Helping businesses and individuals automate the future with AI. Learn to design multi-step webhooks, connect databases, and implement ChatGPT nodes from absolute zero coding experience.
            </p>
          </div>

          {/* Column 2: Navigation links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A9D8F] mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={handleHomeClick}
                  className="hover:text-white hover:underline transition-all text-gray-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("courses")}
                  className="hover:text-white hover:underline transition-all text-gray-400"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("bonus")}
                  className="hover:text-white hover:underline transition-all text-gray-400"
                >
                  Bonus
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="hover:text-white hover:underline transition-all text-gray-400"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={handlePrivacyClick}
                  className="hover:text-[#E9C46A] hover:underline transition-all text-gray-400"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand Metadata */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A9D8F] mb-4 font-mono">
              Administrative
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                <span>Founder: <strong className="text-white">{FOUNDER_NAME}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span>support@techmarksolutions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-gray-500" />
                <span>Founded: January 1, 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© 2026 {BRAND_NAME}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <button onClick={handlePrivacyClick} className="hover:text-gray-300">Privacy Policy</button>
            <span>•</span>
            <button onClick={handleHomeClick} className="hover:text-gray-300">Terms of Use</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

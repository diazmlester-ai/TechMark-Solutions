import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { BRAND_NAME, ENROLLMENT_LINK } from "../data/courseData";

interface NavbarProps {
  activeView: "home" | "privacy";
  onNavigate: (view: "home" | "privacy", sectionId?: string) => void;
}

export default function Navbar({ activeView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate("home", sectionId);
  };

  const handleLogoClick = () => {
    onNavigate("home");
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#264653]/95 backdrop-blur-md shadow-lg border-b border-[#2A9D8F]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className="bg-[#2A9D8F] p-2.5 rounded-xl mr-3 shadow-md shadow-[#2A9D8F]/20 group-hover:bg-[#2A9D8F]/90 transition-all">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-[#2A9D8F] transition-all">
                Tech<span className="text-[#E9C46A]">Mark</span>
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-[#2A9D8F] uppercase font-bold">
                Solutions
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleLogoClick()}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#2A9D8F] ${
                activeView === "home" ? "text-white" : "text-gray-300"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("courses")}
              className="text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-[#2A9D8F]"
            >
              Courses
            </button>
            <button
              onClick={() => handleNavClick("bonus")}
              className="text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-[#2A9D8F]"
            >
              Bonus
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-[#2A9D8F]"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={ENROLLMENT_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              id="nav-enroll-cta"
              className="inline-flex items-center gap-2 bg-[#2A9D8F] hover:bg-[#2A9D8F]/95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-[#2A9D8F]/10 hover:shadow-[#2A9D8F]/20 hover:scale-[1.02] transition-all duration-300"
            >
              Enroll Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#264653] focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#264653] border-b border-[#2A9D8F]/10 animate-fadeIn px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogoClick();
            }}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-[#2A9D8F]/10 hover:text-[#2A9D8F] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("courses")}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-[#2A9D8F]/10 hover:text-[#2A9D8F] transition-colors"
          >
            Courses
          </button>
          <button
            onClick={() => handleNavClick("bonus")}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-[#2A9D8F]/10 hover:text-[#2A9D8F] transition-colors"
          >
            Bonus
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:bg-[#2A9D8F]/10 hover:text-[#2A9D8F] transition-colors"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-gray-700/50">
            <a
              href={ENROLLMENT_LINK}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#2A9D8F] hover:bg-[#2A9D8F]/95 text-white text-base font-semibold py-3 rounded-lg shadow-md transition-colors"
            >
              Enroll Now - ₱4,999
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

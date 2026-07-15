import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CourseInfo from "./components/CourseInfo";
import Modules from "./components/Modules";
import Tools from "./components/Tools";
import Bonus from "./components/Bonus";
import Enrollment from "./components/Enrollment";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

export default function App() {
  const [activeView, setActiveView] = useState<"home" | "privacy">("home");

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = (view: "home" | "privacy", sectionId?: string) => {
    let path = "/";
    if (view === "privacy") {
      path = "/privacy-policy";
    } else if (sectionId) {
      path = `/${sectionId}`;
    } else {
      path = "/home";
    }

    // Update browser URL path
    window.history.pushState({ view, sectionId }, "", path);
    setActiveView(view);

    if (view === "home") {
      if (sectionId) {
        if (activeView !== "home") {
          setTimeout(() => {
            scrollToSection(sectionId);
          }, 150);
        } else {
          scrollToSection(sectionId);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === "/privacy-policy") {
        setActiveView("privacy");
        window.scrollTo({ top: 0 });
      } else {
        setActiveView("home");
        if (path === "/courses") {
          setTimeout(() => scrollToSection("courses"), 150);
        } else if (path === "/bonus") {
          setTimeout(() => scrollToSection("bonus"), 150);
        } else if (path === "/contact") {
          setTimeout(() => scrollToSection("contact"), 150);
        } else if (path === "/home" || path === "/") {
          window.scrollTo({ top: 0 });
        }
      }
    };

    // Parse initial path
    handleLocationChange();

    // Listen to back/forward navigation
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 antialiased font-sans">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {activeView === "home" ? (
          <div className="animate-fadeIn">
            <Hero scrollToSection={scrollToSection} />
            <About />
            <CourseInfo />
            <Modules />
            <Tools />
            <Bonus />
            <Enrollment />
            <FAQ />
            <Contact />
          </div>
        ) : (
          <div className="animate-fadeIn">
            <PrivacyPolicy onNavigate={handleNavigate} />
          </div>
        )}
      </main>

      {/* Persistent Floating AI Assistant Widget */}
      <Chatbot />

      {/* Global Footer */}
      <Footer
        activeView={activeView}
        onNavigate={handleNavigate}
      />
      
    </div>
  );
}

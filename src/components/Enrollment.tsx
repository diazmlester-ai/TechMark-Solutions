import React from "react";
import { ListTodo, FormInput, CreditCard, MailCheck, GraduationCap, Unlock, ArrowUpRight } from "lucide-react";
import { ENROLLMENT_LINK } from "../data/courseData";

export default function Enrollment() {
  const steps = [
    {
      number: "01",
      title: "Complete Enrollment Form",
      description: "Submit your basic contact and student details on our secure platform so we can generate your course account.",
      icon: <FormInput className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
      link: ENROLLMENT_LINK,
      linkText: "Click Here to Form"
    },
    {
      number: "02",
      title: "Complete Payment",
      description: "After submitting the enrollment form, students will instantly receive detailed instructions and options to make a safe ₱4,999 payment.",
      icon: <CreditCard className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      number: "03",
      title: "Receive Confirmation Email",
      description: "Once payment verification is complete (typically within a few hours), a confirmation receipt will be sent directly to your registered email.",
      icon: <MailCheck className="h-6 w-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      number: "04",
      title: "Access Course Portal",
      description: "The confirmation email includes your private access coordinates to lessons, resources, ready-to-use n8n templates, prompt library, and community.",
      icon: <Unlock className="h-6 w-6 text-white" />,
      color: "bg-[#E9C46A]"
    },
    {
      number: "05",
      title: "Start Learning",
      description: "Log in at any time from any device. Begin watching lessons at your own custom pace, join calls, and start automating your workflow.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      color: "bg-[#2A9D8F]"
    }
  ];

  return (
    <section id="enrollment" className="py-24 bg-white text-gray-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#2A9D8F] uppercase">
            <ListTodo className="h-4 w-4 text-[#2A9D8F]" />
            Getting Started
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#264653] font-sans">
            How to Enroll
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Get registered, verified, and learning in 5 straightforward, fully transparent steps.
          </p>
          <div className="w-16 h-1 bg-[#2A9D8F] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path on desktop, side path on mobile */}
          <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-0.5 bg-gray-100 md:-translate-x-1/2 pointer-events-none"></div>

          <div className="space-y-12 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.number} 
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end px-4 md:px-8">
                    <div className={`bg-[#EDF6F9]/40 border border-gray-100 rounded-2xl p-6 text-left hover:border-[#2A9D8F]/20 hover:shadow-md transition-all duration-300 w-full ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}>
                      <div className={`inline-flex items-center gap-2 text-xs font-bold font-mono text-[#2A9D8F] uppercase mb-2 ${
                        isEven ? "md:flex-row-reverse" : "md:flex-row"
                      }`}>
                        <span>Step</span>
                        <span>{step.number}</span>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-extrabold text-[#264653] mb-3 font-sans">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {step.link && (
                        <div className={`mt-4 ${isEven ? "md:justify-end" : "md:justify-start"} flex`}>
                          <a
                            href={step.link}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-[#264653] hover:bg-[#264653]/95 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
                          >
                            {step.linkText}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Centered timeline icon badge */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center pointer-events-none z-10 pt-6 md:pt-0">
                    <div className={`${step.color} p-2 rounded-xl border-4 border-white shadow-md flex items-center justify-center`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

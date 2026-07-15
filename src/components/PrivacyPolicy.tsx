import React from "react";
import { Shield, ArrowLeft, Calendar, FileText, Lock } from "lucide-react";
import { BRAND_NAME, FOUNDER_NAME } from "../data/courseData";

interface PrivacyPolicyProps {
  onNavigate: (view: "home" | "privacy", sectionId?: string) => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  const handleBackToHome = () => {
    onNavigate("home");
  };

  return (
    <div className="bg-[#EDF6F9]/50 min-h-screen pt-28 pb-20 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb / Back button */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-[#2A9D8F] hover:text-[#264653] font-semibold text-sm mb-8 group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home Page
        </button>

        {/* Policy document card */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-md text-left">
          
          {/* Header */}
          <div className="border-b border-gray-100 pb-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#2A9D8F]/10 text-[#2A9D8F] p-3 rounded-2xl flex-shrink-0 mt-1">
                <Shield className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#264653] font-sans">
                  {BRAND_NAME} Privacy Policy
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Protecting student confidentiality and records</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#264653]/5 border border-[#264653]/10 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-600">
              <Calendar className="h-3.5 w-3.5 text-[#2A9D8F]" />
              <span>Effective: Jan 1, 2026</span>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">1.</span> Introduction
              </h2>
              <p>
                At {BRAND_NAME}, we respect the privacy of our visitors and students. This Privacy Policy details the types of personal information we collect, how we secure, process, and use that information when you navigate through our digital portal and enroll in our learning services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">2.</span> Information We Collect
              </h2>
              <p>To deliver a premium learning environment, we collect the following user data:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-gray-800">Name</strong> for certificate generation and student tracking.</li>
                <li><strong className="text-gray-800">Email address</strong> to send enrollment confirmations, credentials, and future course upgrades.</li>
                <li><strong className="text-gray-800">Contact information</strong> to deliver immediate platform notifications or customer support.</li>
                <li><strong className="text-gray-800">Enrollment information</strong> concerning course progress, quiz completions, and lecture bookmarks.</li>
                <li><strong className="text-gray-800">Payment confirmation details</strong> to verify transactions (such as transaction IDs and times).</li>
                <li><strong className="text-gray-800">Website usage data</strong> including IP addresses, cookies, and referral origins for analytical optimizations.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">3.</span> How We Use Information
              </h2>
              <p>We process your private records only for logical business activities, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Managing <strong className="text-gray-800">course enrollment</strong> and granting portal access.</li>
                <li>Providing technical and curricular <strong className="text-gray-800">customer support</strong>.</li>
                <li>Maintaining <strong className="text-gray-800">communication</strong> regarding webinars, live streams, or Q&A notifications.</li>
                <li>Distributing authenticated <strong className="text-gray-800">course access</strong> credentials and bonuses securely.</li>
                <li>Analyzing student activity parameters to continuously <strong className="text-gray-800">improve services</strong>.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">4.</span> Payment Information
              </h2>
              <div className="bg-yellow-500/5 border border-[#E9C46A]/20 p-4 rounded-xl flex gap-3">
                <Lock className="h-5 w-5 text-[#E9C46A] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm">
                  All transactional information is processed securely through third-party encrypted payment providers. {BRAND_NAME} <strong className="text-gray-800">never stores or collects sensitive credit card numbers or digital wallet credentials</strong> on its servers.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">5.</span> Cookies
              </h2>
              <p>
                Our portal utilizes standard browser cookies to improve your user experience, bookmark your active lecture timeline position, and deliver analytics reports concerning overall site traffic speeds. You can configure your browser to reject cookies, though some platform dashboard capabilities may lose performance as a result.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">6.</span> Third-Party Services
              </h2>
              <p>We occasionally coordinate payload integrations with third-party utilities to facilitate tasks:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-gray-800">Payment providers</strong> to verify student transactions safely.</li>
                <li><strong className="text-gray-800">Email platforms</strong> to automate notifications and drip schedules.</li>
                <li><strong className="text-gray-800">Analytics tools</strong> (such as Google Analytics) to index visitor counts.</li>
                <li><strong className="text-gray-800">Course platforms</strong> where lessons and video chapters are hosted.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">7.</span> Data Security
              </h2>
              <p>
                We execute all reasonable physical, electronic, and administrative security measures to secure your credentials from accidental theft, leakage, or unapproved alterations. However, no digital system can guarantee complete absolute safety. We encourage students to configure strong private passwords for their portal portals.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">8.</span> User Rights
              </h2>
              <p>
                You retain complete authority over your personal information. You can contact us at any time to request a structured report detailing the information we hold, update incorrect profile fields, or request the permanent deletion of your student records and course histories.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3 pt-6 border-t border-gray-100">
              <h2 className="text-lg font-extrabold text-[#264653] font-sans flex items-center gap-2">
                <span className="text-[#2A9D8F] font-mono font-bold">9.</span> Contact Information
              </h2>
              <p>If you have questions regarding this document or our security regulations, contact our management team directly:</p>
              <div className="bg-[#EDF6F9]/50 p-4 rounded-xl text-xs sm:text-sm font-mono space-y-1">
                <p><strong className="text-gray-800">Platform Name:</strong> {BRAND_NAME}</p>
                <p><strong className="text-gray-800">Founder:</strong> {FOUNDER_NAME}</p>
                <p><strong className="text-gray-800">Inquiries:</strong> privacy@techmarksolutions.com</p>
              </div>
            </section>

          </div>

        </div>

        {/* Footer Back Link */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 bg-[#264653] hover:bg-[#2A9D8F] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Sales Page
          </button>
        </div>

      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Shield, Eye, Lock, FileText, ArrowLeft } from "lucide-react";
import { school } from "@/site/school";

export default function PrivacyPolicy() {
  return (
    <div className="section-y bg-[var(--color-paper)]">
      <div className="container-x max-w-4xl space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="eyebrow block">Legal & Governance</span>
          <h1 className="display-l text-[var(--color-ink)] font-['Fraunces']">
            Privacy Policy
          </h1>
          <p className="text-xs text-[var(--color-muted)]">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-sm space-y-8 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>1. Introduction & Institutional Commitment</span>
            </h2>
            <p>
              Flamingo Academic College Ltd ("we," "our," or "the College") respects the privacy of
              our students, parents, guardians, and visitors. This Privacy Policy details the manner in
              which we collect, store, safeguard, and use personal information provided through our
              website, admission inquiry forms, and campus communication channels.
            </p>
            <p>
              By accessing our website or submitting admissions inquiries, you acknowledge the
              practices described herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>2. Information We Collect</span>
            </h2>
            <p>
              We collect information you voluntarily provide to us when completing admissions
              inquiries, booking campus visits, or subscribing to academic bulletins. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>Candidate and Parent / Guardian full names</li>
              <li>Telephone and WhatsApp contact numbers</li>
              <li>Electronic mail addresses</li>
              <li>Current or previous educational institution attended (e.g., JHS details)</li>
              <li>Intended academic course track (SHS, Remedials, Vacation, Pre-SHS)</li>
              <li>Inquiry text and educational goals</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>3. Use of Personal Information</span>
            </h2>
            <p>Collected information is utilized strictly to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>Review and process admissions inquiries and prospective student records</li>
              <li>Contact parents and candidates with academic counseling and enrollment steps</li>
              <li>Facilitate WAEC biometric registration services where formally requested</li>
              <li>Deliver administrative notices, intake dates, and academic announcements</li>
              <li>Ensure campus safety, security, and statutory compliance</li>
            </ul>
            <p className="font-semibold text-[var(--color-ink)] pt-1">
              We never sell, rent, or trade your personal data to external commercial brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>4. Data Security & Retention</span>
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical measures to protect
              your submitted information against unauthorized access, alteration, or disclosure. Records
              are retained only for the duration required to fulfill academic admissions and legal
              obligations under Ghanaian law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)]">
              5. Children's Privacy Notice
            </h2>
            <p>
              Because our website serves senior high school students, parents and guardians are
              encouraged to supervise online inquiries submitted by minor candidates. Inquiries
              submitted regarding students under 18 require parental or guardian contact details for
              formal admissions verification.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-black/10">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)]">
              6. Contact the Data Protection Officer
            </h2>
            <p>
              If you have inquiries regarding your personal data or wish to update your records,
              please contact our administration office:
            </p>
            <div className="p-5 rounded-2xl bg-[var(--color-paper)] border border-black/5 text-xs sm:text-sm space-y-2 text-[var(--color-ink)]">
              <div className="font-bold">Flamingo Academic College Ltd</div>
              <div>Pokuase ACP Ridge, MPPF+XF8, Kwabenya, Accra – Ghana</div>
              <div>Telephone: {school.phoneDisplay}</div>
              <div>Email: {school.email}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

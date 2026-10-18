import { Link } from "react-router-dom";
import { ArrowLeft, Scale, ShieldAlert, Award, Globe, FileCheck } from "lucide-react";
import { school } from "@/site/school";

export default function TermsOfService() {
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
          <span className="eyebrow block">Institutional Agreement</span>
          <h1 className="display-l text-[var(--color-ink)] font-['Fraunces']">
            Terms of Service
          </h1>
          <p className="text-xs text-[var(--color-muted)]">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-sm space-y-8 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <Scale className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>1. Acceptance of Terms</span>
            </h2>
            <p>
              By accessing, browsing, or utilizing the website and digital portals of Flamingo Academic
              College Ltd ("the College"), you agree to be bound by these Terms of Service, all
              applicable laws and regulations in the Republic of Ghana, and agree that you are
              responsible for compliance with any applicable local laws.
            </p>
            <p>
              If you do not agree with any of these terms, you are prohibited from utilizing this site
              or submitting admissions documentation through it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>2. Intellectual Property & Brand Rights</span>
            </h2>
            <p>
              All materials displayed on this website—including but not limited to the official
              Flamingo Academic College crest, photographic imagery of campus buildings, science
              laboratories, ICT facilities, video masterclasses, curriculum syllabi, and text
              content—are the exclusive intellectual property of Flamingo Academic College Ltd or its
              authorized licensors.
            </p>
            <p>
              Unauthorized reproduction, modification, distribution, or commercial exploitation of
              these brand assets without explicit written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <FileCheck className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>3. Admissions Submissions & Information Accuracy</span>
            </h2>
            <p>
              When submitting inquiry or application information for Senior High School, WASSCE
              Remedials, or WAEC biometric registration, you certify that all submitted names,
              previous educational qualifications (BECE results, WASSCE slips), and identification
              records are authentic and accurate.
            </p>
            <p>
              Submission of forged documents or misrepresentation of candidate credentials constitutes
              grounds for immediate forfeiture of admission and potential reporting to law enforcement
              and examining bodies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <ShieldAlert className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>4. Limitation of Liability</span>
            </h2>
            <p>
              While Flamingo Academic College Ltd strives to keep all curricular descriptions, intake
              dates, and examination timetables accurate and up-to-date, materials on this site are
              provided on an "as is" educational basis. Official fee schedules, syllabus details, and
              examination dates are formally verified upon execution of the physical College Admission
              Packet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)] flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-[var(--color-flamingo-deep)]" />
              <span>5. Governing Law & Jurisdiction</span>
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the
              Republic of Ghana. Any disputes arising out of or in connection with the use of this
              website shall be subject to the exclusive jurisdiction of the competent courts of Ghana.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-black/10">
            <h2 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)]">
              6. Institutional Inquiries
            </h2>
            <p>
              For legal correspondence or administrative verification of college policies, please
              contact:
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

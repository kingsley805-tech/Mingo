import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  AlertCircle,
  ShieldCheck,
  ChevronDown,
  Play,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { school, photos } from "@/site/school";
import VideoModal from "@/components/VideoModal";

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    programme: "",
    previousSchool: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);
  const [heroMedia, setHeroMedia] = useState<"photo" | "video">("photo");

  const admissionSteps = [
    {
      step: "01",
      title: "Inquiry & Program Consultation",
      description:
        "Submit the online application inquiry or visit the admissions office at Pokuase ACP Ridge. Our academic advisors help match the student to the right track (SHS, Remedials, Vacation, or Pre-SHS).",
      timeline: "Immediate • Open Year-Round",
    },
    {
      step: "02",
      title: "Documentation & Academic Assessment",
      description:
        "Provide your BECE results slip, previous terminal reports, or WASSCE results. An informal diagnostic assessment identifies strengths and target subject areas.",
      timeline: "1 – 2 Business Days",
    },
    {
      step: "03",
      title: "Admission Letter & Subject Selection",
      description:
        "Upon review, the candidate receives the official Admission Packet detailing curriculum subjects, textbook lists, school rules, and fee structure.",
      timeline: "Within 48 Hours",
    },
    {
      step: "04",
      title: "Enrollment & Orientation",
      description:
        "Complete registration at the campus desk, undergo WAEC biometric profiling if applicable, and begin classes.",
      timeline: "Prior to Term / Cohort Start",
    },
  ];

  const requirementsByProgram: Record<string, string[]> = {
    "Senior High School (SHS 1 – 3)": [
      "Completed Flamingo Academic College Admission Form",
      "BECE Results Slip / Official Placement Documentation",
      "Certified Copy of Birth Certificate / Ghana Card",
      "Four (4) recent passport-sized photographs (white background)",
      "Continuous Assessment / Cumulative Record from previous school (transfers)",
    ],
    "WASSCE Remedials (School & Nov/Dec)": [
      "Completed Remedial Registration Form",
      "Official WASSCE / SSSCE Results Slip(s)",
      "Valid National ID (Ghana Card or Passport)",
      "Two (2) recent passport-sized photographs",
      "WAEC Index Number verification details",
    ],
    "Vacation Classes": [
      "Completed Vacation Class Registration Slip",
      "Current School ID or recent terminal report",
      "Parent / Guardian emergency contact information",
    ],
    "Pre-SHS Preparatory Classes": [
      "Completed Pre-SHS Registration Form",
      "BECE Index Number / Confirmation slip",
      "Two (2) passport-sized photographs",
    ],
    "Adult Education & Special Classes": [
      "Completed Mature Student / Special Class Intake Form",
      "Valid National ID (Ghana Card)",
      "Previous educational certificates (if any)",
      "Schedule availability preference form",
    ],
  };

  const faqs = [
    {
      q: "When do admissions open for the 2026/2027 academic year?",
      a: "Admissions for Senior High School (SHS 1 – 3) and Pre-SHS classes are open following the release of BECE and school calendar announcements. For WASSCE Remedials and Vacation Classes, registration is ongoing on a rolling basis throughout the year.",
    },
    {
      q: "Can I register for the WAEC Nov/Dec exam at Flamingo Academic College?",
      a: "Yes. Flamingo Academic College is an authorized biometric registration center. We capture biometric fingerprints, verify passport photographs, and submit candidate entries directly to the WAEC portal on campus.",
    },
    {
      q: "Does the school follow the New GES Curriculum?",
      a: "Yes. All Senior High School, Vacation, and Pre-SHS instruction is strictly structured around the New Ghana Education Service (GES) Curriculum standards, integrating modern critical thinking and laboratory inquiry.",
    },
    {
      q: "Are hostel accommodations or boarding facilities available?",
      a: "The college operates as a day school with structured supervised study hours. For students traveling from outside the Pokuase ACP Ridge (Interchange) area, our administration assists families with verified private hostel arrangements within walking distance of the campus.",
    },
    {
      q: "What payment options are available for tuition fees?",
      a: "Tuition can be paid via direct bank deposit, approved mobile money channels, or at the campus finance office. Flexible installment payment plans are available upon consultation with the bursar.",
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = "Student name is required.";
    if (!formData.parentName.trim()) errs.parentName = "Parent / Guardian name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.trim().length < 9) {
      errs.phone = "Please provide a valid telephone number.";
    }
    if (!formData.programme) errs.programme = "Please select an intended academic program.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_f4el41f";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zxnmlrq";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "JEZJinzDEUrmkpPYy";
      const schoolEmail = import.meta.env.VITE_SCHOOL_EMAIL || school.email;

      const templateParams = {
        student_name: formData.studentName,
        parent_name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        grade_level: formData.programme,
        message: `${formData.message}${
          formData.previousSchool ? `\n\nPrevious School: ${formData.previousSchool}` : ""
        }`,
        to_email: schoolEmail,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setSubmitMessage(
        `Thank you, ${formData.parentName}. Your inquiry for ${formData.studentName} has been recorded by our admissions office. We will contact you at ${formData.phone} within 24 business hours.`
      );

      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        programme: "",
        previousSchool: "",
        message: "",
      });
    } catch (err: any) {
      console.warn("EmailJS submission encountered an issue:", err);
      // Construct fallback email/whatsapp link so user can still transmit their application
      setSubmitStatus("error");
      setSubmitMessage(
        "Our automated submission dispatch is temporarily experiencing high traffic. Please tap below to send your application details directly via WhatsApp or call our campus desk."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderHeroMedia = (isMobile = false) => (
    <div className="relative w-full flex flex-col">
      {/* Media Toggle Switch */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/5 border border-black/5">
          <button
            type="button"
            onClick={() => setHeroMedia("photo")}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              heroMedia === "photo"
                ? "bg-white text-[var(--color-ink)] shadow-xs"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            Lecture Hall
          </button>
          <button
            type="button"
            onClick={() => setHeroMedia("video")}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
              heroMedia === "video"
                ? "bg-[var(--color-flamingo-deep)] text-white shadow-xs"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Admissions Video</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() =>
            setSelectedVideo({
              youtubeId: "c8zEtVyAN9U",
              title: "LINEAR INEQUALITIES 2 — Double Inequality Signs",
            })
          }
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-flamingo-deep)] hover:underline"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Math Masterclass</span>
        </button>
      </div>

      <div
        className={`photo photo-zoom rounded-2xl sm:rounded-3xl overflow-hidden shadow-panel border border-black/10 w-full ${
          isMobile
            ? "h-[210px] xs:h-[235px] sm:h-[270px]"
            : "h-[250px] sm:h-[300px] lg:h-[330px] xl:h-[350px]"
        } bg-black/5 relative group`}
      >
        {heroMedia === "video" ? (
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <video
              autoPlay
              controls
              playsInline
              muted
              loop
              className="w-full h-full object-cover"
              src="https://www.pexels.com/download/video/8685438/"
            />
            <button
              type="button"
              onClick={() =>
                setSelectedVideo({
                  youtubeId: "c8zEtVyAN9U",
                  title: "LINEAR INEQUALITIES 2 — Double Inequality Signs",
                })
              }
              className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-[0.7rem] font-bold backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Watch Math Masterclass</span>
            </button>
          </div>
        ) : (
          <>
            <picture className="w-full h-full">
              <source srcSet={photos.lectureHall.srcSetWebp} type="image/webp" />
              <source srcSet={photos.lectureHall.srcSetJpg} type="image/jpeg" />
              <img
                src={photos.lectureHall.src}
                alt={photos.lectureHall.alt}
                loading="eager"
                width={640}
                height={350}
                className="w-full h-full object-cover"
              />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-black/25 to-transparent pointer-events-none" />

            {/* Video Play Button */}
            <button
              type="button"
              onClick={() => setHeroMedia("video")}
              className={`absolute ${
                isMobile
                  ? "top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 gap-2"
                  : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 gap-3"
              } z-10 flex items-center rounded-full bg-white/95 hover:bg-white text-[var(--color-ink)] shadow-2xl backdrop-blur-md transition-all hover:scale-105 group/play cursor-pointer border border-black/10`}
              aria-label="Play Admissions Video"
            >
              <div
                className={`${
                  isMobile ? "w-7 h-7" : "w-9 h-9"
                } rounded-full bg-[var(--color-flamingo-deep)] flex items-center justify-center text-white shadow-md group-hover/play:scale-110 transition-transform`}
              >
                <Play className={`${isMobile ? "w-3 h-3" : "w-4 h-4"} ml-0.5 fill-white`} />
              </div>
              <div className="text-left pr-1.5">
                <span className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-wider text-[var(--color-muted)] font-bold block">
                  Admissions Video
                </span>
                <span className="text-[0.7rem] sm:text-xs font-bold text-[var(--color-ink)] block">
                  Watch Video &rarr;
                </span>
              </div>
            </button>

            <div
              className={`absolute ${
                isMobile ? "bottom-3 left-3.5 right-3.5" : "bottom-5 left-5 right-5"
              } text-white z-10 pointer-events-none`}
            >
              <span className="text-[0.62rem] uppercase tracking-wider text-[var(--color-flamingo-light)] font-bold block mb-0.5">
                Academic Instruction Hall
              </span>
              <h3
                className={`font-['Manrope'] ${
                  isMobile ? "text-sm sm:text-base" : "text-lg"
                } font-semibold text-white`}
              >
                Direct Teaching & Mentorship
              </h3>
              {!isMobile && (
                <p className="text-xs text-white/75 mt-0.5 line-clamp-2">
                  Experience structured tuition designed to build confidence and top grades.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-0">
      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        youtubeId={selectedVideo?.youtubeId || ""}
        title={selectedVideo?.title || ""}
      />

      {/* =========================================================================
          HERO SECTION — Editorial Admissions Overview with Lecture Hall Media
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-10 bg-[var(--color-paper)] border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Admissions Info */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="eyebrow">Admissions 2026 / 2027</span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-[var(--color-ink)] font-['Manrope'] font-normal leading-[1.04]">
                Begin your journey toward{" "}
                <span className="italic-accent">academic achievement</span>.
              </h1>

              {/* Mobile Hero Media Card */}
              <div className="block lg:hidden pt-1 pb-1">
                {renderHeroMedia(true)}
              </div>

              <p className="lead text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                We welcome prospective Senior High School students, WASSCE remedial candidates, and
                vacation class learners. Our admissions process is transparent, personalized, and designed
                to position every student for tertiary success.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-[var(--color-ink)]">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  SHS 1 – 3 Admissions
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  WASSCE Remedials (School & Private)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  WAEC Biometric Center
                </span>
              </div>
            </div>

            {/* Right Column: Lecture Hall Image & Video Masterclass (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              {renderHeroMedia(false)}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSIONS PROCESS (4 STEPS)
          ========================================================================= */}
      <section className="section-y bg-white border-b border-black/5">
        <div className="container-x">
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <span className="eyebrow">The Application Pathway</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Four straightforward steps to enrolment.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Our clear, transparent admissions process ensures every applicant is properly evaluated
              and supported from first inquiry to first day of classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-2xl bg-[var(--color-paper)] border border-black/5 flex flex-col justify-between space-y-6 hover:shadow-lift transition-all"
              >
                <div className="space-y-4">
                  <div className="font-['Manrope'] text-3xl font-bold text-[var(--color-flamingo-deep)] numeral">
                    {step.step}
                  </div>
                  <h3 className="font-['Manrope'] text-xl font-bold text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-black/10 text-xs font-semibold text-[var(--color-ink)]">
                  {step.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          APPLICATION INQUIRY FORM & VERIFIED REQUIREMENTS
          ========================================================================= */}
      <section id="application-form" className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-black/10 shadow-sm space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-flamingo-deep)]">
                  Online Inquiry Form
                </span>
                <h2 className="display-m text-[var(--color-ink)]">
                  Submit an Admissions Inquiry
                </h2>
                <p className="text-sm sm:text-base text-[var(--color-muted)]">
                  Complete the form below. Our admissions desk at Pokuase ACP Ridge will contact you
                  within 24 business hours to provide program details and guide your registration.
                </p>
              </div>

              {submitStatus === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-5 animate-fade">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-['Manrope'] text-2xl font-bold">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-sm sm:text-base text-emerald-900 leading-relaxed">
                      {submitMessage}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/80 border border-emerald-200 text-xs space-y-2">
                    <span className="font-bold uppercase tracking-wider block text-emerald-900">
                      What Happens Next?
                    </span>
                    <div>1. An admissions counselor reviews your selected academic program.</div>
                    <div>2. You will receive a telephone call or WhatsApp briefing.</div>
                    <div>3. Visit campus at Pokuase ACP Ridge for document verification & enrollment.</div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitStatus("idle")}
                      className="btn btn-primary text-xs font-semibold !py-2.5 !px-5"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={school.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-xs font-semibold !py-2.5 !px-5"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {submitStatus === "error" && (
                    <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{submitMessage}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-1">
                        <a
                          href={school.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary text-xs font-semibold !py-2 !px-4"
                        >
                          Send via WhatsApp ({school.phoneDisplay})
                        </a>
                        <a
                          href={`mailto:${school.email}?subject=Admissions Inquiry - ${encodeURIComponent(
                            formData.studentName || "Prospective Student"
                          )}`}
                          className="btn btn-outline text-xs font-semibold !py-2 !px-4"
                        >
                          Send Direct Email
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="studentName" className="field-label">
                        Student Full Name <span className="text-[var(--color-danger)]">*</span>
                      </label>
                      <input
                        id="studentName"
                        name="studentName"
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Kwame Mensah"
                        aria-invalid={!!errors.studentName}
                        className="field"
                      />
                      {errors.studentName && (
                        <p className="field-error">{errors.studentName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="parentName" className="field-label">
                        Parent / Guardian Name <span className="text-[var(--color-danger)]">*</span>
                      </label>
                      <input
                        id="parentName"
                        name="parentName"
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Mrs. Sarah Mensah"
                        aria-invalid={!!errors.parentName}
                        className="field"
                      />
                      {errors.parentName && (
                        <p className="field-error">{errors.parentName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="field-label">
                        Email Address <span className="text-[var(--color-danger)]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        className="field"
                      />
                      {errors.email && (
                        <p className="field-error">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="field-label">
                        Telephone / WhatsApp <span className="text-[var(--color-danger)]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 24 000 0000"
                        aria-invalid={!!errors.phone}
                        className="field"
                      />
                      {errors.phone && (
                        <p className="field-error">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="programme" className="field-label">
                        Intended Academic Program <span className="text-[var(--color-danger)]">*</span>
                      </label>
                      <select
                        id="programme"
                        name="programme"
                        required
                        value={formData.programme}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.programme}
                        className="field"
                      >
                        <option value="">Select a program...</option>
                        <option value="Senior High School (SHS 1 – 3)">Senior High School (SHS 1 – 3)</option>
                        <option value="WASSCE Remedials (School & Private)">WASSCE Remedials (School & Private)</option>
                        <option value="SHS Vacation Classes">SHS Vacation Classes</option>
                        <option value="Pre-SHS Classes (After BECE)">Pre-SHS Classes (After BECE)</option>
                        <option value="Special Classes & Home Tuition">Special Classes & Home Tuition</option>
                        <option value="Adult Education">Adult Education & Mature Learners</option>
                        <option value="WAEC Biometric Registration">WAEC Biometric Registration Only</option>
                      </select>
                      {errors.programme && (
                        <p className="field-error">{errors.programme}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="previousSchool" className="field-label">
                        Previous School / JHS Attended
                      </label>
                      <input
                        id="previousSchool"
                        name="previousSchool"
                        type="text"
                        value={formData.previousSchool}
                        onChange={handleInputChange}
                        placeholder="e.g. Achimota Basic / JHS"
                        className="field"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="field-label">
                      Questions or Specific Academic Needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mention preferred subject electives (General Science, Business, General Arts, Visual Arts) or any specific questions..."
                      className="field"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full text-base !py-3.5 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting Inquiry...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Admissions Inquiry
                      </span>
                    )}
                  </button>

                  <p className="text-[0.78rem] text-[var(--color-muted)] text-center">
                    Your details are held strictly in confidence by Flamingo Academic College Ltd
                    under our{" "}
                    <Link to="/privacy-policy" className="underline hover:text-[var(--color-ink)]">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Requirements Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="eyebrow">Required Credentials</span>
                <h3 className="display-m text-[var(--color-ink)]">
                  Documents by Program Level
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Please prepare the following verified credentials when visiting the admissions desk.
                </p>
              </div>

              <div className="space-y-4">
                {Object.entries(requirementsByProgram).map(([progName, reqList]) => (
                  <div
                    key={progName}
                    className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs space-y-3"
                  >
                    <h4 className="font-['Manrope'] text-lg font-bold text-[var(--color-ink)] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                      <span>{progName}</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-muted)]">
                      {reqList.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)] flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Direct Admissions Desk Contacts */}
              <div className="p-6 rounded-2xl bg-[var(--color-ink-2)] text-white space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-flamingo)]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admissions Help Desk</span>
                </div>
                <div className="space-y-2 text-sm text-[var(--color-muted-on-ink)]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[var(--color-flamingo)]" />
                    <a href={school.phoneHref} className="text-white hover:underline font-semibold">
                      {school.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[var(--color-flamingo)]" />
                    <a href={`mailto:${school.email}`} className="hover:underline text-xs">
                      {school.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <MapPin className="w-4 h-4 text-[var(--color-flamingo)] mt-0.5 flex-shrink-0" />
                    <span className="text-xs">
                      Flamingo Academic College Ltd, Pokuase ACP Ridge (Interchange), Accra
                    </span>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-xs text-white/75 space-y-1">
                    <div>• 24/7 CCTV Surveillance Cameras</div>
                    <div>• Face Attendance Authentication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS (FAQ)
          ========================================================================= */}
      <section className="section-y bg-white border-t border-black/5">
        <div className="container-x">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="eyebrow">Admissions Questions</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Frequently Asked Questions.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Find answers regarding term dates, remedial schedules, hostel arrangements, and WAEC
              biometric registration.
            </p>
          </div>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/10 overflow-hidden bg-[var(--color-paper)]/50 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-['Manrope'] text-lg font-bold text-[var(--color-ink)] hover:text-[var(--color-flamingo-deep)] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[var(--color-flamingo-deep)]" : "text-black/40"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed border-t border-black/5 pt-4 bg-white/70">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
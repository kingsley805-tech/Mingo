import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Play,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { school, photos } from "@/site/school";
import VideoModal from "@/components/VideoModal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);

  const departments = [
    {
      name: "Admissions & Intake Office",
      email: school.email,
      phone: school.phoneDisplay,
      description:
        "For all questions regarding SHS admissions, WASSCE remedial enrollments, vacation classes, and campus prospectus.",
    },
    {
      name: "Academic Affairs Directorate",
      email: school.email,
      phone: school.phoneDisplay,
      description:
        "Led by Dr. Flamingo L.L. Lawson. Consultations on curriculum tracks, syllabus mastery, and subject combinations.",
    },
    {
      name: "WAEC Biometric Registration Desk",
      email: school.email,
      phone: school.phoneDisplay,
      description:
        "Biometric fingerprint profiling, index verification, and portal submission for WASSCE (School & Nov/Dec) and BECE.",
    },
    {
      name: "Finance & Accounts Office",
      email: school.email,
      phone: school.phoneDisplay,
      description:
        "Tuition schedules, payment verification, installment arrangements, and receipt validation.",
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please select or enter an inquiry subject.";
    if (!formData.message.trim()) errs.message = "Please write a brief message or question.";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_flamingo";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_contact";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";
      const schoolEmail = import.meta.env.VITE_SCHOOL_EMAIL || school.email;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
        to_email: schoolEmail,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your message has been received by our campus office. We will reply to your email or telephone within 24 business hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.warn("Contact submission notice:", err);
      setSubmitStatus("error");
      setSubmitMessage(
        "Our message portal is momentarily busy. Please use the WhatsApp button below or email us directly at flamingoacademiccollege@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
          HERO SECTION — Editorial Contact Header with Campus Media
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-10 bg-[var(--color-paper)] border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Contact Header */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="eyebrow">Connect With Us</span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-[var(--color-ink)] font-['Manrope'] font-normal leading-[1.04]">
                We are here to assist your{" "}
                <span className="italic-accent">educational future</span>.
              </h1>
              <p className="lead text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Located on Pokuase ACP Ridge overlooking Kwabenya in Greater Accra. Whether you have
                questions about Senior High School placement, WASSCE remedials, or WAEC biometric
                registration, our administrative desk is pleased to welcome you.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--color-ink)]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  Monday – Friday: 7:30 AM – 5:00 PM
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  Pokuase ACP Ridge, Accra
                </span>
              </div>
            </div>

            {/* Right Column: Campus Gate Image & Video Trigger */}
            <div className="lg:col-span-5 relative">
              <div className="photo photo-zoom rounded-2xl sm:rounded-3xl overflow-hidden shadow-panel border border-black/10 w-full h-[250px] sm:h-[300px] lg:h-[330px] xl:h-[350px] bg-black/5 relative group">
                <picture className="w-full h-full">
                  <source srcSet={photos.gate.srcSetWebp} type="image/webp" />
                  <source srcSet={photos.gate.srcSetJpg} type="image/jpeg" />
                  <img
                    src={photos.gate.src}
                    alt={photos.gate.alt}
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
                  onClick={() =>
                    setSelectedVideo({
                      youtubeId: "1uWCNTWMrzw",
                      title: "Flamingo Academic College Overview & Campus Tour",
                    })
                  }
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-3 px-4 py-3 rounded-full bg-white/95 hover:bg-white text-[var(--color-ink)] shadow-2xl backdrop-blur-md transition-all hover:scale-105 group/play cursor-pointer border border-black/10"
                  aria-label="Play Campus Tour Video"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--color-flamingo-deep)] flex items-center justify-center text-white shadow-md group-hover/play:scale-110 transition-transform">
                    <Play className="w-4 h-4 ml-0.5 fill-white" />
                  </div>
                  <div className="text-left pr-2">
                    <span className="text-[0.62rem] uppercase tracking-wider text-[var(--color-muted)] font-bold block">
                      Campus Preview
                    </span>
                    <span className="text-xs font-bold text-[var(--color-ink)] block">
                      Watch Video &rarr;
                    </span>
                  </div>
                </button>

                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[0.68rem] uppercase tracking-widest text-[var(--color-flamingo)] font-bold block mb-1">
                    Administrative Desk
                  </span>
                  <h3 className="font-['Manrope'] text-lg font-semibold text-white">
                    Pokuase ACP Ridge Entrance
                  </h3>
                  <p className="text-xs text-white/75 mt-0.5 line-clamp-2">
                    Visit our campus in person or submit an inquiry to speak with academic advisors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED CONTACT INFORMATION CHIPS
          ========================================================================= */}
      <section className="py-12 bg-white border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-[var(--color-paper)] border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[var(--color-flamingo-deep)] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-[var(--color-ink)]">
                Campus Location
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                Pokuase ACP Ridge, MPPF+XF8, Kwabenya, Greater Accra, Ghana.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[var(--color-paper)] border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[var(--color-flamingo-deep)] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-[var(--color-ink)]">
                Direct Telephone
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)]">
                <a href={school.phoneHref} className="font-semibold text-[var(--color-ink)] hover:underline block">
                  {school.phoneDisplay}
                </a>
                <span>Voice & WhatsApp Inquiries</span>
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[var(--color-paper)] border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[var(--color-flamingo-deep)] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-[var(--color-ink)]">
                Email Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] break-all">
                <a href={`mailto:${school.email}`} className="font-semibold text-[var(--color-ink)] hover:underline block">
                  {school.email}
                </a>
                <span>Official Admissions Correspondence</span>
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[var(--color-paper)] border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[var(--color-flamingo-deep)] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-[var(--color-ink)]">
                Office Hours
              </h3>
              <div className="text-xs sm:text-sm text-[var(--color-muted)] space-y-0.5">
                <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                <div>Sat: 9:00 AM – 1:00 PM</div>
                <div className="text-[var(--color-flamingo-deep)] font-semibold">Sun: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT FORM & INTERACTIVE MAP EMBED
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-12 rounded-3xl border border-black/10 shadow-sm space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-flamingo-deep)]">
                  Inquiry Dispatch
                </span>
                <h2 className="display-m text-[var(--color-ink)]">
                  Send Us a Direct Message
                </h2>
                <p className="text-sm text-[var(--color-muted)]">
                  Fill in your details below and our campus office will follow up with you promptly.
                </p>
              </div>

              {submitStatus === "success" ? (
                <div className="p-7 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-4 animate-fade">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Manrope'] text-xl font-bold">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-emerald-900 leading-relaxed">{submitMessage}</p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus("idle")}
                    className="btn btn-primary text-xs font-semibold !py-2.5 !px-5"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-medium">{submitMessage}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={school.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary text-xs font-semibold !py-2 !px-4"
                        >
                          Chat on WhatsApp
                        </a>
                        <a
                          href={`mailto:${school.email}`}
                          className="btn btn-outline text-xs font-semibold !py-2 !px-4"
                        >
                          Email Directly
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="field-label">
                        Your Full Name <span className="text-[var(--color-danger)]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Samuel Adjei"
                        aria-invalid={!!errors.name}
                        className="field"
                      />
                      {errors.name && <p className="field-error">{errors.name}</p>}
                    </div>

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
                        placeholder="samuel@example.com"
                        aria-invalid={!!errors.email}
                        className="field"
                      />
                      {errors.email && <p className="field-error">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="field-label">
                        Telephone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 24 251 5305"
                        className="field"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="field-label">
                        Inquiry Topic <span className="text-[var(--color-danger)]">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.subject}
                        className="field"
                      >
                        <option value="">Select subject...</option>
                        <option value="Senior High School Admission">Senior High School Admission</option>
                        <option value="WASSCE Remedials Registration">WASSCE Remedials Registration</option>
                        <option value="SHS Vacation Classes">SHS Vacation Classes</option>
                        <option value="Pre-SHS Preparation">Pre-SHS Preparation (After BECE)</option>
                        <option value="WAEC Biometric Services">WAEC Biometric Registration</option>
                        <option value="Special Tuition / Home Classes">Special Tuition & Home Classes</option>
                        <option value="Campus Tour Booking">Book a Campus Tour</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      {errors.subject && <p className="field-error">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="field-label">
                      Message / Question <span className="text-[var(--color-danger)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please let us know how we can assist you..."
                      aria-invalid={!!errors.message}
                      className="field"
                    />
                    {errors.message && <p className="field-error">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full text-base !py-3.5 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Direct Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Campus Guide Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="eyebrow">Campus Geography</span>
                <h3 className="display-m text-[var(--color-ink)]">
                  Visit Us on Pokuase ACP Ridge
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Located near the Pokuase ACP interchange corridor, our campus is easily accessible
                  from Kwabenya, Amasaman, Dome, and the greater Accra metropolis.
                </p>
              </div>

              {/* Verified Google Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-black/10 shadow-panel aspect-video sm:aspect-[4/3] bg-black/5 relative">
                <iframe
                  src={school.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flamingo Academic College Ltd Google Map Location"
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-black/5">
                <div>
                  <div className="font-semibold text-sm text-[var(--color-ink)]">
                    Pokuase ACP Ridge Campus
                  </div>
                  <div className="text-xs text-[var(--color-muted)]">
                    BOX GP 18908, Accra – Ghana
                  </div>
                </div>
                <a
                  href={school.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-xs font-semibold !py-2.5 !px-4 text-center justify-center"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS DEPARTMENTAL CONTACTS
          ========================================================================= */}
      <section className="section-y bg-white border-t border-black/5">
        <div className="container-x">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="eyebrow">Direct Office Directory</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Departmental Contacts.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Reach specific administrative and academic desks directly for specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="p-8 rounded-2xl bg-[var(--color-paper)] border border-black/5 space-y-4 hover:shadow-lift transition-all"
              >
                <div className="space-y-1">
                  <h3 className="font-['Manrope'] text-xl font-bold text-[var(--color-ink)]">
                    {dept.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/10 flex flex-wrap items-center gap-6 text-xs font-semibold text-[var(--color-ink)]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                    <span>{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
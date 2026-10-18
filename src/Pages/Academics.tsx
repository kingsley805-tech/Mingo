import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Fingerprint,
  CheckCircle2,
  GraduationCap,
  Play,
} from "lucide-react";
import {
  school,
  photos,
  programmes,
  waecServices,
  academicDepartments,
} from "@/site/school";
import VideoModal from "@/components/VideoModal";

export default function Academics() {
  const [selectedProgramme, setSelectedProgramme] = useState<string>("shs");
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);
  const [heroMedia, setHeroMedia] = useState<"photo" | "video">("photo");

  const currentProg =
    programmes.find((p) => p.slug === selectedProgramme) || programmes[0];

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
            Lab Photo
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
            <span>Academic Video</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() =>
            setSelectedVideo({
              youtubeId: "zZ0MvONQn64",
              title: "MOTION 3 — Graph of Motion & Kinematics",
            })
          }
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-flamingo-deep)] hover:underline"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Physics Masterclass</span>
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
              src="https://www.pexels.com/download/video/3738599/"
            />
            <button
              type="button"
              onClick={() =>
                setSelectedVideo({
                  youtubeId: "zZ0MvONQn64",
                  title: "MOTION 3 — Graph of Motion & Kinematics",
                })
              }
              className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-[0.7rem] font-bold backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Watch Physics Masterclass</span>
            </button>
          </div>
        ) : (
          <>
            <picture className="w-full h-full">
              <source srcSet={photos.scienceLab.srcSetWebp} type="image/webp" />
              <source srcSet={photos.scienceLab.srcSetJpg} type="image/jpeg" />
              <img
                src={photos.scienceLab.src}
                alt={photos.scienceLab.alt}
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
              aria-label="Play Academic Video"
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
                  Academic Video
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
                Science Laboratory Facility
              </span>
              <h3
                className={`font-['Manrope'] ${
                  isMobile ? "text-sm sm:text-base" : "text-lg"
                } font-semibold text-white`}
              >
                Practical STEM Rigor
              </h3>
              {!isMobile && (
                <p className="text-xs text-white/75 mt-0.5 line-clamp-2">
                  Hands-on laboratory investigations supporting physics, chemistry, and biology exam mastery.
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
          HERO SECTION — Editorial Typography & Academic Mission with Lab Media
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-10 bg-[var(--color-paper)] border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Mission & Curriculum */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="eyebrow">Academic Excellence & Rigor</span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-[var(--color-ink)] font-['Manrope'] font-normal leading-[1.04]">
                Rigorous instruction aligned with the{" "}
                <span className="italic-accent">New GES Curriculum</span>.
              </h1>

              {/* Mobile Hero Media Card */}
              <div className="block lg:hidden pt-1 pb-1">
                {renderHeroMedia(true)}
              </div>

              <p className="lead text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                From our flagship 3-year Senior High School stream to intensive WASSCE remedial revision
                and holiday vacation classes, our curriculum is engineered for deep concept mastery,
                laboratory investigation, and top university qualification.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[var(--color-ink)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  SHS 1 – 3 Streams
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[var(--color-ink)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  WASSCE Remedials
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[var(--color-ink)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  STEM Laboratory Practicals
                </span>
              </div>
            </div>

            {/* Right Column: Science Lab Image & Video Masterclass (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              {renderHeroMedia(false)}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PROGRAMMES EXPLORER
          ========================================================================= */}
      <section className="section-y bg-white border-b border-black/5">
        <div className="container-x">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="eyebrow">Academic Offerings</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Programs offered at Flamingo Academic College.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Select a program below to review the curriculum structure, target audience, and key
              academic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Program Selection Tabs (Desktop/Tablet) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-muted)] px-3 mb-2 block">
                Select Course
              </span>
              <div className="space-y-1.5">
                {programmes.map((p) => {
                  const Icon = p.icon;
                  const active = p.slug === selectedProgramme;
                  return (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setSelectedProgramme(p.slug)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        active
                          ? "bg-[var(--color-ink)] text-white shadow-md"
                          : "bg-[var(--color-paper)]/70 hover:bg-[var(--color-paper-2)] text-[var(--color-ink)]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            active
                              ? "bg-[var(--color-flamingo)] text-[var(--color-ink)]"
                              : "bg-white text-[var(--color-flamingo-deep)]"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-['Manrope'] text-base font-semibold leading-tight">
                            {p.title.split("(")[0].trim()}
                          </div>
                          <span
                            className={`text-xs ${
                              active ? "text-white/70" : "text-[var(--color-muted)]"
                            }`}
                          >
                            {p.short}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          active ? "text-[var(--color-flamingo)] translate-x-1" : "opacity-30"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Program Detailed View Panel */}
            <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-[var(--color-paper)] border border-black/10 shadow-sm space-y-8">
              <div className="space-y-3 pb-6 border-b border-black/10">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--color-flamingo-deep)]">
                  <GraduationCap className="w-4 h-4" />
                  <span>{currentProg.tagline}</span>
                </div>
                <h3 className="font-['Manrope'] text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
                  {currentProg.title}
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
                  {currentProg.description}
                </p>
              </div>

              {/* Target Audience & Schedule */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-black/5 space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted)] block">
                    Ideal Candidate / Audience
                  </span>
                  <div className="font-semibold text-sm text-[var(--color-ink)]">
                    {currentProg.audience}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-black/5 space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted)] block">
                    Admissions / Intake Window
                  </span>
                  <div className="font-semibold text-sm text-[var(--color-ink)]">
                    {currentProg.intake}
                  </div>
                </div>
              </div>

              {/* Program Curriculum Highlights */}
              <div className="space-y-4">
                <h4 className="font-['Manrope'] text-xl font-bold text-[var(--color-ink)]">
                  Core Academic Highlights & Structure
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {currentProg.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/70 border border-black/5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-flamingo-deep)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[var(--color-ink)] leading-normal">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enrollment CTA within Program */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/admissions"
                  className="btn btn-primary text-sm font-semibold !py-3.5 !px-7"
                >
                  <span>Apply for {currentProg.short}</span>
                  <ArrowRight className="w-4 h-4 arrow" />
                </Link>
                <a
                  href={school.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-sm font-semibold !py-3.5 !px-6"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SUBJECT DEPARTMENTS & SPECIALIZATION TRACKS
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <span className="eyebrow">Academic Departments</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Comprehensive subject tracks for every academic pathway.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Under the New GES Curriculum, our academic faculty is organized across five core
              departments, providing specialist tutoring and continuous assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {academicDepartments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.name}
                  className="p-8 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-lift transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-paper)] text-[var(--color-flamingo-deep)] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Manrope'] text-2xl font-bold text-[var(--color-ink)]">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {dept.description}
                  </p>
                  <div className="pt-2 border-t border-black/10">
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-muted)] block mb-2">
                      Subjects & Courses
                    </span>
                    <ul className="space-y-1.5 text-xs font-semibold text-[var(--color-ink)]">
                      {dept.tracks.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-flamingo)]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WAEC BIOMETRIC REGISTRATION CENTRE (OFFICIAL SERVICES)
          ========================================================================= */}
      <section className="section-y on-ink bg-[var(--color-ink)] text-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-flamingo)]">
                <Fingerprint className="w-5 h-5" />
                <span>Accredited Registration Center</span>
              </div>
              <h2 className="display-l text-white font-['Manrope']">
                {waecServices.title}
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-muted-on-ink)] leading-relaxed">
                {waecServices.subtitle}
              </p>
              <div className="space-y-2 pt-2 text-sm text-[var(--color-muted-on-ink)]">
                <div>✓ Certified biometric fingerprint scanner hardware on campus</div>
                <div>✓ Real-time passport and personal bio-data verification</div>
                <div>✓ Subject combinations and index confirmation on WAEC portal</div>
                <div>✓ Assistance for School and Private Nov/Dec candidates</div>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="btn btn-accent text-sm font-semibold !py-3.5 !px-8">
                  <span>Contact Registration Desk</span>
                  <ArrowRight className="w-4 h-4 arrow" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {waecServices.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors"
                >
                  <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-flamingo)]">
                    {item.period}
                  </span>
                  <h3 className="font-['Manrope'] text-xl font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted-on-ink)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LABORATORY PRACTICALS & SCIENCE RIGOR
          ========================================================================= */}
      <section className="section-y bg-white border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="eyebrow">Experiential Learning</span>
              <h2 className="display-l text-[var(--color-ink)]">
                Hands-on practicals in dedicated Science & ICT laboratories.
              </h2>
              <p className="lead text-[var(--color-muted)]">
                WASSCE examinations place significant weight on practical papers (Biology, Chemistry,
                Physics, and ICT). Our students do not merely study textbook equations—they set up
                titrations, examine specimens under microscopes, and run computational algorithms
                themselves.
              </p>
              <div className="space-y-3 pt-2 text-sm text-[var(--color-ink)] font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                  <span>Equipped biology specimen stations & chemical experiment benches</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                  <span>Desktop computer laboratory for digital literacy and programming</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                  <span>Supervised by experienced subject teachers and laboratory technicians</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="photo photo-zoom rounded-2xl overflow-hidden aspect-[4/3] bg-black/5 border border-black/5 shadow-sm">
                <picture>
                  <source srcSet={photos.scienceLab.srcSetWebp} type="image/webp" />
                  <source srcSet={photos.scienceLab.srcSetJpg} type="image/jpeg" />
                  <img
                    src={photos.scienceLab.src}
                    alt={photos.scienceLab.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="photo photo-zoom rounded-2xl overflow-hidden aspect-[4/3] bg-black/5 border border-black/5 shadow-sm">
                <picture>
                  <source srcSet={photos.ictLab.srcSetWebp} type="image/webp" />
                  <source srcSet={photos.ictLab.srcSetJpg} type="image/jpeg" />
                  <img
                    src={photos.ictLab.src}
                    alt={photos.ictLab.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSION & NEXT STEPS CTA
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x text-center max-w-3xl space-y-6">
          <span className="eyebrow mx-auto">Enrollment Process</span>
          <h2 className="display-l text-[var(--color-ink)]">
            Ready to enroll in an academic program?
          </h2>
          <p className="lead text-[var(--color-muted)]">
            Whether preparing for JHS-to-SHS transition, full 3-year SHS schooling, or WASSCE
            remedials, our admissions team is here to review your credentials and guide your registration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/admissions" className="btn btn-primary text-sm font-semibold !py-3.5 !px-8">
              <span>View Admissions Guide & Requirements</span>
              <ArrowRight className="w-4 h-4 arrow" />
            </Link>
            <a
              href={school.phoneHref}
              className="btn btn-outline text-sm font-semibold !py-3.5 !px-6"
            >
              <span>Call Admissions Desk: {school.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
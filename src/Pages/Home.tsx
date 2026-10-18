import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Fingerprint,
  Phone,
  CheckCircle2,
  Play,
  MapPin,
  Calendar,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import {
  school,
  photos,
  programmes,
  facilities,
  verifiedStats,
} from "@/site/school";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);
  const [heroMedia, setHeroMedia] = useState<"photo" | "video">("photo");

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
          HERO SECTION — Editorial Asymmetry, Confident Typography, Authentic Campus
          ========================================================================= */}
      <section className="relative overflow-hidden pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-8 border-b border-black/5 bg-gradient-to-b from-[var(--color-paper)] via-[var(--color-paper)] to-[var(--color-paper-2)]/40">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-black/5 shadow-xs text-xs font-semibold text-[var(--color-ink)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-flamingo-deep)] animate-pulse" />
                  <span>Kwabenya – Pokuase ACP Ridge • Accra, Ghana</span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-[var(--color-ink)] font-['Fraunces'] font-normal leading-[1.04]">
                    Shaping bright minds,{" "}
                    <span className="italic-accent font-light">inspiring</span> lifelong futures.
                  </h1>

                  <p className="lead max-w-xl text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
                    Flamingo Academic College Ltd delivers disciplined senior high education, WASSCE
                    remedials, and vacation tuition built on the New GES Curriculum. We empower learners
                    with academic independence and moral excellence.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <Link
                    to="/admissions"
                    className="btn btn-primary text-sm sm:text-base !py-2.5 sm:!py-3 !px-6 shadow-lift"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight className="w-4 h-4 arrow" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/academics"
                    className="btn btn-outline text-sm sm:text-base !py-2.5 sm:!py-3 !px-5"
                  >
                    <BookOpen className="w-4 h-4 text-[var(--color-flamingo-deep)]" aria-hidden="true" />
                    <span>Explore Our Programs</span>
                  </Link>
                </div>
              </div>

              {/* Verified School Credentials Bar */}
              <div className="pt-3.5 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {verifiedStats.map((stat) => (
                  <div key={stat.label} className="space-y-0.5">
                    <div className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[var(--color-ink)] numeral">
                      {stat.value}
                    </div>
                    <div className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider text-[var(--color-ink)]">
                      {stat.label}
                    </div>
                    <div className="text-[0.68rem] text-[var(--color-muted)] leading-tight">
                      {stat.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Layered Photographic Showcase Aligned with Text */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className="relative w-full flex flex-col">
                {/* Media Switch Pills (Photo / Video) */}
                <div className="flex items-center justify-end gap-2 mb-2 z-10">
                  <button
                    type="button"
                    onClick={() => setHeroMedia("photo")}
                    className={`px-3 py-1 rounded-full text-[0.7rem] font-bold transition-all cursor-pointer ${
                      heroMedia === "photo"
                        ? "bg-[var(--color-ink)] text-white shadow-xs"
                        : "bg-white/90 text-[var(--color-ink)] hover:bg-white border border-black/5"
                    }`}
                  >
                    Campus View
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroMedia("video")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-bold transition-all cursor-pointer ${
                      heroMedia === "video"
                        ? "bg-[var(--color-flamingo-deep)] text-white shadow-xs"
                        : "bg-white/90 text-[var(--color-ink)] hover:bg-white border border-black/5"
                    }`}
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Video</span>
                  </button>
                </div>

                {/* Primary Card: Campus Building Photo or Video with full visibility */}
                <div className="photo photo-zoom rounded-2xl sm:rounded-3xl shadow-panel border border-black/10 overflow-hidden w-full h-[250px] sm:h-[300px] lg:h-[330px] xl:h-[350px] relative bg-black/5 group">
                  {heroMedia === "video" ? (
                    <div className="relative w-full h-full bg-black">
                      <video
                        src="https://www.pexels.com/download/video/8419337/"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedVideo({
                            youtubeId: "1uWCNTWMrzw",
                            title: "Flamingo Academic College Campus Overview Tour",
                          })
                        }
                        className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-[0.7rem] font-bold backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>Open YouTube Tour</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <picture className="w-full h-full">
                        <source srcSet={photos.building.srcSetWebp} type="image/webp" />
                        <source srcSet={photos.building.srcSetJpg} type="image/jpeg" />
                        <img
                          src={photos.building.src}
                          alt={photos.building.alt}
                          loading="eager"
                          fetchPriority="high"
                          width={640}
                          height={350}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      </picture>

                      {/* Gradient Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-[var(--color-ink)]/20 to-black/20 pointer-events-none" />

                      {/* Floating WAEC Accreditation Badge */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[var(--color-ink)]/95 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-lg border border-white/10 flex items-center gap-2 sm:gap-2.5 z-10">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--color-flamingo-deep)] flex items-center justify-center flex-shrink-0">
                          <Fingerprint className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-widest text-[var(--color-flamingo)] font-bold">
                            WAEC Center
                          </div>
                          <div className="text-[0.7rem] sm:text-xs font-semibold text-white">
                            Biometric Registration
                          </div>
                        </div>
                      </div>

                      {/* Center Play Button for Video Preview */}
                      <button
                        type="button"
                        onClick={() => setHeroMedia("video")}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-white/95 hover:bg-white text-[var(--color-ink)] shadow-2xl backdrop-blur-md transition-all hover:scale-105 group/play cursor-pointer border border-black/10"
                        aria-label="Play Campus Video Tour"
                      >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--color-flamingo-deep)] flex items-center justify-center text-white shadow-md group-hover/play:scale-110 transition-transform">
                          <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-white" />
                        </div>
                        <div className="text-left pr-1.5 sm:pr-2">
                          <span className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-wider text-[var(--color-muted)] font-bold block">
                            Campus Video
                          </span>
                          <span className="text-[0.7rem] sm:text-xs font-bold text-[var(--color-ink)] block">
                            Watch Tour &rarr;
                          </span>
                        </div>
                      </button>

                      {/* Bottom Captions */}
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white z-10">
                        <span className="text-[0.62rem] sm:text-[0.7rem] uppercase tracking-widest text-[var(--color-flamingo)] font-bold block mb-0.5">
                          Main Academic Complex
                        </span>
                        <h3 className="font-['Fraunces'] text-base sm:text-lg xl:text-xl font-semibold text-white leading-tight">
                          Pokuase ACP Ridge Campus
                        </h3>
                        <p className="text-[0.7rem] sm:text-xs text-white/75 mt-0.5 hidden sm:block">
                          Multi-storey modern academic facility equipped for the New GES Curriculum.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT & INTRODUCTORY EDITORIAL
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow">The Flamingo Distinction</span>
              <h2 className="display-l text-[var(--color-ink)]">
                Education grounded in rigorous discipline and student mentorship.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
              <p>
                Founded in 2012, Flamingo Academic College Ltd was established with a clear mandate:
                to provide high-quality secondary education and structured remedial coaching that
                turns academic uncertainty into verifiable university qualification.
              </p>
              <p>
                Situated at Pokuase ACP Ridge, our multi-storey facility blends calm natural
                surroundings with purpose-equipped science and computer laboratories. Here, every
                learner receives personal attention, syllabus-specific drills, and the moral
                grounding necessary for lifelong leadership.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-semibold text-[var(--color-ink)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                  <span>New GES Curriculum Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                  <span>Hands-on Science & ICT Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                  <span>Approved WAEC Biometric Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ACADEMIC OFFERINGS (REAL PROGRAMMES ONLY)
          ========================================================================= */}
      <section className="section-y bg-white border-y border-black/5">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow">Academic Programs</span>
              <h2 className="display-l text-[var(--color-ink)]">
                Curricula built for academic independence and exam excellence.
              </h2>
            </div>
            <Link to="/academics" className="link-u text-sm font-semibold">
              <span>View all program details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programmes.map((p) => {
              const Icon = p.icon;
              const programImages: Record<string, { src: string; alt: string }> = {
                shs: {
                  src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "SHS classroom instruction and study",
                },
                "wassce-remedials": {
                  src: photos.lectureHall.src,
                  alt: "WASSCE Remedials lecture session",
                },
                "vacation-classes": {
                  src: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Vacation and holiday classes study",
                },
                "pre-shs": {
                  src: photos.scienceLab.src,
                  alt: "Pre-SHS foundational laboratory training",
                },
                "special-classes": {
                  src: photos.ictLab.src,
                  alt: "Special tuition and ICT workstations",
                },
                "adult-education": {
                  src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Adult education and flexible learning resources",
                },
              };
              const img = programImages[p.slug];

              return (
                <div
                  key={p.slug}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[var(--color-paper)]/50 border border-black/5 hover:border-black/15 transition-all duration-300 hover:shadow-lift overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Program Feature Image */}
                    {img && (
                      <div className="photo photo-zoom aspect-[16/10] rounded-xl overflow-hidden bg-black/5 border border-black/5 relative">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-md border border-black/10 flex items-center justify-center text-[var(--color-flamingo-deep)] shadow-md">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                      </div>
                    )}

                    <div>
                      <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-[var(--color-flamingo-deep)]">
                        {p.short}
                      </span>
                      <h3 className="font-['Fraunces'] text-xl sm:text-2xl font-bold text-[var(--color-ink)] mt-1">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {p.description}
                    </p>

                    <div className="pt-2 border-t border-black/5">
                      <span className="text-xs font-medium text-[var(--color-muted)]">
                        Target: <span className="text-[var(--color-ink)] font-semibold">{p.audience}</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-black/5 flex items-center justify-between">
                    <Link
                      to="/academics"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-flamingo-deep)] transition-colors"
                    >
                      <span>Program Outline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[0.7rem] font-medium text-[var(--color-muted)]">
                      {p.intake}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WAEC Biometric Banner */}
          <div className="mt-10 sm:mt-12 p-8 sm:p-10 rounded-2xl bg-[var(--color-ink-2)] text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-flamingo)]">
                  <Fingerprint className="w-4 h-4" />
                  <span>Official WAEC Service</span>
                </div>
                <h3 className="font-['Fraunces'] text-2xl sm:text-3xl font-bold text-white">
                  WAEC Biometric Examination Registration in Kwabenya
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-2xl">
                  Register for WASSCE School (May/June), WASSCE Private (Nov/Dec), BECE Private, and
                  GBCE directly on campus. Certified biometric capture, subject verification, and index
                  processing.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  to="/admissions"
                  className="btn btn-accent text-sm font-semibold !py-3 text-center justify-center"
                >
                  Register at Campus Desk
                </Link>
                <a
                  href={school.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-white border-white/20 hover:border-white text-sm font-semibold !py-3 text-center justify-center"
                >
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: VERIFIED CAMPUS FACILITIES (REAL PHOTOS)
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="space-y-3 max-w-2xl mb-12">
            <span className="eyebrow">Pokuase ACP Ridge Campus</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Real facilities designed for focused secondary learning.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Photographed on location: our multi-storey academic block, science laboratory, ICT
              suite, central lecture hall, and campus entrance gate.
            </p>
          </div>

          {/* All 5 Authentic Facility Photographs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((f) => (
              <div
                key={f.id}
                className="group rounded-2xl bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-lift transition-all duration-300"
              >
                <div className="photo photo-zoom aspect-[16/10] overflow-hidden bg-black/5">
                  <picture>
                    <source srcSet={f.photo.srcSetWebp} type="image/webp" />
                    <source srcSet={f.photo.srcSetJpg} type="image/jpeg" />
                    <img
                      src={f.photo.src}
                      alt={f.photo.alt}
                      loading="lazy"
                      width={480}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-[var(--color-flamingo-deep)]">
                    {f.stats}
                  </span>
                  <h3 className="font-['Fraunces'] text-xl font-bold text-[var(--color-ink)]">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Campus Photography & Learning Moments Gallery */}
          <div className="mt-14 pt-12 border-t border-black/10">
            <div className="max-w-2xl mb-8 space-y-2">
              <span className="eyebrow">Life on Campus</span>
              <h3 className="font-['Fraunces'] text-2xl font-bold text-[var(--color-ink)]">
                Collaborative Learning & Everyday Moments
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Glimpses into student collaboration, practical experimentation, and interactive learning on Pokuase ACP Ridge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  alt: "Students engaged in classroom instruction",
                  title: "Interactive Classroom Instruction",
                  tag: "Academic Rigor",
                },
                {
                  src: "https://plus.unsplash.com/premium_photo-1664301072254-280c4da68a8d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
                  alt: "Science laboratory investigations",
                  title: "Science Practical Experiments",
                  tag: "Laboratory STEM",
                },
                {
                  src: "https://media.istockphoto.com/id/1770699824/photo/schoolboy-learning-computer-in-class-at-primary-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=XOujW5zZcuTjqtRIsz1UwEBCOOvUWY5t80gufXDj1YE=",
                  alt: "ICT digital computing suite",
                  title: "Digital Computing & Online Practice",
                  tag: "ICT Suite",
                },
                {
                  src: "https://images.unsplash.com/photo-1583026411217-9d05a70d5230?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
                  alt: "Students studying together in collaborative groups",
                  title: "Peer Study Circles & Review",
                  tag: "Mentorship",
                },
              ].map((img, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden border border-black/5 shadow-xs aspect-[4/3] bg-black/5"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-[var(--color-ink)]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[0.6rem] uppercase tracking-wider text-[var(--color-flamingo)] font-bold block mb-0.5">
                      {img.tag}
                    </span>
                    <h4 className="text-xs font-bold leading-snug text-white">
                      {img.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/campus-life" className="btn btn-outline text-sm font-semibold">
              <span>View All Campus Facilities & Student Life</span>
              <ArrowRight className="w-4 h-4 arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LEADERSHIP SPOTLIGHT — DR. FLAMINGO L.L. LAWSON
          ========================================================================= */}
      <section className="section-y on-ink bg-[var(--color-ink)] text-white relative overflow-hidden">
        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Video Embed from School's Channel */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-panel border border-white/10 aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${school.leadership.director.featuredVideoId}?rel=0&modestbranding=1`}
                  title="Dr. Flamingo L.L. Lawson - Flamingo Academic College"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-muted-on-ink)] px-1">
                <span>Official Video • Flamingo Academic College Ltd</span>
                <a
                  href={school.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--color-flamingo)] hover:underline"
                >
                  <span>Visit YouTube Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: Director's Address */}
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow text-[var(--color-flamingo)]">Academic Leadership</span>
              <div className="space-y-2">
                <h2 className="display-m text-white font-['Fraunces'] font-normal">
                  "Every learner possesses latent capacity that rigorous teaching unlocks."
                </h2>
                <div className="h-0.5 w-16 bg-[var(--color-flamingo)]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {school.leadership.director.name}
                </h3>
                <p className="text-sm uppercase tracking-wider text-[var(--color-flamingo)] font-semibold">
                  {school.leadership.director.title}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-muted-on-ink)] leading-relaxed">
                {school.leadership.director.bio} Dr. Lawson's instructional video series breaks down
                advanced mathematics, genetics, moment of forces, and chemical mole concepts into
                understandable steps for candidates across Ghana.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/videos" className="btn btn-accent text-sm font-semibold !py-3">
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Academic Lectures</span>
                </Link>
                <Link to="/about" className="btn btn-outline text-white border-white/20 text-sm font-semibold !py-3">
                  About Our Philosophy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VERIFIED COMMUNITY PERSPECTIVES
          ========================================================================= */}
      <section className="section-y bg-white border-b border-black/5">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="eyebrow mx-auto">Community Feedback</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Voices of academic transformation.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Authentic feedback from parents, alumni, and candidates who experienced the Flamingo
              curriculum firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--color-paper)]/60 border border-black/5 space-y-4">
              <p className="text-base text-[var(--color-ink)] italic leading-relaxed">
                "Flamingo transformed my daughter's approach to Elective Mathematics. The teachers
                took the time to unpack past WASSCE questions until she gained true confidence."
              </p>
              <div className="pt-4 border-t border-black/10">
                <div className="font-semibold text-sm text-[var(--color-ink)]">Sarah Okyere</div>
                <div className="text-xs text-[var(--color-muted)]">Parent of WASSCE Candidate</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--color-paper)]/60 border border-black/5 space-y-4">
              <p className="text-base text-[var(--color-ink)] italic leading-relaxed">
                "The remedial program at Flamingo gave me a second chance. With mock exams and lab
                practicals, I improved my science grades and secured admission to University of Ghana."
              </p>
              <div className="pt-4 border-t border-black/10">
                <div className="font-semibold text-sm text-[var(--color-ink)]">Michael Owusu</div>
                <div className="text-xs text-[var(--color-muted)]">Alumnus, Class of 2019</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--color-paper)]/60 border border-black/5 space-y-4">
              <p className="text-base text-[var(--color-ink)] italic leading-relaxed">
                "As an educator myself, I look closely at instructional discipline. Dr. Lawson and
                his faculty maintain high pedagogical standards and sincere care for students."
              </p>
              <div className="pt-4 border-t border-black/10">
                <div className="font-semibold text-sm text-[var(--color-ink)]">Dr. Emily Yeboah</div>
                <div className="text-xs text-[var(--color-muted)]">Parent & Tertiary Educator</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ADMISSIONS CALL TO ACTION
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper-2)]/60">
        <div className="container-x">
          <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl bg-[var(--color-paper)] border border-black/10 shadow-panel text-center space-y-6">
            <span className="eyebrow mx-auto text-[var(--color-flamingo-deep)]">Enrollment Inquiries</span>
            <h2 className="display-l text-[var(--color-ink)] font-['Fraunces'] font-normal">
              Take the first step toward academic mastery at Flamingo.
            </h2>
            <p className="lead max-w-2xl mx-auto text-[var(--color-muted)]">
              Admissions are ongoing for Senior High School, WASSCE Remedials, Vacation Classes, and
              Pre-SHS courses. Our admissions team is ready to assist you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/admissions" className="btn btn-primary text-base !py-3.5 !px-8 shadow-sm">
                <span>Start Application Inquiry</span>
                <ArrowRight className="w-4 h-4 arrow" />
              </Link>
              <a
                href={school.phoneHref}
                className="btn btn-outline text-base !py-3.5 !px-6"
              >
                <Phone className="w-4 h-4 text-[var(--color-flamingo-deep)]" />
                <span>Call {school.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-muted)]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                Kwabenya – Pokuase ACP Ridge
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                Mon – Fri: 8:00 AM – 5:00 PM
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                Approved WAEC Centre
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
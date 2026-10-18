import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Play,
  ExternalLink,
} from "lucide-react";
import { school, photos, facilities } from "@/site/school";
import VideoModal from "@/components/VideoModal";

export default function About() {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);
  const [heroMedia, setHeroMedia] = useState<"photo" | "video">("photo");

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
            Campus Photo
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
            <span>Campus Video</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() =>
            setSelectedVideo({
              youtubeId: "1SuF-GpozCY",
              title: "MATTER 2 — Calculating Protons, Electrons, Neutrons & Configurations",
            })
          }
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-flamingo-deep)] hover:underline"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Chemistry Masterclass</span>
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
              src="https://www.pexels.com/download/video/8419337/"
            />
            <button
              type="button"
              onClick={() =>
                setSelectedVideo({
                  youtubeId: "1SuF-GpozCY",
                  title: "MATTER 2 — Calculating Protons, Electrons, Neutrons & Configurations",
                })
              }
              className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-[0.7rem] font-bold backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>Watch Masterclass</span>
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
              aria-label="Play Dr. Lawson Science Masterclass"
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
                  Campus Video
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
                Director of Academic Affairs
              </span>
              <h3
                className={`font-['Manrope'] ${
                  isMobile ? "text-sm sm:text-base" : "text-lg"
                } font-semibold text-white`}
              >
                Dr. Flamingo L.L. Lawson
              </h3>
              {!isMobile && (
                <p className="text-xs text-white/75 mt-0.5 line-clamp-2">
                  Science & Mathematics masterclasses preparing students for distinction in WASSCE.
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
          HERO SECTION — Editorial Storytelling with Campus Architecture & Masterclass
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-10 bg-[var(--color-paper)] border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Story & Institutional Mission */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-black/5 shadow-xs text-xs font-semibold text-[var(--color-ink)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-flamingo-deep)]" />
                <span>Institutional Profile • Established 2012 in Accra</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-[var(--color-ink)] font-['Manrope'] font-normal leading-[1.04]">
                Nurturing intellect, character, and{" "}
                <span className="italic-accent">academic independence</span> since 2012.
              </h1>

              {/* Mobile Hero Media Card */}
              <div className="block lg:hidden pt-1 pb-1">
                {renderHeroMedia(true)}
              </div>

              <p className="lead text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Flamingo Academic College Ltd is an independent secondary institution situated at
                Pokuase ACP Ridge in the Ga North/Ga West corridor of Accra. We prepare students for
                tertiary academic achievement through the New GES Curriculum, rigorous STEM laboratories,
                and dedicated remedial coaching.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/80 border border-black/5">
                  <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-muted)] font-bold">
                    Curriculum
                  </div>
                  <div className="text-xs font-bold text-[var(--color-ink)] mt-0.5">
                    Official New GES
                  </div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/80 border border-black/5">
                  <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-muted)] font-bold">
                    Accreditation
                  </div>
                  <div className="text-xs font-bold text-[var(--color-ink)] mt-0.5">
                    WAEC Biometric Center
                  </div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/80 border border-black/5">
                  <div className="text-[0.68rem] uppercase tracking-wider text-[var(--color-muted)] font-bold">
                    Location
                  </div>
                  <div className="text-xs font-bold text-[var(--color-ink)] mt-0.5">
                    Pokuase ACP Ridge
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photographic Card with Video Trigger (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              {renderHeroMedia(false)}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS PANORAMA & ARCHITECTURE PHOTO
          ========================================================================= */}
      <section className="bg-white border-b border-black/5 py-10 sm:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="photo photo-zoom rounded-3xl overflow-hidden shadow-panel border border-black/10 aspect-[16/10] bg-black/5">
                <picture>
                  <source srcSet={photos.building.srcSetWebp} type="image/webp" />
                  <source srcSet={photos.building.srcSetJpg} type="image/jpeg" />
                  <img
                    src={photos.building.src}
                    alt={photos.building.alt}
                    loading="eager"
                    width={960}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-muted)]">
                <span className="font-semibold text-[var(--color-ink)]">
                  {photos.building.caption}
                </span>
                <span>Pokuase ACP Ridge • Kwabenya – Accra</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="p-7 rounded-2xl bg-[var(--color-paper)] border border-black/5 space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-flamingo-deep)]">
                  Campus Overview
                </span>
                <h3 className="font-['Manrope'] text-2xl font-bold text-[var(--color-ink)]">
                  A tranquil ridge built for concentrated study.
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Perched above the Pokuase ACP interchange corridor, our multi-level building offers
                  students clean air, panoramic ridgeline views, and a dedicated academic haven far
                  removed from urban distraction.
                </p>
                <div className="pt-2 border-t border-black/10 text-xs text-[var(--color-ink)] space-y-1.5 font-medium">
                  <div>• Multi-storey classroom wings with crest balconies</div>
                  <div>• Integrated science & biology experiment benches</div>
                  <div>• Full-spectrum ICT computer laboratory</div>
                  <div>• Secure gated perimeter with round-the-clock monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MISSION, VISION, AND EDUCATIONAL PHILOSOPHY
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
              <span className="eyebrow">Our Guiding Purpose</span>
              <h2 className="display-l text-[var(--color-ink)]">
                Mission, Vision & Educational Creed.
              </h2>
              <p className="lead text-[var(--color-muted)]">
                We measure our success not merely by examinations passed, but by the intellectual
                stamina and moral compass our scholars carry into Ghanaian society and the world.
              </p>
              <div className="pt-4">
                <Link to="/academics" className="btn btn-primary text-sm font-semibold">
                  <span>Explore Academic Programs</span>
                  <ArrowRight className="w-4 h-4 arrow" />
                </Link>
              </div>

              {/* Student Collaboration Photo */}
              <div className="pt-3">
                <div className="photo photo-zoom rounded-2xl overflow-hidden shadow-sm border border-black/10 aspect-[16/10] bg-black/5 relative">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1663040111191-c585a609fd9c?auto=format&fit=crop&q=60&w=500"
                    alt="Students collaborating and studying together"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[0.62rem] uppercase tracking-wider text-[var(--color-flamingo)] font-bold block">
                      Holistic Mentorship
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      Collaborative learning and peer study circles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Mission Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-black/5 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-flamingo-soft)]/50 text-[var(--color-flamingo-deep)] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-['Manrope'] text-2xl font-bold text-[var(--color-ink)]">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
                  To provide an exceptional, disciplined secondary and remedial education that unlocks
                  individual curiosity, fosters critical reasoning, and empowers students to master the
                  New GES Curriculum and succeed at tertiary level.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-black/5 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-paper-2)] text-[var(--color-ink)] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-['Manrope'] text-2xl font-bold text-[var(--color-ink)]">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
                  To be recognized as a premier Ghanaian educational college renowned for academic
                  rigor, personal transformation, and high WASSCE attainment across scientific,
                  business, and creative disciplines.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[var(--color-ink-2)] text-white space-y-6">
                <h3 className="font-['Manrope'] text-2xl font-bold text-white">
                  Our Educational Creed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[var(--color-muted-on-ink)]">
                  <div className="space-y-1.5">
                    <span className="text-white font-semibold block text-base">
                      1. Academic Independence
                    </span>
                    <p>
                      Teaching students how to think rather than what to memorize, developing self-reliant
                      problem solvers.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-white font-semibold block text-base">
                      2. Empirical Scientific Inquiry
                    </span>
                    <p>
                      Theory backed by practical observation in dedicated science and computer labs.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-white font-semibold block text-base">
                      3. Unwavering Discipline
                    </span>
                    <p>
                      Punctuality, focused preparation, and high moral integrity cultivated daily.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-white font-semibold block text-base">
                      4. Personalized Mentorship
                    </span>
                    <p>
                      No student is left behind; tutoring adapts to the candidate's learning curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEADERSHIP SPOTLIGHT — DR. FLAMINGO L.L. LAWSON
          ========================================================================= */}
      <section className="section-y bg-white border-y border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <span className="eyebrow">Academic Direction</span>
              <h2 className="display-l text-[var(--color-ink)]">
                Meet the Director of Academic Affairs
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
                <p>
                  <strong className="text-[var(--color-ink)] font-semibold">
                    {school.leadership.director.name}
                  </strong>{" "}
                  serves as the Director of Academic Affairs at Flamingo Academic College Ltd. A passionate
                  mathematics, physics, and natural science educator, Dr. Lawson has dedicated decades
                  to demystifying complex scientific concepts for senior high students across Ghana.
                </p>
                <p>
                  His published video lecture series on YouTube has reached tens of thousands of
                  learners, breaking down difficult topics like Moment of Forces, Genetics terminologies,
                  Mole Concepts, and Polynomial factor theorems into clear mathematical keys.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={school.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm font-semibold !py-3"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Dr. Lawson's YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <Link to="/videos" className="btn btn-outline text-sm font-semibold !py-3">
                  <span>View Lecture Gallery</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-panel border border-black/10 aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${school.leadership.director.featuredVideoId}?rel=0&modestbranding=1`}
                  title="Dr. Flamingo L.L. Lawson Address"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 text-center text-xs text-[var(--color-muted)]">
                Dr. Flamingo L.L. Lawson speaking on Academic Direction at Flamingo Academic College
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS FACILITIES ARCHITECTURE
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <span className="eyebrow">The Learning Environment</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Facilities tailored to secondary curriculum needs.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Every space at Flamingo is designed for practical academic engagement, hands-on
              experimentation, and examination focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((fac) => (
              <div
                key={fac.id}
                className="group rounded-2xl bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-lift transition-all duration-300"
              >
                <div className="photo photo-zoom aspect-[16/10] overflow-hidden bg-black/5">
                  <picture>
                    <source srcSet={fac.photo.srcSetWebp} type="image/webp" />
                    <source srcSet={fac.photo.srcSetJpg} type="image/jpeg" />
                    <img
                      src={fac.photo.src}
                      alt={fac.photo.alt}
                      loading="lazy"
                      width={640}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-[var(--color-flamingo-deep)]">
                    {fac.stats}
                  </span>
                  <h3 className="font-['Manrope'] text-2xl font-bold text-[var(--color-ink)]">
                    {fac.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENROLLMENT CTA
          ========================================================================= */}
      <section className="section-y bg-[var(--color-ink)] on-ink text-white">
        <div className="container-x text-center max-w-3xl space-y-6">
          <span className="eyebrow mx-auto text-[var(--color-flamingo)]">Join Our College</span>
          <h2 className="display-l text-white font-['Manrope']">
            Ready to experience educational excellence at Flamingo?
          </h2>
          <p className="lead text-[var(--color-muted-on-ink)]">
            Our admissions office is ready to schedule a campus tour or assist you with admission
            applications for the upcoming term.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/admissions" className="btn btn-accent text-sm font-semibold !py-3.5 !px-8">
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 arrow" />
            </Link>
            <Link to="/contact" className="btn btn-outline text-white border-white/20 text-sm font-semibold !py-3.5 !px-6">
              <span>Contact Campus Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
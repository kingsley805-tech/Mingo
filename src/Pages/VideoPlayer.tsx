import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Calendar,
  User,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { school, photos } from "@/site/school";

interface VideoItem {
  id: number;
  title: string;
  speaker: string;
  position: string;
  date: string;
  youtubeId: string;
  category: "Overview" | "Physics" | "Biology" | "Chemistry" | "Mathematics";
  description: string;
}

export default function VideoPlayer() {
  const lectureVideos: VideoItem[] = [
    {
      id: 1,
      title: "LINEAR INEQUALITIES 2 — Double Inequality Signs",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "October 2024",
      youtubeId: "c8zEtVyAN9U",
      category: "Mathematics",
      description:
        "Comprehensive breakdown of double inequality signs, solving compound inequalities, graphing solution sets on number lines, and examination strategies for WASSCE candidates.",
    },
    {
      id: 2,
      title: "MATTER 2 — Calculating Protons, Electrons, Neutrons & Configurations",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "September 2024",
      youtubeId: "1SuF-GpozCY",
      category: "Chemistry",
      description:
        "Atomic structure decoded: step-by-step methods for calculating subatomic particles, mass numbers, atomic numbers, and drawing electronic configurations according to the New GES Curriculum.",
    },
    {
      id: 3,
      title: "MOTION 3 — Graph of Motion & Kinematics",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "August 2024",
      youtubeId: "zZ0MvONQn64",
      category: "Physics",
      description:
        "Kinematics and motion graphs masterclass: interpreting velocity-time and displacement-time curves, finding uniform acceleration, and calculating area under graphs.",
    },
    {
      id: 4,
      title: "SURD 4 — Radical Equations & Conjugate Simplification",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "July 2024",
      youtubeId: "TZ83usBB0bE",
      category: "Mathematics",
      description:
        "Solving radical equations, isolating roots, squaring techniques, and identifying extraneous solutions in Elective Mathematics for secondary students.",
    },
    {
      id: 5,
      title: "Flamingo Academic College Overview & Campus Tour",
      speaker: "School Administration",
      position: "Flamingo Academic College Ltd",
      date: "December 2024",
      youtubeId: "1uWCNTWMrzw",
      category: "Overview",
      description:
        "A comprehensive visual walkthrough of our Pokuase ACP Ridge campus facilities, laboratory blocks, academic streams, and educational ethos.",
    },
    {
      id: 6,
      title: "MOMENT OF FORCES 1 — Secret Keys Decoded",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "February 2022",
      youtubeId: "0K0LL95tJxA",
      category: "Physics",
      description:
        "Demystifying moment of forces calculations. This masterclass clears confusion surrounding clockwise and anticlockwise turning effects about a pivot.",
    },
    {
      id: 7,
      title: "MOMENT OF FORCES 2 — Secret Keys & Turning Effects",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "February 2022",
      youtubeId: "RNbLVbO_2E0",
      category: "Physics",
      description:
        "Advanced moment of forces calculations, dealing with distributed loads, non-uniform bars, and equilibrium equations for top marks.",
    },
    {
      id: 8,
      title: "GENETICS 1 — Fundamental Terminologies",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "December 2022",
      youtubeId: "Gb-djUuWlOM",
      category: "Biology",
      description:
        "Introduction to heredity, genes, alleles, homozygous vs heterozygous traits, and dominant/recessive expressions.",
    },
    {
      id: 9,
      title: "GENETICS 2 — Monohybrid Crosses & Punnett Squares",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "December 2022",
      youtubeId: "UUPRtpoQXDw",
      category: "Biology",
      description:
        "Step-by-step construction of genetic crosses using Punnett square diagrams to determine phenotypic and genotypic ratios.",
    },
    {
      id: 10,
      title: "GENETICS 3 — Genetic Terminologies & Punnett Crosses",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "December 2022",
      youtubeId: "5B2gHGBoY1Y",
      category: "Biology",
      description:
        "Detailed breakdown of fundamental genetic vocabulary and constructing accurate genetic crosses for WASSCE Biology examinations.",
    },
    {
      id: 11,
      title: "MOLE CONCEPT 1 — Calculating Number of Entities",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "January 2023",
      youtubeId: "81BwQg1Usdc",
      category: "Chemistry",
      description:
        "A foundational Chemistry lesson calculating entities (molecules, ions, and atoms) using Avogadro's constant and molar mass formulas.",
    },
    {
      id: 12,
      title: "POLYNOMIALS 1 — Algebra of Polynomials",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "January 2023",
      youtubeId: "uRt3886thOI",
      category: "Mathematics",
      description:
        "Mastering polynomial algebra: addition, subtraction, long multiplication, and algebraic long division techniques for high school mathematics.",
    },
    {
      id: 13,
      title: "POLYNOMIALS 2 — Functional Notation & The Factor Theorem",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "January 2023",
      youtubeId: "r5tDe2G8lUE",
      category: "Mathematics",
      description:
        "Applying the Remainder Theorem and Factor Theorem to factorize cubic and quartic polynomials and find unknown coefficients.",
    },
    {
      id: 14,
      title: "POLYNOMIALS 3 — Zeros of a Polynomial Function",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "January 2023",
      youtubeId: "lP4MACmiQZE",
      category: "Mathematics",
      description:
        "Finding real and repeated roots of polynomials, sketching polynomial curves, and solving higher-degree equations.",
    },
    {
      id: 15,
      title: "QUADRATIC TRINOMIALS 1 — Decode Tricks (Solve in 30 Seconds)",
      speaker: "Dr. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "February 2022",
      youtubeId: "pCZzdevlJhw",
      category: "Mathematics",
      description:
        "Quick mental factorization tricks for quadratic trinomials without long grouping. Solve WASSCE quadratic objective questions in seconds.",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<VideoItem>(lectureVideos[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Mathematics", "Physics", "Chemistry", "Biology", "Overview"];

  const filteredVideos =
    selectedCategory === "All"
      ? lectureVideos
      : lectureVideos.filter((v) => v.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* =========================================================================
          HERO SECTION — Editorial Video Archive with Media Showcase
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-10 bg-[var(--color-paper)] border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Video Broadcast Info */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-black/5 shadow-xs text-xs font-semibold text-[var(--color-ink)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-flamingo-deep)]" />
                <span>Dr. Flamingo L.L. Lawson Masterclass Archive</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-[var(--color-ink)] font-['Fraunces'] font-normal leading-[1.04]">
                STEM masterclasses &{" "}
                <span className="italic-accent">campus video dispatches</span>.
              </h1>

              <p className="lead text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Explore authentic video lessons and academic masterclasses hosted by Dr. Flamingo L.L. Lawson,
                Director of Academic Affairs. These lessons provide high school candidates across Ghana
                with clear conceptual keys to mastering WASSCE mathematics, physics, and chemistry.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--color-ink)]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  Mathematics & Calculus
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  Integrated Science & Chemistry
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  Physics & Kinematics
                </span>
              </div>
            </div>

            {/* Right Column: Active Video Quick Card */}
            <div className="lg:col-span-5 relative">
              <div className="photo photo-zoom rounded-2xl sm:rounded-3xl overflow-hidden shadow-panel border border-black/10 w-full h-[250px] sm:h-[300px] lg:h-[330px] xl:h-[350px] bg-black/5 relative group">
                <picture className="w-full h-full">
                  <source srcSet={photos.building.srcSetWebp} type="image/webp" />
                  <source srcSet={photos.building.srcSetJpg} type="image/jpeg" />
                  <img
                    src={photos.building.src}
                    alt="Flamingo Academic College Campus & Masterclass"
                    loading="eager"
                    width={640}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/95 via-black/35 to-transparent pointer-events-none" />

                {/* Instant Play Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-flamingo-deep)] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5 fill-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-[var(--color-ink)] backdrop-blur-xs">
                    Watch Below in Cinema Mode &darr;
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[0.68rem] uppercase tracking-widest text-[var(--color-flamingo)] font-bold block mb-1">
                    Currently Featured
                  </span>
                  <h3 className="font-['Fraunces'] text-lg font-semibold text-white line-clamp-2">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-white/75 mt-0.5">
                    {activeVideo.speaker} • {activeVideo.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED CINEMA PLAYER
          ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[var(--color-ink)] on-ink text-white">
        <div className="container-x">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Active Video Screen */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black">
              <iframe
                key={activeVideo.youtubeId}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                title={activeVideo.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Metadata Panel */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-flamingo)] text-[var(--color-ink)] text-xs font-bold uppercase tracking-wider">
                    {activeVideo.category}
                  </span>
                  <span className="text-xs text-[var(--color-muted-on-ink)] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeVideo.date}
                  </span>
                </div>

                <h2 className="font-['Fraunces'] text-2xl sm:text-3xl font-bold text-white">
                  {activeVideo.title}
                </h2>

                <p className="text-sm sm:text-base text-[var(--color-muted-on-ink)] leading-relaxed">
                  {activeVideo.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-white/70">
                  <User className="w-3.5 h-3.5 text-[var(--color-flamingo)]" />
                  <span>
                    Instructor: <strong className="text-white">{activeVideo.speaker}</strong> •{" "}
                    {activeVideo.position}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a
                  href={`https://youtu.be/${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-xs font-semibold !py-3 !px-5"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/admissions"
                  className="btn btn-outline text-white border-white/20 text-xs font-semibold !py-3 !px-5"
                >
                  Enroll at Flamingo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LECTURE REPOSITORY ARCHIVE
          ========================================================================= */}
      <section className="section-y bg-white border-b border-black/5">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow">Lesson Library</span>
              <h2 className="display-l text-[var(--color-ink)]">
                Select a masterclass to play above.
              </h2>
              <p className="lead text-[var(--color-muted)]">
                {lectureVideos.length} published video lessons taught by Dr. Flamingo L.L. Lawson across Physics, Chemistry,
                Biology, and Mathematics.
              </p>
            </div>

            <a
              href={school.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-u text-sm font-semibold flex-shrink-0"
            >
              <span>Visit YouTube Channel ({school.director?.name || "Dr. Lawson"})</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-black/5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[var(--color-ink)] text-white shadow-sm"
                    : "bg-[var(--color-paper)] text-[var(--color-ink)] hover:bg-black/5 border border-black/5"
                }`}
              >
                {cat}
                <span className="ml-1.5 opacity-60 text-[0.65rem]">
                  ({cat === "All" ? lectureVideos.length : lectureVideos.filter((v) => v.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => {
              const isPlaying = activeVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  onClick={() => {
                    setActiveVideo(video);
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className={`group rounded-2xl border p-5 flex flex-col justify-between space-y-4 cursor-pointer transition-all ${
                    isPlaying
                      ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)] shadow-panel ring-2 ring-[var(--color-flamingo)]"
                      : "bg-[var(--color-paper)]/70 hover:bg-white border-black/5 hover:border-black/15 hover:shadow-lift text-[var(--color-ink)]"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Video Thumbnail Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black/10 group/thumb">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-flamingo-deep)] flex items-center justify-center text-white shadow-md group-hover/thumb:scale-110 transition-transform">
                          <Play className="w-4 h-4 ml-0.5 fill-white" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[0.65rem] font-bold text-white">
                        YouTube
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                          isPlaying
                            ? "bg-[var(--color-flamingo)] text-[var(--color-ink)]"
                            : "bg-white text-[var(--color-flamingo-deep)] border border-black/5"
                        }`}
                      >
                        {video.category}
                      </span>
                      <span
                        className={`text-xs ${
                          isPlaying ? "text-white/60" : "text-[var(--color-muted)]"
                        }`}
                      >
                        {video.date}
                      </span>
                    </div>

                    <h3
                      className={`font-['Fraunces'] text-base sm:text-lg font-bold leading-snug line-clamp-2 ${
                        isPlaying ? "text-white" : "text-[var(--color-ink)]"
                      }`}
                    >
                      {video.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed line-clamp-2 ${
                        isPlaying ? "text-white/80" : "text-[var(--color-muted)]"
                      }`}
                    >
                      {video.description}
                    </p>
                  </div>

                  <div
                    className={`pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                      isPlaying
                        ? "border-white/10 text-[var(--color-flamingo)]"
                        : "border-black/5 text-[var(--color-ink)]"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {isPlaying ? "Currently Playing" : "Play Lesson"}
                    </span>
                    <span className="opacity-75">{video.speaker}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          YOUTUBE CHANNEL CTA BANNER
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-sm text-center max-w-3xl mx-auto space-y-6">
            <span className="eyebrow mx-auto text-[var(--color-flamingo-deep)]">
              Digital Learning Channel
            </span>
            <h2 className="display-l text-[var(--color-ink)]">
              Follow Dr. Flamingo L.L. Lawson on YouTube
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Subscribe to stay updated with newly uploaded educational series, past-question
              demonstrations, and examination tips for Ghanaian high school learners.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={school.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm font-semibold !py-3.5 !px-8 shadow-sm"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link to="/contact" className="btn btn-outline text-sm font-semibold !py-3.5 !px-6">
                <span>Inquire About Classes</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

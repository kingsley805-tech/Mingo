import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Compass,
  Trophy,
  Palette,
  Lightbulb,
  Heart,
  CheckCircle2,
  Play,
} from "lucide-react";
import { school, facilities, photos } from "@/site/school";
import VideoModal from "@/components/VideoModal";

export default function CampusLife() {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeId: string;
    title: string;
  } | null>(null);
  const [heroMedia, setHeroMedia] = useState<"photo" | "video">("photo");

  const studentSocieties = [
    {
      category: "Academic & Science",
      icon: Lightbulb,
      title: "Science & ICT Explorers Club",
      image:
        "https://plus.unsplash.com/premium_photo-1664301072254-280c4da68a8d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
      description:
        "Practical laboratory sessions, coding challenges, and science symposiums where students test hypotheses beyond examination syllabi.",
      activities: ["Weekly Lab Experiments", "Coding & Digital Literacy", "Inter-Class Science Quizzes"],
    },
    {
      category: "Leadership & Debate",
      icon: Users,
      title: "Speech, Debate & Model UN",
      image:
        "https://images.unsplash.com/photo-1639436926668-2f8b4f32e15a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Cultivating articulate, persuasive public speakers and critical thinkers equipped to debate contemporary Ghanaian and global issues.",
      activities: ["Parliamentary Debates", "Model UN Assemblies", "Public Speaking Coaching"],
    },
    {
      category: "Sports & Athletics",
      icon: Trophy,
      title: "Campus Athletics & Fitness",
      image:
        "https://images.unsplash.com/photo-1630347944760-4719d7196155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Physical health and team camaraderie through soccer, basketball, volleyball, and inter-house athletic meets on campus grounds.",
      activities: ["Inter-House Sports Competitions", "Track & Field Days", "Fitness & Wellness Drills"],
    },
    {
      category: "Arts & Culture",
      icon: Palette,
      title: "Creative Arts & Cultural Troupe",
      image:
        "https://images.unsplash.com/photo-1603569225131-3b19c1112438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Fostering aesthetic expression through visual arts, drama, choral music, and Ghanaian cultural heritage performances.",
      activities: ["Art & Design Exhibitions", "Drama & Literary Theatre", "Cultural Celebrations"],
    },
    {
      category: "Civic & Moral Service",
      icon: Heart,
      title: "Community Outreach & Peer Mentors",
      image:
        "https://plus.unsplash.com/premium_photo-1683135216954-ab7130031b44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Instilling civic responsibility and moral integrity through community clean-ups, peer tutoring for remedial learners, and social outreach.",
      activities: ["Kwabenya Community Clean-Ups", "Peer Study Circles", "Leadership Seminars"],
    },
    {
      category: "Spiritual & Fellowship",
      icon: Compass,
      title: "Scripture Union & Moral Guidance",
      image:
        "https://images.unsplash.com/photo-1749026057600-24a17d11a7dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Providing non-denominational spiritual nourishment, character formation, and pastoral counseling for holistic student wellbeing.",
      activities: ["Weekly Devotionals", "Character Mentorship Sessions", "Moral Guidance Forums"],
    },
  ];

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
          HERO SECTION — Editorial Campus Life Overview with Campus Gate Media
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-10 bg-[var(--color-paper)] border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Student Life */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="eyebrow">The Student Experience</span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-[var(--color-ink)] font-['Fraunces'] font-normal leading-[1.04]">
                Where intellectual growth meets{" "}
                <span className="italic-accent">vibrant community</span>.
              </h1>
              <p className="lead text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                Life at Flamingo Academic College extends far beyond lecture halls and textbooks.
                On our Pokuase ACP Ridge campus, students build lifelong friendships, discover creative
                passions, compete in athletics, and develop the disciplined character needed to lead.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[var(--color-ink)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  Gated & Secure Campus
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[var(--color-ink)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  6 Student Societies
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[var(--color-ink)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                  Holistic Development
                </span>
              </div>
            </div>

            {/* Right Column: Campus Gate Image & Video Masterclass */}
            <div className="lg:col-span-5 relative">
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
                      youtubeId: "1uWCNTWMrzw",
                      title: "Flamingo Academic College Campus Overview Tour",
                    })
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-flamingo-deep)] hover:underline"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>YouTube Tour</span>
                </button>
              </div>

              <div className="photo photo-zoom rounded-2xl sm:rounded-3xl overflow-hidden shadow-panel border border-black/10 w-full h-[250px] sm:h-[300px] lg:h-[330px] xl:h-[350px] bg-black/5 relative group">
                {heroMedia === "video" ? (
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <video
                      autoPlay
                      controls
                      playsInline
                      muted
                      loop
                      className="w-full h-full object-cover"
                      src="https://www.pexels.com/download/video/5957474/"
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
                      onClick={() => setHeroMedia("video")}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-3 px-4 py-3 rounded-full bg-white/95 hover:bg-white text-[var(--color-ink)] shadow-2xl backdrop-blur-md transition-all hover:scale-105 group/play cursor-pointer border border-black/10"
                      aria-label="Play Campus Video Tour"
                    >
                      <div className="w-9 h-9 rounded-full bg-[var(--color-flamingo-deep)] flex items-center justify-center text-white shadow-md group-hover/play:scale-110 transition-transform">
                        <Play className="w-4 h-4 ml-0.5 fill-white" />
                      </div>
                      <div className="text-left pr-2">
                        <span className="text-[0.62rem] uppercase tracking-wider text-[var(--color-muted)] font-bold block">
                          Campus Video
                        </span>
                        <span className="text-xs font-bold text-[var(--color-ink)] block">
                          Watch Video &rarr;
                        </span>
                      </div>
                    </button>

                    <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                      <span className="text-[0.68rem] uppercase tracking-widest text-[var(--color-flamingo)] font-bold block mb-1">
                        Pokuase ACP Ridge
                      </span>
                      <h3 className="font-['Fraunces'] text-lg font-semibold text-white">
                        Campus Gate & Security
                      </h3>
                      <p className="text-xs text-white/75 mt-0.5 line-clamp-2">
                        A safe, nurturing environment fostering intellectual rigor and lifelong friendships.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS FACILITIES TOUR WITH REAL PHOTOS
          ========================================================================= */}
      <section className="section-y bg-white border-b border-black/5">
        <div className="container-x">
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <span className="eyebrow">Our Learning Environment</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Spaces engineered for academic focus and fellowship.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Explore authentic photography of our campus facilities where daily student life unfolds
              on Pokuase ACP Ridge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((fac) => (
              <div
                key={fac.id}
                className="group rounded-2xl bg-[var(--color-paper)] border border-black/5 overflow-hidden shadow-xs hover:shadow-lift transition-all"
              >
                <div className="photo photo-zoom aspect-[16/10] overflow-hidden bg-black/5">
                  <picture>
                    <source srcSet={fac.photo.srcSetWebp} type="image/webp" />
                    <source srcSet={fac.photo.srcSetJpg} type="image/jpeg" />
                    <img
                      src={fac.photo.src}
                      alt={fac.photo.alt}
                      loading="lazy"
                      width={480}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="p-6 space-y-2.5">
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-[var(--color-flamingo-deep)]">
                    {fac.stats}
                  </span>
                  <h3 className="font-['Fraunces'] text-xl font-bold text-[var(--color-ink)]">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLUBS, SOCIETIES & EXTRACURRICULAR LIFE
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <span className="eyebrow">Co-Curricular Clubs</span>
            <h2 className="display-l text-[var(--color-ink)]">
              Student societies and leadership development.
            </h2>
            <p className="lead text-[var(--color-muted)]">
              Active clubs and co-curricular programs complement the New GES Curriculum, providing
              practical platforms for teamwork, public presentation, and civic responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {studentSocieties.map((club) => {
              const Icon = club.icon;
              return (
                <div
                  key={club.title}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-lift transition-all flex flex-col justify-between space-y-4 overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Club Photography */}
                    <div className="photo photo-zoom aspect-[16/10] overflow-hidden rounded-xl bg-black/5 border border-black/5 relative">
                      <img
                        src={club.image}
                        alt={club.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-md border border-black/10 flex items-center justify-center text-[var(--color-flamingo-deep)] shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[0.65rem] font-semibold">
                        {club.category}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-['Fraunces'] text-xl font-bold text-[var(--color-ink)]">
                        {club.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-1">
                        {club.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5 space-y-1.5">
                    <span className="text-[0.7rem] uppercase tracking-wider font-bold text-[var(--color-muted)] block">
                      Core Activities
                    </span>
                    <ul className="text-xs text-[var(--color-ink)] space-y-1 font-medium">
                      {club.activities.map((act, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)] flex-shrink-0" />
                          <span>{act}</span>
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
          STUDENT LEADERSHIP SPOTLIGHT & TESTIMONIAL
          ========================================================================= */}
      <section className="section-y bg-white border-b border-black/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="photo rounded-2xl overflow-hidden shadow-panel border border-black/10 aspect-[4/3] bg-black/5 relative group">
                <img
                  src="https://media.istockphoto.com/id/1633204939/photo/portrait-of-a-serious-african-american-student-sitting-on-the-floor-and-studying-from-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=yy93j-GRJZ2uEHgO1uP1v5rzLQlAVJdi7G3qVuIi3Ok="
                  alt="Ephraim Sam Addae - Senior Class President"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-bold">Ephraim Sam Addae</div>
                  <div className="text-[0.68rem] text-[var(--color-flamingo)] uppercase tracking-wider font-semibold">
                    Senior Class President
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="eyebrow">Student Voice & Leadership</span>
              <h3 className="font-['Fraunces'] text-2xl sm:text-3xl text-[var(--color-ink)] font-normal leading-tight">
                "Flamingo isn't just a school—it's a community where I've discovered my passions,
                built lasting character, and gained the academic discipline to excel in WASSCE."
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                From morning moral assemblies to intense afternoon revision clinics and competitive sports,
                Flamingo empowers student leaders to take initiative, mentor junior peers, and build
                lifelong self-belief.
              </p>
              <div className="pt-2">
                <Link to="/admissions" className="link-u text-sm font-semibold">
                  <span>Learn How to Join Our Student Community</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          A TYPICAL DAY AT FLAMINGO ACADEMIC COLLEGE
          ========================================================================= */}
      <section className="section-y on-ink bg-[var(--color-ink)] text-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow text-[var(--color-flamingo)]">Daily Rhythm</span>
              <h2 className="display-l text-white font-['Fraunces']">
                A structured schedule for academic focus.
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-muted-on-ink)] leading-relaxed">
                Discipline and time management are cornerstones of the Flamingo philosophy. Our daily
                timetable balances focused core instructional periods with laboratory practicals,
                guided library study, and afternoon co-curricular engagements.
              </p>
              <div className="pt-2">
                <Link to="/admissions" className="btn btn-accent text-sm font-semibold !py-3.5 !px-8">
                  <span>Inquire About Enrollment</span>
                  <ArrowRight className="w-4 h-4 arrow" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  time: "07:30 AM – 08:00 AM",
                  event: "Morning Assembly & Moral Devotion",
                  desc: "College gather for announcements, national anthem, and character reflection.",
                },
                {
                  time: "08:00 AM – 10:30 AM",
                  event: "Core Academic Instruction",
                  desc: "Morning blocks dedicated to Core Mathematics, Integrated Science, and English Language.",
                },
                {
                  time: "10:30 AM – 11:00 AM",
                  event: "Mid-Morning Break & Refreshment",
                  desc: "Social time in the campus courtyard and cafeteria.",
                },
                {
                  time: "11:00 AM – 01:30 PM",
                  event: "Specialized Elective Tracks & Lab Practicals",
                  desc: "General Science laboratory experiments, Business Studies, and Visual Arts studio work.",
                },
                {
                  time: "01:30 PM – 02:15 PM",
                  event: "Lunch & Informal Study Circles",
                  desc: "Students confer with subject tutors and group study partners.",
                },
                {
                  time: "02:15 PM – 04:00 PM",
                  event: "WASSCE Past Question Drills & Remedial Clinics",
                  desc: "Timed past paper drills, examiner critiques, and small-group tutoring.",
                },
                {
                  time: "04:00 PM – 05:00 PM",
                  event: "Co-Curricular Activities & Sports",
                  desc: "Speech and debate, sports recreation, and student leadership committees.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/10 transition-colors"
                >
                  <div className="space-y-0.5">
                    <span className="font-['Fraunces'] text-lg font-bold text-white block">
                      {item.event}
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--color-muted-on-ink)]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-flamingo)] flex-shrink-0">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS VISIT & ADMISSION CTA
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x text-center max-w-3xl space-y-6">
          <span className="eyebrow mx-auto">Experience Campus Firsthand</span>
          <h2 className="display-l text-[var(--color-ink)]">
            Schedule a visit to Pokuase ACP Ridge.
          </h2>
          <p className="lead text-[var(--color-muted)]">
            Parents and prospective candidates are welcome to tour our academic blocks, inspect our
            laboratories, and meet our academic counseling faculty in person.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/contact" className="btn btn-primary text-sm font-semibold !py-3.5 !px-8">
              <span>Book a Campus Visit</span>
              <ArrowRight className="w-4 h-4 arrow" />
            </Link>
            <a
              href={school.phoneHref}
              className="btn btn-outline text-sm font-semibold !py-3.5 !px-6"
            >
              <span>Call Campus Desk: {school.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
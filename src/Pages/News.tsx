import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  ArrowRight,
  Search,
  BookOpen,
  X,
  CheckCircle2,
  Send,
} from "lucide-react";
import { photos } from "@/site/school";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: "admissions" | "academic" | "achievements" | "community";
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
}

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    { id: "all", label: "All Dispatches" },
    { id: "admissions", label: "Admissions & Registration" },
    { id: "academic", label: "Academic Programs" },
    { id: "achievements", label: "Achievements & Results" },
    { id: "community", label: "Campus & Community" },
  ];

  const articles: NewsArticle[] = [
    {
      id: "wassce-remedials-2026",
      title: "WASSCE Remedials 2026 Cohort Registration Now in Progress",
      excerpt:
        "Official registration is underway for both WASSCE School (May/June) and Private (Nov/Dec) candidates seeking grade improvement and university qualification.",
      date: "January 15, 2025",
      author: "Academic Affairs Directorate",
      category: "admissions",
      readTime: "3 min read",
      image: photos.lectureHall.src,
      featured: true,
      content: [
        "Flamingo Academic College Ltd has opened enrollment for the 2026 WASSCE Remedial Programme at our Pokuase ACP Ridge campus in Kwabenya.",
        "The remedial program is specifically engineered for candidates who need to re-sit core or elective subjects to meet university cut-off points. Led by experienced subject masters, each course targets verified syllabus difficulty areas through diagnostic testing, structured past-question decodes, and weekly mock examinations.",
        "Both WASSCE School candidates and WASSCE Private (Nov/Dec) candidates are fully accommodated, with in-house WAEC biometric registration services to guarantee accurate subject entries and index verification.",
        "Prospective candidates are invited to visit the campus admissions desk Monday through Saturday for academic counseling and syllabus placement.",
      ],
    },
    {
      id: "shs-vacation-classes-ges",
      title: "SHS Vacation Classes Based on New GES Curriculum Underway",
      excerpt:
        "Intensive holiday classes for SHS 1, 2, and 3 students are in session, giving learners a decisive head start on upcoming term syllabi.",
      date: "January 10, 2025",
      author: "Curriculum Department",
      category: "academic",
      readTime: "3 min read",
      image: photos.ictLab.src,
      content: [
        "Flamingo Academic College has commenced its specialized SHS Vacation Classes structured strictly around the New Ghana Education Service (GES) Curriculum.",
        "Vacation classes are designed to build academic independence. Rather than resting passively during term breaks, students use the holiday window to master difficult upcoming concepts in Core and Elective Mathematics, Integrated Science, Physics, Chemistry, and Financial Accounting.",
        "Classes run daily with small student-to-teacher ratios to ensure every learner receives personalized attention and immediate feedback on exercises.",
      ],
    },
    {
      id: "pre-shs-bece-graduates",
      title: "Pre-SHS Preparatory Classes Available for BECE Graduates",
      excerpt:
        "Bridging the academic transition from Junior High School to Senior High School right after BECE examinations.",
      date: "January 20, 2025",
      author: "Admissions Directorate",
      category: "academic",
      readTime: "2 min read",
      image: photos.scienceLab.src,
      content: [
        "To ease the challenging transition from Basic Education to Senior High School, Flamingo Academic College offers Pre-SHS classes immediately following the BECE examinations.",
        "The bridge course equips graduates with high school study habits, time-management techniques, calculus foundations, and scientific vocabulary before their formal senior high school resumption.",
        "Students also receive academic track orientation to help them select appropriate elective combinations (General Science, Business, General Arts, or Visual Arts).",
      ],
    },
    {
      id: "waec-biometric-registration",
      title: "Complete WAEC Biometric Registration Services on Campus",
      excerpt:
        "Approved registration point for WASSCE School, WASSCE Private, BECE Private, and GBCE examination candidates.",
      date: "January 18, 2025",
      author: "Student Services",
      category: "admissions",
      readTime: "3 min read",
      image: photos.gate.src,
      content: [
        "Flamingo Academic College Ltd confirms that all forms of official WAEC biometric examination registrations are available at our Pokuase ACP Ridge campus center.",
        "Our registration suite is equipped with certified biometric fingerprint capture stations, high-resolution cameras, and direct portal synchronization for: WASSCE School (May/June), WASSCE Private (Nov/Dec), BECE Private, and the Advanced General Business Certificate Examination (GBCE).",
        "Trained registration specialists assist candidates with correct subject code selection, photograph compliance, and confirmation printouts, avoiding costly administrative errors.",
      ],
    },
    {
      id: "class-of-2024-results",
      title: "Class of 2024 Achieves 90% Tertiary Acceptance Rate",
      excerpt:
        "Graduating cohort sets strong academic benchmark with placements in top state universities across Ghana.",
      date: "December 5, 2024",
      author: "Guidance & Counseling Department",
      category: "achievements",
      readTime: "4 min read",
      image: photos.building.src,
      content: [
        "The Guidance & Counseling Department is delighted to report that 90% of our Class of 2024 graduating students have gained admissions into Ghanaian tertiary institutions.",
        "Placements were secured across premier institutions including the University of Ghana (Legon), Kwame Nkrumah University of Science and Technology (KNUST), and the University of Cape Coast (UCC), with several candidates gaining merit-based scholarship consideration.",
        "This achievement reflects our faculty's dedication to continuous assessment, rigorous mock examinations, and individualized academic mentoring.",
      ],
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === "all" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.content.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = articles.find((a) => a.featured) || articles[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="space-y-0">
      {/* =========================================================================
          HERO SECTION — Editorial Newsroom
          ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[var(--color-paper)] border-b border-black/5">
        <div className="container-x">
          <div className="max-w-4xl space-y-6">
            <span className="eyebrow">Campus Dispatches & Notices</span>
            <h1 className="display-xl text-[var(--color-ink)] font-['Manrope'] font-normal leading-[0.98]">
              News, academic bulletins &{" "}
              <span className="italic-accent">official announcements</span>.
            </h1>
            <p className="lead text-lg sm:text-2xl text-[var(--color-muted)] max-w-3xl leading-relaxed">
              Stay informed with official notices, intake deadlines, examination dates, and academic
              milestones from Flamingo Academic College Ltd on Pokuase ACP Ridge.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED ANNOUNCEMENT ARTICLE
          ========================================================================= */}
      <section className="bg-white border-b border-black/5 py-12 lg:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div
                className="photo photo-zoom rounded-3xl overflow-hidden aspect-[16/10] border border-black/10 shadow-panel bg-black/5 cursor-pointer"
                onClick={() => setSelectedArticle(featured)}
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[var(--color-flamingo-soft)] text-[var(--color-flamingo-deep)] text-xs font-bold uppercase tracking-wider">
                  Featured Notice
                </span>
                <span className="text-xs text-[var(--color-muted)] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
              </div>

              <h2
                onClick={() => setSelectedArticle(featured)}
                className="font-['Manrope'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-ink)] hover:text-[var(--color-flamingo-deep)] transition-colors cursor-pointer leading-tight"
              >
                {featured.title}
              </h2>

              <p className="text-base text-[var(--color-muted)] leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-black/10">
                <span className="text-xs text-[var(--color-muted)]">
                  By {featured.author} • {featured.readTime}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(featured)}
                  className="link-u text-sm font-semibold text-[var(--color-ink)]"
                >
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEARCH & CATEGORY FILTERS
          ========================================================================= */}
      <section className="py-8 bg-[var(--color-paper-2)]/60 border-b border-black/5">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = selectedCategory === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      active
                        ? "bg-[var(--color-ink)] text-white shadow-xs"
                        : "bg-white text-[var(--color-ink)] border border-black/10 hover:border-black/30"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles & notices..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-black/10 text-xs text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-ink)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEWS & NOTICES GRID
          ========================================================================= */}
      <section className="section-y bg-[var(--color-paper)]">
        <div className="container-x">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <BookOpen className="w-12 h-12 text-[var(--color-muted)] mx-auto opacity-50" />
              <h3 className="font-['Manrope'] text-2xl font-bold text-[var(--color-ink)]">
                No matching articles found
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Try adjusting your search criteria or switch back to "All Dispatches".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="btn btn-outline text-xs font-semibold !py-2 !px-4 mt-2"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="group rounded-2xl bg-white border border-black/5 overflow-hidden shadow-xs hover:shadow-lift transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="photo photo-zoom aspect-[16/10] overflow-hidden bg-black/5">
                      <img
                        src={art.image}
                        alt={art.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
                        <span className="uppercase tracking-wider font-semibold text-[var(--color-flamingo-deep)]">
                          {art.category}
                        </span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-['Manrope'] text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-flamingo-deep)] transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-muted)] line-clamp-3 leading-relaxed">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-black/5 mt-4 flex items-center justify-between text-xs text-[var(--color-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="font-semibold text-[var(--color-ink)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          NEWSLETTER & ADMISSIONS NOTIFICATIONS
          ========================================================================= */}
      <section className="section-y on-ink bg-[var(--color-ink)] text-white">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="eyebrow mx-auto text-[var(--color-flamingo)]">
              Stay Connected
            </span>
            <h2 className="display-l text-white font-['Manrope']">
              Subscribe to campus updates and intake bulletins.
            </h2>
            <p className="lead text-[var(--color-muted-on-ink)]">
              Receive timely notifications about WASSCE timetable releases, vacation class schedules,
              and academic events at Flamingo Academic College Ltd.
            </p>

            {newsletterSubscribed ? (
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-flamingo)]" />
                <span className="text-sm font-semibold">
                  Thank you! You are now subscribed to Flamingo Academic College dispatches.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-md mx-auto pt-2"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter parent or student email..."
                  className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[var(--color-flamingo)] flex-1"
                />
                <button type="submit" className="btn btn-accent text-sm font-semibold !py-3 !px-6">
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MODAL READING DIALOG FOR FULL ARTICLE
          ========================================================================= */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-black/10 shadow-2xl relative my-auto">
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-black/10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-flamingo-deep)]">
                {selectedArticle.category} • {selectedArticle.readTime}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full hover:bg-black/5 text-[var(--color-ink)] transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Article Content */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="photo rounded-2xl overflow-hidden aspect-[16/9] bg-black/5">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedArticle.date}
                  </span>
                  <span>•</span>
                  <span>By {selectedArticle.author}</span>
                </div>

                <h2
                  id="article-modal-title"
                  className="font-['Manrope'] text-2xl sm:text-3xl font-bold text-[var(--color-ink)] leading-tight"
                >
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="prose-article space-y-4 pt-4 border-t border-black/10">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Inquiry CTA inside article */}
              <div className="pt-8 mt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[var(--color-paper)] p-6 rounded-2xl">
                <div>
                  <h4 className="font-['Manrope'] text-lg font-bold text-[var(--color-ink)]">
                    Questions about this announcement?
                  </h4>
                  <p className="text-xs text-[var(--color-muted)]">
                    Contact our admissions desk or visit our Pokuase ACP Ridge campus.
                  </p>
                </div>
                <Link
                  to="/admissions"
                  onClick={() => setSelectedArticle(null)}
                  className="btn btn-primary text-xs font-semibold !py-2.5 !px-5 whitespace-nowrap"
                >
                  Inquire Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

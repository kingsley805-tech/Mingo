import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { school, crest, navLinks } from "./site/school";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll position for elevated header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-flamingo)] selection:text-[var(--color-ink)]">
      {/* Top Banner: Verified Campus Dispatch */}
      <aside
        aria-label="Campus alert and announcements"
        className="bg-[var(--color-ink-2)] text-[var(--color-paper)] text-xs border-b border-white/10 hidden md:block"
      >
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[var(--color-flamingo)] font-semibold uppercase tracking-wider text-[0.7rem]">
              <GraduationCap className="w-3.5 h-3.5 text-[var(--color-flamingo)]" aria-hidden="true" />
              Admissions 2026/2027
            </span>
            <span className="text-white/80">
              SHS & WASSCE Remedials Registration in progress at Pokuase ACP Ridge
            </span>
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <a
              href={school.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-flamingo)]" aria-hidden="true" />
              <span>{school.phoneDisplay}</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={school.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>WhatsApp Inquiries</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={school.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--color-flamingo)] transition-colors text-white font-medium"
            >
              <span>Student Portal</span>
              <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>

      {/* Primary Site Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#faf6ef]/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-black/5 py-3"
            : "bg-[var(--color-paper)] border-b border-black/5 py-4.5"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          {/* Brand Identity with Authentic Crest */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-flamingo-deep)] rounded-lg p-1 -m-1"
            aria-label="Flamingo Academic College Ltd - Return to Homepage"
          >
            <div className="relative w-11 h-13 sm:w-12 sm:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <picture>
                <source srcSet={crest.webp} type="image/webp" />
                <img
                  src={crest.src}
                  alt="College Crest"
                  width={48}
                  height={56}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </picture>
            </div>
            <div className="flex flex-col">
              <span className="font-['Fraunces'] text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-ink)] leading-tight group-hover:text-[var(--color-flamingo-deep)] transition-colors">
                Flamingo
              </span>
              <span className="text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.16em] uppercase text-[var(--color-muted)] -mt-0.5">
                Academic College Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-[0.92rem] font-medium"
          >
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2 rounded-full transition-all duration-200 ${
                    active
                      ? "text-[var(--color-ink)] font-semibold bg-black/5"
                      : "text-[var(--color-ink)]/75 hover:text-[var(--color-ink)] hover:bg-black/5"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--color-flamingo-deep)] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={school.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-flamingo-deep)] transition-colors px-3 py-2"
            >
              Portal Login
            </a>
            <Link
              to="/admissions"
              className="btn btn-primary text-xs sm:text-sm font-semibold !py-2.5 !px-5 shadow-sm hover:shadow"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 arrow" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[var(--color-ink)] hover:bg-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-flamingo-deep)]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation menu"
          className="fixed inset-0 top-[65px] z-50 bg-[var(--color-paper)]/98 backdrop-blur-xl flex flex-col justify-between overflow-y-auto px-6 py-8 border-t border-black/5 animate-fade"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/5">
              <span className="text-xs uppercase tracking-widest text-[var(--color-muted)] font-semibold">
                Navigation
              </span>
              <span className="text-xs text-[var(--color-muted)]">
                Kwabenya – Pokuase ACP Ridge
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-['Fraunces'] text-2xl transition-colors ${
                      active
                        ? "text-[var(--color-flamingo-deep)] bg-[var(--color-flamingo-soft)]/30 font-semibold"
                        : "text-[var(--color-ink)] hover:bg-black/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 opacity-40" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Footer & Quick Actions */}
          <div className="pt-8 border-t border-black/10 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/admissions"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary text-center justify-center !py-3 text-sm"
              >
                Apply for Admission
              </Link>
              <a
                href={school.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-center justify-center !py-3 text-sm"
              >
                Student Portal
              </a>
            </div>

            <div className="space-y-2 text-xs text-[var(--color-muted)] pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                <a href={school.phoneHref} className="hover:underline font-medium">
                  {school.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-flamingo-deep)]" />
                <span>Pokuase ACP Ridge, Kwabenya, Accra</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>

      {/* Primary Site Footer — Editorial Aubergine Architecture */}
      <footer className="on-ink bg-[var(--color-ink)] text-[var(--color-paper)] pt-18 pb-12 border-t border-white/10 relative overflow-hidden">
        {/* Subtle decorative college crest watermark */}
        <div
          className="absolute -right-16 -bottom-16 w-96 h-96 opacity-[0.035] pointer-events-none select-none"
          aria-hidden="true"
        >
          <img src={crest.src} alt="" className="w-full h-full object-contain filter invert" />
        </div>

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/10">
            {/* Identity & Institution Summary */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-14 flex-shrink-0">
                  <img
                    src={crest.src}
                    alt="Flamingo College Crest"
                    width={48}
                    height={56}
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
                <div>
                  <h2 className="font-['Fraunces'] text-2xl font-bold text-white tracking-tight leading-tight">
                    Flamingo
                  </h2>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-flamingo)] font-semibold">
                    Academic College Ltd
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-muted-on-ink)] leading-relaxed max-w-sm">
                Shaping bright minds, inspiring futures. A forward-thinking Ghanaian educational
                institution dedicated to academic independence, character formation, and
                comprehensive secondary preparation on the Pokuase ACP Ridge.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--color-flamingo)]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Approved WAEC Biometric Centre</span>
                </div>
              </div>
            </div>

            {/* Academic Offerings */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-['Fraunces'] text-lg font-semibold text-white tracking-tight">
                Academic Programs
              </h3>
              <ul className="space-y-2.5 text-sm text-[var(--color-muted-on-ink)]">
                <li>
                  <Link to="/academics" className="hover:text-[var(--color-flamingo)] transition-colors">
                    Senior High School (SHS 1 – 3)
                  </Link>
                </li>
                <li>
                  <Link to="/academics" className="hover:text-[var(--color-flamingo)] transition-colors">
                    WASSCE Remedials (School & Private)
                  </Link>
                </li>
                <li>
                  <Link to="/academics" className="hover:text-[var(--color-flamingo)] transition-colors">
                    SHS Vacation Classes
                  </Link>
                </li>
                <li>
                  <Link to="/academics" className="hover:text-[var(--color-flamingo)] transition-colors">
                    Pre-SHS Preparation (After BECE)
                  </Link>
                </li>
                <li>
                  <Link to="/academics" className="hover:text-[var(--color-flamingo)] transition-colors">
                    Special Tuition & Personal Classes
                  </Link>
                </li>
                <li>
                  <Link to="/academics" className="hover:text-[var(--color-flamingo)] transition-colors">
                    Adult Education & Mature Learners
                  </Link>
                </li>
                <li>
                  <Link to="/academics" className="hover:text-[var(--color-flamingo)] transition-colors text-white font-medium">
                    WAEC Biometric Registration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links & Resources */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-['Fraunces'] text-lg font-semibold text-white tracking-tight">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm text-[var(--color-muted-on-ink)]">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-[var(--color-flamingo)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={school.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white hover:text-[var(--color-flamingo)] transition-colors font-medium"
                  >
                    <span>Portal Login</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Campus Contact & Office Hours */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-['Fraunces'] text-lg font-semibold text-white tracking-tight">
                Campus Location
              </h3>
              <address className="not-italic space-y-3 text-sm text-[var(--color-muted-on-ink)]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[var(--color-flamingo)] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Pokuase ACP Ridge</span>
                    <span>MPPF+XF8, Kwabenya, Accra</span>
                    <span className="block text-xs opacity-75">BOX GP 18908, Accra – Ghana</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[var(--color-flamingo)] flex-shrink-0" />
                  <a href={school.phoneHref} className="hover:text-white transition-colors">
                    {school.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[var(--color-flamingo)] flex-shrink-0" />
                  <a
                    href={`mailto:${school.email}`}
                    className="hover:text-white transition-colors break-all text-xs"
                  >
                    {school.email}
                  </a>
                </div>
                <div className="flex items-start gap-2.5 pt-1">
                  <Clock className="w-4 h-4 text-[var(--color-flamingo)] mt-0.5 flex-shrink-0" />
                  <div className="text-xs space-y-0.5">
                    <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                    <div>Sat: 9:00 AM – 1:00 PM • Sun: Closed</div>
                  </div>
                </div>
              </address>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted-on-ink)]">
            <p>
              © {new Date().getFullYear()} Flamingo Academic College Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin/login" className="hover:text-white transition-colors opacity-60">
                Staff Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
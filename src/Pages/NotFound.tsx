import { Link } from "react-router-dom";
import { ArrowLeft, Home, BookOpen, Mail } from "lucide-react";
import { crest } from "@/site/school";

export default function NotFound() {
  return (
    <div className="section-y container-x text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-16 h-20 mb-6 opacity-80">
        <img
          src={crest.src}
          alt="College Crest"
          className="w-full h-full object-contain filter drop-shadow"
        />
      </div>

      <span className="eyebrow mb-4">404 • Page Not Found</span>

      <h1 className="display-l mb-4 max-w-2xl">
        The page you are looking for has been relocated or does not exist.
      </h1>

      <p className="lead max-w-xl mx-auto mb-10 text-[var(--color-muted)]">
        Please verify the address or use the links below to navigate our campus programs, admissions
        guide, or contact our admissions office directly.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/" className="btn btn-primary">
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link to="/academics" className="btn btn-outline">
          <BookOpen className="w-4 h-4" />
          <span>Explore Academics</span>
        </Link>
        <Link to="/contact" className="btn btn-outline">
          <Mail className="w-4 h-4" />
          <span>Contact Campus</span>
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-black/10 w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Flamingo Academic College Ltd</span>
        </Link>
      </div>
    </div>
  );
}

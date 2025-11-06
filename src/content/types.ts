export type ImageRef = {
  url: string; // Either an absolute URL or a data URL
  alt?: string;
};

export type StatItem = {
  label: string;
  value: string;
  icon?: string; // lucide icon name (optional; UI may map)
};

export type FeatureItem = {
  title: string;
  description: string;
  icon?: string; // lucide icon name
};

export type SubjectItem = {
  id: number;
  name: string;
  designation: string;
  image: ImageRef;
};

export type TestimonialItem = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

export type HomeContent = {
  heroTitleLine1: string;
  heroTitleEmphasis: string;
  heroTitleLine2: string;
  heroDescription: string;
  heroVideoUrl: string;
  heroImage: ImageRef;
  stats: StatItem[];
  features: FeatureItem[];
  subjects: SubjectItem[];
  campusImages: { src: string; alt: string; title: string }[];
  leadership: {
    youtubeEmbedUrl: string;
    name: string;
    title: string;
  };
  cta: {
    heading: string;
    description: string;
    primaryText: string;
    secondaryText: string;
  };
  testimonials: TestimonialItem[];
};

export type SiteContent = {
  home: HomeContent;
  about: {
    hero: { image: ImageRef; title: string; subtitle: string };
    mission: { title: string; description: string; visionTitle: string; visionText: string; image: ImageRef };
    milestones: { year: string; title: string; description: string }[];
    cta: { heading: string; description: string; primaryText: string; secondaryText: string };
  };
  academics: {
    hero: { videoUrl: string; title: string; subtitle: string };
    achievements: { metric: string; label: string; icon?: string }[];
    programs: { level: string; grades: string; description: string; subjects: string[]; icon?: string; color: string }[];
    departments: { name: string; icon?: string; description: string; courses: string[]; faculty: number }[];
    services: { name: string; description: string; icon?: string; color: string }[];
  };
  admissions: {
    hero: { videoUrl: string; title: string; subtitle: string; ctaText: string };
    steps: { step: string; title: string; description: string; timeline: string; icon?: string }[];
    requirements: Record<string, string[]>;
    formText: { heading: string; description: string };
    contacts: { label: string; value: string; icon?: string }[];
  };
  campusLife: {
    hero: { videoUrl: string; title: string; subtitle: string };
    facilities: { name: string; description: string; image: string; icon?: string }[];
    clubs: { category: string; icon?: string; items: string[] }[];
    testimonial: { image: string; quote: string; name: string; role: string };
    cta: { heading: string; description: string; primaryText: string; secondaryText: string };
  };
  news: {
    hero: { image: string; title: string; subtitle: string };
    categories: { id: string; name: string; icon?: string }[];
    featured: { title: string; excerpt: string; date: string; author: string; image: string; category: string; readTime: string; fullContent: string };
    items: { title: string; excerpt: string; date: string; author: string; image: string; category: string; readTime: string; fullContent: string }[];
    newsletter: { heading: string; text: string; button: string };
  };
  videos: {
    header: { title: string; subtitle: string };
    channelCta: { heading: string; text: string; url: string; button: string };
    gallery: { id: number; title: string; speaker: string; position: string; date: string; youtubeUrl: string; description: string }[];
  };
  contact: {
    hero: { videoUrl: string; title: string; subtitle: string };
    contactInfo: { icon?: string; title: string; details: string[] }[];
    departments: { name: string; email: string; phone: string; description: string }[];
  };
};


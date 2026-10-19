/**
 * Central, verified school information and authentic assets.
 * All details here represent verified publications and authorized photography
 * from Flamingo Academic College Ltd, Pokuase ACP Ridge (Interchange), Accra.
 */
import {
  BookOpen,
  GraduationCap,
  Sun,
  Compass,
  UserCheck,
  Users,
  Fingerprint,
  Calculator,
  Microscope,
  Languages,
  Briefcase,
  Palette,
  type LucideIcon,
} from "lucide-react";

export const school = {
  name: "Flamingo Academic College Ltd",
  shortName: "Flamingo",
  legalName: "Flamingo Academic College Ltd",
  tagline: "Shaping Bright Minds, Inspiring Futures.",
  subTagline: "Academic Independence • Character • Excellence",
  email: "flamingoacademiccollege@gmail.com",
  phone: "+233 24 251 5305",
  phoneDisplay: "+233 24 251 5305",
  phoneHref: "tel:+233242515305",
  whatsappHref: "https://wa.me/233242515305",
  portalUrl: "https://edumanagement-eight.vercel.app/auth",
  youtubeUrl: "https://www.youtube.com/@dr.flamingolllawson",
  foundedYear: 2012,
  director: {
    name: "Dr. Flamingo L.L. Lawson",
    title: "Director of Academic Affairs",
  },

  security: {
    cctv: "24/7 CCTV surveillance Cameras",
    attendance: "Face Attendance Authentication",
    features: [
      "24/7 CCTV surveillance Cameras",
      "Face Attendance Authentication",
      "Perimeter Security & Manned Access Control",
      "Strict Visitor Verification & Registry",
    ],
  },

  address: {
    line1: "MPPF+XF8, Pokuase ACP Ridge (Interchange)",
    line2: "Pokuase ACP Ridge (Interchange)",
    landmark: "Pokuase ACP Interchange Corridor",
    box: "BOX GP 18908, Accra – Ghana",
    city: "Accra",
    country: "Ghana",
    full: "Flamingo Academic College Ltd, MPPF+XF8, Pokuase ACP Ridge (Interchange), BOX GP 18908, Accra – Ghana",
  },

  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4567890123!2d-0.2788814!3d5.6874122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9fa6a015cb61%3A0x525433e5960e4662!2sFlamingo%20Academic%20College%20Ltd!5e0!3m2!1sen!2sgh!4v1692345678901!5m2!1sen!2sgh",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Flamingo+Academic+College+Ltd+Pokuase+ACP+Ridge+Interchange+Accra",
  },

  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 1:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  leadership: {
    director: {
      name: "Dr. Flamingo L.L. Lawson",
      title: "Director of Academic Affairs",
      bio: "Educational leader, curriculum specialist, and mathematics & physical science educator dedicated to demystifying complex STEM principles and guiding learners to mastery.",
      youtubeUrl: "https://www.youtube.com/@dr.flamingolllawson",
      featuredVideoId: "1uWCNTWMrzw",
    },
  },
};

/**
 * Authentic school photography captured on the Pokuase ACP Ridge campus.
 * Generated responsive WebP and JPEG assets reside in /images/opt/.
 */
export const photos = {
  building: {
    src: "/images/opt/campus-building-1280.jpg",
    webp: "/images/opt/campus-building-1280.webp",
    fallback: "/images/campus-building.jpeg",
    srcSetWebp:
      "/images/opt/campus-building-480.webp 480w, /images/opt/campus-building-960.webp 960w, /images/opt/campus-building-1280.webp 1280w",
    srcSetJpg:
      "/images/opt/campus-building-480.jpg 480w, /images/opt/campus-building-960.jpg 960w, /images/opt/campus-building-1280.jpg 1280w",
    alt: "Flamingo Academic College main multi-storey campus block with crest balconies overlooking Pokuase ACP Ridge (Interchange)",
    caption: "Main Academic Complex • Pokuase ACP Ridge (Interchange)",
  },
  gate: {
    src: "/images/opt/campus-gate-480.jpg",
    webp: "/images/opt/campus-gate-480.webp",
    fallback: "/images/campus-gate.jpeg",
    srcSetWebp: "/images/opt/campus-gate-480.webp 480w",
    srcSetJpg: "/images/opt/campus-gate-480.jpg 480w",
    alt: "Entrance gate and security pillars of Flamingo Academic College featuring 24/7 CCTV surveillance cameras and face attendance authentication",
    caption: "Campus Welcome Gate • 24/7 CCTV & Face Attendance Protected",
  },
  ictLab: {
    src: "/images/opt/ict-lab-1280.jpg",
    webp: "/images/opt/ict-lab-1280.webp",
    fallback: "/images/ict-lab.jpeg",
    srcSetWebp:
      "/images/opt/ict-lab-480.webp 480w, /images/opt/ict-lab-960.webp 960w, /images/opt/ict-lab-1280.webp 1280w",
    srcSetJpg:
      "/images/opt/ict-lab-480.jpg 480w, /images/opt/ict-lab-960.jpg 960w, /images/opt/ict-lab-1280.jpg 1280w",
    alt: "Flamingo Academic College ICT laboratory workstations for digital literacy and computer studies",
    caption: "ICT & Computing Laboratory",
  },
  scienceLab: {
    src: "/images/opt/science-lab-1280.jpg",
    webp: "/images/opt/science-lab-1280.webp",
    fallback: "/images/science-lab.jpeg",
    srcSetWebp:
      "/images/opt/science-lab-480.webp 480w, /images/opt/science-lab-960.webp 960w, /images/opt/science-lab-1280.webp 1280w",
    srcSetJpg:
      "/images/opt/science-lab-480.jpg 480w, /images/opt/science-lab-960.jpg 960w, /images/opt/science-lab-1280.jpg 1280w",
    alt: "Flamingo Academic College practical science laboratory equipped with experiment benches and stools",
    caption: "Integrated Science Laboratory",
  },
  lectureHall: {
    src: "/images/opt/wassce-remedials-1280.jpg",
    webp: "/images/opt/wassce-remedials-1280.webp",
    fallback: "/images/wassce-remedials.jpeg",
    srcSetWebp:
      "/images/opt/wassce-remedials-480.webp 480w, /images/opt/wassce-remedials-960.webp 960w, /images/opt/wassce-remedials-1280.webp 1280w",
    srcSetJpg:
      "/images/opt/wassce-remedials-480.jpg 480w, /images/opt/wassce-remedials-960.jpg 960w, /images/opt/wassce-remedials-1280.jpg 1280w",
    alt: "Flamingo Academic College lecture hall with students attending a live instructional session",
    caption: "Central Lecture Hall • Academic Session in Progress",
  },
};

export const crest = {
  src: "/brand/crest-384.png",
  webp: "/brand/crest-384.webp",
  icon192: "/brand/crest-192.png",
  icon96: "/brand/crest-96.png",
  alt: "Official Crest of Flamingo Academic College Ltd",
};

export type Programme = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  audience: string;
  highlights: string[];
  intake: string;
};

/** Real programmes officially advertised and conducted by the college */
export const programmes: Programme[] = [
  {
    slug: "shs",
    title: "Senior High School (SHS 1 – SHS 3)",
    short: "SHS 1 – SHS 3",
    tagline: "New GES Curriculum • WASSCE Preparation",
    description:
      "Full senior high school education designed according to the New GES Curriculum. We provide strong subject mastery, disciplined study habits, and university preparation across General Science, General Arts, Business, and Visual Arts tracks.",
    icon: GraduationCap,
    audience: "BECE / JHS Graduates & Continuing SHS Students",
    highlights: [
      "New GES Curriculum integration with modern learning resources",
      "Regular mock assessments, timed drills, and continuous tracking",
      "Hands-on science practicals in dedicated campus laboratories",
      "Direct pathway to Ghanaian and international universities",
    ],
    intake: "Academic Year Enrollment & Mid-Year Transfers",
  },
  {
    slug: "wassce-remedials",
    title: "WASSCE Remedials (School & Private)",
    short: "School & Private",
    tagline: "Proven Revision • Grade Improvement",
    description:
      "Intensive, highly structured revision program for candidates re-sitting the WASSCE (May/June School candidates and Nov/Dec Private candidates). Led by seasoned subject masters who target the specific weaknesses holding students back.",
    icon: BookOpen,
    audience: "WASSCE / SSSCE candidates aiming for tertiary cut-offs",
    highlights: [
      "Subject-targeted diagnosis to identify each candidate's gaps",
      "Past WAEC paper decodes, examiner insights, and time-management drills",
      "Small-group tutoring and daily problem-solving sessions",
      "Comprehensive registration support for WASSCE Nov/Dec and School exams",
    ],
    intake: "Rolling Registration — Cohorts in progress",
  },
  {
    slug: "vacation-classes",
    title: "SHS Vacation Classes",
    short: "All Levels",
    tagline: "Academic Independence During Term Breaks",
    description:
      "Vacation classes structured around the New GES Curriculum for SHS 1, 2, and 3 students. Designed to give students a competitive head start on the upcoming term's syllabus so they return to school confident and ahead.",
    icon: Sun,
    audience: "Current SHS 1, 2, and 3 students from any school",
    highlights: [
      "Accelerated coverage of upcoming term topics",
      "Remediation in challenging topics like Elective Math, Physics, and Chemistry",
      "Interactive, discussion-driven sessions",
      "Flexible holiday scheduling",
    ],
    intake: "During school holidays / vacation periods",
  },
  {
    slug: "pre-shs",
    title: "Pre-SHS Preparatory Classes",
    short: "After BECE",
    tagline: "Bridging the Gap from JHS to SHS",
    description:
      "A transitional bridge program right after the BECE examinations. Students master high-school study habits, basic calculus foundations, scientific reasoning, and core subject vocabulary before their first day of SHS.",
    icon: Compass,
    audience: "Recent BECE candidates awaiting SHS placement",
    highlights: [
      "Early mastery of core SHS subjects (Math, Integrated Science, English)",
      "Introduction to program specialization tracks (Science, Business, Arts)",
      "Study skills, time management, and examination etiquette",
      "Confidence building for boarding or day school transitions",
    ],
    intake: "Commences immediately following the BECE exams",
  },
  {
    slug: "special-classes",
    title: "Special Classes & Home Tuition",
    short: "Personalized Tuition",
    tagline: "One-on-One Custom Learning",
    description:
      "Dedicated one-on-one personal tuition arranged on campus or in the learner's home. Ideal for students needing intensive catch-up, accelerated gifted learning, or flexible scheduling around family commitments.",
    icon: UserCheck,
    audience: "Any learner requiring tailored, focused instruction",
    highlights: [
      "100% personalized learning plan tailored to student pace",
      "Flexible hours: mornings, evenings, or weekends",
      "Rigorous homework support, exam prep, and concept remediation",
      "Frequent parent progress briefings",
    ],
    intake: "Open Enrollment throughout the year",
  },
  {
    slug: "adult-education",
    title: "Adult Education & Mature Learners",
    short: "Lifelong Learning",
    tagline: "Secondary Qualifications for Working Adults",
    description:
      "Flexible secondary-level classes tailored for mature learners, working professionals, and adults seeking to complete their secondary education or obtain qualifications for tertiary entrance and career advancement.",
    icon: Users,
    audience: "Adults, mature students, and working professionals",
    highlights: [
      "Evening and weekend schedules suited to employment",
      "Supportive, respectful, adult-centered learning atmosphere",
      "Targeted preparation for Nov/Dec Private WASSCE and GBCE",
      "Practical coaching for tertiary mature entrance exams",
    ],
    intake: "Flexible modular entry",
  },
];

/** WAEC Biometric Examination Services */
export const waecServices = {
  icon: Fingerprint,
  title: "Official WAEC Biometric Registration Centre",
  subtitle:
    "Flamingo Academic College is an approved registration point with in-house biometric scanning hardware, certified invigilators, and end-to-end examination filing support.",
  items: [
    {
      name: "WASSCE School Examination",
      period: "May – June",
      description: "Official biometric capture and candidate registration for school candidates.",
    },
    {
      name: "WASSCE Private Examination",
      period: "November – December",
      description: "Complete Nov/Dec registration, subject selection guidance, and index verification.",
    },
    {
      name: "BECE Private Examination",
      period: "Annual Schedule",
      description: "Full registration for private Basic Education Certificate Examination candidates.",
    },
    {
      name: "General Business Certificate Examination (GBCE)",
      period: "Annual Schedule",
      description: "Registration and examination facilitation for advanced business credentials.",
    },
  ],
};

/** Academic subject departments offered across tracks */
export const academicDepartments = [
  {
    name: "Mathematics & Computing",
    icon: Calculator,
    tracks: ["Core Mathematics", "Elective Mathematics", "ICT & Computer Studies"],
    description: "Rigorous quantitative grounding with algorithmic thinking and computational skills.",
  },
  {
    name: "Natural & Applied Sciences",
    icon: Microscope,
    tracks: ["Integrated Science", "Physics", "Chemistry", "Biology", "Agricultural Science"],
    description: "Hands-on lab experimentation reinforcing theory with empirical inquiry.",
  },
  {
    name: "Languages & Humanities",
    icon: Languages,
    tracks: ["English Language & Literature", "Social Studies", "French"],
    description: "Critical reading, structured argumentation, and intercultural communication.",
  },
  {
    name: "Business & Social Sciences",
    icon: Briefcase,
    tracks: ["Financial Accounting", "Business Management", "Cost Accounting", "Economics"],
    description: "Commercial fundamentals, financial numeracy, and market awareness.",
  },
  {
    name: "Visual & Creative Arts",
    icon: Palette,
    tracks: ["General Art", "Visual Arts", "Design & Communication", "Government", "CRS"],
    description: "Creative problem-solving, aesthetic discipline, and civic understanding.",
  },
];

/** Campus facilities backed by authentic photographs */
export const facilities = [
  {
    id: "main-building",
    title: "Multi-Storey Academic Block",
    subtitle: "Modern Classrooms & Administrative Offices",
    description:
      "A purpose-built, multi-storey campus complex at Pokuase ACP Ridge. Features naturally lit classrooms, administrative suites, security gates, and distinctive balconies bearing the college crest.",
    photo: photos.building,
    stats: "Multi-storey • Ventilated • Secure Campus",
  },
  {
    id: "ict-lab",
    title: "ICT & Computing Laboratory",
    subtitle: "Hands-on Digital Skills Workstations",
    description:
      "Dedicated computer workstations configured for the New GES Curriculum, digital literacy, programming foundations, and online examination simulations.",
    photo: photos.ictLab,
    stats: "Dedicated Desktop Workstations • High-Speed Power Backup",
  },
  {
    id: "science-lab",
    title: "Science Laboratory",
    subtitle: "Experimentation Benches & Equipment",
    description:
      "Equipped practical benches, sinks, stools, and apparatus for Biology, Chemistry, and Physics practicals required for the WASSCE sciences.",
    photo: photos.scienceLab,
    stats: "Practical Benches • Specimen Area • Safety Equipped",
  },
  {
    id: "lecture-hall",
    title: "Spacious Central Lecture Hall",
    subtitle: "Interactive Group Instruction",
    description:
      "Large, well-ventilated lecture space fitted with whiteboards, multimedia capability, and comfortable seating for remedial, vacation, and seminar sessions.",
    photo: photos.lectureHall,
    stats: "Acoustically Treated • High-Capacity • Modern Whiteboards",
  },
  {
    id: "campus-gate",
    title: "Campus Security & Entrance Gate",
    subtitle: "24/7 CCTV & Face Attendance Protected",
    description:
      "The prominent Flamingo gate and secure campus perimeter on Pokuase ACP Ridge (Interchange), equipped with 24/7 CCTV surveillance cameras, face attendance authentication, and strict access control ensuring maximum student safety.",
    photo: photos.gate,
    stats: "24/7 CCTV Surveillance • Face Attendance Authentication • Controlled Entry",
  },
];

/** Verified institutional statistics */
export const verifiedStats = [
  { value: "2012", label: "Founded in Accra", note: "Pokuase ACP Ridge (Interchange)" },
  { value: "6+", label: "Academic Programs", note: "SHS, Remedials, Vacation & WAEC" },
  { value: "100%", label: "New GES Curriculum", note: "Official Ghana Education Service Standards" },
  { value: "24/7", label: "CCTV & Face Attendance", note: "Advanced Biometric Campus Safety" },
];

/** Standard navigation structure */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "News", to: "/news" },
  { label: "Videos", to: "/videos" },
  { label: "Contact", to: "/contact" },
];

/** Official Masterclasses taught by Director of Academic Affairs Dr. Flamingo L.L. Lawson */
export interface MasterclassVideo {
  id: string;
  youtubeId: string;
  title: string;
  subject: string;
  category: "Mathematics" | "Chemistry" | "Physics" | "Elective Math";
  speaker: string;
  speakerRole: string;
  description: string;
  duration?: string;
}

export const masterclassVideos: MasterclassVideo[] = [
  {
    id: "linear-inequalities",
    youtubeId: "c8zEtVyAN9U",
    title: "LINEAR INEQUALITIES 2 — Double Inequality Signs",
    subject: "Core & Elective Mathematics",
    category: "Mathematics",
    speaker: "Dr. Flamingo L.L. Lawson",
    speakerRole: "Director of Academic Affairs",
    description:
      "Step-by-step masterclass on solving complex double inequality systems, determining truth sets, and graphing solutions for WASSCE examination success.",
    duration: "Mathematics Focus",
  },
  {
    id: "matter-protons-electrons",
    youtubeId: "1SuF-GpozCY",
    title: "MATTER 2 — Calculating Protons, Electrons, Neutrons & Configurations",
    subject: "Integrated Science & Chemistry",
    category: "Chemistry",
    speaker: "Dr. Flamingo L.L. Lawson",
    speakerRole: "Director of Academic Affairs",
    description:
      "Comprehensive breakdown of atomic structure, mass number calculations, subatomic particle distributions, and electronic configurations under the New GES Curriculum.",
    duration: "Chemistry & Science",
  },
  {
    id: "motion-graphs",
    youtubeId: "zZ0MvONQn64",
    title: "MOTION 3 — Graph of Motion & Kinematics",
    subject: "Physics & Core Science",
    category: "Physics",
    speaker: "Dr. Flamingo L.L. Lawson",
    speakerRole: "Director of Academic Affairs",
    description:
      "In-depth analysis of velocity-time and displacement-time graphs, calculating acceleration and total distance under curves, with worked WASSCE past questions.",
    duration: "Physics Focus",
  },
  {
    id: "surd-radical-equations",
    youtubeId: "TZ83usBB0bE",
    title: "SURD 4 — Radical Equations & Conjugate Simplification",
    subject: "Elective Mathematics",
    category: "Elective Math",
    speaker: "Dr. Flamingo L.L. Lawson",
    speakerRole: "Director of Academic Affairs",
    description:
      "Clear, rigorous solutions for solving equations involving radical surds, isolating radical terms, squaring methods, and eliminating extraneous roots.",
    duration: "Elective Math Focus",
  },
];


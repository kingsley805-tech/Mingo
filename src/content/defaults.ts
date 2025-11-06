import type { SiteContent } from "./types";

export const defaultContent: SiteContent = {
  home: {
    heroTitleLine1: "Shaping",
    heroTitleEmphasis: "Bright Minds,",
    heroTitleLine2: "Inspiring Futures.",
    heroDescription:
      "Our school is dedicated to nurturing curiosity, building strong character, and empowering students to achieve their dreams—one lesson at a time.",
    heroVideoUrl: "https://www.pexels.com/download/video/8419337/",
    heroImage: {
      url:
        "https://media.istockphoto.com/id/2187876535/photo/girl-reading-and-library-with-book-story-and-youth-education-at-school-with-smile-development.jpg?s=612x612&w=0&k=20&c=3s_j9b9aw_nchGyXAJtWoIbHauKtMTJ4lYHVapqqPJ8=",
      alt: "Student reading in library",
    },
    stats: [
      { label: "Students", value: "1,500+", icon: "Users" },
      { label: "Subjects", value: "30+", icon: "BookOpen" },
      { label: "Graduates", value: "3,000+", icon: "GraduationCap" },
    ],
    features: [
      {
        icon: "Target",
        title: "Academic college ltd",
        description:
          "Rigorous curriculum designed to challenge and inspire students to reach their full potential.",
      },
      {
        icon: "Heart",
        title: "Holistic Development",
        description:
          "We nurture not just academic growth but also character, creativity, and critical thinking.",
      },
      {
        icon: "Lightbulb",
        title: "Innovation Focus",
        description:
          "Cutting-edge facilities and teaching methods prepare students for tomorrow's challenges.",
      },
    ],
    subjects: [
      {
        id: 1,
        name: "General Science",
        designation: "Science & Discovery",
        image: {
          url: "https://media.istockphoto.com/id/1060814150/photo/elearning-book-as-laptop-electronic-book-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wb6RWsSbNmxMY_HnlIE-a24FzJHwjGuq9JPxiFGK6Ho=",
        },
      },
      {
        id: 2,
        name: "Agricultural Science",
        designation: "Farming & Environment",
        image: {
          url: "https://media.istockphoto.com/id/611318356/photo/books-and-plant.webp?a=1&b=1&s=612x612&w=0&k=20&c=zsDz0osnruu7U_5itUb2PYZDTHE5icwarX6pxmHFK7M=",
        },
      },
      {
        id: 3,
        name: "Home Sciences",
        designation: "Food & Clothing",
        image: {
          url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      },
      {
        id: 4,
        name: "Business Studies",
        designation: "Commerce & Economics",
        image: {
          url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      },
      {
        id: 5,
        name: "General Art",
        designation: "Creative Expression",
        image: {
          url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      },
      {
        id: 6,
        name: "Visual Art",
        designation: "Design & Aesthetics",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1726880432407-63843ab0fa67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXJ0JTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        },
      },
      {
        id: 10,
        name: "Wassce Remedials",
        designation: "Easy Pass",
        image: {
          url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      },
      {
        id: 11,
        name: "Vacation Classes",
        designation: "Smooth learning",
        image: {
          url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      },
    ],
    campusImages: [
      {
        src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Students in classroom",
        title: "Interactive Learning",
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1664301072254-280c4da68a8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
        alt: "Science laboratory",
        title: "Modern Laboratories",
      },
      {
        src: "https://media.istockphoto.com/id/1770699824/photo/schoolboy-learning-computer-in-class-at-primary-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=XOujW5zZcuTjqtRIsz1UwEBCOOvUWY5t80gufXDj1YE=",
        alt: "ICT laboratory",
        title: "ICT Lab",
      },
      {
        src: "https://images.unsplash.com/photo-1583026411217-9d05a70d5230?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhpZ2gtc2Nob29sLXN0dWRlbnRzJTIwYmxhY2tzJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        alt: "Students studying",
        title: "Collaborative Spaces",
      },
    ],
    leadership: {
      youtubeEmbedUrl: "https://www.youtube.com/embed/1uWCNTWMrzw?autoplay=0&mute=1&rel=0",
      name: "DR. Flamingo L.L. Lawson",
      title: "Director of Academic Affairs",
    },
    cta: {
      heading: "Ready to Join Our Community?",
      description:
        "Take the first step towards an exceptional education. Our admissions team is here to guide you through the process.",
      primaryText: "Start Application",
      secondaryText: "Schedule Visit",
    },
    testimonials: [
      {
        name: "Sarah Okyere",
        role: "Parent",
        content:
          "Flamingo has transformed my daughter's love for learning. The teachers are exceptional.",
        rating: 5,
      },
      {
        name: "Michael Owusu",
        role: "Alumni '19",
        content:
          "The education I received here opened doors I never thought possible. Forever grateful.",
        rating: 5,
      },
      {
        name: "Dr. Emily Yeboah",
        role: "Parent & Educator",
        content:
          "As an educator myself, I'm impressed by their innovative approach to learning.",
        rating: 5,
      },
    ],
  },
  about: {
    hero: {
      image: { url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", alt: "School building" },
      title: "About Flamingo",
      subtitle: "For over a decades, we've been shaping minds, nurturing talents, and building the leaders of tomorrow through innovative education and unwavering commitment to excellence.",
    },
    mission: {
      title: "Our Mission",
      description: "To provide exceptional education that empowers students to think critically, communicate effectively, and contribute meaningfully to society.",
      visionTitle: "Our Vision",
      visionText: "To be a globally recognized institution that transforms lives through innovative education.",
      image: { url: "https://plus.unsplash.com/premium_photo-1663040111191-c585a609fd9c?auto=format&fit=crop&q=60&w=500", alt: "Students collaborating" },
    },
    milestones: [
      { year: "2012", title: "Foundation", description: "Flamingo School was founded with a vision to provide world-class education." },
      { year: "2020", title: "First Campus Expansion", description: "Expanded facilities to accommodate growing student population." },
      { year: "2024", title: "Technology Integration", description: "Pioneered digital learning platforms and smart classrooms." },
      { year: "2020", title: "Innovation Hub", description: "Launched state-of-the-art innovation center and maker spaces." },
    ],
    cta: {
      heading: "Join Our Legacy of Excellence",
      description: "Become part of a community that values innovation, integrity, and individual growth.",
      primaryText: "Apply Today",
      secondaryText: "Contact Us",
    },
  },
  academics: {
    hero: { videoUrl: "https://www.pexels.com/download/video/3738599/", title: "Academic Excellence", subtitle: "Comprehensive curriculum designed to challenge, inspire, and prepare students for success." },
    achievements: [
      { metric: "80", label: "College Acceptance Rate", icon: "Award" },
      { metric: "45", label: "Average Class Size", icon: "Target" },
      { metric: "7.5", label: "Hours Daily Instruction", icon: "Clock" },
    ],
    programs: [
      { level: "High School(SHS 1 - SHS 3)", grades: "", description: "College preparation with specialized tracks and comprehensive curriculum.", subjects: ["English Language","General Science","General Mathematics","Social Studies","ICT","French","Physical Education"], icon: "Calculator", color: "bg-purple-500" },
    ],
    departments: [
      { name: "General Mathematics", icon: "Calculator", description: "Comprehensive mathematics curriculum from basic to advanced levels.", courses: ["General Mathematics","Applied Mathematics","Statistics"], faculty: 8 },
      { name: "General Science", icon: "Microscope", description: "Integrated science education covering all scientific disciplines.", courses: ["Physics","Biology","Chemistry","Physics"], faculty: 12 },
      { name: "English Language", icon: "Languages", description: "English language and literature studies.", courses: ["English Language","Literature","Creative Writing"], faculty: 10 },
      { name: "Social Studies", icon: "Globe", description: "History, geography, and social sciences education.", courses: ["Social Studies","History","Geography","Civics"], faculty: 7 },
      { name: "ICT", icon: "Computer", description: "Information and Communication Technology education.", courses: ["ICT","Computer Science","Digital Literacy"], faculty: 6 },
      { name: "French", icon: "Languages", description: "French language and culture studies.", courses: ["French Language","French Culture","Conversational French"], faculty: 4 },
      { name: "Physical Education", icon: "Dumbbell", description: "Physical fitness, sports, and health education.", courses: ["Physical Education","Sports","Health Education"], faculty: 5 },
      { name: "Agricultural Science", icon: "Microscope", description: "Agricultural science and environmental studies.", courses: ["General Agriculture","Animal Science","Crop Science"], faculty: 4 },
      { name: "Home Sciences", icon: "Home", description: "Food and clothing studies for practical life skills.", courses: ["Home Sciences","Food and Nutrition","Clothing and Textiles"], faculty: 3 },
      { name: "Business Studies", icon: "Briefcase", description: "Business and commerce education.", courses: ["Business Studies","Financial Accounting","Economics"], faculty: 5 },
      { name: "General Art", icon: "Palette", description: "General art and creative expression.", courses: ["General Art","Languages","Government","Religious Studies"], faculty: 4 },
      { name: "Visual Art", icon: "Palette", description: "Visual arts and design education.", courses: ["Visual Art","Art and Design Foundation","Art and Design Studio","Design and Communication Technology"], faculty: 4 },
    ],
    services: [
      { name: "WASSCE Remedials", description: "School and Private", icon: "BookOpen", color: "bg-blue-500" },
      { name: "Vacation Classes", description: "All Courses", icon: "Clock", color: "bg-green-500" },
      { name: "Special Classes", description: "Private Classes", icon: "Users", color: "bg-purple-500" },
      { name: "Adult Education", description: "Lifelong Learning", icon: "GraduationCap", color: "bg-orange-500" },
    ],
  },
  admissions: {
    hero: { videoUrl: "https://www.pexels.com/download/video/8685438/", title: "Join Our Community", subtitle: "Begin your child's journey toward academic college ltd and personal growth with Flamingo's comprehensive education program.", ctaText: "Start Application" },
    steps: [
      { step: "1", title: "Submit Application", description: "Complete our online application form.", timeline: "By March 1st", icon: "FileText" },
      { step: "2", title: "Assessment/Interview", description: "Student assessment and family interview.", timeline: "March - April", icon: "Users" },
      { step: "3", title: "Review Process", description: "Our committee reviews all applications holistically.", timeline: "April", icon: "Clock" },
      { step: "4", title: "Admission Decision", description: "Families receive admission decisions.", timeline: "Shortly", icon: "CheckCircle" },
    ],
    requirements: {
      high: ["Completed application form","Official transcripts","Teacher recommendations (3)","SSAT or equivalent scores","Extracurricular portfolio","B.E.C.E Certification","Birth Certification","Health Insurance"],
      "WASSCE Remedial": ["Completed application form","WASSCE/SSSCE/A' LEVEL certificate","Health Insurance","Birth certificate"],
      "Vacation Classes": ["Completed application form","Current School ID"],
      "Adult Education": ["Completed application form","Valid ID Card","Previous educational certificates (if any)"],
      "Special Classes": ["Completed application form","Student ID or Birth Certificate","Parent/Guardian Contact Information"],
      "Pre-SHS Classes": ["Completed application form","BECE Results","Birth Certificate"],
    },
    formText: { heading: "Start Your Application", description: "Take the first step by submitting your inquiry. Our admissions team will contact you within 24 hours to guide you through the process." },
    contacts: [
      { label: "Email Us", value: "flamingoacademiccollege@gmail.com", icon: "Mail" },
      { label: "Call Us", value: "+233 24 251 5305", icon: "Phone" },
      { label: "Visit Us", value: "Flamingo Academic College Ltd, MPPF+XF8, Kwabenya, Pokuase ACP Ridge", icon: "MapPin" },
    ],
  },
  campusLife: {
    hero: { videoUrl: "https://www.pexels.com/download/video/5957474/", title: "Campus Life", subtitle: "Experience a vibrant community where learning extends beyond the classroom through activities, friendships, and unforgettable memories." },
    facilities: [
      { name: "Debate Team & Academic Bowl", description: "Modern conference rooms and debate chambers...", image: "https://images.unsplash.com/photo-1639436926668-2f8b4f32e15a?...", icon: "BookOpen" },
      { name: "Drama Club & Theater", description: "Professional theater with 500-seat auditorium...", image: "https://images.unsplash.com/photo-1619927288452-502c5ff5371f?...", icon: "Theater" },
      { name: "Basketball & Sports Complex", description: "Full gymnasium with basketball courts...", image: "https://images.unsplash.com/photo-1630347944760-4719d7196155?...", icon: "Trophy" },
      { name: "Photography & Art Society", description: "Dedicated photography studio and art spaces...", image: "https://images.unsplash.com/photo-1603569225131-3b19c1112438?...", icon: "Palette" },
      { name: "Student Government & Leadership", description: "Executive meeting rooms and leadership spaces...", image: "https://plus.unsplash.com/premium_photo-1683135216954-ab7130031b44?...", icon: "Heart" },
      { name: "Music Ensembles & Creative Writing", description: "Soundproof music rooms and creative writing studios...", image: "https://images.unsplash.com/photo-1749026057600-24a17d11a7dd?...", icon: "Microscope" },
    ],
    clubs: [
      { category: "Academic", icon: "BookOpen", items: ["Debate Team","Math Olympiad","Model UN","Academic Bowl","Literary Magazine"] },
      { category: "Arts & Culture", icon: "Palette", items: ["Drama Club","Art Society","Photography","Music Ensembles","Creative Writing","Film Club","Cultural Exchange"] },
      { category: "Sports & Athletics", icon: "Trophy", items: ["Basketball","Soccer","Swimming","Tennis","Track & Field","Volleyball"] },
      { category: "Service & Leadership", icon: "Heart", items: ["Student Government","Community Service","Peer Tutoring","Environmental Club","Volunteer Corps","Leadership Academy"] },
    ],
    testimonial: {
      image: "https://media.istockphoto.com/id/1633204939/photo/portrait-of-a-serious-african-american-student-sitting-on-the-floor-and-studying-from-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=yy93j-GRJZ2uEHgO1uP1v5rzLQlAVJdi7G3qVuIi3Ok=",
      quote: "Flamingo isn't just a school—it's a community where I've discovered my passions...",
      name: "Ephraim Sam Addae",
      role: "Senior Class President",
    },
    cta: { heading: "Ready to Join Our Community?", description: "Experience campus life firsthand with a personalized tour...", primaryText: "Schedule a Visit", secondaryText: "Virtual Tour" },
  },
  news: {
    hero: { image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80", title: "School News", subtitle: "Stay connected with the latest updates, achievements, and events from our vibrant school community." },
    categories: [
      { id: "all", name: "All News", icon: "BookOpen" },
      { id: "academic", name: "Academic", icon: "GraduationCap" },
      { id: "achievements", name: "Achievements", icon: "Trophy" },
      { id: "community", name: "Community", icon: "Users" },
    ],
    featured: {
      title: "Flamingo Students Win National Climate Change Competition",
      excerpt: "Our advanced science team took first place...",
      date: "December 15, 2024",
      author: "Dr. Kingsley Yeboah",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      category: "achievements",
      readTime: "5 min read",
      fullContent: "Our advanced science team...",
    },
    items: [],
    newsletter: { heading: "Stay In The Loop", text: "Subscribe to our newsletter...", button: "Subscribe Now" },
  },
  videos: {
    header: { title: "Video Gallery", subtitle: "Explore our collection of videos featuring leadership insights, student stories, and campus highlights." },
    channelCta: { heading: "Follow Our YouTube Channel", text: "Stay updated with the latest educational content from Dr. Flamingo L.L. Lawson", url: "https://www.youtube.com/@dr.flamingolllawson", button: "Subscribe" },
    gallery: [
      { id: 1, title: "Flamingo Academic College Overview", speaker: "School Administration", position: "Flamingo Academic College", date: "December 2024", youtubeUrl: "https://youtu.be/1uWCNTWMrzw", description: "A comprehensive overview..." },
    ],
  },
  contact: {
    hero: { videoUrl: "https://www.pexels.com/download/video/7698466/", title: "Contact Us", subtitle: "We're here to answer your questions and help you discover how Flamingo can be the perfect educational home for your child." },
    contactInfo: [
      { title: "Visit Us", details: ["Flamingo Academic College Ltd","MPPF+XF8, Kwabenya","Pokuase ACP Ridge","BOX GP 18908,","ACCRA - GHANA"] },
      { title: "Call Us", details: ["Main Office: +233 24 251 5305","Admissions: +233 24 251 5305","Emergency: +233 24 251 5305"] },
      { title: "Email Us", details: ["General: flamingoacademiccollege@gmail.com","Admissions: flamingoacademiccollege@gmail.com","Support: flamingoacademiccollege@gmail.com"] },
      { title: "Office Hours", details: ["Monday - Friday: 8:00 AM - 5:00 PM","Saturday: 9:00 AM - 1:00 PM","Sunday: Closed"] },
    ],
    departments: [
      { name: "Admissions Office", email: "flamingoacademiccollege@gmail.com", phone: "+233 24 251 5305", description: "Questions about enrollment, applications, and school visits." },
      { name: "Academic Affairs", email: "flamingoacademiccollege@gmail.com", phone: "+233 24 251 5305", description: "Curriculum inquiries, academic programs, and student progress." },
      { name: "Student Services", email: "flamingoacademiccollege@gmail.com", phone: "+233 24 251 5305", description: "Counseling, extracurricular activities, and student support." },
      { name: "Finance Office", email: "flamingoacademiccollege@gmail.com", phone: "+233 24 251 5305", description: "Tuition, fees, financial aid, and payment plans." },
    ],
  },
};



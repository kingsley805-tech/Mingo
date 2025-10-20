"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { BookOpen, PenTool, Users, ArrowRight, Star, GraduationCap, Target, Heart, Lightbulb } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { createPageUrl } from "../components/utils/createPageUrl";

const subjects = [
  {
    id: 1,
    name: "General Science",
    designation: "Science & Discovery",
    image:
      "https://media.istockphoto.com/id/1060814150/photo/elearning-book-as-laptop-electronic-book-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wb6RWsSbNmxMY_HnlIE-a24FzJHwjGuq9JPxiFGK6Ho=",
  },
  {
    id: 2,
    name: "Agricultural Science",
    designation: "Farming & Environment",
    image:
      "https://media.istockphoto.com/id/611318356/photo/books-and-plant.webp?a=1&b=1&s=612x612&w=0&k=20&c=zsDz0osnruu7U_5itUb2PYZDTHE5icwarX6pxmHFK7M=",
  },
  {
    id: 3,
    name: "Home Sciences",
    designation: "Food & Clothing",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Business Studies",
    designation: "Commerce & Economics",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "General Art",
    designation: "Creative Expression",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Visual Art",
    designation: "Design & Aesthetics",
    image:
      "https://plus.unsplash.com/premium_photo-1726880432407-63843ab0fa67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXJ0JTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  },
 
 
  {
    id: 10,
    name: "Wassce Remedials",
    designation: "Easy Pass",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Vacation Classes",
    designation: "Smooth learning",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
 
];

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const titleAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const stats = [
    { icon: Users, label: "Students", value: "1,500+" },
    { icon: BookOpen, label: "Subjects", value: "30+" },
   
    { icon: GraduationCap, label: "Graduates", value: "3,000+" },
  ];

  const features = [
    {
      icon: Target,
      title: "Academic college ltd",
      description: "Rigorous curriculum designed to challenge and inspire students to reach their full potential.",
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description: "We nurture not just academic growth but also character, creativity, and critical thinking.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Cutting-edge facilities and teaching methods prepare students for tomorrow's challenges.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Okyere",
      role: "Parent",
      content: "Flamingo has transformed my daughter's love for learning. The teachers are exceptional.",
      rating: 5,
    },
    {
      name: "Michael Owusu",
      role: "Alumni '19",
      content: "The education I received here opened doors I never thought possible. Forever grateful.",
      rating: 5,
    },
    {
      name: "Dr. Emily Yeboah",
      role: "Parent & Educator",
      content: "As an educator myself, I'm impressed by their innovative approach to learning.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section data-aos="flip-left" className="relative min-h-screen bg-gray-100 flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2070&auto=format&fit=crop')" }}
          animate={{ scale: [1, 1.05, 1], transition: { duration: 20, repeat: Infinity, ease: "easeInOut" } }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/80 to-transparent"></div>

        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
            boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.h1
                className="text-5xl lg:text-7xl font-extrabold text-gray-800 leading-tight"
                variants={titleAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span className="inline-block">Shaping</motion.span>
                <motion.span className="block bg-gradient-to-r from-[#E476CD] to-[#252B38] bg-clip-text text-transparent">
                  Bright Minds,
                </motion.span>
                <motion.span className="text-4xl lg:text-5xl block">Inspiring Futures.</motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Our school is dedicated to nurturing curiosity, building strong character, and empowering students to achieve their dreams—one lesson at a time.
              </motion.p>
            </div>

            <div className="flex flex-row items-center justify-center tracking-wide mb-10 w-full">
              <div className="md:text-3xl text-md font-semibold text-[#2D2037] ">Courses/Extra:</div>
              <AnimatedTooltip items={subjects} />
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.2 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to={createPageUrl("Admissions")}>
                  <Button
                    size="lg"
                    className="group rounded-2xl text-white px-8 py-4 text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, #2D2037 0%, #252B38 100%)',
                      boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                      border: 'none',
                    }}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 3px 3px 6px rgba(0, 0, 0, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.7)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.boxShadow = '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)';
                    }}
                  >
                    Request a Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-28 lg:-mb-18 lg:block"
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.8)',
              }}
            >
              <div className="flex flex-col">
                <video
                  src="https://www.pexels.com/download/video/8419337/"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-h-[250px] object-cover object-center rounded-t-lg shadow-md"
                />
                <img
                  src="https://media.istockphoto.com/id/2187876535/photo/girl-reading-and-library-with-book-story-and-youth-education-at-school-with-smile-development.jpg?s=612x612&w=0&k=20&c=3s_j9b9aw_nchGyXAJtWoIbHauKtMTJ4lYHVapqqPJ8="
                  alt="A large, modern container ship at a busy port terminal with automated cranes"
                  className="w-full max-h-[300px] object-cover object-center rounded-b-lg shadow-md"
                />
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center"
              style={{
                boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)',
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              <BookOpen className="w-8 h-8 text-[#E476CD]" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center"
              style={{
                boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)',
              }}
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                rotate: -360,
                transition: { duration: 0.6 },
              }}
            >
              <PenTool className="w-8 h-8 text-[#E476CD]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MagicCard>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center hover-lift border-[#2D2037] hover:border py-2 rounded-2xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 300}
                >
                  <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </MagicCard>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient">Flamingo?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-start">
              We provide an exceptional educational experience that prepares students for success in an ever-changing world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="flip-left"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift card-wrapper border-0 shadow-lg h-full flex flex-col">
                  <CardContent className="p-8 text-center flex flex-col flex-grow">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#E476CD] to-[#282834] rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-start flex-grow">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Campus <span className="text-gradient">Life</span>
            </h2>
            <p className="text-xl text-gray-600">Experience the vibrant community that makes Flamingo special</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((image, index) => (
              <motion.div
                key={image.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-gradient">Community Says</span>
            </h2>
            <p className="text-xl text-gray-600">Hear from parents, students, and alumni about their Flamingo experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#E476CD] fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-[#252B38] to-[#2D2037]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-[#E476CD]">Leadership</span>
            </h2>
            <p className="text-xl text-gray-300">Hear from our Director of Academic Affairs</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/1uWCNTWMrzw?autoplay=0&mute=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#E476CD]">
              DR. Flamingo L.L. Lawson
            </h3>
            <div className="h-1 w-32 mx-auto mb-3 rounded-full bg-[#E476CD]"></div>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
              Director of Academic Affairs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-[#282834]">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-start">
              Take the first step towards an exceptional education. Our admissions team is here to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Admissions")}>
                <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0">
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full border-white text-white bg-[#282834] hover:bg-white hover:border-gray-900 hover:text-black"
                >
                  Schedule Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-fade-in"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative max-w-4xl mx-4">
            <video
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            >
              <source src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01dd1578" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button
              className="absolute -top-12 right-0 text-white hover:text-[#E476CD]"
              variant="ghost"
              onClick={() => setIsVideoPlaying(false)}
            >
              ✕ Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
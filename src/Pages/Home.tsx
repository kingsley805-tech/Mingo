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
import AdSlot from "@/components/ads/AdSlot";
import { useContent } from "@/content/store";

// Content-driven icons mapping fallback
const iconMap = { Users, BookOpen, GraduationCap, Target, Heart, Lightbulb } as const;

export default function Home() {
  const { content } = useContent();
  const { home } = content;
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

  const stats = home.stats.map((s) => ({
    icon: (iconMap as any)[s.icon ?? ""] ?? Users,
    label: s.label,
    value: s.value,
  }));

  const features = home.features.map((f) => ({
    icon: (iconMap as any)[f.icon ?? ""] ?? Target,
    title: f.title,
    description: f.description,
  }));

  const testimonials = home.testimonials;

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
                <motion.span className="inline-block">{home.heroTitleLine1}</motion.span>
                <motion.span className="block bg-gradient-to-r from-[#E476CD] to-[#252B38] bg-clip-text text-transparent">
                  {home.heroTitleEmphasis}
                </motion.span>
                <motion.span className="text-4xl lg:text-5xl block">{home.heroTitleLine2}</motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {home.heroDescription}
              </motion.p>
            </div>

            <div className="flex flex-row items-center justify-center tracking-wide mb-10 w-full">
              <div className="md:text-3xl text-md font-semibold text-[#2D2037] ">Courses/Extra:</div>
              <AnimatedTooltip items={home.subjects.map(s => ({ id: s.id, name: s.name, designation: s.designation, image: s.image.url }))} />
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
                  src={home.heroVideoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[250px] object-cover object-center rounded-t-lg shadow-md"
                />
                <img
                  src={home.heroImage.url}
                  alt="A large, modern container ship at a busy port terminal with automated cranes"
                  loading="lazy"
                  decoding="async"
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

      {/* Ad: Positioned between sections, away from CTAs/navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSlot
            slot="0000000000"
            format="auto"
            className="my-2"
            style={{ display: "block", textAlign: "center", minHeight: 90 }}
          />
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
            {home.campusImages.map((image, index) => (
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
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="w-full h-64 object-cover" />
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
                src={home.leadership.youtubeEmbedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#E476CD]">{home.leadership.name}</h3>
            <div className="h-1 w-32 mx-auto mb-3 rounded-full bg-[#E476CD]"></div>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">{home.leadership.title}</p>
          </div>
        </div>
      </section>

      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-[#282834]">{home.cta.heading}</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-start">{home.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Admissions")}>
                <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0">
                  {home.cta.primaryText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full border-white text-white bg-[#282834] hover:bg-white hover:border-gray-900 hover:text-black"
                >
                  {home.cta.secondaryText}
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
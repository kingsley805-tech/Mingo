import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useContent } from "@/content/store";

export default function Academics() {
  const { content } = useContent();
  const { academics } = content;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const titleAnimation: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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

  // content-driven; see content store

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <video
            src={academics.hero.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg/10 opacity-85"></div>
        </motion.div>
        <div className="relative z-10 flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              variants={titleAnimation}
            >
              {academics.hero.title.split(" ")[0]} <span className="text-[#E476CD]">{academics.hero.title.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-3xl mx-auto"
              variants={titleAnimation}
            >
              {academics.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Academic Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {academics.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-2xl flex items-center justify-center">
                  {/* icon handled via classes; keep placeholder */}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.metric}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={titleAnimation}
            >
              Academic <span className="text-gradient">Programs</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={titleAnimation}
            >
              Comprehensive high school education that prepares students for higher education and future success.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {academics.programs.map((program, index) => (
              <motion.div
                key={program.level}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 p-8 bg-gray-50">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mr-4`}>
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{program.level}</h3>
                            <Badge variant="secondary" className="mt-1">{program.grades}</Badge>
                          </div>
                        </div>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                      <div className="lg:w-2/3 p-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Subjects</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {program.subjects.map((subject) => (
                            <div key={subject} className="flex items-center">
                              <div className="w-2 h-2 bg-[#E476CD] rounded-full mr-3"></div>
                              <span className="text-gray-700">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={titleAnimation}
            >
              Academic <span className="text-gradient">Departments</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Expert faculty delivering specialized instruction across all disciplines
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academics.departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{dept.name}</CardTitle>
                        <p className="text-sm text-gray-500">{dept.faculty} Faculty Members</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-gray-600 mb-4 flex-grow">{dept.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Sample Courses:</h4>
                      {dept.courses.slice(0, 3).map((course) => (
                        <div key={course} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#E476CD] rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={titleAnimation}
            >
              Educational <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Comprehensive educational programs designed for every learner
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academics.services.map((service, index) => (
              <motion.div
                key={service.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg h-full">
                  <CardContent className="p-8 text-center flex flex-col flex-grow">
                    <div className={`w-16 h-16 mx-auto mb-6 ${service.color} rounded-2xl flex items-center justify-center`}>
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
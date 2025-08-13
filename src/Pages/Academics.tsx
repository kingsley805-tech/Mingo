import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Microscope, 
  Calculator, 
  Globe, 
  Palette, 
  Dumbbell,
  Languages,
  Award,
  Clock,
  Users,
  Target
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Academics() {
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

  const programs = [
    {
      level: "Elementary School",
      grades: "K-5",
      description: "Building strong foundations through play-based learning and exploration.",
      subjects: ["Mathematics", "Language Arts", "Science", "Social Studies", "Arts", "Physical Education"],
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      level: "Middle School",
      grades: "6-8",
      description: "Developing critical thinking and preparing for advanced studies.",
      subjects: ["Advanced Math", "Literature", "Biology", "World History", "Foreign Languages", "Technology"],
      icon: Microscope,
      color: "bg-green-500"
    },
    {
      level: "High School",
      grades: "9-12",
      description: "College preparation with specialized tracks and AP courses.",
      subjects: ["Calculus", "Physics", "Chemistry", "Advanced Literature", "AP Courses", "Research Projects"],
      icon: Calculator,
      color: "bg-purple-500"
    }
  ];

  const departments = [
    {
      name: "Mathematics",
      icon: Calculator,
      description: "From basic arithmetic to advanced calculus and statistics.",
      courses: ["Algebra", "Geometry", "Calculus", "Statistics", "Applied Mathematics"],
      faculty: 8
    },
    {
      name: "Sciences",
      icon: Microscope,
      description: "Hands-on learning in biology, chemistry, and physics.",
      courses: ["Biology", "Chemistry", "Physics", "Environmental Science", "Research Methods"],
      faculty: 12
    },
    {
      name: "Languages",
      icon: Languages,
      description: "English literature and multiple foreign language programs.",
      courses: ["English Literature", "Spanish", "French", "Mandarin", "Creative Writing"],
      faculty: 10
    },
    {
      name: "Social Studies",
      icon: Globe,
      description: "Understanding history, geography, and global cultures.",
      courses: ["World History", "Geography", "Government", "Economics", "Psychology"],
      faculty: 7
    },
    {
      name: "Arts",
      icon: Palette,
      description: "Visual and performing arts to nurture creativity.",
      courses: ["Visual Arts", "Drama", "Music", "Photography", "Digital Media"],
      faculty: 6
    },
    {
      name: "Physical Education",
      icon: Dumbbell,
      description: "Promoting physical fitness and team sports.",
      courses: ["Athletics", "Team Sports", "Individual Fitness", "Health Education"],
      faculty: 5
    }
  ];

  const specialPrograms = [
    {
      title: "Advanced Placement (AP)",
      description: "College-level courses in 15+ subjects with opportunity to earn college credit.",
      badge: "College Credit",
      features: ["Expert Faculty", "College Prep", "Credit Transfer"]
    },
    {
      title: "STEM Innovation Lab",
      description: "State-of-the-art facilities for robotics, coding, and engineering projects.",
      badge: "Technology Focus",
      features: ["3D Printing", "Robotics", "Programming"]
    },
    {
      title: "Global Exchange",
      description: "Cultural immersion programs with partner schools worldwide.",
      badge: "International",
      features: ["Cultural Exchange", "Language Immersion", "Global Citizenship"]
    },
    {
      title: "Honors Program",
      description: "Accelerated curriculum for academically gifted students.",
      badge: "Academic Excellence",
      features: ["Small Classes", "Independent Research", "Mentorship"]
    }
  ];

  const achievements = [
    { metric: "98%", label: "College Acceptance Rate", icon: Award },
    { metric: "1:12", label: "Teacher-Student Ratio", icon: Users },
    { metric: "45", label: "Average Class Size", icon: Target },
    { metric: "7.5", label: "Hours Daily Instruction", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg/80 opacity-85"></div>
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Academic <span className="text-[#E476CD]">Excellence</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-3xl mx-auto"
              variants={titleAnimation}
            >
              Comprehensive curriculum designed to challenge, inspire, and prepare students for success in higher education and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Academic Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
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
                  <achievement.icon className="w-8 h-8 text-white" />
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
              Structured learning pathways that grow with your child from elementary through high school.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {programs.map((program, index) => (
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
                            <program.icon className="w-6 h-6 text-white" />
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
            {departments.map((dept, index) => (
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
                <Card className="hover-lift border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                        <dept.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{dept.name}</CardTitle>
                        <p className="text-sm text-gray-500">{dept.faculty} Faculty Members</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
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

      {/* Special Programs */}
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
              Special <span className="text-gradient">Programs</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Enhanced learning opportunities for students seeking additional challenges
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge className="bg-[#E476CD] text-white">{program.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#E476CD] rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
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

      {/* CTA Section */}
      <section className="py-20 text-[#282834]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold mb-4"
              variants={titleAnimation}
            >
              Ready to Excel Academically?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto text-start"
              variants={titleAnimation}
            >
              Join a community committed to academic excellence and discover your potential with our comprehensive programs.
            </motion.p>
            <motion.div variants={titleAnimation}>
              <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0">
                Learn More About Admissions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
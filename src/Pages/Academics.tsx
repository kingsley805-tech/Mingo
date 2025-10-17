import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Calculator, 
  Globe, 
  Palette, 
  Dumbbell,
  Languages,
  Award,
  Clock,
  BookOpen,
  Users,
  GraduationCap,
  Target,
  Computer,
  Home,
  Briefcase
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
      level: "High School(SHS 1 - SHS 3)",
      grades: "",
      description: "College preparation with specialized tracks and comprehensive curriculum.",
      subjects: ["English Language", "General Science", "General Mathematics", "Social Studies", "ICT", "French", "Physical Education"],
      icon: Calculator,
      color: "bg-purple-500"
    }
  ];

  const departments = [
    {
      name: "General Mathematics",
      icon: Calculator,
      description: "Comprehensive mathematics curriculum from basic to advanced levels.",
      courses: ["General Mathematics", "Applied Mathematics", "Statistics"],
      faculty: 8
    },
    {
      name: "General Science",
      icon: Microscope,
      description: "Integrated science education covering all scientific disciplines.",
      courses: ["Physics", "Biology", "Chemistry", "Physics"],
      faculty: 12
    },
    {
      name: "English Language",
      icon: Languages,
      description: "English language and literature studies.",
      courses: ["English Language", "Literature", "Creative Writing"],
      faculty: 10
    },
    {
      name: "Social Studies",
      icon: Globe,
      description: "History, geography, and social sciences education.",
      courses: ["Social Studies", "History", "Geography", "Civics"],
      faculty: 7
    },
    {
      name: "ICT",
      icon: Computer,
      description: "Information and Communication Technology education.",
      courses: ["ICT", "Computer Science", "Digital Literacy"],
      faculty: 6
    },
    {
      name: "French",
      icon: Languages,
      description: "French language and culture studies.",
      courses: ["French Language", "French Culture", "Conversational French"],
      faculty: 4
    },
    {
      name: "Physical Education",
      icon: Dumbbell,
      description: "Physical fitness, sports, and health education.",
      courses: ["Physical Education", "Sports", "Health Education"],
      faculty: 5
    },
    {
      name: "Agricultural Science",
      icon: Microscope,
      description: "Agricultural science and environmental studies.",
      courses: ["General Agriculture", "Animal Science", "Crop Science"],
      faculty: 4
    },
    {
      name: "Home Sciences",
      icon: Home,
      description: "Food and clothing studies for practical life skills.",
      courses: ["Home Sciences", "Food and Nutrition", "Clothing and Textiles"],
      faculty: 3
    },
    {
      name: "Business Studies",
      icon: Briefcase,
      description: "Business and commerce education.",
      courses: ["Business Studies", "Financial Accounting", "Economics"],
      faculty: 5
    },
    {
      name: "General Art",
      icon: Palette,
      description: "General art and creative expression.",
      courses: ["General Art", "Languages", "Government", "Religious Studies"],
      faculty: 4
    },
    {
      name: "Visual Art",
      icon: Palette,
      description: "Visual arts and design education.",
      courses: ["Visual Art", "Art and Design Foundation", "Art and Design Studio", "Design and Communication Technology"],
      faculty: 4
    }
  ];


  const achievements = [
    { metric: "80", label: "College Acceptance Rate", icon: Award },
   
    { metric: "45", label: "Average Class Size", icon: Target },
    { metric: "7.5", label: "Hours Daily Instruction", icon: Clock }
  ];

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
            src="https://www.pexels.com/download/video/3738599/"
            autoPlay
            muted
            loop
            playsInline
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
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
              Comprehensive high school education that prepares students for higher education and future success.
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
                <Card className="hover-lift border-0 shadow-lg h-full flex flex-col">
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
            {[
              {
                name: "WASSCE Remedials",
                description: "School and Private",
                icon: BookOpen,
                color: "bg-blue-500"
              },
              {
                name: "Vacation Classes",
                description: "All Courses",
                icon: Clock,
                color: "bg-green-500"
              },
              {
                name: "Special Classes",
                description: "Private Classes",
                icon: Users,
                color: "bg-purple-500"
              },
              {
                name: "Adult Education",
                description: "Lifelong Learning",
                icon: GraduationCap,
                color: "bg-orange-500"
              }
            ].map((service, index) => (
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
                      <service.icon className="w-8 h-8 text-white" />
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
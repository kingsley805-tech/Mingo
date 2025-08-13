import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Palette, 
  Heart, 
  Utensils,
  Bus,
  BookOpen,
  Gamepad2,
  Microscope,
  Theater
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CampusLife() {
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

  const facilities = [
    {
      name: "Innovation Lab",
      description: "State-of-the-art technology center with 3D printing, robotics, and coding stations.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Microscope
    },
    {
      name: "Performing Arts Center",
      description: "Professional theater with 500-seat auditorium, dance studios, and music rooms.",
      image: "https://media.istockphoto.com/id/1133752245/photo/male-student-at-performing-arts-school-performs-street-dance-for-class-and-teacher-in-dance.jpg?s=612x612&w=0&k=20&c=sGZX5Ciwy-T7Yc8vSsJ5OOAY1ef3jlCeYHOR-qRkgF8=",
      icon: Theater
    },
    {
      name: "Athletic Complex",
      description: "Full gymnasium, swimming pool, tennis courts, and sports fields.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Trophy
    },
    {
      name: "Library & Media Center",
      description: "Modern library with over 50,000 books, digital resources, and quiet study spaces.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: BookOpen
    },
    {
      name: "Art Studios",
      description: "Dedicated spaces for painting, sculpture, pottery, and digital art creation.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Palette
    },
    {
      name: "Cafeteria & Gardens",
      description: "Healthy dining options with organic garden and outdoor eating spaces.",
      image: "https://media.istockphoto.com/id/1250410953/photo/lunch-time.jpg?s=612x612&w=0&k=20&c=AYuchiVGQmSmpOCPVWzKM1nhgS7xFK-4vUOT4Ja-r7g=",
      icon: Utensils
    }
  ];

  const clubs = [
    {
      category: "Academic",
      icon: BookOpen,
      items: [
        "Debate Team", "Math Olympiad", "Science Club", "Model UN", 
        "Academic Bowl", "Literary Magazine", "Honor Society"
      ]
    },
    {
      category: "Arts & Culture",
      icon: Palette,
      items: [
        "Drama Club", "Art Society", "Photography", "Music Ensembles",
        "Creative Writing", "Film Club", "Cultural Exchange"
      ]
    },
    {
      category: "Sports & Athletics",
      icon: Trophy,
      items: [
        "Basketball", "Soccer", "Swimming", "Tennis", "Track & Field",
        "Volleyball", "Cross Country", "Chess Club"
      ]
    },
    {
      category: "Service & Leadership",
      icon: Heart,
      items: [
        "Student Government", "Community Service", "Peer Tutoring",
        "Environmental Club", "Volunteer Corps", "Leadership Academy"
      ]
    }
  ];

  const events = [
    {
      name: "Annual Science Fair",
      date: "March 15, 2025",
      description: "Students showcase innovative research projects and experiments.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Spring Arts Festival",
      date: "April 20-22, 2025",
      description: "Three days celebrating visual arts, music, and theatrical performances.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "International Culture Day",
      date: "May 10, 2025",
      description: "Celebrating our diverse community with food, music, and traditions.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Graduation Ceremony",
      date: "June 8, 2025",
      description: "Celebrating our graduates as they embark on their next journey.",
      image: "https://media.istockphoto.com/id/2179717506/photo/low-angle-view-of-people-hand-against-sky.jpg?s=612x612&w=0&k=20&c=LaDr2TOLX4H4xf-jEXFe1qTZ1rMcxQPBSlgVrO_XKsc="
    }
  ];

  const support = [
    {
      title: "Counseling Services",
      description: "Professional guidance for academic, personal, and career planning.",
      icon: Heart
    },
    {
      title: "Transportation",
      description: "Safe and reliable bus service covering the greater metropolitan area.",
      icon: Bus
    },
    {
      title: "Nutrition Program",
      description: "Healthy, balanced meals with accommodations for dietary restrictions.",
      icon: Utensils
    },
    {
      title: "Technology Support",
      description: "1:1 device program with technical support and digital literacy training.",
      icon: Gamepad2
    }
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
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Students on campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg/10 opacity-85"></div>
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
              Campus <span className="text-[#E476CD]">Life</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-3xl mx-auto"
              variants={titleAnimation}
            >
              Experience a vibrant community where learning extends beyond the classroom through activities, friendships, and unforgettable memories.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
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
              World-Class <span className="text-gradient">Facilities</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Modern spaces designed to inspire learning and creativity
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center mr-3">
                        <facility.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{facility.name}</h3>
                    </div>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
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
              Clubs & <span className="text-gradient">Activities</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Over 50 clubs and activities to explore your passions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubs.map((category, index) => (
              <motion.div
                key={category.category}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <div key={item} className="flex items-center">
                          <div className="w-2 h-2 bg-[#E476CD] rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
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

      {/* Campus Events */}
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
              Upcoming <span className="text-gradient">Events</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Join us for exciting events throughout the academic year
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <motion.img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-48 md:h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <Badge className="bg-[#E476CD] text-white mb-3">{event.date}</Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.name}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Button 
                        variant="outline" 
                        className="border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support */}
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
              Student <span className="text-gradient">Support</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Comprehensive services to support your success
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {support.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="text-center hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-bg rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-aos="fade-up"
          >
            <div className="max-w-4xl mx-auto">
              <motion.img
                src="https://images.unsplash.com/photo-1494790108755-2616b723b9ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Student testimonial"
                className="w-20 h-20 rounded-full mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.blockquote
                className="text-2xl md:text-3xl font-light italic mb-6"
                variants={titleAnimation}
              >
                "Flamingo isn't just a school—it's a community where I've discovered my passions, built lifelong friendships, and gained the confidence to pursue my dreams."
              </motion.blockquote>
              <motion.div variants={titleAnimation}>
                <p className="text-xl font-semibold">Emma Rodriguez</p>
                <p className="text-[#E476CD]">Senior Class President</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={titleAnimation}
            >
              Ready to Join Our <span className="text-gradient">Community?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              variants={titleAnimation}
            >
              Experience campus life firsthand with a personalized tour and meet our students, faculty, and staff.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={titleAnimation}
            >
              <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0">
                Schedule a Visit
              </Button>
              <Button 
                variant="outline" 
                className="border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white px-8 py-4 text-lg rounded-full"
              >
                Virtual Tour
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
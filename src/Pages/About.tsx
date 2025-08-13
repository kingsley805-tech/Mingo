
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../components/utils/createPageUrl";
import { 
  History, 
  Target, 
  
  Users, 
  BookOpen, 
  Globe,
  ArrowRight
} from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "1985",
      title: "Foundation",
      description: "Flamingo School was founded with a vision to provide world-class education."
    },
    {
      year: "1995",
      title: "First Campus Expansion",
      description: "Expanded facilities to accommodate growing student population."
    },
    {
      year: "2005",
      title: "Technology Integration",
      description: "Pioneered digital learning platforms and smart classrooms."
    },
    {
      year: "2015",
      title: "International Recognition",
      description: "Received accreditation from leading international education bodies."
    },
    {
      year: "2020",
      title: "Innovation Hub",
      description: "Launched state-of-the-art innovation center and maker spaces."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from academics to character development."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive, inclusive environment where every student can thrive and belong."
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "We promote lifelong learning through curiosity, creativity, and critical thinking."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We prepare students to be responsible global citizens in an interconnected world."
    }
  ];

  const leadership = [
    {
      name: "Dr. Margaret Thompson",
      role: "Principal",
      image: "https://images.unsplash.com/photo-1649539979560-7ab36bf5cdaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW4lMjB3aXRoJTIwcHVwaWwlMjBpbiUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "With over 20 years in education, Dr. Thompson leads with vision and compassion."
    },
    {
      name: "Prof. James Wilson",
      role: "Vice Principal - Academics",
      image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D",
      bio: "Expert in curriculum development with a focus on innovative teaching methods."
    },
    {
      name: "Dr. Sarah Chen",
      role: "Student Affairs Director",
      image: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwd29tYW4lMjB3aXRoJTIwcHVwaWwlMjBpbiUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Dedicated to student wellbeing and holistic development programs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="School building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg opacity-85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#E476CD]">Flamingo</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              For nearly four decades, we've been shaping minds, nurturing talents, and building the leaders of tomorrow through innovative education and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To provide exceptional education that empowers students to think critically, communicate effectively, and contribute meaningfully to society. We are committed to fostering an environment where every student can discover their passions, develop their talents, and achieve their full potential.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#E476CD]">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 text-start">
                  To be a globally recognized institution that transforms lives through innovative education, preparing students to lead with integrity, creativity, and compassion in an ever-evolving world.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-start">
              These core values guide everything we do and shape the character of our educational community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center hover-lift animate-slide-up border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 gradient-bg rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-start">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our educational excellence story</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E476CD] transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#E476CD] rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <Card className="hover-lift border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                            <History className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-[#E476CD]">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600">Meet the dedicated leaders who guide our educational mission</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card 
                key={leader.name}
                className="hover-lift animate-slide-up border-0 shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-[#E476CD] font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Join Our Legacy of Excellence</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto text-start">
              Become part of a community that values innovation, integrity, and individual growth. Your journey to excellence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Admissions")}>
                <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0">
                  Apply Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button 
                  variant="outline" 
                  className="px-8 py-4 text-lg rounded-full border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
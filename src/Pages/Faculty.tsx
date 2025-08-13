
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Mail,
  Linkedin,
  Star
} from "lucide-react";

export default function Faculty() {
  const facultyStats = [
    { metric: "95%", label: "Advanced Degrees", icon: GraduationCap },
    { metric: "15", label: "Average Years Experience", icon: Award },
    { metric: "1:12", label: "Teacher-Student Ratio", icon: Users },
    { metric: "98%", label: "Teacher Retention Rate", icon: Star }
  ];

  const departments = [
    {
      name: "Mathematics & Sciences",
      head: "Dr. Robert Chen",
      faculty: [
        {
          name: "Dr. Robert Chen",
          position: "Department Head, Mathematics",
          education: "Ph.D. Mathematics, MIT",
          specialization: "Advanced Calculus, Statistics",
          experience: "20 years",
          image: "https://images.unsplash.com/photo-1614890085618-0e1054da74f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww"
        },
        {
          name: "Dr. Sarah Johnson",
          position: "Physics & Chemistry",
          education: "Ph.D. Physics, Stanford",
          specialization: "Quantum Physics, AP Chemistry",
          experience: "15 years",
          image: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          name: "Prof. Michael Davis",
          position: "Biology & Environmental Science",
          education: "M.S. Biology, Harvard",
          specialization: "Molecular Biology, Ecology",
          experience: "12 years",
          image: "https://images.unsplash.com/photo-1591470481729-2bcc11e3acb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww"
        }
      ]
    },
    {
      name: "Languages & Literature",
      head: "Prof. Emily Rodriguez",
      faculty: [
        {
          name: "Prof. Emily Rodriguez",
          position: "Department Head, English Literature",
          education: "M.A. English Literature, Yale",
          specialization: "Contemporary Literature, Creative Writing",
          experience: "18 years",
          image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
        },
        {
          name: "Prof. Maria Garcia",
          position: "Spanish & French Languages",
          education: "M.A. Romance Languages, Columbia",
          specialization: "Spanish Literature, French Culture",
          experience: "14 years",
          image: "https://media.istockphoto.com/id/2156260440/photo/environmental-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=aFi2RLPWIRHxUueXtQMCk78FJ0HZz_-I7Nnmhx8z3u4="
        },
        {
          name: "Dr. James Wright",
          position: "English Composition",
          education: "Ph.D. English, Princeton",
          specialization: "Academic Writing, Rhetoric",
          experience: "16 years",
          image: "https://media.istockphoto.com/id/2171203420/photo/elderly-man-portrait-and-retirement-in-house-for-relax-peace-and-positive-mood-on-weekend-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=PlFx5CuG_ziS83QXjro6ri6i2XAKD8wvnfTj5CTCTgs="
        }
      ]
    },
    {
      name: "Social Studies & Arts",
      head: "Dr. Amanda Foster",
      faculty: [
        {
          name: "Dr. Amanda Foster",
          position: "Department Head, History",
          education: "Ph.D. World History, Oxford",
          specialization: "World History, Government",
          experience: "22 years",
          image: "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
        },
        {
          name: "Prof. David Kim",
          position: "Visual Arts & Photography",
          education: "M.F.A. Fine Arts, RISD",
          specialization: "Digital Media, Photography",
          experience: "11 years",
          image: "https://images.unsplash.com/photo-1495681796091-d84e65e2ad51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww"
        },
        {
          name: "Ms. Lisa Thompson",
          position: "Music & Performing Arts",
          education: "M.M. Music Education, Juilliard",
          specialization: "Orchestra, Music Theory",
          experience: "13 years",
          image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
        }
      ]
    }
  ];

  const achievements = [
    "Teacher of the Year Award Recipients: 5 faculty members in past 3 years",
    "Published Research: 15+ peer-reviewed publications annually",
    "Conference Presentations: 25+ educational conferences per year",
    "Professional Development: 40+ hours per teacher annually",
    "Advanced Certifications: 85% hold specialized subject certifications"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Teachers in faculty meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg/10 opacity-85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#E476CD]">Faculty</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Meet our exceptional educators who inspire, challenge, and guide students to reach their highest potential through innovative teaching and unwavering dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty by Department */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient">Educators</span>
            </h2>
            <p className="text-xl text-gray-600">Expert faculty organized by academic departments</p>
          </div>

          <div className="space-y-16">
            {departments.map((dept, deptIndex) => (
              <div key={dept.name} className="animate-slide-up" style={{ animationDelay: `${deptIndex * 0.2}s` }}>
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-lg text-gray-600">Led by {dept.head}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dept.faculty.map((member, index) => (
                    <Card 
                      key={member.name}
                      className="hover-lift border-0 shadow-lg overflow-hidden animate-slide-up"
                      style={{ animationDelay: `${(deptIndex * 0.2) + (index * 0.1)}s` }}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                        <p className="text-[#E476CD] font-medium mb-3">{member.position}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start">
                            <GraduationCap className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{member.education}</span>
                          </div>
                          <div className="flex items-start">
                            <BookOpen className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{member.specialization}</span>
                          </div>
                          <div className="flex items-start">
                            <Award className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{member.experience} experience</span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Mail className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button variant="outline" size="sm">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Faculty <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600">Recognition and excellence in education</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="border-0 shadow-lg gradient-bg text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Professional Development</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Continuous Learning</h4>
                      <p className="text-gray-200">All faculty participate in ongoing professional development programs.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Research & Innovation</h4>
                      <p className="text-gray-200">Encouraged to pursue research and implement innovative teaching methods.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Collaboration</h4>
                      <p className="text-gray-200">Regular collaboration with leading educational institutions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Faculty */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're always looking for passionate educators who share our commitment to excellence. Join a community that values innovation, collaboration, and student success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0">
                View Open Positions
              </Button>
              <Button 
                variant="outline" 
                className="border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white px-8 py-4 text-lg rounded-full"
              >
                Faculty Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
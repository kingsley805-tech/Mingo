import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  FileText,
  Users,
  CheckCircle,
  Clock,
  
  GraduationCap,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Admissions() {
  const [formData, setFormData] = React.useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    message: ""
  });

  const admissionSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with required documents.",
      timeline: "By March 1st",
      icon: FileText
    },
    {
      step: "2",
      title: "Assessment & Interview",
      description: "Student assessment and family interview with our admissions team.",
      timeline: "March - April",
      icon: Users
    },
    {
      step: "3",
      title: "Review Process",
      description: "Our committee reviews all applications holistically.",
      timeline: "April",
      icon: Clock
    },
    {
      step: "4",
      title: "Admission Decision",
      description: "Families receive admission decisions and enrollment information.",
      timeline: "May 1st",
      icon: CheckCircle
    }
  ];

  const requirements = {
    elementary: [
      "Completed application form",
      "Birth certificate",
      "Previous school records",
      "Health and immunization records",
      "Parent questionnaire"
    ],
    middle: [
      "Completed application form",
      "Previous two years' transcripts",
      "Teacher recommendations (2)",
      "Student essay",
      "Standardized test scores"
    ],
    high: [
      "Completed application form",
      "Official transcripts",
      "Teacher recommendations (3)",
      "Personal statement",
      "SSAT or equivalent scores",
      "Extracurricular portfolio"
    ]
  };

  const tuitionFees = [
    { grade: "Kindergarten - Grade 2", tuition: "$15,000", fees: "$2,000" },
    { grade: "Grade 3 - Grade 5", tuition: "$18,000", fees: "$2,500" },
    { grade: "Grade 6 - Grade 8", tuition: "$22,000", fees: "$3,000" },
    { grade: "Grade 9 - Grade 12", tuition: "$25,000", fees: "$3,500" }
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="School entrance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg opacity-85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-[#E476CD]">Community</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Begin your child's journey toward academic excellence and personal growth with Flamingo's comprehensive education program.
            </p>
            <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0">
              Start Application
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Admission <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600">A simple, transparent process designed to find the right fit for your family</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card 
                key={step.step}
                className="text-center hover-lift animate-slide-up border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-[#E476CD] text-white mb-4">Step {step.step}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">{step.title}</h3>
                  <p className="text-gray-600 mb-4 text-start">{step.description}</p>
                  <div className="flex items-center justify-center text-sm text-[#E476CD] font-medium text-start">
                    <Calendar className="w-4 h-4 mr-2 text-start" />
                    {step.timeline}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Admission <span className="text-gradient">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600">Required documents and materials by grade level</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover-lift animate-slide-up border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-[#E476CD]" />
                  Elementary School
                </CardTitle>
                <p className="text-sm text-gray-500">Grades K-5</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.elementary.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#E476CD] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-slide-up border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-[#E476CD]" />
                  Middle School
                </CardTitle>
                <p className="text-sm text-gray-500">Grades 6-8</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.middle.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#E476CD] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-slide-up border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-[#E476CD]" />
                  High School
                </CardTitle>
                <p className="text-sm text-gray-500">Grades 9-12</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.high.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#E476CD] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tuition & <span className="text-gradient">Fees</span>
            </h2>
            <p className="text-xl text-gray-600">Transparent pricing for quality education (Annual Rates)</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg animate-slide-up">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="gradient-bg text-white">
                        <th className="text-left py-4 px-6 font-semibold">Grade Level</th>
                        <th className="text-center py-4 px-6 font-semibold">Annual Tuition</th>
                        <th className="text-center py-4 px-6 font-semibold">Additional Fees</th>
                        <th className="text-center py-4 px-6 font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tuitionFees.map((fee, index) => (
                        <tr key={fee.grade} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="py-4 px-6 font-medium">{fee.grade}</td>
                          <td className="text-center py-4 px-6">{fee.tuition}</td>
                          <td className="text-center py-4 px-6">{fee.fees}</td>
                          <td className="text-center py-4 px-6 font-semibold text-[#E476CD]">
                            ${(parseInt(fee.tuition.replace(/[$,]/g, '')) + parseInt(fee.fees.replace(/[$,]/g, ''))).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Financial aid and scholarship opportunities available. Payment plans offered.
              </p>
              <Button variant="outline" className="border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white">
                Learn About Financial Aid
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start Your <span className="text-gradient">Application</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Take the first step by submitting your inquiry. Our admissions team will contact you within 24 hours to guide you through the process.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">admissions@Flamingo.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">123 Education Ave, Learning City</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle>Application Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student Name *
                      </label>
                      <Input
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        placeholder="Enter student name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent/Guardian Name *
                      </label>
                      <Input
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Enter parent name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Grade Level *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E476CD]"
                      required
                    >
                      <option value="">Select grade level</option>
                      <option value="kindergarten">Kindergarten</option>
                      <option value="elementary">Elementary (1-5)</option>
                      <option value="middle">Middle School (6-8)</option>
                      <option value="high">High School (9-12)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your child's interests, needs, or any questions..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#E476CD] hover:bg-[#d165b8] text-white py-3 text-lg rounded-full hover-lift border-0"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
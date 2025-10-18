import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  
  FileText,
  Users,
  CheckCircle,
  Clock,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  BookOpen
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function Admissions() {
  const form = useRef<HTMLFormElement>(null);
  
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

  const [formData, setFormData] = React.useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = React.useState("");

  const admissionSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form.",
      timeline: "By March 1st",
      icon: FileText
    },
    {
      step: "2",
      title: "Assessment/Interview",
      description: "Student assessment and family interview.",
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
      description: "Families receive admission decisions.",
      timeline: "May 1st",
      icon: CheckCircle
    }
  ];

  const requirements = {
    high: [
      "Completed application form",
      "Official transcripts",
      "Teacher recommendations (3)",
      "SSAT or equivalent scores",
      "Extracurricular portfolio",
      "B.E.C.E Certification",
      "Birth Certification",
      "Health Insurance"
    ],
    "WASSCE Remedial": [
      "Completed application form",
      "WASSCE/SSSCE/A' LEVEL certificate",
      "Health Insurance",
      "Birth certificate"
    ],
    "Vacation Classes": [
      "Completed application form",
      "Current School ID"
    ]
  };

  // const tuitionFees = [
  //   { grade: "Kindergarten - Grade 2", tuition: "$15,000", fees: "$2,000" },
  //   { grade: "Grade 3 - Grade 5", tuition: "$18,000", fees: "$2,500" },
  //   { grade: "Grade 6 - Grade 8", tuition: "$22,000", fees: "$3,000" },
  //   { grade: "Grade 9 - Grade 12", tuition: "$25,000", fees: "$3,500" }
  // ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage("");

    try {
      // EmailJS configuration using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_f4el41f';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zxnmlrq';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'JEZJinzDEUrmkpPYy';
      const schoolEmail = import.meta.env.VITE_SCHOOL_EMAIL || 'flamingoacademiccollege@gmail.com';

      // Prepare template parameters for EmailJS (matching template variables)
      const templateParams = {
        student_name: formData.studentName,
        parent_name: formData.parentName,
        email: formData.email, // Changed from from_email to email
        phone: formData.phone,
        grade_level: formData.grade,
        message: formData.message,
        to_email: schoolEmail,
        reply_to: formData.email
      };

      // Debug: Log the parameters being sent
      console.log('Sending EmailJS with parameters:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('EmailJS response:', result);
      console.log('Admissions inquiry sent successfully');
      setSubmitStatus('success');
      setSubmitMessage("Thank you! Your inquiry has been submitted successfully. We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        grade: "",
        message: ""
      });

    } catch (error: any) {
      console.error('Error sending admissions inquiry:', error);
      
      // More specific error handling
      let errorMessage = "Sorry, there was an error submitting your inquiry. Please try again or contact us directly.";
      
      if (error.text) {
        console.error('EmailJS error details:', error.text);
        if (error.text.includes('Invalid template')) {
          errorMessage = "Email template configuration error. Please contact us directly.";
        } else if (error.text.includes('Invalid service')) {
          errorMessage = "Email service configuration error. Please contact us directly.";
        } else if (error.text.includes('quota')) {
          errorMessage = "Email service quota exceeded. Please try again later.";
        }
      }
      
      setSubmitStatus('error');
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            src="https://www.pexels.com/download/video/7841863/"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg opacity-35"></div>
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
              Join Our <span className="text-[#E476CD]">Community</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-3xl mx-auto mb-8"
              variants={titleAnimation}
            >
              Begin your child's journey toward academic college ltd and personal growth with Flamingo's comprehensive education program.
            </motion.p>
            <motion.div variants={titleAnimation}>
              <Button 
                className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-4 text-lg rounded-full hover-lift border-0"
                onClick={() => {
                  const applicationSection = document.getElementById('application-form');
                  applicationSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Application
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Admission Process */}
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
              Admission <span className="text-gradient">Process</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              A simple, transparent process designed to find the right fit for your family
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
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
                    <div className="w-16 h-16 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-[#E476CD] text-white mb-4">Step {step.step}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-start">{step.title}</h3>
                    <p className="text-gray-600 mb-4 text-start">{step.description}</p>
                    <div className="flex items-center justify-center text-sm text-[#E476CD] font-medium text-start">
                     
                      ✔
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
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
              Admission <span className="text-gradient">Requirements</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Required documents and materials by grade level
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(requirements).map(([level, reqs], index) => (
              <motion.div
                key={level}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <Card className="hover-lift border-0 shadow-lg md:w-80 md:h-96">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="w-6 h-6 mr-3 text-[#E476CD]" />
                      {level.charAt(0).toUpperCase() + level.slice(1)} School
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {reqs.map((req, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#E476CD] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
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

      {/* Tuition & Fees */}
      {/* <section className="py-20 bg-gray-50">
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
              Tuition & <span className="text-gradient">Fees</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={titleAnimation}
            >
              Transparent pricing for quality education (Annual Rates)
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-aos="fade-up"
          >
            <Card className="border-0 shadow-lg">
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
                        <motion.tr
                          key={fee.grade}
                          custom={index}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          data-aos="fade-up"
                          data-aos-delay={index * 300}
                          className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="py-4 px-6 font-medium">{fee.grade}</td>
                          <td className="text-center py-4 px-6">{fee.tuition}</td>
                          <td className="text-center py-4 px-6">{fee.fees}</td>
                          <td className="text-center py-4 px-6 font-semibold text-[#E476CD]">
                            ${(parseInt(fee.tuition.replace(/[$,]/g, '')) + parseInt(fee.fees.replace(/[$,]/g, ''))).toLocaleString()}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <motion.div
              className="mt-8 text-center"
              variants={titleAnimation}
            >
              <p className="text-gray-600 mb-4">
                Financial aid and scholarship opportunities available. Payment plans offered.
              </p>
              <Button variant="outline" className="border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white">
                Learn About Financial Aid
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={titleAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={titleAnimation}
              >
                Start Your <span className="text-gradient">Application</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mb-8"
                variants={titleAnimation}
              >
                Take the first step by submitting your inquiry. Our admissions team will contact you within 24 hours to guide you through the process.
              </motion.p>
              
              <div className="space-y-6 text-sm">
                {[
                  { icon: Mail, title: "Email Us", text: "flamingoacademiccollege@gmail.com" },
                  { icon: Phone, title: "Call Us", text: "+233 24 251 5305" },
                  { icon: MapPin, title: "Visit Us", text: "Flamingo Academic College Ltd, MPPF+XF8, Kwabenya, Pokuase ACP Ridge" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    data-aos="fade-up"
                    data-aos-delay={index * 300}
                    className="flex items-center"
                  >
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={titleAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              data-aos="fade-up"
            >
              <Card className="border-0 shadow-lg">
                {submitStatus === 'success' ? (
                  // Success State
                  <CardContent className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="mb-6"
                    >
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Application Submitted Successfully!
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        Thank you! Your inquiry has been submitted successfully. We'll contact you within 24 hours.
                      </p>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-center mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          <span className="text-green-800 font-medium">What happens next?</span>
                        </div>
                        <ul className="text-sm text-green-700 text-left space-y-1">
                          <li>• Our admissions team will review your application</li>
                          <li>• We'll contact you within 24 hours</li>
                          <li>• We'll schedule an assessment/interview if needed</li>
                          <li>• You'll receive admission decision by May 1st</li>
                        </ul>
                      </div>
                      
                      <Button 
                        onClick={() => window.location.reload()}
                        className="bg-[#E476CD] hover:bg-[#d165b8] text-white px-8 py-3 rounded-full"
                      >
                        Submit Another Application
                      </Button>
                    </motion.div>
                  </CardContent>
                ) : (
                  // Form State
                  <>
                    <CardHeader>
                      <CardTitle>Application Inquiry Form</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Error Messages */}
                      {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                          <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                          <p className="text-red-800">{submitMessage}</p>
                        </div>
                      )}

                      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
                        <option value="shs1">SHS 1</option>
                        <option value="shs2">SHS 2</option>
                        <option value="shs3">SHS 3</option>
                        <option value="wassce">Completed but re-write WASSCE</option>
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
                      disabled={isSubmitting}
                      className="w-full bg-[#E476CD] hover:bg-[#d165b8] text-white py-3 text-lg rounded-full hover-lift border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          Submit Inquiry
                        </div>
                      )}
                    </Button>
                  </form>
                    </CardContent>
                  </>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
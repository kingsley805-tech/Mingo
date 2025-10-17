import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = React.useState("");

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Flamingo Academic College Ltd",
        "MPPF+XF8, Kwabenya",
        "Pokuase ACP Ridge"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Main Office: +233 24 251 5305",
        "Admissions: +233 24 251 5305",
        "Emergency: +233 24 251 5305"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "General: flamingoacademiccollege@gmail.com",
        "Admissions: flamingoacademiccollege@gmail.com",
        "Support: flamingoacademiccollege@gmail.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      name: "Admissions Office",
      email: "flamingoacademiccollege@gmail.com",
      phone: "+233 24 251 5305",
      description: "Questions about enrollment, applications, and school visits."
    },
    {
      name: "Academic Affairs",
      email: "flamingoacademiccollege@gmail.com",
      phone: "+233 24 251 5305",
      description: "Curriculum inquiries, academic programs, and student progress."
    },
    {
      name: "Student Services",
      email: "flamingoacademiccollege@gmail.com",
      phone: "+233 24 251 5305",
      description: "Counseling, extracurricular activities, and student support."
    },
    {
      name: "Finance Office",
      email: "flamingoacademiccollege@gmail.com",
      phone: "+233 24 251 5305",
      description: "Tuition, fees, financial aid, and payment plans."
    }
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage("");

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_flamingo';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';
      const schoolEmail = import.meta.env.VITE_SCHOOL_EMAIL || 'flamingoacademiccollege@gmail.com';

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: schoolEmail,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success
      setSubmitStatus('success');
      setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setSubmitMessage("Sorry, there was an error sending your message. Please try again or contact us directly at flamingoacademiccollege@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://www.pexels.com/download/video/7698466/"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg opacity-35"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-[#E476CD]">Us</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're here to answer your questions and help you discover how Flamingo can be the perfect educational home for your child.
            </p>
          </div>
        </div>
      </section>

      

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">Multiple ways to connect with our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="text-center hover-lift animate-slide-up border-0 shadow-lg h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-2xl flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2 flex-grow">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed break-words overflow-wrap-anywhere">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageSquare className="w-6 h-6 mr-3 text-[#E476CD]" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E476CD]"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="academics">Academic Information</option>
                          <option value="visit">Schedule a Visit</option>
                          <option value="support">Student Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    {/* Status Message */}
                    {submitStatus !== 'idle' && (
                      <div className={`p-4 rounded-lg flex items-start space-x-3 ${
                        submitStatus === 'success' 
                          ? 'bg-green-50 border border-green-200 text-green-800' 
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}>
                        {submitStatus === 'success' ? (
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        )}
                        <p className="text-sm">{submitMessage}</p>
                      </div>
                    )}

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E476CD] hover:bg-[#d165b8] text-white py-3 text-lg rounded-full hover-lift border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Quick Actions */}
            <div className="space-y-8 animate-slide-up">
              {/* Map */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4567890123!2d-0.2788814!3d5.6874122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9fa6a015cb61:0x525433e5960e4662!2sFlamingo+Academic+College+Ltd!5e0!3m2!1sen!2sgh!4v1692345678901"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Campus</h3>
                  <p className="text-gray-600 mb-4">
                    Located in the heart of Learning City, our beautiful campus is easily accessible by public transportation.
                  </p>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#E476CD] hover:bg-[#d165b8] text-white border-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Visit
                    </Button>
                    <Button variant="outline" className="border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white">
                      <MapPin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-3 text-[#E476CD]" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    For urgent matters, please call our main office directly or visit us during office hours.
                  </p>
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      Call Now: +233 24 251 5305
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white text-xs"
                    >
                      <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="break-words overflow-wrap-anywhere">Email: flamingoacademiccollege@gmail.com</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Department <span className="text-gradient">Contacts</span>
            </h2>
            <p className="text-xl text-gray-600">Direct contact information for specific departments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={dept.name}
                className="hover-lift animate-slide-up border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-[#E476CD]" />
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-[#E476CD]" />
                      <span>{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
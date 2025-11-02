import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cookie, Eye, Lock, Users, Globe, FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-[#E476CD]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E476CD]" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Flamingo Academic College Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you consent to the data practices described in this Privacy Policy.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#E476CD]" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4">
                  <li>Fill out contact forms or admission applications</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Contact us via email or phone</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  This information may include: name, email address, phone number, mailing address, educational background, and other information relevant to your inquiry.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Internet Protocol (IP) addresses</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring URLs</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Date and time of access</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies and Tracking Technologies */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-[#E476CD]" />
              Cookies and Tracking Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect and use personal information about you. These technologies help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve user experience</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Third-Party Cookies:</strong> Third parties, including Google, may be placing and reading cookies on your browser, or using web beacons or IP addresses to collect information as a result of ad serving on our website. These third parties may use information about your visits to this and other websites to provide relevant advertisements about goods and services.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, if you disable cookies, some features of our website may not function properly.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Google Services and Advertising */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#E476CD]" />
              Google Services and Advertising
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our website uses Google advertising services. Google may use information collected through cookies and other technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Display personalized advertisements based on your interests</li>
                <li>Measure ad performance and effectiveness</li>
                <li>Prevent fraud and abuse</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>How Google Uses Data:</strong> To learn more about how Google uses data when you use our partners' sites or apps, please visit:{" "}
                  <a 
                    href="https://policies.google.com/technologies/partner-sites" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E476CD] hover:underline font-medium"
                  >
                    How Google uses data when you use our partners' sites or apps
                  </a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can opt out of personalized advertising by visiting{" "}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E476CD] hover:underline font-medium"
                  >
                    Google's Ad Settings
                  </a>
                  {" "}or the{" "}
                  <a 
                    href="https://www.aboutads.info/choices/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E476CD] hover:underline font-medium"
                  >
                    Digital Advertising Alliance's opt-out page
                  </a>
                  .
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>AdChoices:</strong> Advertisements served by Google may display an "AdChoices" icon that allows you to learn more about why you're seeing a particular ad and to manage your ad preferences.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Your Information */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#E476CD]" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To process admissions applications and inquiries</li>
              <li>To communicate with you about our programs, events, and services</li>
              <li>To respond to your questions and requests</li>
              <li>To send administrative information and updates</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Information Sharing and Disclosure */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#E476CD]" />
              Information Sharing and Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share information with third-party service providers who perform services on our behalf, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                  <li>Email service providers</li>
                  <li>Analytics providers (including Google Analytics)</li>
                  <li>Advertising partners (including Google)</li>
                  <li>Hosting providers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose your information if required by law or in response to valid requests by public authorities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#E476CD]" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#E476CD]" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#E476CD]" />
              Children's Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              In compliance with the Children's Online Privacy Protection Act (COPPA), we do not use interest-based advertising (including remarketing) to target users under the age of 13 or users on sites directed at children under the age of 13.
            </p>
          </CardContent>
        </Card>

        {/* Changes to This Privacy Policy */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E476CD]" />
              Changes to This Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        {/* Contact Us */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#E476CD]" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Flamingo Academic College Ltd</strong></p>
              <p>Pokuase ACP interchange</p>
              <p>Pokuase ACP Ridge</p>
              <p>BOX G.P.O 18908, ACCRA-GHANA</p>
              <p>Email: <a href="mailto:flamingoacademiccollege@gmail.com" className="text-[#E476CD] hover:underline">flamingoacademiccollege@gmail.com</a></p>
              <p>Phone: +233 24 251 5305</p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center" data-aos="fade-up">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-[#E476CD] text-white rounded-full hover:bg-[#d465b8] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


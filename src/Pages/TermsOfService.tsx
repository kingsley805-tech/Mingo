import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Shield, Users, Book } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TermsOfService() {
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
            <Scale className="w-16 h-16 text-[#E476CD]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E476CD]" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the website of Flamingo Academic College Ltd ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </CardContent>
        </Card>

        {/* Use License */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="w-5 h-5 text-[#E476CD]" />
              Use License
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on Flamingo Academic College Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Flamingo Academic College Ltd at any time.
            </p>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#E476CD]" />
              Intellectual Property Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Flamingo Academic College Ltd or its content suppliers and is protected by international copyright and trademark laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission from Flamingo Academic College Ltd.
            </p>
          </CardContent>
        </Card>

        {/* User Accounts */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#E476CD]" />
              User Accounts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you create an account on our website, you are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Maintaining the security of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate, current, and complete information</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent, abusive, or illegal activities.
            </p>
          </CardContent>
        </Card>

        {/* Prohibited Uses */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#E476CD]" />
              Prohibited Uses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not use our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
            </ul>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#E476CD]" />
              Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              The materials on Flamingo Academic College Ltd's website are provided on an 'as is' basis. Flamingo Academic College Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Further, Flamingo Academic College Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#E476CD]" />
              Limitations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Flamingo Academic College Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Flamingo Academic College Ltd's website, even if Flamingo Academic College Ltd or a Flamingo Academic College Ltd authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </CardContent>
        </Card>

        {/* Accuracy of Materials */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E476CD]" />
              Accuracy of Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on Flamingo Academic College Ltd's website could include technical, typographical, or photographic errors. Flamingo Academic College Ltd does not warrant that any of the materials on its website are accurate, complete, or current. Flamingo Academic College Ltd may make changes to the materials contained on its website at any time without notice.
            </p>
          </CardContent>
        </Card>

        {/* Links */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E476CD]" />
              Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Flamingo Academic College Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Flamingo Academic College Ltd of the site. Use of any such linked website is at the user's own risk.
            </p>
          </CardContent>
        </Card>

        {/* Modifications */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E476CD]" />
              Modifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Flamingo Academic College Ltd may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#E476CD]" />
              Governing Law
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Ghana and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8" data-aos="fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#E476CD]" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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


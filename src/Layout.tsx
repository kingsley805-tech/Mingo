import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../src/components/utils/createPageUrl";
import { 
  
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from '../src/assets/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Academics", path: createPageUrl("Academics") },
    { name: "Admissions", path: createPageUrl("Admissions") },
    // { name: "Faculty", path: createPageUrl("Faculty") },
    { name: "Campus Life", path: createPageUrl("CampusLife") },
    { name: "News", path: createPageUrl("News") },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          :root {
            --primary: #282834;
            --secondary: #2D2037;
            --tertiary: #252B38;
            --accent: #E476CD;
            --text-primary: #1a1a1a;
            --text-secondary: #6b7280;
            --background: #ffffff;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--tertiary) 100%);
          }
          
          .text-gradient {
            background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out;
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          
          .btn-primary {
            background: var(--accent);
            border: none;
            transition: all 0.3s ease;
          }
          
          .btn-primary:hover {
            background: var(--primary);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(228, 118, 205, 0.3);
          }

          /* Mobile Menu Animations */
          .mobile-menu-enter {
            animation: slideDown 0.3s ease-out forwards;
          }

          .mobile-menu-exit {
            animation: slideUp 0.3s ease-in forwards;
          }

          .hamburger-rotate {
            animation: rotate180 0.3s ease-in-out forwards;
          }

          .hamburger-rotate-reverse {
            animation: rotate180Reverse 0.3s ease-in-out forwards;
          }

          .menu-item-enter {
            animation: fadeInUp 0.4s ease-out forwards;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
              max-height: 0;
            }
            to {
              opacity: 1;
              transform: translateY(0);
              max-height: 500px;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 1;
              transform: translateY(0);
              max-height: 500px;
            }
            to {
              opacity: 0;
              transform: translateY(-20px);
              max-height: 0;
            }
          }

          @keyframes rotate180 {
            from { transform: rotate(0deg); }
            to { transform: rotate(180deg); }
          }

          @keyframes rotate180Reverse {
            from { transform: rotate(180deg); }
            to { transform: rotate(0deg); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .backdrop-blur {
            backdrop-filter: blur(8px);
            background: rgba(255, 255, 255, 0.95);
          }
        `}
      </style>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3" data-aos="fade-right" data-aos-delay="100">
              <div className="  rounded-xl flex items-center justify-center">
               
                <img src={Logo} alt=""className="w-14 h-14" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gradient">Flamingo</h1>
                <p className="text-xs text-gray-500 -mt-1">Academic college ltd</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" data-aos="fade-down" data-aos-delay="200">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#E476CD] ${
                    isActive(item.path)
                      ? "text-[#E476CD] border-b-2 border-[#E476CD] pb-1"
                      : "text-gray-700 hover:border-b-2 hover:border-[#E476CD] hover:pb-1"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl("Admissions")} data-aos="fade-up" data-aos-delay="300">
              <Button className="btn-primary text-white px-6 py-2 rounded-full">
                Apply Now
              </Button>
              </Link>
              
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className={`lg:hidden transition-all duration-300 hover:bg-gray-100 rounded-lg p-2 ${
                isMobileMenuOpen ? 'hamburger-rotate' : 'hamburger-rotate-reverse'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="lg:hidden mobile-menu-enter backdrop-blur border-t border-gray-200 shadow-lg"
              data-aos="fade-down"
              data-aos-duration="300"
            >
              <div className="py-6 px-4">
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`menu-item-enter text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isActive(item.path)
                          ? "text-[#E476CD] bg-pink-50 border-l-4 border-[#E476CD]"
                          : "text-gray-700 hover:text-[#E476CD] hover:bg-pink-50 hover:border-l-4 hover:border-[#E476CD]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-2" data-aos="fade-up" data-aos-delay={navigationItems.length * 100}>
                    <Link to={createPageUrl("Admissions")} onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="btn-primary text-white w-full py-3 rounded-full hover:scale-105 transition-transform duration-300">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="space-y-4">
               <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="  rounded-xl flex items-center justify-center">
               
                <img src={Logo} alt=""className="w-14 h-14" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gradient">Flamingo</h1>
                <p className="text-xs text-gray-500 -mt-1">Academic college ltd</p>
              </div>
            </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nurturing minds, building futures. Excellence in education since 2012.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-gray-300 hover:text-[#E476CD] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors">High School(SHS 1 - SHS 3)</p>
                <p className="text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors">Advanced Placement</p>
                <p className="text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors">WASSCE Remedials</p>
                <p className="text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors">Vacation Classes</p>
                <p className="text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors">Special Classes</p>
                <p className="text-gray-300 hover:text-[#E476CD] cursor-pointer transition-colors">Adult Education</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#E476CD] mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div>Flamingo Academic College Ltd</div>
                    <div>MPPF+XF8, Kwabenya</div>
                    <div>Pokuase ACP Ridge</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#E476CD] flex-shrink-0" />
                  <span className="text-gray-300">+233 24 251 5305</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#E476CD] flex-shrink-0" />
                  <span className="text-gray-300 break-words overflow-wrap-anywhere">flamingoacademiccollege@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2024 Flamingo School. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-[#E476CD] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-[#E476CD] text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-[#E476CD] text-sm transition-colors">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
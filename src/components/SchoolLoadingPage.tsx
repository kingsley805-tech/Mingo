import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg'
const SchoolLoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#252B38]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes walk {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-2px) translateY(-3px); }
          75% { transform: translateX(2px) translateY(-3px); }
        }
        
        @keyframes swing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(228, 118, 205, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(228, 118, 205, 0.8)); }
        }
        
        @keyframes welcomeSlide {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(0) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #E476CD; }
        }
        
        .float { animation: float 3s ease-in-out infinite; }
        .walk { animation: walk 0.6s ease-in-out infinite; }
        .swing { animation: swing 1s ease-in-out infinite; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .slide-in-left { animation: slideInLeft 1s ease-out forwards; }
        .slide-in-right { animation: slideInRight 1s ease-out forwards; }
        .bounce { animation: bounce 2s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .rotate { animation: rotate 20s linear infinite; }
        .scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .glow { animation: glow 2s ease-in-out infinite; }
        
        .welcome-slide { animation: welcomeSlide 1.5s ease-out forwards; }
        .typewriter { 
          overflow: hidden;
          border-right: 3px solid #E476CD;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end), blink 1s infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(228, 118, 205, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Books */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`book-${i}`}
            className="absolute float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <svg width="40" height="50" viewBox="0 0 40 50" fill="#E476CD">
              <rect x="5" y="0" width="30" height="45" rx="2" />
              <rect x="8" y="5" width="24" height="35" fill="white" opacity="0.3" />
            </svg>
          </div>
        ))}

        {/* Floating Pencils */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`pencil-${i}`}
            className="absolute bounce opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            <svg width="50" height="15" viewBox="0 0 50 15" fill="#E476CD">
              <polygon points="0,7.5 10,0 10,15" fill="#FFD700" />
              <rect x="10" y="3" width="35" height="9" />
              <rect x="45" y="5" width="5" height="5" fill="white" opacity="0.5" />
            </svg>
          </div>
        ))}

        {/* Rotating Circles */}
        <div className="absolute top-4 right-4 sm:top-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 border-2 sm:border-4 border-[#E476CD] rounded-full opacity-10 rotate"></div>
        <div className="absolute bottom-4 left-4 sm:bottom-20 sm:left-10 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 border-2 sm:border-4 border-white rounded-full opacity-10 rotate" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-8">
        
        {/* Company Name */}
        {showContent && (
          <div className="fade-in-up mb-4 sm:mb-8 mt-8 sm:mt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-2 glow px-4">
              Flamingo Academic College Ltd
            </h1>
          </div>
        )}
  
        {/* Welcome Message */}
        {showContent && (
          <div className="welcome-slide mb-4 sm:mb-6">
            <div className="text-center px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E476CD] mb-2 sm:mb-4 glow">
                Welcome to Flamingo Academic College Ltd
              </h2>
              <div className="typewriter text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium">
                Where Excellence Meets Education
              </div>
            </div>
          </div>
        )}

        {/* School Building with Logo */}
        {showContent && (
          <div className="fade-in-up delay-200 mb-8 sm:mb-12 md:mb-16">
            <div className="relative">
              <svg width="200" height="170" viewBox="0 0 280 240" className="drop-shadow-2xl sm:w-[240px] sm:h-[200px] md:w-[280px] md:h-[240px]" style={{ maxWidth: '100%', height: 'auto' }}>
                {/* Building Base */}
                <rect x="40" y="110" width="200" height="130" fill="#E476CD" />
                <rect x="50" y="120" width="180" height="120" fill="#252B38" />
                
                {/* Roof */}
                <polygon points="140,50 20,110 260,110" fill="#E476CD" />
                <polygon points="140,65 40,110 240,110" fill="white" opacity="0.2" />
                
                {/* Logo Container on Building */}
                <rect x="95" y="130" width="90" height="90" fill="white" rx="8" className="pulse" />
                
                {/* Clock Above Logo */}
                <circle cx="140" cy="85" r="15" fill="white" className="pulse" />
                <circle cx="140" cy="85" r="12" fill="#252B38" />
                <line x1="140" y1="85" x2="140" y2="76" stroke="#E476CD" strokeWidth="2" />
                <line x1="140" y1="85" x2="147" y2="85" stroke="#E476CD" strokeWidth="2" />
                
                {/* Windows on sides */}
                {[...Array(4)].map((_, i) => (
                  <g key={`window-left-${i}`}>
                    <rect
                      x="55"
                      y={135 + i * 25}
                      width="25"
                      height="20"
                      fill="white"
                      opacity="0.8"
                      className={`scale-in delay-${(i + 3) * 100}`}
                    />
                  </g>
                ))}
                {[...Array(4)].map((_, i) => (
                  <g key={`window-right-${i}`}>
                    <rect
                      x="200"
                      y={135 + i * 25}
                      width="25"
                      height="20"
                      fill="white"
                      opacity="0.8"
                      className={`scale-in delay-${(i + 3) * 100}`}
                    />
                  </g>
                ))}
                
                {/* Door */}
                <rect x="115" y="200" width="50" height="40" fill="white" className="scale-in delay-300" />
                <circle cx="155" cy="220" r="3" fill="#E476CD" />
              </svg>
              
              {/* Logo Image Overlay */}
              <div className="absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-in delay-400">
                <img 
                  src={Logo}
                  alt="Flamingo Logo"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain glow"
                />
                
              </div>
            </div>
          </div>
        )}

        {/* Students with Backpacks */}
        {showContent && (
          <div className="flex space-x-8 sm:space-x-12 md:space-x-16 mb-6 sm:mb-8 md:mb-12">
            {/* Student 1 */}
            <div className="slide-in-left delay-300">
              <svg width="60" height="90" viewBox="0 0 80 120" className="walk sm:w-[70px] sm:h-[105px] md:w-[80px] md:h-[120px]" style={{ maxWidth: '100%', height: 'auto' }}>
                {/* Backpack */}
                <ellipse cx="40" cy="45" rx="18" ry="20" fill="#E476CD" className="swing" />
                <rect x="30" y="35" width="20" height="25" fill="#E476CD" rx="3" className="swing" />
                <rect x="35" y="38" width="10" height="15" fill="white" opacity="0.3" className="swing" />
                
                {/* Straps */}
                <path d="M 32 40 Q 30 30 28 20" stroke="#E476CD" strokeWidth="3" fill="none" />
                <path d="M 48 40 Q 50 30 52 20" stroke="#E476CD" strokeWidth="3" fill="none" />
                
                {/* Head */}
                <circle cx="40" cy="20" r="12" fill="white" />
                
                {/* Body */}
                <rect x="32" y="32" width="16" height="30" fill="white" rx="3" />
                
                {/* Arms */}
                <rect x="22" y="35" width="8" height="25" fill="white" rx="4" />
                <rect x="50" y="35" width="8" height="25" fill="white" rx="4" />
                
                {/* Legs */}
                <rect x="32" y="62" width="6" height="30" fill="#252B38" rx="3" />
                <rect x="42" y="62" width="6" height="30" fill="#252B38" rx="3" />
                
                {/* Shoes */}
                <ellipse cx="35" cy="95" rx="5" ry="3" fill="#E476CD" />
                <ellipse cx="45" cy="95" rx="5" ry="3" fill="#E476CD" />
              </svg>
            </div>

            {/* Student 2 */}
            <div className="slide-in-right delay-500">
              <svg width="60" height="90" viewBox="0 0 80 120" className="walk sm:w-[70px] sm:h-[105px] md:w-[80px] md:h-[120px]" style={{ animationDelay: '0.3s', maxWidth: '100%', height: 'auto' }}>
                {/* Backpack */}
                <ellipse cx="40" cy="45" rx="18" ry="20" fill="white" className="swing" style={{ animationDelay: '0.3s' }} />
                <rect x="30" y="35" width="20" height="25" fill="white" rx="3" className="swing" style={{ animationDelay: '0.3s' }} />
                <rect x="35" y="38" width="10" height="15" fill="#E476CD" opacity="0.3" className="swing" style={{ animationDelay: '0.3s' }} />
                
                {/* Straps */}
                <path d="M 32 40 Q 30 30 28 20" stroke="white" strokeWidth="3" fill="none" />
                <path d="M 48 40 Q 50 30 52 20" stroke="white" strokeWidth="3" fill="none" />
                
                {/* Head */}
                <circle cx="40" cy="20" r="12" fill="#E476CD" />
                
                {/* Body */}
                <rect x="32" y="32" width="16" height="30" fill="#E476CD" rx="3" />
                
                {/* Arms */}
                <rect x="22" y="35" width="8" height="25" fill="#E476CD" rx="4" />
                <rect x="50" y="35" width="8" height="25" fill="#E476CD" rx="4" />
                
                {/* Legs */}
                <rect x="32" y="62" width="6" height="30" fill="#252B38" rx="3" />
                <rect x="42" y="62" width="6" height="30" fill="#252B38" rx="3" />
                
                {/* Shoes */}
                <ellipse cx="35" cy="95" rx="5" ry="3" fill="white" />
                <ellipse cx="45" cy="95" rx="5" ry="3" fill="white" />
              </svg>
            </div>
          </div>
        )}

        {/* Loading Text */}
        {showContent && (
          <div className="text-center fade-in-up delay-600 mb-4 sm:mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-[#E476CD] px-4">
              Preparing your learning experience...
            </p>
          </div>
        )}

        {/* Progress Bar */}
        {showContent && (
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md fade-in-up delay-800 px-4">
            <div className="relative h-3 sm:h-4 bg-white bg-opacity-20 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E476CD] to-white rounded-full transition-all duration-300 shimmer"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center mt-2 sm:mt-4 text-white text-lg sm:text-xl md:text-2xl font-bold pulse">
              {progress}%
            </div>
          </div>
        )}

        {/* Floating Dots */}
        {showContent && (
          <div className="flex space-x-2 sm:space-x-3 mt-4 sm:mt-6 md:mt-8 fade-in-up delay-700">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#E476CD] rounded-full bounce"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full bounce delay-100"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#E476CD] rounded-full bounce delay-200"></div>
          </div>
        )}
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg width="100%" height="100%" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#E476CD"
            opacity="0.3"
            className="float"
          />
          <path
            d="M0,80 C240,48 480,112 720,80 C960,48 1200,112 1440,80 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.1"
            className="float"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default SchoolLoadingPage;

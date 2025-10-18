import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';

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
    <div className="relative w-full min-h-screen overflow-auto bg-[#252B38]">
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
          border-right: 2px solid #E476CD;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end), blink 1s infinite;
        }
        
        @media (min-width: 640px) {
          .typewriter {
            border-right: 3px solid #E476CD;
          }
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Books */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`book-${i}`}
            className="absolute float opacity-15 sm:opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <svg width="30" height="40" viewBox="0 0 40 50" fill="#E476CD" className="sm:w-[40px] sm:h-[50px]">
              <rect x="5" y="0" width="30" height="45" rx="2" />
              <rect x="8" y="5" width="24" height="35" fill="white" opacity="0.3" />
            </svg>
          </div>
        ))}

        {/* Floating Pencils */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`pencil-${i}`}
            className="absolute bounce opacity-15 sm:opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            <svg width="40" height="12" viewBox="0 0 50 15" fill="#E476CD" className="sm:w-[50px] sm:h-[15px]">
              <polygon points="0,7.5 10,0 10,15" fill="#FFD700" />
              <rect x="10" y="3" width="35" height="9" />
              <rect x="45" y="5" width="5" height="5" fill="white" opacity="0.5" />
            </svg>
          </div>
        ))}

        {/* Rotating Circles */}
        <div className="absolute top-2 right-2 xs:top-4 xs:right-4 sm:top-8 sm:right-16 md:top-12 md:right-20 lg:top-16 lg:right-24 xl:top-20 xl:right-32 w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-2 sm:border-4 lg:border-6 border-[#E476CD] rounded-full opacity-8 sm:opacity-10 rotate"></div>
        <div className="absolute bottom-2 left-2 xs:bottom-4 xs:left-4 sm:bottom-16 sm:left-12 md:bottom-20 md:left-16 lg:bottom-24 lg:left-16 xl:bottom-32 xl:left-20 w-20 h-20 xs:w-24 xs:h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 border-2 sm:border-4 lg:border-6 border-white rounded-full opacity-8 sm:opacity-10 rotate" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-3 py-8 sm:px-4 sm:py-12 lg:px-8 xl:px-12">
        
        {/* Company Name */}
        {showContent && (
          <div className="fade-in-up mb-3 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 mt-4 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white text-center mb-2 glow px-2 sm:px-4 leading-tight">
              Flamingo Academic College Ltd
            </h1>
          </div>
        )}
  
        {/* Welcome Message */}
        {showContent && (
          <div className="welcome-slide mb-3 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6">
            <div className="text-center px-2 sm:px-4">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#E476CD] mb-2 sm:mb-3 md:mb-3 lg:mb-4 glow leading-tight">
                Welcome to Flamingo Academic College Ltd
              </h2>
              <div className="typewriter text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-white font-medium inline-block">
                Where Excellence Meets Education
              </div>
            </div>
          </div>
        )}

        {/* School Building with Logo */}
        {showContent && (
          <div className="fade-in-up delay-200 mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
            <div className="relative">
                
              <svg width="200" height="170" viewBox="0 0 280 240" className="drop-shadow-2xl w-[180px] h-[150px] xs:w-[200px] xs:h-[170px] sm:w-[220px] sm:h-[190px] md:w-[240px] md:h-[200px] lg:w-[260px] lg:h-[220px] xl:w-[280px] xl:h-[240px] 2xl:w-[320px] 2xl:h-[280px]" style={{ maxWidth: '100%', height: 'auto' }}>
                {/* Building Base */}
                <rect x="40" y="110" width="200" height="130" fill="#E476CD" />
                <rect x="50" y="120" width="180" height="120" fill="#252B38" />
                
                {/* Roof */}
                <polygon points="140,50 20,110 260,110" fill="#E476CD" />
                <polygon points="140,65 40,110 240,110" fill="white" opacity="0.2" />
                
                {/* Logo Container on Building */}
                <rect x="95" y="130" width="90" height="90" fill="white" rx="8" className="pulse" />
                
                {/* Logo directly in SVG */}
                <image 
                  x="125" 
                  y="160" 
                  width="40" 
                  height="40" 
                  href={Logo}
                  className="scale-in delay-400 glow"
                />
                
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
              </div>
          </div>
        )}

        {/* Students with Backpacks */}
        {showContent && (
          <div className="flex space-x-4 xs:space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 xl:space-x-14 2xl:space-x-16 mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
            {/* Student 1 */}
            <div className="slide-in-left delay-300">
              <svg width="60" height="90" viewBox="0 0 80 120" className="walk w-[50px] h-[75px] xs:w-[60px] xs:h-[90px] sm:w-[70px] sm:h-[105px] md:w-[75px] md:h-[112px] lg:w-[80px] lg:h-[120px] xl:w-[85px] xl:h-[127px] 2xl:w-[90px] 2xl:h-[135px]" style={{ maxWidth: '100%', height: 'auto' }}>
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
              <svg width="60" height="90" viewBox="0 0 80 120" className="walk w-[50px] h-[75px] xs:w-[60px] xs:h-[90px] sm:w-[70px] sm:h-[105px] md:w-[75px] md:h-[112px] lg:w-[80px] lg:h-[120px] xl:w-[85px] xl:h-[127px] 2xl:w-[90px] 2xl:h-[135px]" style={{ animationDelay: '0.3s', maxWidth: '100%', height: 'auto' }}>
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
          <div className="text-center fade-in-up delay-600 mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-5 2xl:mb-6">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-[#E476CD] px-2 sm:px-4">
              Preparing your learning experience...
            </p>
          </div>
        )}

        {/* Progress Bar */}
        {showContent && (
          <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl fade-in-up delay-800 px-2 sm:px-4">
            <div className="relative h-2 xs:h-3 sm:h-4 md:h-4 lg:h-5 xl:h-5 bg-white bg-opacity-20 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E476CD] to-white rounded-full transition-all duration-300 shimmer"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center mt-1 xs:mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4 text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold pulse">
              {progress}%
            </div>
          </div>
        )}

        {/* Floating Dots */}
        {showContent && (
          <div className="flex space-x-1 xs:space-x-2 sm:space-x-3 md:space-x-3 lg:space-x-4 xl:space-x-4 mt-2 xs:mt-3 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-5 2xl:mt-6 fade-in-up delay-700">
            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 bg-[#E476CD] rounded-full bounce"></div>
            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 bg-white rounded-full bounce delay-100"></div>
            <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 bg-[#E476CD] rounded-full bounce delay-200"></div>
          </div>
        )}
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 lg:h-32 pointer-events-none">
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
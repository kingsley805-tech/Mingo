import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, User, X, ExternalLink } from 'lucide-react';

const VideoPlayer = () => {
  const [selectedVideo] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<any>(null);

  // Function to extract video ID from YouTube URL for embedding
  const getVideoIdFromUrl = (url: string): string => {
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    // If no pattern matches, return empty string
    return '';
  };

  // Video gallery data - easily expandable for future videos
  const videoGallery = [
    {
        id: 1,
        title: "Flamingo Academic College Overview",
        speaker: "School Administration",
        position: "Flamingo Academic College",
        date: "December 2024",
        youtubeUrl: "https://youtu.be/1uWCNTWMrzw",
        description: "A comprehensive overview of our school facilities, programs, and educational approach."
      },
    {
      id: 2,
      title: "MOMENT OF FORCES 1- SECRET KEYS",
      speaker: "DR. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "Feb 8, 2022",
      youtubeUrl: "https://youtu.be/0K0LL95tJxA?si=lVJQmtqEf_vUmEqL",
      description: "This lesson video is clear the notion about moment of forces calculations being complicated especially when it comes to taking moment about a point in the clockwise and anticlockwise directions."
    },
    {
      id: 3,
      title: "MOMENT OF FORCES 2- SECRET KEYS",
      speaker: "DR. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "Feb 8, 2022",
      youtubeUrl: "https://youtu.be/RNbLVbO_2E0?si=wN7Zsdv6vxsrIZ_g",
      description: "Video designed to introduce learners to the concept of Genetics.introduction to the definition of some genetic terminologies.Genetic crosses by using appropriate diagrams."
    },
    {
      id: 4,
      title: "GENETICS 3-GENETIC TERMINOLOGIES",
      speaker: "DR. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: " Dec 27, 2022 ",
      youtubeUrl: "https://youtu.be/5B2gHGBoY1Y?si=S6GpXfx4wF_4MGuX",
      description: "Video designed to introduce learners to the concept of Genetics.introduction to the definition of some genetic terminologies.Genetic crosses by using appropriate diagrams."
    },
    
    {
      id: 5,
      title: "MOLE CONCEPT 1- Calculating Number of Entities",
      speaker: "DR. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: " Jan 9, 2023",
      youtubeUrl: "https://youtu.be/81BwQg1Usdc?si=uWEpWJs5gVKZCa5m",
      description: "This video is designed to introduce learners to the concept of mole Calculating the number of entities (molecules, ions, atoms, etc.) of substances."
    },
    {
      id: 6,
      title: "POLYNOMIALS 2- FUNCTIONAL NOTATION AND THE FACTOR THEOREM",
      speaker: "DR. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: " Jan 10, 2023",
      youtubeUrl: "https://youtu.be/r5tDe2G8lUE?si=gN_VBMPRZGorvMKT",
      description: "Lesson Video is designed to assist students in getting the concept of the algebra of polynomials( addition, subtraction, multiplication and divisions)"
    },
    {
      id: 7,
      title: "QUADRATIC TRINOMIALS 1- DECODE",
      speaker: "DR. Flamingo L.L. Lawson",
      position: "Director of Academic Affairs",
      date: "Feb 8, 2022",
      youtubeUrl: "https://youtu.be/pCZzdevlJhw?si=v9vAOf2wPMQYoyp8",
      description: "Designed for all students irrespective of their program of study. Get the tricks in solving quadratic expressions and equations within 30 seconds.)"
    },
    
  ];

  const currentVideo = videoGallery[selectedVideo];

  // Modal functions
  const openModal = (video: any) => {
    setModalVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252B38] to-[#2D2037] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Video <span className="text-[#E476CD]">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of videos featuring leadership insights, student stories, and campus highlights.
          </p>
        </motion.div>

        {/* YouTube Follow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-[#E476CD]/20 to-[#E476CD]/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-[#E476CD]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Follow Our YouTube Channel
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Stay updated with the latest educational content from Dr. Flamingo L.L. Lawson
            </p>
            <a
              href="https://www.youtube.com/@dr.flamingolllawson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E476CD] hover:bg-[#E476CD]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe to @dr.flamingolllawson
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getVideoIdFromUrl(currentVideo.youtubeUrl)}?autoplay=0&mute=1&rel=0&modestbranding=1&showinfo=0&enablejsapi=1`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {currentVideo.title}
            </h2>
            <div className="flex items-center justify-center gap-6 text-gray-300 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#E476CD]" />
                <span>{currentVideo.speaker}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#E476CD]" />
                <span>{currentVideo.date}</span>
              </div>
            </div>
            <div className="h-1 w-32 mx-auto mb-4 rounded-full bg-[#E476CD]"></div>
            <p className="text-lg text-gray-300 font-light tracking-wide mb-2">
              {currentVideo.position}
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {currentVideo.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Video Thumbnail Gallery */}
        {videoGallery.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              More Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoGallery.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => openModal(video)}
                >
                  <div className="relative">
                    <div className="relative pb-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                        src={`https://www.youtube.com/embed/${getVideoIdFromUrl(video.youtubeUrl)}?autoplay=0&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#E476CD] rounded-full p-4">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-2 line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">{video.speaker}</p>
                    <p className="text-gray-400 text-xs">{video.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Future Videos Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Videos Coming Soon
            </h3>
            <p className="text-gray-300 mb-6">
              We're constantly creating new content to showcase our school community, achievements, and educational insights.
            </p>
            <div className="flex items-center justify-center gap-4 text-[#E476CD] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#E476CD] animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-[#E476CD] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#E476CD] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <a
              href="https://www.youtube.com/@dr.flamingolllawson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E476CD] hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe for more content
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Animated background particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: '#E476CD',
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: 0.1,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-6xl w-full max-h-[95vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Full Video Player */}
            <div className="relative pb-[56.25%] rounded-xl overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getVideoIdFromUrl(modalVideo.youtubeUrl)}?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0&enablejsapi=1`}
                title={modalVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

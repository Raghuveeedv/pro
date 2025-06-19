import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        >
          {/* Multiple video sources for better browser compatibility */}
          <source
            src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Construction and drilling operations"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Sri Sai Drillers &</span>
            <span className="block text-blue-400">Infrastructure Pvt. Ltd.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-light max-w-4xl mx-auto">
            Experts in Drilling, Geo-Infra Developments & Rain Water Harvesting Systems
          </p>
          
          <div className="pt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Services
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              View Projects
            </button>
          </div>

          {/* Key Stats Overlay */}
          <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400">30+</div>
              <div className="text-sm lg:text-base text-blue-100 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400">500+</div>
              <div className="text-sm lg:text-base text-blue-100 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400">200+</div>
              <div className="text-sm lg:text-base text-blue-100 font-medium">Satisfied Clients</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2 opacity-70">Scroll Down</span>
            <ChevronDown className="h-8 w-8 text-white opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
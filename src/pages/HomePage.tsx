import React from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegacySection from '../components/LegacySection';
import MissionVisionSection from '../components/MissionVisionSection';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <source
              src="https://res.cloudinary.com/dy9zlgjh6/video/upload/v1749747367/SSDIPL_Video_aa4nya.mov"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            <img
              src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Construction and drilling operations"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20 sm:py-24 lg:py-32">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Sri Sai Drillers &</span>
              <span className="block text-blue-400">Infrastructure Pvt. Ltd.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 font-light max-w-4xl mx-auto">
              Experts in Drilling, Geo-Infra Developments & Rain Water Harvesting Systems
            </p>

            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              With over 30 years of excellence, we are the backbone of infrastructure development, 
              delivering innovative solutions that build the foundation of tomorrow.
            </p>
            
            <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center px-4">
              <Link 
                to="/services"
                className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/projects"
                className="group w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Projects
              </Link>
            </div>
          </div>

          {/* Key Stats Overlay - Now with proper spacing and mobile responsive */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">30+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-blue-100 font-medium">Years Experience</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">500+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-blue-100 font-medium">Projects Completed</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">200+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-blue-100 font-medium">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-white text-xs sm:text-sm mb-2 opacity-70">Discover More</span>
              <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <LegacySection />

      {/* Mission Vision Section */}
      <MissionVisionSection />

      {/* Quick Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-900">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions for all your drilling and development needs
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Drilling & Motor Installation',
                description: 'Professional water well drilling with advanced equipment and expert motor installation services.',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                title: 'Geological Survey',
                description: 'Comprehensive geological assessments and groundwater exploration using modern techniques.',
                image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              {
                title: 'Rainwater Harvesting',
                description: 'Sustainable water conservation solutions through innovative rainwater harvesting systems.',
                image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Partner with us for your next infrastructure project and experience 
            the difference that three decades of expertise makes.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Calendar, Users, Award, TrendingUp, Heart, Shield, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const timeline = [
    {
      year: '1991',
      title: 'Foundation',
      description: 'Sri Sai Borewells (SSBW) founded by Mr. Thotakura Ramarao with a vision to provide reliable water solutions.',
      icon: Calendar
    },
    {
      year: '2000',
      title: 'Expansion',
      description: 'Expanded services to include geological surveys and civil works across Andhra Pradesh.',
      icon: TrendingUp
    },
    {
      year: '2010',
      title: 'Innovation',
      description: 'Introduced advanced drilling technologies and rainwater harvesting systems.',
      icon: Award
    },
    {
      year: '2020',
      title: 'Transformation',
      description: 'Evolved into Sri Sai Drillers & Infrastructure Pvt. Ltd. (SSDIPL) with enhanced capabilities.',
      icon: Star
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Continuing legacy with 500+ projects and 200+ satisfied clients across government and private sectors.',
      icon: Users
    }
  ];

  const leadership = [
    {
      name: 'Mr. Thotakura Ramarao',
      title: 'Chairman & Founder',
      description: 'Visionary leader with 30+ years of experience in drilling and infrastructure development.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Leadership Team',
      title: 'Chief Executive Officer',
      description: 'Driving innovation and excellence in infrastructure solutions with strategic vision.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Trust',
      description: 'Built on three decades of reliable service and transparent business practices that have earned us the confidence of government agencies and private clients alike.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Uncompromising commitment to excellence in every project, using advanced technology and skilled professionals to deliver superior results.'
    },
    {
      icon: Award,
      title: 'Legacy',
      description: 'A proud heritage of innovation and success, continuously evolving to meet modern infrastructure challenges while maintaining our founding principles.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 right-1/4 transform rotate-12">
          <img 
            src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1749742780/SSDIPL_LOGO-removebg-preview_t69d6x.png" 
            alt="SSDIPL Logo Watermark" 
            className="w-96 h-96 object-contain filter grayscale"
          />
        </div>
        <div className="absolute bottom-1/4 left-1/4 transform -rotate-12">
          <img 
            src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1749742780/SSDIPL_LOGO-removebg-preview_t69d6x.png" 
            alt="SSDIPL Logo Watermark" 
            className="w-64 h-64 object-contain filter grayscale"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-900">Our Company</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership - discover the story of three decades 
            of excellence in drilling and infrastructure development.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Company History */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded in <strong>1991</strong> by visionary entrepreneur <strong>Mr. Thotakura Ramarao</strong>, 
                our company began as <strong>Sri Sai Borewells (SSBW)</strong> with a simple yet powerful mission: 
                to provide reliable water solutions to communities across Andhra Pradesh.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through three decades of dedicated service, we have evolved from a local borewell company 
                into <strong>Sri Sai Drillers & Infrastructure Pvt. Ltd. (SSDIPL)</strong>, a comprehensive 
                infrastructure development organization serving government agencies and private clients nationwide.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our transformation reflects our commitment to growth, innovation, and excellence. Today, 
                we stand as a testament to what vision, hard work, and unwavering dedication can achieve.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Company history and growth"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">1991</div>
                  <div className="text-sm opacity-90">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Timeline of Growth</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 p-3 rounded-lg mr-4">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-900">{item.year}</div>
                          <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                  <p className="text-blue-600 font-semibold mb-4">{leader.title}</p>
                  <p className="text-gray-700 leading-relaxed">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Built Over Years</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full inline-block group-hover:bg-blue-600 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">{value.title}</h4>
                  <p className="text-gray-700 leading-relaxed text-center">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
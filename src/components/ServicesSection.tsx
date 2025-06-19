import React, { useState } from 'react';
import { Drill, Search, Building, Pipette as Pipe, Droplets, ChevronDown, ChevronUp } from 'lucide-react';
import QuoteModal from './QuoteModal';

const ServicesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const services = [
    {
      icon: Drill,
      title: 'Drilling & Motor Installation',
      description: 'Comprehensive drilling solutions with state-of-the-art equipment and expert motor installation services.',
      details: [
        'Water well drilling up to 1000+ feet depth',
        'High-capacity submersible pump installation',
        'Borewell maintenance and rehabilitation',
        'Advanced drilling techniques for challenging terrains',
        'Quality testing and water yield assessment'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Search,
      title: 'Geological Survey',
      description: 'Professional geological assessments and groundwater exploration using modern surveying techniques.',
      details: [
        'Groundwater potential mapping',
        'Geophysical surveys and soil analysis',
        'Site feasibility studies',
        'Hydrogeological investigations',
        'Environmental impact assessments'
      ],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Building,
      title: 'Civil Works',
      description: 'Complete civil engineering solutions for infrastructure development and construction projects.',
      details: [
        'Foundation and structural work',
        'Road construction and maintenance',
        'Building construction and renovation',
        'Site preparation and earthwork',
        'Quality control and project management'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Pipe,
      title: 'Pipelines',
      description: 'Expert pipeline installation and maintenance for water distribution and infrastructure systems.',
      details: [
        'Water supply pipeline installation',
        'Sewerage and drainage systems',
        'Pipeline maintenance and repair',
        'Pressure testing and quality assurance',
        'Network design and optimization'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Droplets,
      title: 'Rainwater Harvesting Systems',
      description: 'Sustainable water conservation solutions through innovative rainwater harvesting technologies.',
      details: [
        'Rooftop rainwater harvesting systems',
        'Groundwater recharge structures',
        'Storage tank design and installation',
        'Filtration and purification systems',
        'Maintenance and monitoring services'
      ],
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleGetQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-900">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions backed by three decades of expertise 
              and cutting-edge technology to meet all your drilling and development needs.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expandable Details */}
                  <div className="space-y-3">
                    <button
                      onClick={() => toggleCard(index)}
                      className="flex items-center justify-between w-full text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                    >
                      <span>View Details</span>
                      {expandedCard === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>

                    {expandedCard === index && (
                      <div className="mt-4 space-y-2 animate-fade-in-up">
                        {service.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <button 
                      onClick={() => handleGetQuote(service.title)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 lg:p-12 rounded-2xl text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our expert team today for a consultation and discover how our comprehensive 
                services can bring your infrastructure vision to life.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <button 
                  onClick={() => handleGetQuote('General Consultation')}
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  View Our Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceName={selectedService}
      />
    </>
  );
};

export default ServicesSection;
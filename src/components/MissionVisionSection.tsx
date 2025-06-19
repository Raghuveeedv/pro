import React from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-900">Mission & Vision</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 ml-4">Mission</h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To provide innovative, reliable, and sustainable drilling and infrastructure solutions 
                that exceed client expectations while preserving environmental integrity and promoting 
                water conservation through cutting-edge technology and expertise.
              </p>

              <div className="space-y-3">
                {[
                  'Deliver exceptional drilling services',
                  'Ensure environmental sustainability',
                  'Maintain highest safety standards',
                  'Foster long-term client relationships'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-yellow-800 ml-4">Vision</h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To be the leading infrastructure development company in India, recognized for our 
                innovation in drilling technology, commitment to sustainability, and contribution 
                to water security and infrastructure development across the nation.
              </p>

              <div className="space-y-3">
                {[
                  'Pioneer advanced drilling technologies',
                  'Expand nationwide presence',
                  'Lead in sustainable practices',
                  'Set industry benchmarks'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
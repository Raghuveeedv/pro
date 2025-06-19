import React from 'react';
import { Award, TrendingUp, Users } from 'lucide-react';

const LegacySection: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '30+' },
    { icon: TrendingUp, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Satisfied Clients', value: '200+' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern with Logo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="https://res.cloudinary.com/dy9zlgjh6/image/upload/v1749742780/SSDIPL_LOGO-removebg-preview_t69d6x.png" 
            alt="SSDIPL Logo Background" 
            className="w-96 h-96 object-contain filter grayscale"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            30+ Years of <span className="text-blue-900">Undefeated Success</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed text-lg">
                From our humble beginnings as <strong>Sri Sai Boring Wells (SSBW)</strong> to our evolution into 
                <strong> Sri Sai Drillers & Infrastructure Pvt. Ltd. (SSDIPL)</strong>, we have consistently 
                delivered excellence in infrastructure development.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our journey spans over three decades, during which we have pioneered innovative drilling 
                techniques, established robust geo-infrastructure systems, and revolutionized rainwater 
                harvesting solutions across Andhra Pradesh and beyond.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300 mb-3">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction equipment and infrastructure development"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">1990</div>
                <div className="text-sm opacity-90">Established</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
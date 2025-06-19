import React from 'react';
import { Building2, Droplets, Shield, TreePine, Zap, Globe } from 'lucide-react';

const ClientsSection: React.FC = () => {
  const clients = [
    { name: 'RWS', icon: Droplets, description: 'Rural Water Supply' },
    { name: 'PR&RP', icon: Building2, description: 'Panchayat Raj & Rural Development' },
    { name: 'PR', icon: Shield, description: 'Public Relations' },
    { name: 'Public Health', icon: Shield, description: 'Public Health Engineering' },
    { name: 'VMC', icon: Building2, description: 'Vijayawada Municipal Corporation' },
    { name: 'CGWB', icon: Globe, description: 'Central Ground Water Board' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-400">Trusted by</span> Leading Organizations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We have successfully partnered with government agencies and public institutions 
            to deliver critical infrastructure projects across the region.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl text-center"
            >
              <div className="bg-blue-600 bg-opacity-20 p-4 rounded-lg mb-4 group-hover:bg-opacity-30 transition-colors duration-300">
                <client.icon className="h-8 w-8 text-blue-400 mx-auto group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{client.name}</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-900 bg-opacity-50 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Growing List of Satisfied Clients
            </h3>
            <p className="text-blue-200 mb-6">
              Experience the difference that three decades of expertise makes in your infrastructure projects.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
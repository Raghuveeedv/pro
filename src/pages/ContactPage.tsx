import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-blue-300">Touch</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your next infrastructure project? Contact us today for expert consultation
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-anchor mt-6"></div>
        </div>
      </section>

      {/* Contact Content */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
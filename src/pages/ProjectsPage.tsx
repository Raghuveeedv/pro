import React from 'react';
import ProjectsSection from '../components/ProjectsSection';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-blue-300">Projects</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of successful infrastructure projects and the positive impact we've made
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Projects Content */}
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;
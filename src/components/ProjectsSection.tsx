import React, { useState } from 'react';
import { Building2, Users, TrendingUp, Star, Quote, MapPin, Calendar, DollarSign } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Government', 'Private', 'Ongoing'];

  const projects = [
    {
      category: 'Government',
      title: 'State Water Supply Projects',
      department: 'PR, VMC, RWS',
      value: '15,000+',
      description: 'Comprehensive water supply infrastructure development across multiple government departments.',
      location: 'Andhra Pradesh',
      year: '2020-2024',
      status: 'Completed',
      icon: Building2
    },
    {
      category: 'Private',
      title: 'Private Sector Developments',
      department: 'Various Industries',
      value: '20,000+',
      description: 'Industrial and residential drilling projects for private sector clients.',
      location: 'Multiple States',
      year: '2015-2024',
      status: 'Completed',
      icon: Users
    },
    {
      category: 'Government',
      title: 'CGWB Central Projects',
      department: 'Central Ground Water Board',
      value: '₹35+ Crores',
      description: 'Large-scale groundwater development and management projects under central government.',
      location: 'Pan India',
      year: '2018-2023',
      status: 'Completed',
      icon: TrendingUp
    },
    {
      category: 'Ongoing',
      title: 'Smart City Infrastructure',
      department: 'Municipal Corporation',
      value: '₹12 Crores',
      description: 'Modern infrastructure development including smart water management systems.',
      location: 'Vijayawada',
      year: '2024-2025',
      status: 'In Progress',
      icon: Star
    }
  ];

  const testimonials = [
    {
      quote: "The M/s Sri Sai borewells has been executing a commendable outsourcing drilling works for our PIB project. Their services are quick, transparent and efficient man power deployment to deliver our works ahead of time schedules. Appreciate their professional work and team spirit. Best of luck.",
      name: "Executive Engineer",
      role: "Project Director",
      organization: "CGWB, Chennai",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      quote: "Sri Sai Drillers has been instrumental in our water supply projects. Their expertise and reliability have made them our preferred partner for infrastructure development.",
      name: "Dr. Rajesh Kumar",
      role: "Project Director",
      organization: "Rural Water Supply Department",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      quote: "The quality of work and timely completion of projects by SSDIPL is commendable. They have consistently delivered beyond our expectations.",
      name: "Mrs. Priya Sharma",
      role: "Chief Engineer",
      organization: "Public Health Engineering",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-900">Projects & Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of successful infrastructure projects and the positive 
            impact we've made across government and private sectors.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <project.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-blue-600 font-medium">{project.department}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-2xl font-bold text-green-600">{project.value}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Project Statistics</h3>
            <p className="text-blue-200">Our impact in numbers across three decades</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">35,000+</div>
              <div className="text-blue-200">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">₹50+</div>
              <div className="text-blue-200">Crores Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15</div>
              <div className="text-blue-200">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h3>
            <p className="text-gray-600">What our clients say about our work</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Andrea
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            UX/UI Designer crafting meaningful digital experiences through thoughtful design and user-centered solutions
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto font-light">
            Transforming complex problems into elegant, intuitive interfaces that delight users and drive business growth
          </p>
          
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-all duration-300 group"
          >
            <span className="font-light">View My Work</span>
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;

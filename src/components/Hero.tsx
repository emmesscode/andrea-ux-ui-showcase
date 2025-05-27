
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isColorTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div 
          className="animate-fade-in"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 600)
          }}
        >
          <h1 className={`text-5xl md:text-7xl font-light mb-6 tracking-tight opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards] ${
            isColorTheme ? 'text-primary' : 'text-gray-900'
          }`}>
            Andrea
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
            UX/UI Designer crafting meaningful digital experiences through thoughtful design and user-centered solutions
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto font-light opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
            Transforming complex problems into elegant, intuitive interfaces that delight users and drive business growth
          </p>
          
          <div className="opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
            <button
              onClick={scrollToProjects}
              className={`inline-flex items-center space-x-2 transition-all duration-500 group relative overflow-hidden px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 ${
                isColorTheme ? 'text-primary hover:text-primary' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span className="font-light relative z-10">View My Work</span>
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced parallax decorative elements */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-[float_6s_ease-in-out_infinite]"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 animate-[float_6s_ease-in-out_infinite_3s]"
        style={{
          transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.05}deg)`
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-10 animate-[float_8s_ease-in-out_infinite_1s]"
        style={{
          transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.15}deg)`
        }}
      ></div>
    </section>
  );
};

export default Hero;

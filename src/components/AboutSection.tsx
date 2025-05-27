
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Coffee, Lightbulb } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isColorTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, label: "Years of Experience", value: "8+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Coffee, label: "Projects Completed", value: "200+" },
    { icon: Lightbulb, label: "Design Awards", value: "12" }
  ];

  const skills = [
    "User Experience Design",
    "User Interface Design",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Figma",
    "Adobe Creative Suite",
    "Webflow",
    "React & CSS"
  ];

  return (
    <section id="about" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                About Andrea
              </h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p className="text-lg opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
                  I'm a passionate UX/UI designer with over 8 years of experience creating digital experiences that matter. My approach combines user-centered design principles with business objectives to deliver solutions that are both beautiful and functional.
                </p>
                <p className="opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
                  My journey began in graphic design, but I quickly discovered my true passion lies in understanding user behavior and translating complex problems into elegant, intuitive interfaces. I believe great design is invisible – it just works.
                </p>
                <p className="opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
                  When I'm not designing, you'll find me exploring new design trends, mentoring upcoming designers, or enjoying a good cup of coffee while sketching ideas for my next project.
                </p>
              </div>
            </div>

            <div className="opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
              <h3 className="text-xl font-light text-gray-900 mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 text-sm font-light rounded-full transition-all duration-300 opacity-0 animate-[fade-in_0.6s_ease-out_forwards] hover:-translate-y-1 hover:scale-105 ${
                      isColorTheme 
                        ? 'bg-gradient-to-r from-[#bcbc82] to-[#C9AF94] text-white border border-transparent hover:shadow-md' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    style={{ animationDelay: `${1000 + (index * 100)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_forwards] group"
                style={{ animationDelay: `${600 + (index * 150)}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-all duration-300 ${
                  isColorTheme ? 'bg-gradient-to-r from-[#bcbc82] to-[#C9AF94]' : 'bg-gray-100'
                } group-hover:${isColorTheme ? 'shadow-lg' : 'bg-gray-200'}`}>
                  <stat.icon 
                    size={24} 
                    className={`${isColorTheme ? 'text-white' : 'text-gray-700'} group-hover:scale-110 transition-transform duration-300`} 
                  />
                </div>
                <div className="text-3xl font-light text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-light">
                  {stat.label}
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

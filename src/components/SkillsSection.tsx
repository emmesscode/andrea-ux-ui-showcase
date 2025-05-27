import React, { useEffect, useRef, useState } from 'react';
import { Palette, Code, Database, Figma, Zap, Users, Lightbulb, Settings } from 'lucide-react';
import { ThemedButton } from '@/components/ui/themed-button';
import { useTheme } from '@/contexts/ThemeContext';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const skills = [
    { name: "User Experience Design", icon: Users, category: "Design", delay: "0s", color: "theme-pastel-blue" },
    { name: "User Interface Design", icon: Palette, category: "Design", delay: "0.5s", color: "theme-pastel-pink" },
    { name: "Prototyping", icon: Zap, category: "Design", delay: "1s", color: "theme-pastel-yellow" },
    { name: "Design Systems", icon: Settings, category: "Design", delay: "1.5s", color: "theme-pastel-green" },
    { name: "User Research", icon: Lightbulb, category: "Research", delay: "2s", color: "theme-pastel-purple" },
    { name: "Figma", icon: Figma, category: "Tools", delay: "0.2s", color: "theme-pastel-blue" },
    { name: "React & CSS", icon: Code, category: "Development", delay: "0.7s", color: "theme-pastel-pink" },
    { name: "Adobe Creative Suite", icon: Database, category: "Tools", delay: "1.2s", color: "theme-pastel-yellow" },
  ];

  const tools = [
    { name: "Figma", category: "Design", delay: "0.3s" },
    { name: "Adobe XD", category: "Design", delay: "0.8s" },
    { name: "Sketch", category: "Design", delay: "1.3s" },
    { name: "Photoshop", category: "Visual", delay: "0.6s" },
    { name: "Illustrator", category: "Visual", delay: "1.1s" },
    { name: "After Effects", category: "Motion", delay: "1.6s" },
    { name: "Principle", category: "Animation", delay: "0.4s" },
    { name: "InVision", category: "Collaboration", delay: "0.9s" },
    { name: "Webflow", category: "Development", delay: "1.4s" },
    { name: "Framer", category: "Prototyping", delay: "1.9s" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 overflow-hidden relative" ref={sectionRef}>
      {/* Scaled dot pattern overlay that follows mouse */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-300 ease-out"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 2px, transparent 0)`,
          backgroundSize: '40px 40px',
          backgroundPosition: `${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px`,
          transform: `scale(${1 + Math.min(Math.sqrt((mousePosition.x - sectionRef.current?.clientWidth / 2) * (mousePosition.x - sectionRef.current?.clientWidth / 2) + (mousePosition.y - sectionRef.current?.clientHeight / 2) * (mousePosition.y - sectionRef.current?.clientHeight / 2)) / 800, 0.2)})`,
          transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-light text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Skills & Tools
          </h2>
          <p className={`text-xl text-gray-600 font-light max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className={`text-2xl font-light text-gray-900 mb-12 text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Core Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: skill.delay,
                  animation: isVisible ? `fade-in 0.8s ease-out ${skill.delay} forwards` : 'none'
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${isColorTheme ? skill.color : 'bg-gray-100'} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <skill.icon size={24} className="text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-lg font-light text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {skill.name}
                  </h4>
                  <ThemedButton variant="ghost" size="sm" className="text-xs">
                    {skill.category}
                  </ThemedButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Cloud */}
        <div>
          <h3 className={`text-2xl font-light text-gray-900 mb-12 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Design & Development Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <ThemedButton
                key={index}
                variant="outline"
                size="sm"
                className={`transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: tool.delay,
                  animation: isVisible ? `fade-in 0.8s ease-out ${tool.delay} forwards` : 'none'
                }}
              >
                {tool.name}
              </ThemedButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

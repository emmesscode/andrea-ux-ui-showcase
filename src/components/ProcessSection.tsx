import React, { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Hammer, TestTube } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const { isColorTheme } = useTheme();

  const processSteps = [
    {
      id: 1,
      number: "01",
      title: "Research",
      description: "Deep dive into user needs, market analysis, and competitive research to understand the problem space and identify opportunities for meaningful design solutions.",
      icon: Search,
      details: ["User Interviews", "Market Analysis", "Competitive Research", "Stakeholder Mapping"]
    },
    {
      id: 2,
      number: "02", 
      title: "Ideate",
      description: "Generate creative solutions through brainstorming, sketching, and collaborative workshops to explore multiple design directions and concepts.",
      icon: Lightbulb,
      details: ["Brainstorming Sessions", "Sketching & Wireframing", "Design Workshops", "Concept Development"]
    },
    {
      id: 3,
      number: "03",
      title: "Prototype",
      description: "Build interactive prototypes and design systems to validate concepts, test user flows, and communicate design ideas effectively to stakeholders.",
      icon: Hammer,
      details: ["Interactive Prototypes", "Design Systems", "User Flow Mapping", "Stakeholder Reviews"]
    },
    {
      id: 4,
      number: "04",
      title: "Test",
      description: "Validate designs through user testing, gather feedback, and iterate based on insights to ensure the final solution meets user needs and business goals.",
      icon: TestTube,
      details: ["User Testing", "A/B Testing", "Feedback Analysis", "Design Iteration"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Check if section is in viewport
        if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
          // Calculate when section hits bottom 66% of viewport (33% from top)
          const triggerPoint = viewportHeight * 0.33;
          
          if (sectionTop <= triggerPoint) {
            // Section has hit the bottom 66% of viewport
            // Calculate progress through the section
            const scrollableDistance = sectionHeight + triggerPoint;
            const scrolled = triggerPoint - sectionTop;
            const scrollProgress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
            
            if (scrollProgress < 0.5) {
              // First half: show steps 1 and 2
              setActiveSteps([0, 1]);
            } else {
              // Second half: show steps 3 and 4
              setActiveSteps([2, 3]);
            }
          } else {
            // Section hasn't hit the trigger point yet
            setActiveSteps([]);
          }
        } else {
          setActiveSteps([]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]">
            Design Process
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
            A systematic approach to creating user-centered design solutions that deliver measurable business impact
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeSteps.includes(index);
            
            return (
              <div
                key={step.id}
                className={`transition-all duration-700 ${
                  isActive ? 'opacity-100 transform translate-y-0' : 'opacity-40 transform translate-y-8'
                }`}
                style={{ minHeight: '400px' }}
              >
                <div className="relative">
                  {/* Step Number */}
                  <div className="flex items-center mb-8">
                    <span className={`text-8xl font-light transition-all duration-700 ${
                      isActive 
                        ? isColorTheme ? 'bg-gradient-to-r from-[#bcbc82] to-[#C9AF94] bg-clip-text text-transparent' : 'text-gray-900'
                        : 'text-gray-300'
                    }`}>
                      {step.number}
                    </span>
                    <div className={`ml-6 p-4 rounded-2xl transition-all duration-700 ${
                      isActive 
                        ? isColorTheme 
                          ? 'bg-gradient-to-r from-[#bcbc82] to-[#C9AF94] text-white' 
                          : 'bg-gray-900 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      <Icon size={32} />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-6">
                    <h3 className={`text-4xl font-light transition-all duration-700 ${
                      isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`text-lg leading-relaxed transition-all duration-700 ${
                      isActive ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {step.description}
                    </p>

                    {/* Step Details */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className={`p-3 rounded-lg text-sm font-light transition-all duration-700 ${
                            isActive 
                              ? isColorTheme
                                ? 'bg-white bg-gradient-to-r from-[#bcbc82] to-[#C9AF94] bg-clip-text text-transparent border border-gray-200'
                                : 'bg-white text-gray-700 shadow-sm'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className={`absolute -left-6 top-0 w-1 h-full rounded-full transition-all duration-700 ${
                    isActive 
                      ? isColorTheme ? 'bg-gradient-to-b from-[#bcbc82] to-[#C9AF94]' : 'bg-gray-900'
                      : 'bg-gray-200'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

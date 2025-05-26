
import React, { useEffect, useRef, useState } from 'react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const projects = [
    {
      id: 1,
      title: "FinanceFlow",
      category: "Mobile App Design",
      description: "A comprehensive financial management app that simplifies personal banking and investment tracking with intuitive data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["UX Research", "Mobile Design", "Prototyping"],
      link: "#"
    },
    {
      id: 2,
      title: "EcoMarket",
      category: "E-commerce Platform", 
      description: "Sustainable shopping platform connecting eco-conscious consumers with verified green products through seamless user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Web Design", "User Journey", "A/B Testing"],
      link: "#"
    },
    {
      id: 3,
      title: "MediConnect",
      category: "Healthcare Dashboard",
      description: "Patient management system for healthcare providers featuring streamlined workflows and comprehensive data visualization.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tags: ["Dashboard Design", "Data Visualization", "Healthcare UX"],
      link: "#"
    },
    {
      id: 4,
      title: "LearnSpace", 
      category: "EdTech Platform",
      description: "Interactive learning platform that gamifies education through personalized learning paths and collaborative features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["EdTech", "Gamification", "Responsive Design"],
      link: "#"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Adjust for header offset
        const headerOffset = 200; // Account for header space
        
        if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
          const adjustedProgress = Math.max(0, Math.min(1, (viewportHeight - sectionTop - headerOffset) / (sectionHeight - headerOffset)));
          const projectIndex = Math.floor(adjustedProgress * projects.length);
          setActiveProject(Math.min(projectIndex, projects.length - 1));
          setScrollY(adjustedProgress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section id="projects" ref={sectionRef} className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - with proper spacing */}
        <div className="text-center py-24 relative z-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
            A collection of projects where design meets functionality, creating impactful user experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="flex items-start relative" style={{ minHeight: `${100 + (projects.length * 100)}vh` }}>
          {/* Fixed Image Container - Left Side */}
          <div className="w-1/2 sticky top-1/2 transform -translate-y-1/2 pr-12 z-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === activeProject 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Text Content - Right Side */}
          <div className="w-1/2 pl-12 relative z-20">
            {/* Add top spacing to push content down and align with images */}
            <div className="h-96"></div>
            
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`mb-96 ${index === projects.length - 1 ? 'mb-96' : ''}`}
              >
                <div className={`transition-all duration-700 ${
                  index === activeProject 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-40 transform translate-y-8'
                }`}>
                  <p className="text-sm text-gray-500 font-light uppercase tracking-wider mb-4">
                    {project.category}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-light rounded-full transition-all duration-300 hover:bg-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-all duration-300 group">
                    <span className="font-light">View Project</span>
                    <div className="w-8 h-0.5 bg-gray-400 group-hover:bg-gray-900 transition-all duration-300 group-hover:w-12"></div>
                  </button>
                </div>
              </div>
            ))}
            
            {/* Add bottom spacing to ensure last project aligns properly */}
            <div className="h-96"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

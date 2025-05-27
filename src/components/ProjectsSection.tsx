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
      link: "#",
      problem: "Users struggled with fragmented financial data across multiple platforms, making it difficult to track spending and investment performance effectively.",
      solution: "Designed a unified dashboard with AI-powered insights and personalized recommendations to streamline financial decision-making.",
      outcome: "40% increase in user engagement and 60% improvement in financial goal completion rates.",
      metrics: [
        { label: "User Engagement", value: "+40%" },
        { label: "Goal Completion", value: "+60%" },
        { label: "App Store Rating", value: "4.8/5" },
        { label: "Monthly Active Users", value: "250K+" }
      ],
      process: ["User Research & Interviews", "Information Architecture", "Interactive Prototyping", "Usability Testing"]
    },
    {
      id: 2,
      title: "EcoMarket",
      category: "E-commerce Platform", 
      description: "Sustainable shopping platform connecting eco-conscious consumers with verified green products through seamless user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Web Design", "User Journey", "A/B Testing"],
      link: "#",
      problem: "Eco-conscious consumers had difficulty finding and verifying genuinely sustainable products, leading to decision paralysis and abandoned purchases.",
      solution: "Created a trust-based marketplace with transparent sustainability scoring and streamlined discovery features for verified eco-friendly products.",
      outcome: "85% reduction in cart abandonment and 3x increase in conversion rates for sustainable product categories.",
      metrics: [
        { label: "Cart Abandonment", value: "-85%" },
        { label: "Conversion Rate", value: "+300%" },
        { label: "User Trust Score", value: "9.2/10" },
        { label: "Product Verification", value: "98%" }
      ],
      process: ["Market Research", "Persona Development", "Journey Mapping", "Conversion Optimization"]
    },
    {
      id: 3,
      title: "MediConnect",
      category: "Healthcare Dashboard",
      description: "Patient management system for healthcare providers featuring streamlined workflows and comprehensive data visualization.",
      image: "https://images.unsplash.com/photo-1569320378109-30221689a282?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Dashboard Design", "Data Visualization", "Healthcare UX"],
      link: "#",
      problem: "Healthcare providers spent excessive time navigating complex systems, reducing patient face-time and increasing administrative burden.",
      solution: "Designed an intuitive dashboard with predictive analytics and automated workflows that prioritize patient care over paperwork.",
      outcome: "50% reduction in administrative time and 25% increase in patient satisfaction scores.",
      metrics: [
        { label: "Admin Time Saved", value: "-50%" },
        { label: "Patient Satisfaction", value: "+25%" },
        { label: "Workflow Efficiency", value: "+75%" },
        { label: "Error Reduction", value: "-90%" }
      ],
      process: ["Stakeholder Interviews", "Workflow Analysis", "Prototype Testing", "Clinical Validation"]
    },
    {
      id: 4,
      title: "LearnSpace", 
      category: "EdTech Platform",
      description: "Interactive learning platform that gamifies education through personalized learning paths and collaborative features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["EdTech", "Gamification", "Responsive Design"],
      link: "#",
      problem: "Students struggled with motivation and engagement in traditional online learning environments, leading to high dropout rates.",
      solution: "Developed a gamified learning experience with adaptive content delivery and social learning features to maintain engagement and improve outcomes.",
      outcome: "70% improvement in course completion rates and 45% increase in learning retention scores.",
      metrics: [
        { label: "Course Completion", value: "+70%" },
        { label: "Learning Retention", value: "+45%" },
        { label: "Student Engagement", value: "+80%" },
        { label: "Platform Usage", value: "+120%" }
      ],
      process: ["Educational Research", "Gamification Strategy", "Adaptive Design", "Learning Analytics"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Adjust for header offset and full-screen headline with increased spacing
        const headerOffset = viewportHeight + 400; // Increased spacing between headline and projects
        
        if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
          // Calculate progress through the scrollable projects area
          const scrollableAreaStart = viewportHeight - sectionTop - headerOffset;
          const scrollableAreaHeight = sectionHeight - headerOffset - viewportHeight;
          const scrollProgress = Math.max(0, Math.min(1, scrollableAreaStart / scrollableAreaHeight));
          
          // Calculate which project should be active based on scroll position
          // Each project takes up an equal portion of the scroll area
          const projectProgress = scrollProgress * projects.length;
          const projectIndex = Math.min(Math.floor(projectProgress), projects.length - 1);
          
          // For the last project, ensure it becomes active when its text is centered
          // by adjusting the threshold slightly
          const adjustedIndex = projectProgress >= projects.length - 0.5 ? projects.length - 1 : projectIndex;
          
          setActiveProject(adjustedIndex);
          setScrollY(scrollProgress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section id="projects" ref={sectionRef} className="relative bg-white">
      {/* Full-Screen Headline Section */}
      <div className="h-screen flex items-center justify-center relative">
        <div className="text-center max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 mb-8 opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards] leading-tight">
            Selected Work
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-3xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards] leading-relaxed">
            A collection of projects where design meets functionality, creating impactful user experiences
          </p>
        </div>
      </div>

      {/* Additional spacing between headline and projects */}
      <div className="h-48"></div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

          {/* Enhanced Scrolling Text Content - Right Side */}
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

                  {/* Enhanced Case Study Details */}
                  <div className="space-y-8 mb-8">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">Challenge</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">Solution</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">Impact</h4>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-light text-gray-900 mb-1">{metric.value}</div>
                            <div className="text-xs text-gray-600 uppercase tracking-wider">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Process */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">Process</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.process.map((step, stepIndex) => (
                          <span
                            key={stepIndex}
                            className="px-3 py-1 bg-gray-900 text-white text-xs font-light rounded-full"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* ... keep existing code (tags and button) */}
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

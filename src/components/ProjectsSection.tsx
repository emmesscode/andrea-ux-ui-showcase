
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
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

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            A collection of projects where design meets functionality, creating impactful user experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isColorTheme } = useTheme();

  return (
    <div 
      className={`group cursor-pointer opacity-0 animate-[fade-in_0.8s_ease-out_forwards] hover:-translate-y-2 transition-all duration-500`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Enhanced hover overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
        }`}>
          <div className={`bg-white rounded-full p-4 shadow-xl transition-all duration-300 ${
            isHovered ? 'scale-110 rotate-12' : 'scale-90 rotate-0'
          }`}>
            <ExternalLink size={24} className="text-gray-900" />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 font-light uppercase tracking-wider mb-2 transition-colors duration-300 group-hover:text-gray-700">
            {project.category}
          </p>
          <h3 className="text-2xl font-light text-gray-900 mb-3 transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-1">
            {project.title}
          </h3>
          <p className="text-gray-600 font-light leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`px-3 py-1 text-sm font-light rounded-full transition-all duration-300 hover:scale-105 ${
                isColorTheme 
                  ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{ 
                animationDelay: `${(index * 200) + (tagIndex * 100)}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

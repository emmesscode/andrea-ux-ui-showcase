
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

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

  return (
    <div 
      className={`group cursor-pointer animate-fade-in`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isHovered ? 'opacity-20' : 'opacity-0'
        }`} />
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-white rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
            <ExternalLink size={24} className="text-gray-900" />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 font-light uppercase tracking-wider mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-gray-600 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light rounded-full"
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

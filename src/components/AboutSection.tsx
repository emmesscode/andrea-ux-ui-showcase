
import React from 'react';
import { Award, Users, Coffee, Lightbulb } from 'lucide-react';

const AboutSection = () => {
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
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                About Andrea
              </h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p className="text-lg">
                  I'm a passionate UX/UI designer with over 8 years of experience creating digital experiences that matter. My approach combines user-centered design principles with business objectives to deliver solutions that are both beautiful and functional.
                </p>
                <p>
                  My journey began in graphic design, but I quickly discovered my true passion lies in understanding user behavior and translating complex problems into elegant, intuitive interfaces. I believe great design is invisible – it just works.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new design trends, mentoring upcoming designers, or enjoying a good cup of coffee while sketching ideas for my next project.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-gray-700 text-sm font-light rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <stat.icon size={24} className="text-gray-700" />
                </div>
                <div className="text-3xl font-light text-gray-900 mb-2">
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


import React from 'react';
import { Heart, Linkedin, Twitter, Dribbble, Behance } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Behance, href: "#", label: "Behance" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-3xl font-light mb-4">Andrea</h3>
            <p className="text-gray-400 font-light max-w-md mx-auto">
              Creating meaningful digital experiences through thoughtful design and user-centered solutions.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
              >
                <social.icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-200" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm font-light">
                © 2024 Andrea. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm font-light">
                <span>Made with</span>
                <Heart size={14} className="text-red-400" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

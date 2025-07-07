import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ritik Kumar Sahu
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              DevOps Engineer passionate about cloud automation, AI integration, and cybersecurity. 
              Building scalable, secure infrastructure that drives innovation and operational excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/ritikkumar8434/', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ritikumarsahu/', label: 'LinkedIn' },
                { icon: FileText, href: 'https://medium.com/@kumarritikr555', label: 'Medium' },
                { icon: Mail, href: 'mailto:ritikkumar3g@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:ritikkumar3g@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  ritikkumar3g@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ritikkumar8434/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ritikumarsahu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ritik Kumar Sahu. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Built with React & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import StarCursor from './components/StarCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    // Simulate loading for 1.5s
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader visible={true} />;
  }

  return (
    <div className="min-h-screen transition-colors duration-300 dark">
      <StarCursor />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 dark:text-white">
              Ritik Kumar Sahu
            </div>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setNavOpen((open) => !open)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-7 h-7 text-gray-900 dark:text-white" />
            </button>
            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          {/* Mobile nav */}
          {navOpen && (
            <div className="flex flex-col md:hidden bg-white/95 dark:bg-gray-900/95 rounded-b-lg shadow-lg py-4 px-2 space-y-2 animate-fade-in">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block w-full text-gray-700 dark:text-gray-200 py-2 px-4 rounded hover:bg-blue-100 dark:hover:bg-gray-800 text-lg font-medium transition-colors duration-200"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
      {/* Main Content */}
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <style>{`
        .animate-fade-in {
          animation: fadeInNav 0.25s;
        }
        @keyframes fadeInNav {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
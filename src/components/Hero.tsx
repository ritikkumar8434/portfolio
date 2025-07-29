import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, FileText, Shield, Database, Server, GitBranch, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const floatingIcons = [
  { icon: Server, color: 'text-pink-400', style: 'top-4 left-1/2' },
  { icon: Database, color: 'text-pink-300', style: 'top-12 right-8' },
  { icon: Shield, color: 'text-red-400', style: 'bottom-8 right-8' },
  { icon: Lightbulb, color: 'text-green-400', style: 'bottom-8 left-8' },
  { icon: GitBranch, color: 'text-purple-400', style: 'bottom-0 left-1/2' },
];

const titles = [
  'DevOps Engineer',
  'Cloud Enthusiast',
  'AI & Security Explorer',
];

const particlesOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 } },
  },
  particles: {
    color: { value: '#38bdf8' },
    links: { enable: true, color: '#a78bfa', distance: 150, opacity: 0.3, width: 1 },
    collisions: { enable: false },
    move: { enable: true, outModes: { default: 'bounce' as const }, random: false, speed: 1.2, straight: false },
    number: { density: { enable: true, area: 800 }, value: 60 },
    opacity: { value: 0.4 },
    shape: { type: 'circle' },
    size: { value: { min: 2, max: 4 } },
  },
  detectRetina: true,
};

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => setDisplayText(currentTitle.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(currentTitle.slice(0, displayText.length - 1)), 40);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden px-4 md:px-0 bg-transparent">
      {/* Particles Network Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 w-full h-full z-0"
        options={particlesOptions}
      />
      {/* Left: Details */}
      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start justify-center max-w-xl w-full py-24 md:py-0 md:pl-16">
        <span className="text-lg md:text-xl font-medium text-blue-300 mb-2 flex items-center gap-2">👋 Hello, I'm</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-shadow text-center md:text-left">
          Ritik Kumar<br />Sahu
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100 text-center md:text-left min-h-[2.5rem]">
          <span>{displayText}</span>
          <span className="typing-cursor ml-1 border-r-2 border-blue-400" />
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="https://drive.google.com/file/d/1BlnrkdgKPo92wuVzgeBRDiQgQPmKcP_Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-blue-500 to-pink-400 text-white shadow-lg hover:from-blue-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 btn-hover"
            download
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 border-blue-400 text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 btn-hover"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
        </div>
        <div className="flex gap-4 mt-2">
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
              className="p-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-700/20 text-blue-200 hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
      {/* Right: Photo and Floating Icons */}
      <div className="relative z-10 flex-1 flex items-center justify-center md:justify-end w-full md:w-auto py-16 md:py-0 md:pr-24">
        <div className="relative flex items-center justify-center">
          {/* Outer Glow Ring */}
          <div className="absolute w-[19rem] h-[19rem] rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 animate-photo-glow" style={{ filter: 'blur(16px)', zIndex: 1 }} />
          {/* Photo */}
          <div className="w-64 h-64 rounded-full bg-white/10 p-1 shadow-2xl relative z-10">
            <img
              src="/photo.jpg"
              alt="Your portrait"
              className="w-full h-full rounded-full object-cover border-4 border-[#10182A]"
            />
          </div>
          {/* Floating DevOps Icons */}
          {floatingIcons.map(({ icon: Icon, color, style }, i) => (
            <span
              key={i}
              className={`absolute ${style} animate-float-icon bg-[#10182A]/80 rounded-full p-2 shadow-lg border border-blue-900/40`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <Icon className={`w-7 h-7 ${color}`} />
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-photo-glow {
          box-shadow: 0 0 64px 24px #38bdf8, 0 0 0 8px #a78bfa33;
          animation: photoGlow 2.5s ease-in-out infinite alternate;
        }
        @keyframes photoGlow {
          0% { box-shadow: 0 0 64px 24px #38bdf8, 0 0 0 8px #a78bfa33; }
          100% { box-shadow: 0 0 96px 32px #a78bfa, 0 0 0 12px #38bdf833; }
        }
        .animate-float-icon {
          animation: floatIcon 3.5s ease-in-out infinite alternate;
        }
        @keyframes floatIcon {
          0% { transform: translateY(0); }
          100% { transform: translateY(-18px); }
        }
        .typing-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
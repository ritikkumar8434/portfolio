import React from 'react';
import { Github, ExternalLink, Cloud, Server, Shield, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AWS Cloud Automation',
      description: 'Comprehensive cloud automation solution using Python and Boto3 for managing EC2, S3, Lambda, and SES services with event-driven architecture.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'AWS', 'Boto3', 'Lambda', 'S3', 'SES'],
      github: 'https://github.com/ritikkumar8434/',
      live: '#',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Kubeadm Cluster with Jenkins + Ansible',
      description: 'Deployed Kubernetes cluster on EC2 instances and automated deployments using Jenkins running in Docker containers and Ansible in pods.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Kubernetes', 'Docker', 'Jenkins', 'Ansible', 'EC2', 'CI/CD'],
      github: 'https://github.com/ritikkumar8434/',
      live: '#',
      icon: Server,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Python Key Logger with Email Reporting',
      description: 'Ethical keystroke monitoring application with secure email reporting functionality for authorized security testing and system monitoring.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Email Automation', 'Security', 'Logging', 'Encryption'],
      github: 'https://github.com/ritikkumar8434/',
      live: '#',
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Police Feedback Management System',
      description: 'Built during Rajasthan Police Hackathon - a comprehensive feedback management system to improve internal policing efficiency with secure data handling.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Security'],
      github: 'https://github.com/ritikkumar8434/',
      live: '#',
      icon: Code,
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in DevOps, cloud automation, and security.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
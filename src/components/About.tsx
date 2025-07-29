import React from 'react';
import { Download, Code, Cloud, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into scalable solutions through the power of DevOps, AI, and cloud technologies.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ritik Kumar Sahu</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">DevOps Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate DevOps Engineer with a strong foundation in cloud automation, 
                AI integration, and cybersecurity. I specialize in building robust, scalable 
                infrastructure that empowers development teams to deliver high-quality software efficiently.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                My expertise spans across containerization, orchestration, CI/CD pipelines, 
                and cloud platforms. I'm particularly interested in leveraging AI to enhance 
                DevOps workflows and implementing security best practices throughout the development lifecycle.
              </p>
              <a
                href="https://drive.google.com/file/d/1BlnrkdgKPo92wuVzgeBRDiQgQPmKcP_Q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                download
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Cloud,
                title: 'Cloud Architecture',
                description: 'Designing scalable cloud infrastructure with AWS, focusing on automation and cost optimization.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'DevOps Automation',
                description: 'Streamlining deployment processes with CI/CD pipelines, containerization, and infrastructure as code.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Shield,
                title: 'Security First',
                description: 'Implementing robust security measures with SIEM, IDS/IPS, and comprehensive risk assessment.',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: Code,
                title: 'AI Integration',
                description: 'Leveraging AI tools and machine learning to enhance DevOps workflows and decision-making.',
                color: 'from-orange-500 to-red-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6, ease: 'easeOut' }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
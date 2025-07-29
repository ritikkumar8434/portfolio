import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'RHCSA',
      issuer: 'Red Hat',
      date: '2024',
      description: 'Red Hat Certified System Administrator - Linux system administration and management',
      color: 'from-red-500 to-pink-500',
      credentialId: 'RHCSA-2024'
    },
    {
      name: 'CCNA',
      issuer: 'Cisco',
      date: '2024',
      description: 'Cisco Certified Network Associate - Network fundamentals and routing & switching',
      color: 'from-blue-500 to-cyan-500',
      credentialId: 'CCNA-2024'
    },
    {
      name: 'CyberOps Associate',
      issuer: 'Cisco',
      date: '2024',
      description: 'Cybersecurity Operations Associate - Security monitoring and incident response',
      color: 'from-purple-500 to-indigo-500',
      credentialId: 'CYBEROPS-2024'
    },
    {
      name: 'Explore Generative AI with Vertex AI Gemini API',
      issuer: 'Google Cloud',
      date: '2024',
      description: 'Advanced AI and machine learning with Google Cloud Vertex AI platform',
      color: 'from-green-500 to-teal-500',
      credentialId: 'GCP-GEMINI-2024'
    }
  ];

  return (
    <motion.section
      id="certifications"
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
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications validating expertise in DevOps, networking, and cloud technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {cert.date}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ID: {cert.credentialId}
                </span>
                <a
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  href="https://www.linkedin.com/in/ritikumarsahu/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Committed to staying current with the latest technologies and industry best practices. 
              Currently pursuing additional certifications in Kubernetes, AWS Solutions Architect, and AI/ML.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
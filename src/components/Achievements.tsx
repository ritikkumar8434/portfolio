import React from 'react';
import { Trophy, Users, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Rajasthan Police Hackathon',
      description: 'Built a comprehensive "Police Feedback Management System" with team to improve internal policing efficiency. Focused on frontend/backend design and secure data handling.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      year: '2024',
      category: 'Competition'
    },
    {
      title: 'AWS Cloud Automation Expert',
      description: 'Developed advanced cloud automation solutions using Python and Boto3, implementing event-driven architectures and serverless computing patterns.',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      year: '2024',
      category: 'Technical'
    },
    {
      title: 'Cybersecurity Network Design',
      description: 'Successfully designed and implemented secure campus network infrastructure with comprehensive security assessments and mitigation strategies.',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      year: '2024',
      category: 'Security'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Notable accomplishments and recognition in DevOps, cloud computing, and cybersecurity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.year}
                  </span>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {achievement.category}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {achievement.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Recognition & Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Consistently recognized for innovative approaches to DevOps automation, cloud architecture, 
              and cybersecurity solutions that drive operational excellence and security posture improvement.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
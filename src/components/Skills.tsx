import React from 'react';
import { 
  Server, 
  Cloud, 
  Code, 
  Shield, 
  Brain, 
  Container,
  GitBranch,
  Terminal,
  Database,
  Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'DevOps Tools',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 88 },
        { name: 'Ansible', level: 82 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Terraform', level: 80 }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS', level: 92 },
        { name: 'EC2', level: 90 },
        { name: 'S3', level: 88 },
        { name: 'Lambda', level: 85 },
        { name: 'IAM', level: 87 }
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Bash', level: 85 },
        { name: 'YAML', level: 88 },
        { name: 'JavaScript', level: 75 }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'SIEM', level: 80 },
        { name: 'IDS/IPS', level: 78 },
        { name: 'Packet Tracer', level: 85 },
        { name: 'Network Security', level: 82 }
      ]
    },
    {
      title: 'AI Tools',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Gemini', level: 85 },
        { name: 'Vertex AI', level: 80 },
        { name: 'Prompt Engineering', level: 88 },
        { name: 'ML Integration', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps, cloud automation, and AI integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {[
            { name: 'Docker', icon: Container },
            { name: 'Git', icon: GitBranch },
            { name: 'AWS', icon: Cloud },
            { name: 'Linux', icon: Terminal },
            { name: 'Python', icon: Code },
            { name: 'MongoDB', icon: Database },
            { name: 'Jenkins', icon: Zap },
            { name: 'Security', icon: Shield }
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <tech.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
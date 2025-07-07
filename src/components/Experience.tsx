import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'LinuxWorld Informatics Pvt Ltd',
      location: 'Remote · Jaipur, Rajasthan',
      duration: 'May 2024 – Jun 2024',
      type: 'Internship',
      description: [
        'Built a Python menu-driven automation tool to interact with AWS cloud services',
        'Used Boto3 and Lambda to automate EC2, S3, SES, and Transcribe services',
        'Created event-driven audio-to-text transcription pipeline using AWS Transcribe',
        'Connected MongoDB service using Lambda, triggered via S3 object uploads',
        'Designed a complete email automation system using AWS SES and data fetched from S3'
      ],
      skills: ['Python', 'AWS (EC2, S3, Lambda, SES)', 'MongoDB', 'Cloud Automation', 'Event-driven Architectures'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Virtual Cybersecurity Intern',
      company: 'AICTE Cisco',
      location: 'Remote',
      duration: 'May 2024 – Jul 2024',
      type: 'Internship',
      description: [
        'Designed and simulated a secure campus network using Cisco Packet Tracer',
        'Mapped network topology, identified attack surfaces, and conducted security assessments',
        'Configured routers, switches, VLANs, and implemented firewall rules + ACLs',
        'Analyzed risks like unauthorized access, proposed strong mitigation strategies'
      ],
      skills: ['Network Security', 'Cisco Packet Tracer', 'ACLs', 'VLANs', 'Risk Analysis', 'Firewall Rules'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hands-on experience in DevOps automation, cloud technologies, and cybersecurity.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-3">
                      {exp.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {exp.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Responsibilities:
                </h5>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies & Skills:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
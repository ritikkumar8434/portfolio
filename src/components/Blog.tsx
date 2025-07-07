import React from 'react';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Automating AWS Infrastructure with Python and Boto3',
      excerpt: 'Learn how to build scalable cloud automation tools using Python and AWS SDK. This comprehensive guide covers EC2, S3, Lambda, and more.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['AWS', 'Python', 'Automation', 'DevOps'],
      link: 'https://medium.com/@kumarritikr555',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Kubernetes CI/CD with Jenkins and Ansible',
      excerpt: 'A complete guide to setting up automated deployments using Kubernetes clusters with Jenkins running in Docker and Ansible for configuration management.',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['Kubernetes', 'Jenkins', 'Ansible', 'CI/CD'],
      link: 'https://medium.com/@kumarritikr555',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Network Security Best Practices with Cisco',
      excerpt: 'Explore advanced network security configurations using Cisco Packet Tracer, including VLANs, ACLs, and comprehensive security assessments.',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Cybersecurity', 'Cisco', 'Network Security', 'VLANs'],
      link: 'https://medium.com/@kumarritikr555',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'AI Integration in DevOps Workflows',
      excerpt: 'Discover how to leverage AI tools like Vertex AI and Gemini to enhance DevOps processes, from intelligent monitoring to automated decision-making.',
      date: '2024-01-01',
      readTime: '6 min read',
      tags: ['AI', 'DevOps', 'Vertex AI', 'Automation'],
      link: 'https://medium.com/@kumarritikr555',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and best practices in DevOps, cloud computing, and cybersecurity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@kumarritikr555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Posts on Medium
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
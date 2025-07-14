import React from 'react';
import { ExternalLink, Github, Bot, Wrench, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: '🏥 MediBot — Smart Hospital Chatbot',
      description: 'LLM + Web Scraping + Appointment/Prescription System',
      features: [
        'Advanced NLP for medical queries',
        'Real-time appointment booking',
        'Prescription management system',
        'Multi-language support'
      ],
      liveDemo: 'https://huggingface.co/spaces/jadaunaryansingh/ChatHospital',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wrench,
      title: '📲 OpsSuite — Menu-Based AI Toolkit',
      description: 'Tools: Twilio, WhatsApp, Email, SSH, Docker, Google Search, Face Swap',
      features: [
        'Integrated Jenkins CI/CD pipeline',
        'Multi-platform communication',
        'Docker containerization',
        'AI-powered face swap technology'
      ],
      liveDemo: 'https://github.com/jadaunaryansingh?tab=repositories',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
      gradient: 'from-purple-500 to-pink-500'
    },
    
    {
  icon: Rocket,
  title: 'AutoDock-Jenkins: CI/CD Pipeline Automation',
  description: 'Tools: Git, Docker Hub, Jenkins, GitHub',
  features: [
    'First Jenkins Project',
    'Integrated Jenkins CI/CD pipeline',
    'Automated build every minute',
    'Docker containerization',
    'Source code hosted on GitHub'
  ],
  liveDemo: 'https://github.com/jadaunaryansingh?tab=repositories',
  github: 'https://github.com/jadaunaryansingh?tab=repositories',
  gradient: 'from-purple-500 to-pink-500'
}

  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🧱 Major Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white mr-4`}>
                    <project.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                   target="_blank"
                   rel="noopener noreferrer"
                    className="btn-bounce flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                    className="btn-bounce flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    💻 GitHub
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

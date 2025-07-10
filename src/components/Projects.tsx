import React from 'react';
import { ExternalLink, Github, Wrench, Globe, Scale, Coffee, Star, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DevMate',
      description: 'All-in-one Linux control panel built with Flask + Streamlit',
      features: [
        'SSH Executor & Remote Operations',
        'Twilio SMS/Calls Integration',
        'WhatsApp Automation',
        'LinkedIn Auto-posting',
        'Face Swap Technology',
        'Google Search API',
        'Docker Module (Coming Soon)'
      ],
      icon: Wrench,
      status: 'Live',
      tech: ['Flask', 'Streamlit', 'Python', 'Docker'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'BuildCraft',
      description: 'Drag. Drop. Code. A sleek frontend builder that live-generates HTML, TailwindCSS & JS',
      features: [
        'Visual Drag & Drop Interface',
        'Live Code Generation',
        'TailwindCSS Integration',
        'No Setup Required',
        'Export & Deploy Options'
      ],
      icon: Globe,
      status: 'WIP',
      tech: ['React', 'TailwindCSS', 'JavaScript', 'Node.js'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Legally',
      description: 'AI-powered legal bot to help users understand charges, reduce penalties & connect with real lawyers',
      features: [
        'Legal Charge Analysis',
        'Penalty Reduction Strategies',
        'Lawyer Connection Platform',
        'AI-Powered Assistance',
        'Legal Document Processing'
      ],
      icon: Scale,
      status: 'WIP',
      tech: ['Python', 'NLP', 'AI/ML', 'Flask'],
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Dabba.com',
      description: 'Revolutionizing tiffin delivery for college campuses & office spaces — smart, fast, and always on time',
      features: [
        'Smart Delivery Scheduling',
        'Campus & Office Integration',
        'Real-time Tracking',
        'Subscription Management',
        'Vendor Dashboard'
      ],
      icon: Coffee,
      status: 'WIP',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Live' ? 'bg-green-500' : 'bg-yellow-500';
  };

  const getStatusIcon = (status: string) => {
    return status === 'Live' ? Star : TrendingUp;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
              My Projects
            </h2>
            <div className="absolute inset-0 text-5xl md:text-7xl font-black text-blue-500/10 blur-sm">
              My Projects
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            All projects are evolving — some live, some baking, all built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">purpose</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {projects.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            return (
              <div 
                key={index}
                className="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className={`absolute top-4 right-4 flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(project.status)}`}>
                    <StatusIcon className="w-3 h-3" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-4 text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {project.features.length > 4 && (
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                          <span className="text-gray-400">+{project.features.length - 4} more features</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-slate-700/50 backdrop-blur-sm text-blue-300 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced GitHub Showcase */}
        <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-blue-500/20 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Github className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">GitHub Showcase</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore my complete collection of projects, contributions, and open-source work
            </p>
            <a 
              href="https://l1nq.com/kaBYQ" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>View GitHub Profile</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
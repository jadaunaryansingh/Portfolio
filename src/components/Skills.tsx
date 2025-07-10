import React from 'react';
import { Brain, Code, Database, Cloud, Users, Zap, Award, Target, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Agentic AI', 'Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Data Science'],
      color: 'from-blue-500 to-cyan-500',
      level: 90
    },
    {
      title: 'Full Stack Development',
      icon: Code,
      skills: ['React', 'Node.js', 'Flask', 'Streamlit', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      color: 'from-purple-500 to-pink-500',
      level: 95
    },
    {
      title: 'Database & DevOps',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Docker', 'Git', 'Linux', 'AWS', 'API Development'],
      color: 'from-emerald-500 to-teal-500',
      level: 85
    },
    {
      title: 'Integration & APIs',
      icon: Cloud,
      skills: ['Twilio', 'WhatsApp API', 'LinkedIn API', 'Google APIs', 'REST APIs', 'Webhooks'],
      color: 'from-orange-500 to-red-500',
      level: 88
    },
    {
      title: 'Leadership & Community',
      icon: Users,
      skills: ['Team Alt+F4', 'E-Cell GLA', 'Startup Mentorship', 'Project Management', 'Innovation'],
      color: 'from-violet-500 to-purple-500',
      level: 92
    },
    {
      title: 'Currently Learning',
      icon: Zap,
      skills: ['Advanced AI Agents', 'Microservices', 'Kubernetes', 'GraphQL', 'Blockchain'],
      color: 'from-yellow-500 to-orange-500',
      level: 75
    }
  ];

  const achievements = [
    {
      title: 'LinuxWorld Informatics',
      subtitle: 'Agentic AI Intern',
      description: 'Working under Vimal Daga Sir on cutting-edge autonomous AI systems',
      icon: Award,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-Cell GLA University',
      subtitle: 'Ex-Member',
      description: '5 months of startup innovation, pitching ideas, and entrepreneurship',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Team Alt+F4',
      subtitle: 'Core Member',
      description: 'Not just Ctrl+C, Ctrl+V engineers. We build smart. We break norms.',
      icon: Lightbulb,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
              Skills & Expertise
            </h2>
            <div className="absolute inset-0 text-5xl md:text-7xl font-black text-blue-500/10 blur-sm">
              Skills & Expertise
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
            Mastering the art of building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">intelligent, scalable solutions</span>
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${category.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400 mt-1">{category.level}% Proficiency</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-2 bg-slate-700/50 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-slate-600/30 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Community & Achievements */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Community Vibes</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 text-center">{achievement.title}</h4>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold mb-4 text-center">{achievement.subtitle}</p>
                  <p className="text-gray-300 text-center leading-relaxed">{achievement.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Open To Section */}
        <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-blue-500/20 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Open To Opportunities</span>
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Ready to collaborate, innovate, and create something extraordinary together
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer">
                <span className="text-2xl mr-3">✨</span>
                <span>Internships</span>
              </div>
              <div className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer">
                <span className="text-2xl mr-3">⚒</span>
                <span>Freelance Tech Collabs</span>
              </div>
              <div className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 cursor-pointer">
                <span className="text-2xl mr-3">🧠</span>
                <span>Idea Jamming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
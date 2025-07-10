import React from 'react';
import { MapPin, GraduationCap, Briefcase, Heart, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'From Agra',
      description: 'Raised in the city of love, schooled at St. Peter\'s College',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: GraduationCap,
      title: 'GLA University',
      description: 'B.Tech in AIML, Batch of 2028',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'LinuxWorld Intern',
      description: 'Working on Agentic AI under Vimal Daga Sir',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Tech Obsessed',
      description: 'Breaking, building, and bettering everything I touch',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Innovation Leader',
      description: 'Leading breakthrough projects in AI automation',
      stats: '15+ Projects'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
      stats: '100% Success'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Mastering new technologies at lightning speed',
      stats: '24/7 Learning'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
              About Me
            </h2>
            <div className="absolute inset-0 text-5xl md:text-7xl font-black text-blue-500/10 blur-sm">
              About Me
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Main Description */}
          <div className="text-center mb-20">
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                Hey! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">Aryan Singh Jadaun</span> — a tech-obsessed soul since childhood, 
                raised in Agra, schooled at St. Peter's College, and now chasing AI dreams at GLA University.
              </p>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                I don't just code; I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">architect digital experiences</span> that push boundaries.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Currently exploring <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-semibold">Agentic AI</span> as a 3-month intern at 
                LinuxWorld Informatics, crafting autonomous systems that think, adapt, and execute like pros.
              </p>
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* New Achievements Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center text-white mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Achievements</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
                    <p className="text-gray-300 mb-4">{achievement.description}</p>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      {achievement.stats}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Beliefs Section */}
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-blue-500/20 mb-20 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Philosophy & Mindset</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold mb-2">"Build once, scale forever."</p>
                <p className="text-gray-400">Creating solutions that grow with ambition</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold mb-2">"Code is art. Automation is freedom."</p>
                <p className="text-gray-400">Crafting elegant solutions for complex problems</p>
              </div>
            </div>
          </div>

          {/* Enhanced Life Beyond Code */}
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Life Beyond Code</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group bg-slate-800/30 backdrop-blur-xl text-gray-300 px-8 py-4 rounded-full border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-2xl mr-3">🏍</span>
                <span className="text-lg font-semibold">Bike rides are therapy</span>
              </div>
              <div className="group bg-slate-800/30 backdrop-blur-xl text-gray-300 px-8 py-4 rounded-full border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-2xl mr-3">💬</span>
                <span className="text-lg font-semibold">Deep conversations about tech & life</span>
              </div>
              <div className="group bg-slate-800/30 backdrop-blur-xl text-gray-300 px-8 py-4 rounded-full border border-slate-700/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                <span className="text-2xl mr-3">👬</span>
                <span className="text-lg font-semibold">Values friendships as strong as APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
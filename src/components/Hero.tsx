import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Instagram, Mail, Download, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'AI Visionary',
    'Full Stack Architect',
    'Innovation Catalyst',
    'Agentic AI Pioneer'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aryansinghjadaun', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
    { icon: Mail, href: 'mailto:aryansinghjadaun@gmail.com', label: 'Email', color: 'hover:bg-red-500' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-50">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Profile Section */}
          <div className="mb-12 relative inline-block mt-8">
            <div className="relative">
              {/* Profile Image Container - Enhanced */}
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse shadow-2xl shadow-blue-500/25 relative z-50">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Aryan Singh Jadaun"
                  className="w-full h-full rounded-full object-cover relative z-50"
                />
              </div>
              
              {/* Status Indicators */}
              <div className="absolute -top-2 -right-2 flex space-x-1">
                <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce shadow-lg shadow-green-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-200 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Enhanced Name Section */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2 animate-fade-in tracking-tight">
                Aryan Singh
              </h1>
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-blue-500/10 blur-sm">
                Aryan Singh
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in delay-200 tracking-wide">
              Jadaun
            </h2>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
          </div>

          {/* Enhanced Typing Animation */}
          <div className="mb-10 h-20 flex items-center justify-center">
            <div className="relative">
              <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-mono font-bold">
                {currentText}
                <span className="animate-blink text-blue-400">|</span>
              </span>
              <div className="absolute inset-0 text-2xl md:text-3xl text-blue-500/20 blur-sm font-mono font-bold">
                {currentText}
              </div>
            </div>
          </div>

          {/* Enhanced Tagline */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {['Engineer', 'Builder', 'Dreamer', 'Rider'].map((word, index) => (
                <div key={word} className="relative group">
                  <span 
                    className="inline-block text-xl md:text-2xl text-white font-bold px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 hover:border-blue-500/50 transition-all duration-500 animate-fade-in cursor-default"
                    style={{ animationDelay: `${800 + index * 200}ms` }}
                  >
                    {word}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="mb-12 space-y-4">
            <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in delay-1000 font-light">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">B.Tech AIML Student</span> • 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold"> LinuxWorld Informatics Intern</span>
            </p>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in delay-1200">
              Building the future with <span className="text-blue-400 font-semibold">Agentic AI</span> • 
              Crafting autonomous systems that think, adapt, and execute
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in delay-1400">
            <a 
              href="https://wa.me/919837039028?text=Hi%20Aryan,%20I%20would%20like%20to%20hire%20you%20for%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden inline-block text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <Play className="w-5 h-5" />
                <span>Hire Me</span>
              </div>
            </a>
            
            <a 
              href="/assets/My Resume.pdf" 
              download="Aryan_Singh_Jadaun_Resume.pdf"
              className="group relative border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden inline-block text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <Download className="w-5 h-5" />
                <a href="/assets/My Resume.pdf" download="Aryan_Singh_Jadaun_Resume.pdf">
                  <span>Download Resume</span>
                </a>
              </div>
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in delay-1600">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-blue-500/50 ${color}`}
                aria-label={label}
              >
                <Icon className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <ChevronDown className="w-6 h-6 text-blue-400/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
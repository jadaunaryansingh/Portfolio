import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;
          
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <img 
              src="/assets/profile.jpg" 
              alt="Aryan Singh Jadaun"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-white font-bold text-lg md:text-xl whitespace-nowrap">Aryan</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white hover:bg-slate-700 transition-colors flex-shrink-0 ml-4"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
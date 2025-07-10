import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/assets/profile.jpg" 
                alt="Aryan Singh Jadaun"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-white font-bold">Aryan Singh Jadaun</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Aryan Singh Jadaun. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
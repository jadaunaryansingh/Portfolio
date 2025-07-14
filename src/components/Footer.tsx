import React, { useState, useEffect } from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Build once, scale forever.",
    "Code is art. Automation is freedom.",
    "Innovation distinguishes between a leader and a follower.",
    "The future belongs to those who code it."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Animated Quote */}
          <div className="mb-8">
            <div className="text-2xl font-bold mb-4 h-16 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
                "{quotes[currentQuote]}"
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

          {/* Footer Content */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              Made with <Heart className="inline w-5 h-5 text-red-500 animate-pulse" /> and <Code className="inline w-5 h-5 text-blue-500" /> by
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aryan Singh Jadaun
            </p>
            <p className="text-gray-400">
              © 2024 All rights reserved. Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { name: 'GitHub', href: 'https://github.com/jadaunaryansingh?tab=repositories' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a' },
              { name: 'Email', href: 'mailto:aryansinghjadaun@gmail.com' },
              { name: 'WhatsApp', href: 'https://wa.me/919837039028' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-bounce px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
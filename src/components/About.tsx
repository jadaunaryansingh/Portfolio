import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📌 Snapshot of Me
          </h2>
        </div>

        <div className="glow-card p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl" data-aos="zoom-in">
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-2xl font-semibold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              👨‍💻 Engineer. Builder. Dreamer. Rider.
            </p>
            
            <p>
              Hey! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Aryan Singh Jadaun</span> — a tech-obsessed soul since childhood, raised in Agra, schooled at St. Peter's College, and now chasing AI dreams at GLA University (B.Tech AIML, Batch of 2028).
            </p>
            
            <p>
              📍 I break, build, and better everything I touch — currently exploring <span className="font-semibold text-purple-600 dark:text-purple-400">Agentic AI</span> as a 3-month intern at LinuxWorld Informatics, crafting autonomous systems that think, adapt, and execute like pros.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold text-blue-600 dark:text-blue-400">Innovation</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Building tomorrow's tech today</div>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">🧠</div>
                <div className="font-semibold text-purple-600 dark:text-purple-400">AI Expertise</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">ML/DL, LLMs & Automation</div>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">💼</div>
                <div className="font-semibold text-green-600 dark:text-green-400">Leadership</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">E-Cell member & entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
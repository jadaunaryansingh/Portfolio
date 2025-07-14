import React from 'react';
import { Brain, Code, Settings, Cloud, Bot, Database, FileText, Terminal, GitBranch, Link, Palette } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'AI/ML',
      icon: Brain,
      percentage: 95,
      emojis: '🧠🧠🧠🧠🧠🧠🧠🧠🧠🟨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Full-Stack Dev',
      icon: Code,
      percentage: 80,
      emojis: '💻💻💻💻💻💻💻💻⬜⬜',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'DevOps',
      icon: Settings,
      percentage: 85,
      emojis: '⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️🟨⬜',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Cloud (AWS)',
      icon: Cloud,
      percentage: 95,
      emojis: '☁️☁️☁️☁️☁️☁️☁️☁️☁️🟨',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Automation/Scripting',
      icon: Bot,
      percentage: 80,
      emojis: '🤖🤖🤖🤖🤖🤖🤖🤖⬜⬜',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Database Management',
      icon: Database,
      percentage: 85,
      emojis: '🗄️🗄️🗄️🗄️🗄️🗄️🗄️🗄️🟨⬜',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Prompt Engineering',
      icon: FileText,
      percentage: 90,
      emojis: '📝📝📝📝📝📝📝📝📝⬜',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Linux',
      icon: Terminal,
      percentage: 95,
      emojis: '🐧🐧🐧🐧🐧🐧🐧🐧🐧🟨',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Version Control (Git)',
      icon: GitBranch,
      percentage: 95,
      emojis: '🔁🔁🔁🔁🔁🔁🔁🔁🔁🟨',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'API Integration',
      icon: Link,
      percentage: 80,
      emojis: '🔗🔗🔗🔗🔗🔗🔗🔗⬜⬜',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'UI/UX & Web Design',
      icon: Palette,
      percentage: 85,
      emojis: '🎨🎨🎨🎨🎨🎨🎨🎨🟨⬜',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My expertise across different technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                    {skill.percentage}%
                  </div>
                </div>
              </div>

              {/* Emoji Progress Bar */}
              <div className="mb-4">
                <div className="text-2xl leading-relaxed tracking-wider">
                  {skill.emojis}
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                  style={{
                    width: `${skill.percentage}%`,
                    animation: `skillProgress 2s ease-out ${index * 0.2}s both`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AI/ML Expertise</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Deep Learning, NLP, Computer Vision, LangChain, LLMs, MLOps
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Python, Flask, Streamlit, React, Docker, API Development
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Cloud & DevOps</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AWS, Docker, Jenkins, Linux, Git, Automation Scripts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillProgress {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
        
        .skill-card:hover .bg-gradient-to-r {
          animation: pulse 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
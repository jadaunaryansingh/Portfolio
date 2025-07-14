import React from 'react';
import { Phone, Mail, Linkedin, Instagram, MessageCircle, Github, FileText } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      label: '📱 Phone',
      value: '+91 9837039028',
      href: 'tel:+919837039028',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      label: '📧 Email',
      value: 'aryansinghjadaun@gmail.com',
      href: 'mailto:aryansinghjadaun@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Linkedin,
      label: '💼 LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Instagram,
      label: '📸 Instagram',
      value: 'Follow me',
      href: 'https://instagram.com/aryansinghjadaun',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      label: '💬 WhatsApp',
      value: 'Message me',
      href: 'https://wa.me/919837039028',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Github,
      label: '☁️ GitHub',
      value: 'View my code',
      href: 'https://github.com/jadaunaryansingh?tab=repositories',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: FileText,
      label: '📄 Resume',
      value: 'Download CV',
      href: 'https://drive.google.com/file/d/1c2rcpzT1vCcleujwXQFneWGdgVOmfMTZ/view?usp=drivesdk',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📬 Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Ready to collaborate? Reach out through any of these channels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-card group block p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={32} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.label}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to build something amazing together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always excited to work on innovative projects and collaborate with like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:aryansinghjadaun@gmail.com"
                className="btn-bounce px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                📧 Let's Talk
              </a>
              <a
                href="https://wa.me/919837039028"
                className="btn-bounce px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                💬 WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
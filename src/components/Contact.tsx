import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Download, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Portfolio Contact Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    
    // WhatsApp API URL
    const whatsappURL = `https://wa.me/919837039028?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aryansinghjadaun@gmail.com',
      href: 'mailto:aryansinghjadaun@gmail.com',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Agra, India',
      href: null,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Remote & On-site work',
      href: null,
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aryansinghjadaun', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Let\'s have a quick conversation',
      action: 'Start Chat',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a time that works for both of us',
      action: 'Schedule Now',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6">
              Let's Connect
            </h2>
            <div className="absolute inset-0 text-5xl md:text-7xl font-black text-blue-500/10 blur-sm">
              Let's Connect
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
            Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">amazing</span> together? Let's turn ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-10">Get In Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-center space-x-6 p-4 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-white text-lg hover:text-blue-400 transition-colors duration-300 font-semibold"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-lg font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 mb-12">
              {quickActions.map((action, index) => (
                <a 
                  key={index} 
                  href={action.title === 'Quick Chat' 
                    ? "https://wa.me/919837039028?text=Hi%20Aryan,%20let's%20have%20a%20quick%20chat!" 
                    : "https://wa.me/919837039028?text=Hi%20Aryan,%20I%20would%20like%20to%20schedule%20a%20meeting%20with%20you."
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg">{action.title}</h4>
                      <p className="text-gray-400">{action.description}</p>
                    </div>
                    <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">
                      {action.action}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://wa.me/919837039028?text=Hi%20Aryan,%20I%20would%20like%20to%20hire%20you%20for%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden inline-block text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>Hire Me</span>
                </div>
              </a>
              <button className="group relative border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <Download className="w-5 h-5" />
                  <a href="/assets/My Resume.pdf" download="Aryan_Singh_Jadaun_Resume.pdf">
                    <span>Download Resume</span>
                  </a>
                </div>
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <p className="text-gray-400 mb-6 text-lg">Follow me on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 border border-slate-700/30 hover:border-blue-500/50 ${color}`}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30">
            <h3 className="text-3xl font-bold text-white mb-8">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-3">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-300 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Let's discuss a project"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Mail, MapPin, Facebook, Linkedin, Send, MessageCircle, Briefcase, GraduationCap, Rocket,Sparkles } from 'lucide-react';

const GetInTouch = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactInfo = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'duoc14525@gmail.com',
      link: 'mailto:duoc14525@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      hoverGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      link: null,
      gradient: 'from-orange-500 to-pink-500',
      bgGradient: 'from-orange-500/10 to-pink-500/10',
      hoverGradient: 'from-orange-500/20 to-pink-500/20'
    },
    {
      id: 'facebook',
      icon: Facebook,
      label: 'Facebook',
      value: 'fb.com/noiz.tee.04',
      link: 'https://www.facebook.com/ouoc.61960',
      gradient: 'from-blue-700 to-blue-500',
      bgGradient: 'from-blue-700/10 to-blue-500/10',
      hoverGradient: 'from-blue-700/20 to-blue-500/20'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/noiz-tee-b79557356',
      link: 'https://www.linkedin.com/in/noiz-tee-b79557356/',
      gradient: 'from-blue-600 to-blue-400',
      bgGradient: 'from-blue-600/10 to-blue-400/10',
      hoverGradient: 'from-blue-600/20 to-blue-400/20'
    }
  ];

  const opportunities = [
    // {
    //   icon: Briefcase,
    //   title: 'Internships',
    //   description: 'Seeking hands-on experience in business analysis',
    //   gradient: 'from-emerald-500 to-teal-500'
    // },
    // {
    //   icon: GraduationCap,
    //   title: 'Fresher Roles',
    //   description: 'Ready to start my professional journey',
    //   gradient: 'from-violet-500 to-purple-500'
    // },
    {
      icon: Rocket,
      title: 'Junior Roles',
      description: 'Eager to contribute and grow in a dynamic team',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
   <div className="max-w-6xl mx-auto">
  {/* Header */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
      <MessageCircle className="w-4 h-4 text-orange-500" />
      <span className="text-orange-500 text-sm font-semibold cursor-default">Let's Connect</span>
    </div>

    <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
      Get In Touch
    </h2>

    <p className="text-xl text-white mb-2">
      I'm a <span className="font-bold text-orange-500">Business Analysis</span>-focused student
    </p>

    <p className="text-gray-400 text-lg">
      Open to internships, fresher roles, and learning opportunities
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-8 mb-12">
    {/* Left Column */}
    <div className="lg:col-span-1 space-y-4">
      <h3 className="text-sm font-bold text-orange-500 mb-4 flex items-center gap-2  cursor-default">
        <Sparkles className="w-4 h-4" />
        OPEN TO
      </h3>

      {opportunities.map((opp, index) => {
        const Icon = opp.icon;
        return (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-orange-500/50 p-5 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-[2px] mb-3">
                <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
              </div>

              <h4 className="text-white font-bold mb-1">{opp.title}</h4>
              <p className="text-gray-400 text-sm">{opp.description}</p>
            </div>
          </div>
        );
      })}
    </div>

    {/* Right Column */}
    <div className="lg:col-span-2">
      <h3 className="text-sm font-bold text-orange-500 mb-4 flex items-center gap-2 cursor-default">
        <Send className="w-4 h-4" />
        CONTACT INFORMATION
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {contactInfo.map((contact) => {
          const Icon = contact.icon;
          const isHovered = hoveredCard === contact.id;

          const CardContent = (
            <div
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-orange-500/50 p-6 transition-all duration-500 ${
                contact.link ? 'cursor-pointer hover:scale-105' : ''
              }`}
              style={{
                boxShadow: isHovered
                  ? '0 20px 40px -12px rgba(249, 115, 22, 0.35)'
                  : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-[2px] mb-4 transition-transform duration-300 ${
                    isHovered ? 'scale-110 rotate-3' : ''
                  }`}
                >
                  <div className="w-full h-full rounded-[11px] bg-gray-900 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                </div>

                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {contact.label}
                </div>

                <div
                  className={`font-semibold transition-all duration-300 ${
                    isHovered
                      ? 'text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text'
                      : 'text-white'
                  }`}
                >
                  {contact.value}
                </div>

                {contact.link && (
                  <div
                    className={`mt-3 flex items-center gap-1 text-xs font-medium transition-all duration-300 ${
                      isHovered ? 'text-orange-500' : 'text-gray-500'
                    }`}
                  >
                    <span>Click to contact</span>
                    <Send className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>
          );

          return contact.link ? (
            <a
              key={contact.id}
              href={contact.link}
              target={contact.id === 'email' ? '_self' : '_blank'}
              rel={contact.id === 'email' ? '' : 'noopener noreferrer'}
              className="block"
            >
              {CardContent}
            </a>
          ) : (
            <div key={contact.id}>{CardContent}</div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-8 relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 animate-pulse"></div>

        <div className="relative text-center">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Let's Create Something Meaningful Together
          </h3>

          <p className="text-gray-300 mb-6">
            I'm excited to contribute as a Frontend & BA-oriented student
          </p>

          <a
            href="mailto:duoc14525@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 group"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Send me an email
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom decoration */}
  <div className="flex justify-center">
    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
  </div>
</div>

  );
};

export default GetInTouch;
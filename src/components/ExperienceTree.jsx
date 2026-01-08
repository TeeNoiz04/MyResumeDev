import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Award, Code, Users, TrendingUp } from 'lucide-react';

const ExperienceTree = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const experiences = [
    {
      id: 1,
      role: "Bussiness Analyst",
      company: "HiAI Company",
      location: "Ho Chi Minh City, Vietnam",
      period: "4-2025 - 10-2025",
      type: "Full-time",
      description: "Analyzed business processes and gathered requirements to improve ERP solutions.",
      achievements: [
        "Conducted comprehensive business process analysis, leading to a 15% improvement in workflow efficiency.",
        "Supported the development team in fixing front-end bugs based on user feedback."
      ],
      skills: ["Business Analysis", "ERP Systems", "Requirement Gathering", "UI Development Support "],
      icon: Award
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Experience Journey
        </h2>
        <p className="text-white/70 text-lg">
          My professional path and achievements
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-700 rounded-full opacity-30"></div>

        <div className="space-y-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            const isExpanded = expandedItems[exp.id];

            return (
              <div key={exp.id} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-9 h-9 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-[2px] shadow-lg shadow-orange-500/40">
                  <div className="w-full h-full rounded-[14px] bg-gray-900 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-orange-500" />
                  </div>
                </div>

                {/* Card */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="group relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 
                       hover:border-orange-500/50 transition-all duration-500 overflow-hidden
                       cursor-pointer"
                  style={{
                    boxShadow: isExpanded
                      ? '0 20px 40px -12px rgba(249, 115, 22, 0.4)'
                      : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
                  }}
                >
                 

                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-orange-500 font-semibold mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-white">{exp.company}</span>
                          <span className="px-2 py-1 text-xs bg-orange-500/20 rounded-full border border-orange-500/30">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-white/70">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-orange-500" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(exp.id);
                        }}
                        className="p-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 transition-all duration-300 hover:scale-110"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-orange-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-orange-500" />
                        )}
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm font-medium text-white bg-orange-500/10 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Expand */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="pt-4 border-t border-gray-700/50">
                        <h4 className="text-sm font-bold text-orange-500 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </h4>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* Bottom */}
      <div className="mt-16 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
      </div>
    </div>

  );
};

export default ExperienceTree;
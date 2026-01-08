import React, { useState } from 'react';
import { Trophy, Award, Star, Target, Zap, Medal } from 'lucide-react';

export default function AchievementSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const achievements = [
    {
      icon: Trophy,
      number: "1",
      title: "Projects Completed",
      description: "Successfully delivered projects across various domains"
    },
    {
      icon: Award,
      number: "9+",
      title: "Awards Won",
      description: "Recognition for excellence and innovation"
    },
    {
      icon: Star,
      number: "3.66/4.0",
      title: "GPA",
      description: "Academic performance and excellence"
    },
    {
      icon: Target,
      number: "5",
      title: "Top 5 of Class",
      description: "Ranked in the top 5 of the class with strong academic performance"
    },
    {
      icon: Zap,
      number: "6+",
      title: "Months Experience",
      description: "Hands-on experience through real-world projects"
    },
    {
      icon: Medal,
      number: "2+",
      title: "Certifications",
      description: "Continuous learning and development"
    }
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase bg-orange-500/10 px-4 py-2 rounded-full">
              Achievements
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Milestones</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of accomplishments and recognitions throughout my professional journey
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group transition-all duration-300 ${
                  isHovered ? 'scale-105 z-10' : ''
                }`}
              >
                {/* Card Background with Shadow */}
                <div className={`
                  relative bg-gradient-to-br from-slate-900 to-slate-800 
                  rounded-2xl p-8 border border-slate-700/50
                  transition-all duration-300
                  ${isHovered 
                    ? 'shadow-2xl shadow-orange-500/30' 
                    : 'shadow-lg shadow-black/50'
                  }
                `}>
                  {/* Gradient Overlay */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-orange-500/10 to-orange-600/5
                    transition-opacity duration-300
                  `} />
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`
                      inline-flex p-4 rounded-xl
                      bg-gradient-to-br from-orange-500/20 to-orange-600/10
                      transition-all duration-300
                      ${isHovered ? 'shadow-lg shadow-orange-500/30 scale-110' : 'shadow-md shadow-orange-500/20'}
                    `}>
                      <Icon className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className={`
                      text-5xl font-bold mb-3 transition-all duration-300
                      ${isHovered 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600' 
                        : 'text-white'
                      }
                    `}>
                      {achievement.number}
                    </h3>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                    bg-gradient-to-r from-orange-500 to-orange-600
                    transition-all duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <button className="
            group relative px-8 py-4 
            bg-gradient-to-r from-orange-500 to-orange-600 
            text-white font-semibold rounded-xl
            shadow-lg shadow-orange-500/50
            hover:shadow-2xl hover:shadow-orange-500/60
            transition-all duration-300
            hover:scale-105
          ">
            <span className="relative z-10">View All Achievements</span>
            <div className="
              absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-orange-600 to-orange-700
              transition-opacity duration-300
            " />
          </button>
        </div> */}
      </div>
    </div>
  );
}
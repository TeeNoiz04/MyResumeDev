import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AchievementRecap() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      title: "ERP System Implementation",
      subtitle: "Business Process Optimization",
      description: "Successfully analyzed and transformed business requirements into a comprehensive ERP solution, streamlining inventory management, sales operations, and accounting workflows for improved efficiency.",
      stats: [
        { label: "Modules Deployed", value: "5+" },
        { label: "Users Onboarded", value: "50+" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "Academic Excellence",
      subtitle: "Top 3 Performance",
      description: "Achieved top 3 ranking in class with a GPA of 3.68/4.0, demonstrating strong analytical thinking and problem-solving capabilities across technical and business domains.",
      stats: [
        { label: "GPA", value: "3.68/4.0" },
        { label: "Class Rank", value: "Top 3" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      title: "Full-Stack Development",
      subtitle: "Modern Web Applications",
      description: "Built responsive web applications using React, ASP.NET Core, and Flutter, implementing clean architecture patterns and RESTful APIs with JWT authentication and comprehensive testing.",
      stats: [
        { label: "Technologies", value: "10+" },
        { label: "Projects", value: "Multiple" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      title: "Awards & Recognition",
      subtitle: "Professional Excellence",
      description: "Received multiple awards and certifications recognizing technical expertise, innovation, and commitment to continuous learning in business analysis and software development.",
      stats: [
        { label: "Awards", value: "9+" },
        { label: "Certifications", value: "2+" }
      ]
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [achievements.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase bg-orange-500/10 px-4 py-2 rounded-full">
              Journey Recap
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Highlights from my professional and academic journey
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/10">
            {/* Slides */}
            <div className="relative">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 relative' 
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-0 bg-gradient-to-br from-slate-900 to-slate-800 border border-orange-500/20">
                    {/* Image Side */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent z-10" />
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Decorative glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {/* Subtitle */}
                      <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-3">
                        {achievement.subtitle}
                      </span>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        {achievement.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {achievement.stats.map((stat, i) => (
                          <div 
                            key={i}
                            className="bg-gradient-to-br from-orange-500/10 to-transparent p-4 rounded-lg border border-orange-500/30 shadow-md shadow-orange-500/10"
                          >
                            <div className="text-2xl font-bold text-orange-500 mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Progress bar */}
                      <div className="flex gap-2">
                        {achievements.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                              i === currentSlide 
                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50' 
                                : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-orange-500/30 text-white hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 backdrop-blur-sm z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-orange-500/30 text-white hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 backdrop-blur-sm z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm">
            {currentSlide + 1} / {achievements.length}
          </span>
        </div>
      </div>
    </section>
  );
}
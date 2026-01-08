import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb, Briefcase, Mail } from 'lucide-react';
import ExperienceTree from './ExperienceTree.jsx';
import PortfolioGallery from './PortfolioGallery.jsx';
import GetInTouch from './GetInTouch.jsx';
import AboutSection from './AboutSection.jsx';
import AchievementSection from './AchievementSection.jsx';
import { motion } from "framer-motion";
const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Lấy hash từ URL (bỏ dấu #)
    if (hash) {
      // Delay một chút để đảm bảo trang đã render xong
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                THANH DUOC
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#resume" className="hover:text-orange-500 transition-colors">Resume</a>
              <a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a>
              <a href="#achievements" className="hover:text-orange-500 transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-orange-500 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3 text-white">
              <a href="#home" className="block hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="block hover:text-orange-500 transition-colors">About</a>
              <a href="#resume" className="block hover:text-orange-500 transition-colors">Resume</a>
              <a href="#portfolio" className="block hover:text-orange-500 transition-colors">Portfolio</a>
              <a href="#achievements" className="block hover:text-orange-500 transition-colors">Achievements</a>
              <a href="#contact" className="block hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} 
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* CỘT TRÁI: TEXT */}
            <div className="space-y-6">
              <motion.p variants={itemVariants} className="text-white/70 mb-2">
                I AM THANH DUOC
              </motion.p>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white">
                Business <span className="text-orange-500">Analyst</span>
              </motion.h1>

              <motion.div variants={itemVariants}>
                <a
                  href="#contact"
                  className="group relative inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/50 transition-all duration-300 cursor-pointer"
                >
                  <span className="relative z-10">Contact now</span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-600 to-orange-700 transition-opacity duration-300" />
                </a>
              </motion.div>
            </div>

            {/* CỘT PHẢI: IMAGE */}
            <motion.div
              className="relative"
              variants={imageVariants}
            >
              <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg overflow-hidden border border-orange-500/10">
                <img
                  src="img/avatar.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                />
              </div>

              {/* Trang trí thêm: Một hình tròn phát sáng phía sau ảnh */}
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-orange-500/20 blur-[80px] rounded-full" />
            </motion.div>

          </div>
        </motion.div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <AboutSection />
      </section>


      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8">
        <ExperienceTree />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <PortfolioGallery />
      </section>

      {/* Achivement Section */
        <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 py-20 px-4">
          <AchievementSection />
        </section>
      }
      {/* Contact Section */}

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <GetInTouch />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Thanh Duoc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
import { motion } from "framer-motion";


export default function AboutSection() {
    const fadeInVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Hiệu ứng "bung" cho các thẻ kỹ năng (Stagger)
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1 // Mỗi kỹ năng hiện cách nhau 0.1 giây
            }
        }
    };

    const skillVariant = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 200, damping: 10 }
        }
    };
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
           <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Skills Capabilities
            </span>
          </h3>
          <h3 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
            Business Analyst with Technical Background
          </h3>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-sm">
            I focus on analyzing business processes and transforming requirements into clear, practical solutions.
            With hands-on experience in ERP systems and a solid understanding of web technologies, I bridge the gap
            between business needs and development teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image with floating effect */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-full h-96 bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-lg overflow-hidden shadow-2xl shadow-orange-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop"
                alt="About"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 blur-3xl -z-10"></div>
          </motion.div>

          {/* Right Side: Skills Groups */}
          <div className="space-y-6">
            {/* Group: Business & ERP */}
            <SkillSection 
              title="Business & ERP" 
              skills={["Requirement Analysis", "Business Process Modeling", "Inventory Management", "Sales & POS Systems", "Accounting Workflow", "User Acceptance Support"]}
              containerVariants={staggerContainer}
              itemVariants={skillVariant}
            />

            {/* Group: Technical Skills */}
            <SkillSection 
              title="Technical Skills" 
              skills={["C# / .NET", "ASP.NET Core API", "SQL", "Entity Framework Core", "LINQ", "JWT Authentication", "Unit Testing", "Flutter UI", "Flutter API"]}
              containerVariants={staggerContainer}
              itemVariants={skillVariant}
            />

            {/* Strengths Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInVariant}
              className="bg-gradient-to-br from-orange-500/5 to-transparent p-4 rounded-lg border border-orange-500/20 shadow-lg shadow-orange-500/10"
            >
              <h4 className="text-orange-500 font-semibold mb-3">Strengths</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-white/80 text-sm">
                {["Clear Communication", "Stakeholder Collaboration", "System Thinking", "User-Centered Mindset", "Detail-Oriented", "Problem Solving"].map((s) => (
                  <div key={s}>• {s}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
        </section>
    );
}
const SkillSection = ({ title, skills, containerVariants, itemVariants }) => (
  <motion.div 
    className="bg-gradient-to-br from-orange-500/5 to-transparent p-4 rounded-lg border border-orange-500/20 shadow-lg shadow-orange-500/10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={containerVariants}
  >
    <h4 className="text-orange-500 font-semibold mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <motion.span
          key={skill}
          variants={itemVariants}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.3)" }}
          className="px-3 py-1 text-sm text-white bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/40 rounded-xl shadow-md cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);
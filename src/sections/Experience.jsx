import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    title: 'Full Stack Web Development Training',
    company: 'Tech Academy',
    date: '2025 - Present',
    description: 'Intensive training covering the complete MERN stack. Developed multiple production-ready applications including comprehensive e-commerce platforms and interactive dashboards. Focus on clean architecture, REST APIs, and state management.',
    icon: GraduationCap
  },
  {
    title: 'Frontend UI/UX Mastery',
    company: 'Self-Taught & Bootcamps',
    date: '2024 - 2025',
    description: 'Mastered modern CSS frameworks, responsive design principles, and JavaScript fundamentals. Built pixel-perfect UI clones and custom design systems using Tailwind CSS and React.',
    icon: Briefcase
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Training</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[17px] md:-left-[21px] top-1 bg-card border-2 border-primary w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-primary shadow-[0_0_10px_rgba(59,130,246,0.3)]" aria-hidden="true">
                <item.icon size={18} />
              </div>
              
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                <span className="text-sm font-medium text-secondary mb-2 block">{item.date}</span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <h4 className="text-text-main/80 font-medium mb-4">{item.company}</h4>
                <p className="text-text-main/80 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-text-main/80 leading-relaxed mb-6">
              I am a passionate <span className="text-primary font-semibold">Full Stack MERN Developer</span> dedicated to building scalable, high-performance web applications. My expertise spans across the entire stack, from designing intuitive user interfaces to architecting robust backend systems.
            </p>
            <p className="text-lg text-text-main/80 leading-relaxed">
              With a strong focus on <span className="text-secondary font-semibold">modern UI/UX principles</span>, I don't just write code—I craft digital experiences. I believe that great software is the perfect balance of technical precision and aesthetic appeal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Layout, title: 'Frontend', desc: 'React, Tailwind' },
              { icon: Server, title: 'Backend', desc: 'Node, Express' },
              { icon: Database, title: 'Database', desc: 'MongoDB' },
              { icon: Code2, title: 'Clean Code', desc: 'Best Practices' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors">
                <item.icon className="text-primary mb-4" size={32} aria-hidden="true" />
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-text-main/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

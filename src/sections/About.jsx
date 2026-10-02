import { motion } from 'framer-motion';
import { Code2, Layout, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About</h2>
          <p className="text-text-muted max-w-2xl text-lg font-medium">Building the bridge between design and engineering.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              I am a <strong className="text-text-main font-semibold">Full Stack Developer</strong> dedicated to building scalable, high-performance web applications. My expertise spans across the entire stack, from designing intuitive user interfaces to architecting robust backend systems.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              With a strong focus on <strong className="text-text-main font-semibold">modern UI/UX principles</strong>, I don't just write code—I craft digital experiences. I believe that great software is the perfect balance of technical precision and aesthetic appeal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-2 gap-x-8 gap-y-10"
          >
            {[
              { icon: Layout, title: 'Frontend', desc: 'React, Tailwind' },
              { icon: Server, title: 'Backend', desc: 'Node, Express' },
              { icon: Database, title: 'Database', desc: 'MongoDB' },
              { icon: Code2, title: 'Clean Code', desc: 'Best Practices' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col group">
                <item.icon className="text-text-muted mb-4 group-hover:text-primary transition-colors" size={28} aria-hidden="true" />
                <h3 className="font-bold text-lg mb-1 tracking-tight">{item.title}</h3>
                <p className="text-text-muted text-sm font-mono">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

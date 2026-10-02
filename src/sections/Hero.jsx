import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block py-1.5 px-3 rounded-full bg-border-subtle/50 text-text-muted text-xs font-mono mb-8 border border-border-subtle">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-primary leading-none"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Ravinder Mauriya
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-4xl text-text-muted max-w-3xl font-medium tracking-tight mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Software Engineer specializing in the MERN stack.
          <br className="hidden md:block" /> I build secure, scalable web applications and enterprise tools.
        </motion.h2>
        
        <motion.p
          className="text-lg text-text-muted/80 max-w-2xl mb-12 font-mono text-sm leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          From initial concept to scalable production — I handle the entire stack with a focus on modern UI/UX and clean architecture.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a href="#projects" className="group px-8 py-4 rounded bg-primary text-background font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded border border-border-subtle text-text-main font-medium flex items-center justify-center gap-2 hover:bg-border-subtle/30 transition-all">
            <Download size={18} aria-hidden="true" />
            Resume
          </a>
          <a href="#contact" className="px-8 py-4 rounded text-text-muted font-medium flex items-center justify-center gap-2 hover:text-primary transition-all">
            <Mail size={18} aria-hidden="true" />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ravinder Mauriya</span>
        </motion.h1>

        <motion.p 
          className="mt-4 text-xl md:text-2xl text-text-main/80 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack MERN Developer building scalable, end-to-end web applications with modern UI/UX.
        </motion.p>
        
        <motion.p
          className="mt-4 text-lg text-text-main/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          From idea to production — I handle everything.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#projects" className="group px-8 py-3.5 rounded-lg bg-primary text-white font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a href="/resume.pdf" target="_blank" className="px-8 py-3.5 rounded-lg bg-card border border-white/10 text-text-main font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-lg bg-transparent border border-white/10 text-text-main font-medium flex items-center justify-center gap-2 hover:border-primary/50 hover:text-primary transition-all">
            <Mail size={18} aria-hidden="true" />
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

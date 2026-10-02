import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    title: 'Web Developer Intern',
    company: 'ANSH InfoTech',
    date: 'May 2026 - Aug 2026',
    description: 'Built and maintained enterprise-level MERN stack applications. Contributed to a core HRMS & Payroll Management System using TypeScript, Prisma ORM, and PostgreSQL. Architected the frontend and backend for a confidential financial assessment application (BI Calculator), building robust React forms with Zod validation and secure Express REST APIs with rate-limiting and input sanitization.',
    icon: Briefcase
  },
  {
    title: 'Academic Web Development Intern',
    company: 'Edutron Computer Institute',
    date: 'Academic Internship',
    description: 'Intensive internship covering HTML, CSS, JavaScript, PHP, MySQL, and Web Hosting. Built foundational web development skills and deployed dynamic applications.',
    icon: GraduationCap
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Experience</h2>
          <p className="text-text-muted text-lg">My professional journey and training.</p>
        </motion.div>

        <div className="relative border-l border-border-subtle ml-4 md:ml-6 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-4 top-1 bg-background border border-border-subtle w-8 h-8 rounded-full flex items-center justify-center text-text-muted" aria-hidden="true">
                <item.icon size={16} />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <span className="text-sm font-mono text-accent">{item.date}</span>
              </div>
              
              <h4 className="text-text-main font-medium mb-4">{item.company}</h4>
              <p className="text-text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

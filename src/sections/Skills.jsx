import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication (JWT)', 'API Design']
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Mongoose', 'Data Modeling', 'Aggregation Pipeline']
  },
  {
    category: 'Tools & Other',
    skills: ['Git & GitHub', 'Vite', 'Postman', 'Vercel', 'Render', 'Responsive Design']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all group"
            >
              <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-text-main/90 group-hover:text-text-main transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

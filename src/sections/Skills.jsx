import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Authentication (JWT)",
      "API Design",
    ],
  },
  {
    category: "Database",
    skills: [
      "MongoDB",
      "Redis",
      "Prisma",
      "Supabase",
      "Data Modeling",
      "Aggregation Pipeline",
    ],
  },
  {
    category: "Deployment",
    skills: [
      "Netlify",
      "Render",
      "Vercel",
      "Docker",
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      "Git & GitHub",
      "Postman",
      "Gen AI Integration",
      "Responsive Design",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-text-muted max-w-2xl text-lg font-medium">Tools and technologies I use to build digital products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-6 border-b border-border-subtle pb-2">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-text-main font-medium"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-sm bg-accent/50 mr-3"
                      aria-hidden="true"
                    />
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

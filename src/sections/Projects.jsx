import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// NOTE: Replace backup URLs with your actual working backup links

const projects = [
  {
    title: "NexCart",
    description:
      "A comprehensive Full Stack MERN e-commerce application featuring JWT authentication, product management, cart functionality, secure checkout, and a dedicated admin panel. Built for scale and performance.",
    image: "https://ik.imagekit.io/l3qfor1o2/nexcart-project.netlify.app_.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "imageKit",
      "jwt",
      "Razorpay",
    ],
    liveUrls: [
      "https://nexcart-project.netlify.app",
      "https://nexcartproject.netlify.app"
    ],
    githubUrl: "https://github.com/RavinderMauriya/NexCart.git",
    featured: true,
  },
  {
    title: "SoleStyle",
    description:
      "A premium frontend e-commerce UI focused on footwear. Features an advanced filtering system, responsive product grids, and a modern, minimalist design aesthetic.",
    image: "https://ik.imagekit.io/l3qfor1o2/solestyleproject.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrls: [
      "https://solestyleproject.netlify.app",
      "https://solestyle-project.netlify.app"
    ],
    githubUrl: "https://github.com/RavinderMauriya/SoleStyle---Project.git",
    featured: true,
  },
];

const Projects = () => {
  // Function to open the backup URL (user won't know which link opened)
  const openWorkingLink = (urls) => {
    if (!urls || urls.length === 0) return;
    // Open 2nd URL if available (backup), otherwise 1st
    const urlToOpen = urls[1] || urls[0];
    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
  };
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-card rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 flex flex-col hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${project.featured ? "lg:col-span-2 lg:flex-row" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${project.featured ? "w-full h-64 lg:h-auto lg:w-1/2" : "w-full h-64"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 lg:hidden opacity-0 dark:opacity-50 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent z-10 hidden lg:block opacity-0 dark:opacity-50 transition-opacity" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full border border-accent/20 backdrop-blur-md">
                    Featured Project
                  </span>
                )}
              </div>

              <div
                className={`p-8 flex flex-col justify-center ${project.featured ? "lg:w-1/2" : ""}`}
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-text-main/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/5 text-text-main/90 border border-black/10 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => openWorkingLink(project.liveUrls)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-sm cursor-pointer"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Live Demo
                  </button>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black/5 dark:bg-white/5 text-text-main font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={16} aria-hidden="true" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

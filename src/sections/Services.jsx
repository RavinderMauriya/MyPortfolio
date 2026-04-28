import { motion } from 'framer-motion';
import { Code, Palette, ShoppingBag, Globe } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full Stack Development',
    description: 'End-to-end web application development using MongoDB, Express.js, React, and Node.js. Building scalable and secure systems.'
  },
  {
    icon: Code,
    title: 'Frontend Excellence',
    description: 'Creating highly interactive, fast, and accessible user interfaces using modern React features, Tailwind CSS, and Framer Motion.'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description: 'Building custom e-commerce platforms with secure payment gateway integrations, cart management, and admin dashboards.'
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description: 'Translating high-fidelity Figma designs into pixel-perfect, responsive code that looks great on any device.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="mt-6 text-text-main/70 max-w-2xl mx-auto text-lg">
            What I bring to the table. Specialized services to help your business grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-card rounded-2xl border border-white/5 hover:bg-card/80 hover:border-secondary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300" aria-hidden="true">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-main/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

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
    description: 'Creating highly interactive, fast, and accessible user interfaces using modern React features and styling.'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description: 'Building custom e-commerce platforms with secure payment gateway integrations, cart management, and admin dashboards.'
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description: 'Translating high-fidelity designs into pixel-perfect, responsive code that looks great on any device.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Services</h2>
          <p className="text-text-muted max-w-2xl text-lg font-medium">
            Specialized expertise to help your product grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="shrink-0 text-text-muted group-hover:text-primary transition-colors duration-300 mt-1" aria-hidden="true">
                <service.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className="text-text-muted text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

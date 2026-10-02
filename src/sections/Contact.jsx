import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ravindermauriya6290@gmail.com',
      link: 'mailto:ravindermauriya6290@gmail.com'
    },
    {
      icon: IoLogoWhatsapp,
      title: 'WhatsApp',
      value: '+91 9779533768',
      link: 'https://wa.me/9779533768'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/RavinderMauriya' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/ravindermauriya/' },
  ];

  return (
    <section id="contact" className="py-24 relative border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <p className="text-text-muted max-w-2xl text-lg font-medium">Ready to start your next project? Get in touch.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target={info.title === 'Location' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 rounded bg-border-subtle/10 hover:bg-border-subtle/30 transition-colors border border-border-subtle/50"
                >
                  <div className="text-text-muted group-hover:text-primary transition-colors" aria-hidden="true">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-tight">{info.title}</h3>
                    <p className="text-text-muted font-mono text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-border-subtle">
              <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-4">Social Profiles</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded flex items-center justify-center bg-border-subtle/20 text-text-muted hover:text-primary hover:bg-border-subtle/50 transition-colors"
                  >
                    <social.icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-text-main mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border-subtle rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main font-mono text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-text-main mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border-subtle rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main font-mono text-sm"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-text-main mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border-subtle rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main font-mono text-sm"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text-main mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-background border border-border-subtle rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main font-mono text-sm resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-accent text-sm"
                >
                  <CheckCircle size={16} />
                  Message sent successfully!
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 text-sm"
                >
                  <AlertCircle size={16} />
                  Failed to send message. Please try again.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 rounded bg-primary text-background font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
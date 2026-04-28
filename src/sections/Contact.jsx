import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="mt-6 text-text-main/70 max-w-2xl mx-auto text-lg">
            Available for freelance & full-time work. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-main/80">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-main/80">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-main/80">Subject</label>
                <input 
                  type="text" 
                  placeholder="Any Inquiry" 
                  className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-main/80">Message</label>
                <textarea 
                  rows={5}
                  placeholder="write your message here" 
                  className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 bg-card rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-text-main/70 text-sm mb-8">
                Feel free to reach out to me directly through email or connect with me on my social platforms.
              </p>
              
              <div className="flex items-center gap-4 text-text-main/80">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-main/60">Email me at</p>
                  <p className="font-medium">ravindermauriya6290@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-text-main/80">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-main/60">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
              <div className="flex gap-4">
                <a href="https://github.com/RavinderMauriya" className="w-12 h-12 bg-background rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors text-text-main"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ravindermauriya/" className="w-12 h-12 bg-background rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors text-text-main"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
                <a href="https://wa.me/9779533768" className="w-12 h-12 bg-background rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors text-text-main"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp size={20}/>
                </a>
              </div>  
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

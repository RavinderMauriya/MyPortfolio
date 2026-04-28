import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-card/30 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 md:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="mt-5 sm:mt-6 text-text-main/70 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Available for freelance & full-time work. Let's build something
            amazing together.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* FORM */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              className="space-y-5 sm:space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-medium text-text-main/80">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-medium text-text-main/80">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-medium text-text-main/80">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Any Inquiry"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-medium text-text-main/80">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none text-sm sm:text-base"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-primary to-secondary text-white text-sm sm:text-base font-medium rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Info Card */}
            <div className="p-5 sm:p-6 md:p-8 bg-card rounded-2xl border border-white/5 space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold">
                Contact Information
              </h3>

              <p className="text-text-main/70 text-xs sm:text-sm">
                Feel free to reach out via email or social platforms.
              </p>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-text-main/60">Email</p>
                  <p className="font-medium text-sm sm:text-base break-all">
                    ravindermauriya6290@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-text-main/60">
                    Location
                  </p>
                  <p className="font-medium text-sm sm:text-base">India</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="p-5 sm:p-6 md:p-8 bg-card rounded-2xl border border-white/5">
              <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">
                Social Profiles
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  {
                    href: "https://github.com/RavinderMauriya",
                    icon: <FaGithub size={18} />,
                  },
                  {
                    href: "https://www.linkedin.com/in/ravindermauriya/",
                    icon: <FaLinkedin size={18} />,
                  },
                  {
                    href: "https://wa.me/9779533768",
                    icon: <IoLogoWhatsapp size={18} />,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-background rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, MapPin, Send } from 'lucide-react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { IoLogoWhatsapp } from "react-icons/io";
// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 md:py-24 bg-card/30 border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-10 md:mb-16 text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
//           <p className="mt-6 text-text-main/70 max-w-2xl mx-auto text-lg">
//             Available for freelance & full-time work. Let's build something amazing together.
//           </p>
//         </motion.div>

//         <div className="grid flex-col-reverse lg:grid-cols-2 gap-10 lg:gap-16 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-text-main/80">Name</label>
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-text-main/80">Email</label>
//                   <input
//                     type="email"
//                     placeholder="email@example.com"
//                     className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-text-main/80">Subject</label>
//                 <input
//                   type="text"
//                   placeholder="Any Inquiry"
//                   className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-text-main/80">Message</label>
//                 <textarea
//                   rows={5}
//                   placeholder="write your message here"
//                   className="w-full px-4 py-3 bg-background rounded-lg border border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-main resize-none"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
//               >
//                 Send Message
//                 <Send size={18} />
//               </button>
//             </form>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="space-y-8"
//           >
//             <div className="p-6 md:p-8 bg-card rounded-2xl border border-white/5 space-y-6">
//               <h3 className="text-xl font-bold mb-2">Contact Information</h3>
//               <p className="text-text-main/70 text-sm mb-8">
//                 Feel free to reach out to me directly through email or connect with me on my social platforms.
//               </p>

//               <div className="flex items-center gap-4 text-text-main/80">
//                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-text-main/60">Email me at</p>
//                   <p className="font-medium">ravindermauriya6290@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 text-text-main/80">
//                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-text-main/60">Location</p>
//                   <p className="font-medium">India</p>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 md:p-8 bg-card rounded-2xl border border-white/5">
//               <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
//               <div className="flex gap-4">
//                 <a href="https://github.com/RavinderMauriya" className="w-12 h-12 bg-background rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors text-text-main"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                   <FaGithub size={20} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/ravindermauriya/" className="w-12 h-12 bg-background rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors text-text-main"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                   <FaLinkedin size={20} />
//                 </a>
//                 <a href="https://wa.me/9779533768" className="w-12 h-12 bg-background rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-primary transition-colors text-text-main"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                   <IoLogoWhatsapp size={20}/>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Scroll handling
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-background/80 border-b border-border-subtle shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold font-mono text-primary tracking-tight">
              ravinder.dev
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-text-muted hover:text-primary transition-colors text-sm font-medium">
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-text-main"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="px-5 py-2 rounded bg-accent text-white hover:bg-accent/90 transition-all font-medium text-sm shadow-sm">
              Hire Me
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-text-main"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-text-main hover:text-primary focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border-subtle"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-text-main hover:text-primary hover:bg-black/5 dark:hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center px-5 py-3 rounded bg-accent text-white font-medium shadow-sm"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

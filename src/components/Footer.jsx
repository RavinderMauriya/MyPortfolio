import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-text-main/70 text-sm">
          &copy; {currentYear} Ravinder Mauriya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

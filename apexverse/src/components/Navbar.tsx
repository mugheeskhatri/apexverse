import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
            <Zap className="text-black fill-black" size={24} />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight">Apexverse</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-white/70 hover:text-brand-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-brand-primary transition-colors">How it Works</a>
          <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-brand-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-white/70 hover:text-brand-primary transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">Log in</button>
          <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-brand-primary transition-all hover:scale-105">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <a href="#features" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
              <a href="#pricing" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              <button className="w-full py-4 bg-white text-black font-bold rounded-xl">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

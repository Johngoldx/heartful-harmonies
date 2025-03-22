
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Music2 } from 'lucide-react';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12',
        scrolled ? 'glass-panel' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          <div className="relative w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
            <Music2 className="w-5 h-5 text-primary transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse-slow"></div>
          </div>
          <span className="text-xl font-medium tracking-tight">Tune2Heart</span>
        </a>
        <div className="flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">How It Works</a>
          <a href="#questionnaire" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Create Music</a>
          <button className="glass-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

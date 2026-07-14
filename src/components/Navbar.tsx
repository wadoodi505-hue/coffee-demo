import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Story', href: '#story' },
    { name: 'Process', href: '#process' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-background/70 backdrop-blur-md border-border py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex-1 hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a href="#" className="flex-1 md:flex-none text-center">
            <span className="font-serif text-2xl tracking-widest font-bold text-foreground">
              BROBEX
            </span>
          </a>

          <div className="flex-1 hidden md:flex items-center justify-end gap-8">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-2 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Order Now
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-8 right-6 text-foreground"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif tracking-widest text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Droplet, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/industries", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About Us" },
  { href: "#office", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="relative">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          scrolled || isMenuOpen
            ? "bg-gradient-to-r from-[#2c5f7f] to-[#3b7a9c] shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="/#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <Droplet className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <span className="text-xl font-semibold text-white">Amphitrite</span>
                <p className="text-sm text-blue-200">Technologies</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm font-medium transition-all duration-300 hover:scale-105 relative group text-white cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white"></span>
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium transition-all duration-300 hover:scale-105 relative group text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white"></span>
                  </Link>
                )
              ))}
              <a href="/#lead-form">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-teal-400/40 h-9 px-4 bg-[#00d4aa] text-white">
                  Request Free Consultation
                </button>
              </a>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div 
          className="fixed inset-0 top-[81px] z-40 bg-gradient-to-b from-[#3b7a9c] to-[#2c5f7f] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-lg font-medium"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <a href="/#lead-form" className="mt-4" onClick={() => setIsMenuOpen(false)}>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors h-12 px-8 bg-[#00d4aa] text-white shadow-md">
                Request Free Consultation
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
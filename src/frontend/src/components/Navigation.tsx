import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#google-reviews" },
  { label: "Admission", href: "#admission" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 drop-shadow-sm">
              <img
                src="/assets/sclc-logo-main.png"
                alt="Sisodiya Child Learning Centre Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-heading font-800 text-sm md:text-base text-foreground leading-tight group-hover:text-primary transition-colors">
                Sisodiya Child Learning Centre – Ek Nayi Ummeed
              </p>
              <p className="font-heading text-xs text-warm-500 italic">
                An Integrated Therapy Centre for Children with Special Needs
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-xl font-heading font-600 text-sm text-foreground/80 hover:text-primary hover:bg-warm-100 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="ml-3 bg-primary text-primary-foreground hover:bg-warm-600 rounded-xl font-heading font-700 shadow-warm"
            >
              <Heart className="w-4 h-4 mr-1.5" />
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-warm-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-b border-border shadow-card-hover">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl font-heading font-600 text-foreground/80 hover:text-primary hover:bg-warm-100 transition-all"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 bg-primary text-primary-foreground hover:bg-warm-600 rounded-xl font-heading font-700 shadow-warm"
            >
              <Heart className="w-4 h-4 mr-1.5" />
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

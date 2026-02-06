/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Header: Persistent sticky nav, dark charcoal background, gold accent on hover/active
 * Logo left, nav items right, mobile hamburger menu
 * Playfair Display for logo text, DM Sans for nav items
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/NiaNicvmPIItiOSR.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Carpets", href: "/carpets" },
  { label: "Laminate", href: "/laminate" },
  { label: "LVT", href: "/lvt" },
  { label: "Vinyl", href: "/vinyl" },
  { label: "Showroom", href: "/showroom" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      {/* Top bar with phone number */}
      <div className={`transition-all duration-500 overflow-hidden ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`}>
        <div className="container flex justify-end py-1.5">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-1.5 text-xs tracking-wider text-warm-cream/70 hover:text-gold transition-colors"
          >
            <Phone className="w-3 h-3" />
            Call Us Today
          </a>
        </div>
      </div>

      <nav className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0">
          <img
            src={LOGO_URL}
            alt="Usher Flooring - The Smart Choice"
            className="h-12 md:h-14 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                location === item.href
                  ? "text-gold"
                  : "text-warm-cream/80 hover:text-gold"
              }`}
            >
              {item.label}
              {location === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-10 p-2 text-warm-cream hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/20 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3 px-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                      location === item.href
                        ? "text-gold border-l-2 border-gold bg-gold/5"
                        : "text-warm-cream/70 hover:text-gold hover:bg-gold/5 border-l-2 border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

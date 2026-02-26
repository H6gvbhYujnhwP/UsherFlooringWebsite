/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Footer: Dark charcoal, gold accents, organized columns
 * Logo, nav links, areas, contact info, supplier mentions
 */
import { Link } from "wouter";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/NiaNicvmPIItiOSR.png";

const areaCovered = [
  { label: "Wickford", href: "/flooring-wickford" },
  { label: "Basildon", href: "/flooring-basildon" },
  { label: "Rayleigh", href: "/flooring-rayleigh" },
  { label: "Southend", href: "/flooring-southend" },
  { label: "Benfleet", href: "/flooring-benfleet" },
  { label: "Billericay", href: "/flooring-billericay" },
  { label: "Brentwood", href: "/flooring-brentwood" },
  { label: "Chelmsford", href: "/flooring-chelmsford" },
  { label: "Romford", href: "/flooring-romford" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src={LOGO_URL}
                alt="Usher Flooring"
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className="text-warm-cream/60 text-sm leading-relaxed mt-4">
              Supplying and fitting quality flooring across London, Essex and surrounding areas.
              Carpets, laminate, vinyl and LVT from leading manufacturers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-gold mb-6">
              Quick Links
            </h4>
            <div className="gold-divider mb-6" />
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Carpets", href: "/carpets" },
                { label: "Laminate", href: "/laminate" },
                { label: "LVT", href: "/lvt" },
                { label: "Vinyl", href: "/vinyl" },
                { label: "Showroom", href: "/showroom" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-cream/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Cover */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-gold mb-6">
              Areas We Cover
            </h4>
            <div className="gold-divider mb-6" />
            <ul className="space-y-3">
              {areaCovered.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-warm-cream/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Suppliers */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-gold mb-6">
              Our Suppliers
            </h4>
            <div className="gold-divider mb-6" />
            <ul className="space-y-3">
              {[
                { name: "Associated Weavers", url: "https://associated-weavers.co.uk/" },
                { name: "Cormar Carpets", url: "https://www.cormarcarpets.co.uk/" },
                { name: "Westex Flooring", url: "https://www.westexflooring.com/" },
                { name: "Polyflor", url: "#" },
              ].map((supplier) => (
                <li key={supplier.name}>
                  <a
                    href={supplier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm-cream/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {supplier.name}
                  </a>
                </li>
              ))}
              <li className="text-warm-cream/40 text-sm italic">Plus many more...</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-gold mb-6">
              Get In Touch
            </h4>
            <div className="gold-divider mb-6" />
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01277711629"
                  className="flex items-start gap-3 text-warm-cream/60 hover:text-gold text-sm transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold/60" />
                  <span>Tel: 01277 711 629</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:07985200403"
                  className="flex items-start gap-3 text-warm-cream/60 hover:text-gold text-sm transition-colors duration-300"
                >
                  <Smartphone className="w-4 h-4 mt-0.5 shrink-0 text-gold/60" />
                  <span>Mob: 07985 200 403</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@usherflooring.com"
                  className="flex items-start gap-3 text-warm-cream/60 hover:text-gold text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-gold/60" />
                  <span>info@usherflooring.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-cream/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold/60" />
                <span>London, Essex &amp; Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-cream/40 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Usher Flooring. All rights reserved.
          </p>
          <p className="text-warm-cream/30 text-xs tracking-wider">
            The Smart Choice for Quality Flooring
          </p>
        </div>
      </div>
    </footer>
  );
}

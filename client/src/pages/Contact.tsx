/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Contact page: Hero, contact form, info cards
 * Form fields: First Name, Last Name, Email, Phone, Message
 */
import { useState } from "react";
import { Phone, Smartphone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const ABOUT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-5_1770383306000_na1fn_YWJvdXQtc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTVfMTc3MDM4MzMwNjAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=edWhnBYc3aZwT6SqGdfspbcljcC~vBDHTcbCysifX3qs1ia51CjkA20L65GhTWSv4~3uqtRniW8LBqGy57h4A-V7rcq~bT6tJDKBZHY7u9MnC1qvtqhvFYkS1-o0jkqiccxs3uS1Q6xkqyJzs34pHn~8JSt7NFCRCCKOXnLLb~vu5J8Hs8xsGnfdntPY1eLErvz6yR9ENMUpogIfvIBrc605N3Cvafiihdduurg3NkVi4Q2g8Apzot~wULJzofoQhuMqCrgPV2CYN3IC1z9wfBRHg2uBzEPKFp2jqCHjx6NGTBeLJjSaDU4YEFckZz~YnytVtOxAyjZr6uvZ-ewblg__";

const contactInfo = [
  { icon: Phone, title: "Telephone", value: "01277 711 629", href: "tel:01277711629" },
  { icon: Smartphone, title: "Mobile", value: "07985 200 403", href: "tel:07985200403" },
  { icon: Mail, title: "Email", value: "info@usherflooring.com", href: "mailto:info@usherflooring.com" },
  { icon: MapPin, title: "Area", value: "London, Essex & Surrounding Areas", href: undefined },
  { icon: Clock, title: "Availability", value: "Showroom visits by appointment", href: undefined },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for your message! We'll be in touch shortly.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, no-obligation quote"
        image={ABOUT_IMG}
        compact
      />

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                  Get in Touch
                </h2>
                <div className="gold-divider mt-4" />
                <p className="mt-6 text-charcoal/70 text-lg">
                  Fill in the form below and we will respond to you shortly. Whether you need a quote,
                  want to arrange a showroom visit, or have any questions — we're here to help.
                </p>

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 mb-2 uppercase tracking-wider">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 mb-2 uppercase tracking-wider">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 mb-2 uppercase tracking-wider">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal/80 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your flooring needs, the rooms you'd like to update, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-charcoal p-8 md:p-10 space-y-8">
                  <div>
                    <h3 className="font-serif text-xl text-warm-cream font-semibold tracking-wide">
                      Contact Information
                    </h3>
                    <div className="w-10 h-0.5 bg-gold mt-3" />
                  </div>

                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-gold/30 text-gold">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-warm-cream/50 text-xs uppercase tracking-wider mb-1">
                          {item.title}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-warm-cream hover:text-gold transition-colors text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-warm-cream text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-gold/10">
                    <h4 className="font-serif text-lg text-warm-cream font-semibold tracking-wide mb-3">
                      Showroom Visits
                    </h4>
                    <p className="text-warm-cream/60 text-sm leading-relaxed">
                      Our showroom is available by appointment. Please get in touch to arrange a
                      convenient time to visit and browse our flooring samples.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gold/10">
                    <h4 className="font-serif text-lg text-warm-cream font-semibold tracking-wide mb-3">
                      Home Visits
                    </h4>
                    <p className="text-warm-cream/60 text-sm leading-relaxed">
                      Can't visit the showroom? We can bring samples to your home so you can see
                      how they look in your own space. Free measuring service included.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

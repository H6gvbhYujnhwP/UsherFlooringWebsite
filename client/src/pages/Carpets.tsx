/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Carpets page: Hero, info sections, supplier mentions, CTA
 */
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const CARPETS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-2_1770383330000_na1fn_Y2FycGV0cy1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTJfMTc3MDM4MzMzMDAwMF9uYTFmbl9ZMkZ5Y0dWMGN5MW9aWEp2LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oPUadgmUN9gzWSEQtR5mp2LQBlrG0htwbYoJnTaeUR9MlaIt5sxUSDCL-vi~ybJB0IzrgBiwoW2CnfOCtNGRoioG-H64qY2Ag0uG6aOiem1blclVG3Fdtr~5hOnVqBOdov1iH3rU0MGFkMCB1RAXqqGmO2fYByrwKCmTJb1r3cLHtZPkxKTw8BiRm6WAXUsjAJhQOrBuxwevR6-eSR2-b88Z876UgHql6NKqtTGPqtUdG7ECxmKPWdHx4PgxDZD7JcMv57LH1HzfnHpa1t8F2QXcvBT-2rV0Hhnr8FNEVF0ZZ8z1a35pRqu7xC-l-cOFxbeLSJc4HO78PHMBnQ6HEg__";

const benefits = [
  "Wide range of styles, colours and textures",
  "Suitable for bedrooms, living rooms, hallways and stairs",
  "Warm, comfortable and sound-absorbing",
  "Stain-resistant and hard-wearing options available",
  "Free measuring service included",
  "Samples brought to your home on request",
];

export default function Carpets() {
  return (
    <>
      <PageHero
        title="Carpets"
        subtitle="Luxurious carpets to bring warmth, comfort and style to every room"
        image={CARPETS_IMG}
        compact
      />

      {/* Main Content — warm cream */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                Supply &amp; Fit Carpets
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
                We offer a wide range of carpets to suit any room or decor. Whether you're looking for
                a plush, deep-pile carpet for the bedroom or a hard-wearing option for the hallway, we
                can help you source the right carpet to suit your style while bringing comfort and warmth
                to the busiest of homes.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                We stock some of the finest carpets from the best suppliers in the UK, including
                <strong className="text-charcoal"> Associated Weavers</strong> and
                <strong className="text-charcoal"> Cormar Carpets</strong>. Choosing the right carpet
                with Usher Flooring couldn't be easier.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                As an independent fitter, we offer a free measuring service in Surrey and surrounding
                areas and can provide you with a no-obligation quote for supplying and fitting your new
                carpets.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-cream font-semibold tracking-wide">
                  Why Choose Our Carpets?
                </h3>
                <div className="w-10 h-0.5 bg-gold mt-3" />
                <ul className="mt-6 space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-warm-cream/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Rooms Section — dark */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Carpets for Every Room
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { room: "Bedrooms", desc: "Soft, luxurious pile for ultimate comfort underfoot" },
              { room: "Living Rooms", desc: "Durable and stylish options for high-traffic family spaces" },
              { room: "Hallways & Stairs", desc: "Hard-wearing carpets built to withstand daily use" },
              { room: "Dining Rooms", desc: "Elegant designs that complement your dining space" },
            ].map((item, i) => (
              <AnimatedSection key={item.room} delay={i * 0.1}>
                <div className="bg-charcoal border border-gold/10 p-6 text-center hover:border-gold/30 transition-colors duration-500">
                  <h3 className="font-serif text-lg text-gold tracking-wide">{item.room}</h3>
                  <p className="mt-3 text-warm-cream/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal border-t border-gold/10">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-cream tracking-wide">
              Find Your Perfect Carpet
            </h2>
            <p className="mt-4 text-warm-cream/60 max-w-xl mx-auto">
              Contact us today for a free measuring service and no-obligation quote. We can bring
              samples to your home so you can see how they look in your space.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

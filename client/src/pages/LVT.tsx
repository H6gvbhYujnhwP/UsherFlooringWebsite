/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * LVT page — Luxury Vinyl Tiles, featuring Polyflor ranges
 */
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const VINYL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-4_1770383300000_na1fn_dmlueWwtbHZ0LWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTRfMTc3MDM4MzMwMDAwMF9uYTFmbl9kbWx1ZVd3dGJIWjBMV2hsY204LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SuVSw2ndOUMQKsIvrvLwYzFlWAi2-nVyZCKBOfqR7~gh8ONJMyQQhB96BtbXIqfN1bzWtceSHPd2AFaXv9bnMzdn7EoIKwX2yVKAhUwKJnme8Vw0UCjl9uRfOvb4W2-a0JAYWhDkUegZi5OzIshicCJ9vHUfI0hcAAQPJFs2Cm-K~sKXrP6Od3BuWoRt6deGFdx3jNWd6wPklTCPi3Pqo~Uphxk5-Fw51z5suON-JkiWz~3g3iCUcGFyEsxLpNHY03ICYJ6EoLYir4b624x~8327h7eqD-duz5QNZX~YqbnQcRLTKdr1aFqn81EeoTBjgwv~PRfsHk-x5f8UdgEM5w__";

const benefits = [
  "100% waterproof — perfect for kitchens and bathrooms",
  "Incredibly realistic wood and stone effects",
  "Warm and comfortable underfoot",
  "Extremely durable and long-lasting",
  "Low maintenance and easy to clean",
  "Suitable for underfloor heating",
];

const ranges = [
  { name: "Camaro", desc: "A stunning collection of luxury vinyl tiles featuring realistic wood and stone designs with bevelled edges for an authentic look." },
  { name: "Colonia", desc: "Premium vinyl tiles offering a wide palette of natural wood and stone effects with enhanced texture and durability." },
  { name: "Expona", desc: "High-performance luxury vinyl tiles designed for both residential and commercial spaces with exceptional realism." },
];

export default function LVT() {
  return (
    <>
      <PageHero
        title="Luxury Vinyl Tiles"
        subtitle="Premium LVT flooring from Polyflor — waterproof, durable and beautifully designed"
        image={VINYL_IMG}
        compact
      />

      {/* Main Content — warm cream */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                Luxury Vinyl Tiles
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
                Luxury Vinyl Tiles (LVT) offer the perfect combination of style, durability and
                practicality. With incredibly realistic wood and stone effects, LVT gives you the
                look of natural materials with the added benefits of being waterproof, easy to maintain
                and comfortable underfoot.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                We are proud to supply and fit <strong className="text-charcoal">Polyflor</strong> LVT
                ranges, one of the UK's leading manufacturers of luxury vinyl flooring. Their Camaro,
                Colonia and Expona collections offer exceptional quality and design.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                Whether you're looking to update your kitchen, bathroom, hallway or living space, LVT
                provides a versatile and long-lasting flooring solution.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-cream font-semibold tracking-wide">
                  Benefits of LVT
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

      {/* Polyflor Ranges — dark */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Polyflor Ranges
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p className="mt-6 text-warm-cream/60 max-w-2xl mx-auto">
              We supply and fit the following premium Polyflor LVT collections
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ranges.map((range, i) => (
              <AnimatedSection key={range.name} delay={i * 0.15}>
                <div className="bg-charcoal border border-gold/10 p-8 hover:border-gold/30 transition-colors duration-500 h-full">
                  <h3 className="font-serif text-2xl text-gold tracking-wide">{range.name}</h3>
                  <div className="w-10 h-0.5 bg-gold/40 mt-3" />
                  <p className="mt-4 text-warm-cream/60 leading-relaxed">{range.desc}</p>
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
              Discover the Beauty of LVT
            </h2>
            <p className="mt-4 text-warm-cream/60 max-w-xl mx-auto">
              Contact us for a free quote on luxury vinyl tile flooring. We can bring samples
              to your home so you can see the quality for yourself.
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

/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Laminate page
 */
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const LAMINATE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-3_1770383309000_na1fn_bGFtaW5hdGUtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTNfMTc3MDM4MzMwOTAwMF9uYTFmbl9iR0Z0YVc1aGRHVXRhR1Z5YncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y0UIG0N0adu1AzsmUa0GXJPpgVVxaoGcQDDEMEfGVuB7k~bEck6kNkozj7cM~nilid56KI665bxttgiN9oG-IqUuTehCeMs7KEBTQQy3YP0icBafnXc2dClXtKCEAPvtu6cuoZQx-bMKQgGO8CDBngcK99vSIDBjplwtYF5jxX8zUWi-ZIcSOdY3~sp5zh0U04YylA5SY379jElUalmrKbQh1~ZRypy5f~nfJKEIONMrs2BBY9ndyN6-jgtoyQ0uWJZ3PI7kCWKTzDeLh-1JULidltdz~qtrbxPJtVHDuRsOcx6Qf2QAW-HZx4NeIiymexFHuSW8thviPyxK7u7DgA__";

const benefits = [
  "Realistic wood and stone effect finishes",
  "Extremely hard-wearing and scratch-resistant",
  "Easy to clean and maintain",
  "Great value alternative to real wood",
  "Available in a huge range of styles and colours",
  "Quick and clean installation process",
];

export default function Laminate() {
  return (
    <>
      <PageHero
        title="Laminate Flooring"
        subtitle="Hard-wearing, beautiful laminate flooring in a huge variety of designs"
        image={LAMINATE_IMG}
        compact
      />

      {/* Main Content — warm cream */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                Laminate Flooring
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
                Laminate flooring is a hard-wearing product that brings beautiful flooring into your
                home and comes in a huge variety of designs. The realistic wood and stone effects are
                printed on the surface then coated in a very durable protective resin for longevity —
                all at a great value price.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                We supply and fit a range of laminate flooring that comes in different styles and colours
                to give your space a perfect finish. Whether you prefer a classic oak look, a modern grey
                tone, or something more contemporary, we have options to suit every taste.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                We offer a free measuring service in Surrey and surrounding areas and can provide you
                with a no-obligation quote for supplying and fitting your new laminate flooring.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-cream font-semibold tracking-wide">
                  Benefits of Laminate
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

      {/* Ideal For Section — dark */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Ideal For Any Space
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { room: "Kitchens", desc: "Water-resistant laminate options perfect for busy kitchens" },
              { room: "Living Areas", desc: "Stylish and durable for high-traffic family spaces" },
              { room: "Hallways", desc: "Scratch-resistant surfaces that stand up to daily wear" },
              { room: "Bedrooms", desc: "Warm, natural wood-look finishes for a cosy feel" },
              { room: "Offices", desc: "Professional appearance with easy maintenance" },
              { room: "Dining Rooms", desc: "Elegant designs that complement any dining setting" },
            ].map((item, i) => (
              <AnimatedSection key={item.room} delay={i * 0.08}>
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
              Transform Your Floors with Laminate
            </h2>
            <p className="mt-4 text-warm-cream/60 max-w-xl mx-auto">
              Contact us for a free measuring service and no-obligation quote on laminate flooring.
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

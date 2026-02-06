/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Vinyl page — standard vinyl flooring
 */
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const VINYL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-4_1770383300000_na1fn_dmlueWwtbHZ0LWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTRfMTc3MDM4MzMwMDAwMF9uYTFmbl9kbWx1ZVd3dGJIWjBMV2hsY204LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SuVSw2ndOUMQKsIvrvLwYzFlWAi2-nVyZCKBOfqR7~gh8ONJMyQQhB96BtbXIqfN1bzWtceSHPd2AFaXv9bnMzdn7EoIKwX2yVKAhUwKJnme8Vw0UCjl9uRfOvb4W2-a0JAYWhDkUegZi5OzIshicCJ9vHUfI0hcAAQPJFs2Cm-K~sKXrP6Od3BuWoRt6deGFdx3jNWd6wPklTCPi3Pqo~Uphxk5-Fw51z5suON-JkiWz~3g3iCUcGFyEsxLpNHY03ICYJ6EoLYir4b624x~8327h7eqD-duz5QNZX~YqbnQcRLTKdr1aFqn81EeoTBjgwv~PRfsHk-x5f8UdgEM5w__";
const LAMINATE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-3_1770383309000_na1fn_bGFtaW5hdGUtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTNfMTc3MDM4MzMwOTAwMF9uYTFmbl9iR0Z0YVc1aGRHVXRhR1Z5YncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y0UIG0N0adu1AzsmUa0GXJPpgVVxaoGcQDDEMEfGVuB7k~bEck6kNkozj7cM~nilid56KI665bxttgiN9oG-IqUuTehCeMs7KEBTQQy3YP0icBafnXc2dClXtKCEAPvtu6cuoZQx-bMKQgGO8CDBngcK99vSIDBjplwtYF5jxX8zUWi-ZIcSOdY3~sp5zh0U04YylA5SY379jElUalmrKbQh1~ZRypy5f~nfJKEIONMrs2BBY9ndyN6-jgtoyQ0uWJZ3PI7kCWKTzDeLh-1JULidltdz~qtrbxPJtVHDuRsOcx6Qf2QAW-HZx4NeIiymexFHuSW8thviPyxK7u7DgA__";

const benefits = [
  "Fully waterproof — ideal for wet areas",
  "Budget-friendly flooring solution",
  "Wide range of patterns and colours",
  "Soft and warm underfoot",
  "Quick and easy installation",
  "Low maintenance and hygienic",
];

export default function Vinyl() {
  return (
    <>
      <PageHero
        title="Vinyl Flooring"
        subtitle="Versatile, waterproof vinyl flooring — practical and stylish for any room"
        image={LAMINATE_IMG}
        compact
      />

      {/* Main Content — warm cream */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                Vinyl Flooring
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
                Vinyl flooring is one of the most versatile and practical flooring options available.
                Fully waterproof and incredibly easy to maintain, vinyl is the perfect choice for
                kitchens, bathrooms, utility rooms and any area where moisture resistance is important.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                Modern vinyl flooring has come a long way — today's designs offer stunning realistic
                effects in wood, stone and tile patterns that can transform any room. Available in
                sheets and tiles, vinyl provides a seamless, hygienic surface that's soft and warm
                underfoot.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                We supply vinyl from trusted manufacturers and offer a complete supply and fit service
                with free measuring and no-obligation quotes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-cream font-semibold tracking-wide">
                  Benefits of Vinyl
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

      {/* Vinyl vs LVT — dark */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Vinyl vs LVT — What's the Difference?
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-charcoal border border-gold/10 p-8 h-full">
                <h3 className="font-serif text-xl text-gold tracking-wide">Standard Vinyl</h3>
                <div className="w-10 h-0.5 bg-gold/40 mt-3" />
                <p className="mt-4 text-warm-cream/60 leading-relaxed">
                  Sheet vinyl is a cost-effective, fully waterproof option available in a wide range
                  of designs. It's quick to install and provides a seamless, hygienic surface — ideal
                  for bathrooms, kitchens and utility areas.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-charcoal border border-gold/10 p-8 h-full">
                <h3 className="font-serif text-xl text-gold tracking-wide">Luxury Vinyl Tiles</h3>
                <div className="w-10 h-0.5 bg-gold/40 mt-3" />
                <p className="mt-4 text-warm-cream/60 leading-relaxed">
                  LVT offers a premium finish with incredibly realistic textures and designs. Individual
                  tiles or planks create an authentic look and feel. More durable than standard vinyl,
                  LVT is suitable for any room in the home.
                </p>
                <Link
                  href="/lvt"
                  className="inline-flex items-center gap-2 mt-4 text-gold text-sm font-medium hover:text-gold-light transition-colors"
                >
                  View our LVT range <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal border-t border-gold/10">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-cream tracking-wide">
              Explore Our Vinyl Options
            </h2>
            <p className="mt-4 text-warm-cream/60 max-w-xl mx-auto">
              Contact us for a free quote on vinyl flooring. We'll help you find the perfect option
              for your space and budget.
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

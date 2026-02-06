/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Showroom page — placeholder for photos coming soon, booking info
 */
import { Link } from "wouter";
import { ArrowRight, Calendar, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-1_1770383307000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTFfMTc3MDM4MzMwNzAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jA0VDCcNPRpeULa3gYNZNtEXpVabVvFZdtaW0p8MJy-ND9aHWO30fK1H0LsgjjFanozM~xb-THmVX0p0FC53j4PfLBFb7iK7dSj~KisLYgRBTtb-4prZw8NK4TWAzTqeSE~YRR24G6v~7RwYMrOAOuKeDbAPihENGHL-CUESKnmhZo3YahGSPcUgeTW9sK46qNAolhDstXCRgktO~TdNdePj2b7pJquxyEKD7WHS22ogdCjB5sWwCoOE0y6ojJID9ccvbeufAL88-nwVORjWr58KETZKoqmdcBiLk9JUDrn0vcjPBVw7O-CU6ruu~bMF73YWIRxQlQo5KPBMyt1lKw__";

export default function Showroom() {
  return (
    <>
      <PageHero
        title="Our Showroom"
        subtitle="Visit our showroom to see and feel our flooring ranges in person"
        image={HERO_IMG}
        compact
      />

      {/* Visit Info — warm cream */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                Arrange a Visit
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
                Our showroom is the perfect place to browse our extensive range of flooring samples
                and get expert advice on the best options for your home. You can see and feel the
                quality of our carpets, laminate, vinyl and LVT products before making your decision.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                As our showroom is not always staffed, we kindly ask that you
                <strong className="text-charcoal"> arrange your visit in advance</strong> to ensure
                someone is available to assist you. Simply get in touch via our contact form or give
                us a call, and we'll arrange a convenient time for you to visit.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                Can't make it to the showroom? No problem — we can also bring samples directly to
                your home so you can see how they look in your own space.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {/* Info Cards */}
                {[
                  { icon: Calendar, title: "By Appointment", desc: "Please arrange your visit in advance to ensure someone is available to help you." },
                  { icon: Phone, title: "Book Your Visit", desc: "Contact us via phone or our contact form to arrange a convenient time." },
                  { icon: MapPin, title: "Location", desc: "Based in Surrey, serving Surrey and surrounding areas." },
                  { icon: Clock, title: "Flexible Times", desc: "We'll work around your schedule to find a time that suits you." },
                ].map((item, i) => (
                  <AnimatedSection key={item.title} delay={0.2 + i * 0.1}>
                    <div className="bg-charcoal p-6 flex gap-5 items-start">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-gold/30 text-gold">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-warm-cream font-semibold tracking-wide">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-warm-cream/60 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Showroom Photos Coming Soon — dark */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Showroom Photos
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p className="mt-8 text-warm-cream/60 text-lg max-w-2xl mx-auto">
              Our showroom is almost finished and we'll be adding photos here very soon.
              In the meantime, please don't hesitate to get in touch to arrange a visit
              or request samples.
            </p>

            {/* Placeholder grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-charcoal border border-gold/10 flex items-center justify-center"
                >
                  <span className="text-warm-cream/20 text-sm uppercase tracking-wider">Coming Soon</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal border-t border-gold/10">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-cream tracking-wide">
              Ready to Visit?
            </h2>
            <p className="mt-4 text-warm-cream/60 max-w-xl mx-auto">
              Get in touch to arrange a showroom visit or request samples brought to your home.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300"
            >
              Arrange a Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

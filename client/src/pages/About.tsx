/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * About: Hero, company story, values, team approach
 * Alternating dark/warm cream sections
 */
import { Link } from "wouter";
import { ArrowRight, Heart, Eye, Handshake, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const ABOUT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-5_1770383306000_na1fn_YWJvdXQtc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTVfMTc3MDM4MzMwNjAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=edWhnBYc3aZwT6SqGdfspbcljcC~vBDHTcbCysifX3qs1ia51CjkA20L65GhTWSv4~3uqtRniW8LBqGy57h4A-V7rcq~bT6tJDKBZHY7u9MnC1qvtqhvFYkS1-o0jkqiccxs3uS1Q6xkqyJzs34pHn~8JSt7NFCRCCKOXnLLb~vu5J8Hs8xsGnfdntPY1eLErvz6yR9ENMUpogIfvIBrc605N3Cvafiihdduurg3NkVi4Q2g8Apzot~wULJzofoQhuMqCrgPV2CYN3IC1z9wfBRHg2uBzEPKFp2jqCHjx6NGTBeLJjSaDU4YEFckZz~YnytVtOxAyjZr6uvZ-ewblg__";
const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-1_1770383307000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTFfMTc3MDM4MzMwNzAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jA0VDCcNPRpeULa3gYNZNtEXpVabVvFZdtaW0p8MJy-ND9aHWO30fK1H0LsgjjFanozM~xb-THmVX0p0FC53j4PfLBFb7iK7dSj~KisLYgRBTtb-4prZw8NK4TWAzTqeSE~YRR24G6v~7RwYMrOAOuKeDbAPihENGHL-CUESKnmhZo3YahGSPcUgeTW9sK46qNAolhDstXCRgktO~TdNdePj2b7pJquxyEKD7WHS22ogdCjB5sWwCoOE0y6ojJID9ccvbeufAL88-nwVORjWr58KETZKoqmdcBiLk9JUDrn0vcjPBVw7O-CU6ruu~bMF73YWIRxQlQo5KPBMyt1lKw__";

const values = [
  { icon: Heart, title: "Passion for Quality", desc: "We are passionate about providing the highest quality flooring solutions. Every product we supply meets our exacting standards." },
  { icon: Eye, title: "Attention to Detail", desc: "From the initial measuring to the final fitting, we pay meticulous attention to every detail to ensure a flawless finish." },
  { icon: Handshake, title: "Customer First", desc: "Your satisfaction is our priority. We listen to your needs and guide you to the perfect flooring solution for your home." },
  { icon: Clock, title: "Reliable Service", desc: "We pride ourselves on punctuality, clear communication and delivering on our promises — every time." },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Dedicated to delivering quality flooring with expert craftsmanship"
        image={ABOUT_IMG}
        compact
      />

      {/* Story Section — warm cream */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                Our Story
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
                At Usher Flooring, we bring years of experience and industry knowledge across a wide
                range of flooring solutions. As an independent flooring specialist, we can provide you
                with the best products from quality suppliers at the best prices possible.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                Whether you are looking for luxurious carpets with beautiful designs or sleek modern
                flooring, we deliver a great range of flooring solutions and product ranges for your
                budget along with expert fitting throughout Surrey and surrounding areas.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                We work with trusted manufacturers including Associated Weavers, Cormar, Westex and
                Polyflor — plus many more — to ensure we can offer the perfect flooring for every home
                and budget.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Quality flooring installation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 hidden lg:block" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section — dark */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Our Values
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-charcoal border border-gold/10 p-8 hover:border-gold/30 transition-colors duration-500">
                  <div className="w-14 h-14 flex items-center justify-center border border-gold/30 text-gold mb-6">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-warm-cream font-semibold tracking-wide">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-warm-cream/60 leading-relaxed">
                    {value.desc}
                  </p>
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
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-warm-cream/60 max-w-xl mx-auto">
              Get in touch today for a free, no-obligation quote on any of our flooring services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

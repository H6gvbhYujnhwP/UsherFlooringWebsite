/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Home: Full hero, intro, services grid, why choose us, suppliers, CTA
 * Dark charcoal + warm cream alternating sections, gold accents
 * NO pure white backgrounds - warm cream (#F5F0E8) for lighter sections
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Ruler, Users, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-1_1770383307000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTFfMTc3MDM4MzMwNzAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jA0VDCcNPRpeULa3gYNZNtEXpVabVvFZdtaW0p8MJy-ND9aHWO30fK1H0LsgjjFanozM~xb-THmVX0p0FC53j4PfLBFb7iK7dSj~KisLYgRBTtb-4prZw8NK4TWAzTqeSE~YRR24G6v~7RwYMrOAOuKeDbAPihENGHL-CUESKnmhZo3YahGSPcUgeTW9sK46qNAolhDstXCRgktO~TdNdePj2b7pJquxyEKD7WHS22ogdCjB5sWwCoOE0y6ojJID9ccvbeufAL88-nwVORjWr58KETZKoqmdcBiLk9JUDrn0vcjPBVw7O-CU6ruu~bMF73YWIRxQlQo5KPBMyt1lKw__";
const CARPETS_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-2_1770383330000_na1fn_Y2FycGV0cy1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTJfMTc3MDM4MzMzMDAwMF9uYTFmbl9ZMkZ5Y0dWMGN5MW9aWEp2LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oPUadgmUN9gzWSEQtR5mp2LQBlrG0htwbYoJnTaeUR9MlaIt5sxUSDCL-vi~ybJB0IzrgBiwoW2CnfOCtNGRoioG-H64qY2Ag0uG6aOiem1blclVG3Fdtr~5hOnVqBOdov1iH3rU0MGFkMCB1RAXqqGmO2fYByrwKCmTJb1r3cLHtZPkxKTw8BiRm6WAXUsjAJhQOrBuxwevR6-eSR2-b88Z876UgHql6NKqtTGPqtUdG7ECxmKPWdHx4PgxDZD7JcMv57LH1HzfnHpa1t8F2QXcvBT-2rV0Hhnr8FNEVF0ZZ8z1a35pRqu7xC-l-cOFxbeLSJc4HO78PHMBnQ6HEg__";
const LAMINATE_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-3_1770383309000_na1fn_bGFtaW5hdGUtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTNfMTc3MDM4MzMwOTAwMF9uYTFmbl9iR0Z0YVc1aGRHVXRhR1Z5YncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y0UIG0N0adu1AzsmUa0GXJPpgVVxaoGcQDDEMEfGVuB7k~bEck6kNkozj7cM~nilid56KI665bxttgiN9oG-IqUuTehCeMs7KEBTQQy3YP0icBafnXc2dClXtKCEAPvtu6cuoZQx-bMKQgGO8CDBngcK99vSIDBjplwtYF5jxX8zUWi-ZIcSOdY3~sp5zh0U04YylA5SY379jElUalmrKbQh1~ZRypy5f~nfJKEIONMrs2BBY9ndyN6-jgtoyQ0uWJZ3PI7kCWKTzDeLh-1JULidltdz~qtrbxPJtVHDuRsOcx6Qf2QAW-HZx4NeIiymexFHuSW8thviPyxK7u7DgA__";
const VINYL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-4_1770383300000_na1fn_dmlueWwtbHZ0LWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTRfMTc3MDM4MzMwMDAwMF9uYTFmbl9kbWx1ZVd3dGJIWjBMV2hsY204LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SuVSw2ndOUMQKsIvrvLwYzFlWAi2-nVyZCKBOfqR7~gh8ONJMyQQhB96BtbXIqfN1bzWtceSHPd2AFaXv9bnMzdn7EoIKwX2yVKAhUwKJnme8Vw0UCjl9uRfOvb4W2-a0JAYWhDkUegZi5OzIshicCJ9vHUfI0hcAAQPJFs2Cm-K~sKXrP6Od3BuWoRt6deGFdx3jNWd6wPklTCPi3Pqo~Uphxk5-Fw51z5suON-JkiWz~3g3iCUcGFyEsxLpNHY03ICYJ6EoLYir4b624x~8327h7eqD-duz5QNZX~YqbnQcRLTKdr1aFqn81EeoTBjgwv~PRfsHk-x5f8UdgEM5w__";
const ABOUT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-5_1770383306000_na1fn_YWJvdXQtc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTVfMTc3MDM4MzMwNjAwMF9uYTFmbl9ZV0p2ZFhRdGMyVmpkR2x2YmcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=edWhnBYc3aZwT6SqGdfspbcljcC~vBDHTcbCysifX3qs1ia51CjkA20L65GhTWSv4~3uqtRniW8LBqGy57h4A-V7rcq~bT6tJDKBZHY7u9MnC1qvtqhvFYkS1-o0jkqiccxs3uS1Q6xkqyJzs34pHn~8JSt7NFCRCCKOXnLLb~vu5J8Hs8xsGnfdntPY1eLErvz6yR9ENMUpogIfvIBrc605N3Cvafiihdduurg3NkVi4Q2g8Apzot~wULJzofoQhuMqCrgPV2CYN3IC1z9wfBRHg2uBzEPKFp2jqCHjx6NGTBeLJjSaDU4YEFckZz~YnytVtOxAyjZr6uvZ-ewblg__";

const services = [
  {
    title: "Carpets",
    desc: "Luxurious carpets from leading UK manufacturers to bring warmth and comfort to every room.",
    image: CARPETS_IMG,
    href: "/carpets",
  },
  {
    title: "Laminate",
    desc: "Hard-wearing laminate flooring in a huge variety of styles and finishes for any space.",
    image: LAMINATE_IMG,
    href: "/laminate",
  },
  {
    title: "Vinyl & LVT",
    desc: "Premium luxury vinyl tiles and vinyl flooring — durable, waterproof and beautifully designed.",
    image: VINYL_IMG,
    href: "/lvt",
  },
];

const features = [
  { icon: Award, title: "Quality Suppliers", desc: "We work with the UK's finest flooring manufacturers including Associated Weavers, Cormar, Westex and Polyflor." },
  { icon: Ruler, title: "Free Measuring", desc: "We offer a free measuring service and provide no-obligation quotes for all flooring types." },
  { icon: Users, title: "Expert Fitting", desc: "Our experienced fitters deliver precision installation with minimal disruption to your home." },
  { icon: Shield, title: "Samples on Visit", desc: "We bring samples directly to you so you can see how flooring looks in your own space." },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium"
          >
            Supply &amp; Fit Flooring — Surrey &amp; Surrounding Areas
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-warm-cream leading-[1.1] tracking-wide"
          >
            Beautiful Flooring,
            <br />
            <span className="text-gold">Expertly Fitted</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-warm-cream/80 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We supply and fit a wide range of carpets, laminate, vinyl and luxury vinyl tiles
            from quality suppliers at competitive prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-warm-cream/30 text-warm-cream px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gold/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== INTRO SECTION — warm cream background ===== */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
              The Smart Choice for Flooring
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
              Finding beautiful flooring to fit your home, style and budget has never been simpler.
              We offer a wide range of carpets, laminate, vinyl and luxury vinyl tiles (LVT) from
              suppliers such as <strong className="text-charcoal">Associated Weavers</strong>,{" "}
              <strong className="text-charcoal">Cormar</strong>,{" "}
              <strong className="text-charcoal">Westex</strong> and{" "}
              <strong className="text-charcoal">Polyflor</strong> (including Camaro, Colonia &amp; Expona ranges)
              — plus many more. Contact us for a no-obligation quote.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Our Flooring Services
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <Link href={service.href} className="group block relative overflow-hidden h-[450px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-warm-cream font-semibold uppercase tracking-wider">
                      {service.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-gold mt-3 transition-all duration-500 group-hover:w-16" />
                    <p className="mt-4 text-warm-cream/70 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-gold text-sm font-medium uppercase tracking-wider opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US — Split section ===== */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div
            className="h-[400px] lg:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${ABOUT_IMG})` }}
          />

          {/* Content Side */}
          <div className="bg-charcoal py-16 md:py-20 px-8 md:px-16 lg:px-20">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
                Why Choose Usher Flooring?
              </h2>
              <div className="gold-divider mt-4" />
            </AnimatedSection>

            <div className="mt-10 space-y-8">
              {features.map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-gold/30 text-gold">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-warm-cream font-semibold tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-warm-cream/60 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4} className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold text-sm font-medium uppercase tracking-[0.15em] hover:text-gold-light transition-colors duration-300"
              >
                Read More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SUPPLIERS BANNER — warm cream ===== */}
      <section className="py-16 md:py-20" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-charcoal/50 mb-6">Trusted Suppliers</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              {["Associated Weavers", "Cormar", "Westex", "Polyflor"].map((name) => (
                <span
                  key={name}
                  className="font-serif text-xl md:text-2xl text-charcoal/70 tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-6 text-charcoal/50 text-sm italic">Plus many more quality suppliers</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />

        <div className="relative z-10 container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-5xl text-warm-cream font-bold tracking-wide leading-tight">
              Ready to Transform Your Space?
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mt-6" />
            <p className="mt-8 text-warm-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free, no-obligation quote. We can also arrange a visit to our
              showroom or bring samples directly to your home.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/showroom"
                className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold/10 transition-all duration-300"
              >
                Visit Our Showroom
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

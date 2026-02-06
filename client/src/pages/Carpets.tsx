/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Carpets page: Hero, info sections, manufacturer samples in cards, CTA
 */
import { Link } from "wouter";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
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

interface CarpetRange {
  name: string;
  brand: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const carpetRanges: CarpetRange[] = [
  // Associated Weavers
  {
    name: "Invictus®",
    brand: "Associated Weavers",
    description: "The ultimate reference in the UK for comfy, invincible dense pile carpet. Invictus® delivers stunningly rich textures with superior stain resistance for busy family homes.",
    features: ["Invincible Comfort", "Rich Textures", "Stain Resistant"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/DWCXcoaLdaEUGOdW.jpg",
    link: "https://associated-weavers.co.uk/",
  },
  {
    name: "Sedna®",
    brand: "Associated Weavers",
    description: "Soft, luxurious and durable carpet made from recycled waste material and PET bottles. Sedna® combines sustainability with premium quality for eco-conscious homeowners.",
    features: ["Soft & Luxurious", "Sustainable", "Recycled Materials"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/mMWsxmrJVYMYrQJn.jpg",
    link: "https://associated-weavers.co.uk/",
  },
  {
    name: "iSENSE®",
    brand: "Associated Weavers",
    description: "The UK's first and favourite brand for super soft carpet. iSENSE® is ultra resilient and extremely durable — the luxury choice for discerning homeowners.",
    features: ["Super Soft", "Ultra Resilient", "Extremely Durable"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/FqfNbDLJgZsCdfYU.webp",
    link: "https://associated-weavers.co.uk/",
  },
  {
    name: "Gaia®",
    brand: "Associated Weavers",
    description: "The ultimate contemporary choice — a global decorating solution that's soft, colourfast and comfortable with brilliant colours and a silky touch.",
    features: ["Brilliant Colours", "Silky Touch", "Easy Maintenance"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/YioCByJpDeogyZaZ.jpg",
    link: "https://associated-weavers.co.uk/",
  },
  {
    name: "Vivendi®",
    brand: "Associated Weavers",
    description: "Bleach cleanable, incredibly resilient, superbly wear-resistant and yet pleasantly soft. Vivendi® is built to bounce back and made to last.",
    features: ["Bleach Cleanable", "Wear Resistant", "Pleasantly Soft"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/RHSOllhnRkpVrPcl.jpg",
    link: "https://associated-weavers.co.uk/",
  },
  // Cormar
  {
    name: "Easy Clean Range",
    brand: "Cormar Carpets",
    description: "Stain resistant, pet and family-friendly carpets perfect for all around the home. All Easy Clean ranges come with a 10 Year Stain and Wear Guarantee for complete peace of mind.",
    features: ["Stain Resistant", "Pet Friendly", "10 Year Guarantee"],
    image: "https://www.cormarcarpets.co.uk/media/rtmjqlrd/apollo_a_hero_delilah_104_206-alex.png?height=400&width=600&quality=80&mode=Crop",
    link: "https://www.cormarcarpets.co.uk/",
  },
  {
    name: "Soft Deep Pile",
    brand: "Cormar Carpets",
    description: "Cosy, luxurious and soft to the touch. Made from 100% Luxelle Polypropylene, these super-soft carpets help you create the ultimate haven with a 10-year stain warranty.",
    features: ["100% Luxelle", "Luxuriously Soft", "10 Year Warranty"],
    image: "https://www.cormarcarpets.co.uk/media/nusmmguz/3169-695-compressed.jpg?height=400&width=600&quality=80&mode=Crop",
    link: "https://www.cormarcarpets.co.uk/",
  },
  {
    name: "Wool Twist",
    brand: "Cormar Carpets",
    description: "Natural, versatile and ideal for all around the home. Available in heather, flecked or plain shades and in a variety of pile weights to suit your needs.",
    features: ["Natural Wool", "Versatile", "Multiple Weights"],
    image: "https://www.cormarcarpets.co.uk/media/matdpnqf/cormar-hamstead-fossil_a4-60.jpg?height=400&width=600&quality=80&mode=Crop",
    link: "https://www.cormarcarpets.co.uk/",
  },
  {
    name: "Wool Loop",
    brand: "Cormar Carpets",
    description: "Naturally textured and resilient with a quality feel. The Wool Loop collection includes a variety of individual styles from striped to natural seagrass looks.",
    features: ["Textured", "Resilient", "Quality Feel"],
    image: "https://www.cormarcarpets.co.uk/media/jbqayv2w/malabar_cormar_influencer_shoot5797_rt_lr.jpg?height=400&width=600&quality=80&mode=Crop",
    link: "https://www.cormarcarpets.co.uk/",
  },
  // Westex
  {
    name: "Silken Velvet",
    brand: "Westex Flooring",
    description: "For an unrivalled luxury finish, the Silken Velvet collection guarantees irresistible comfort and a lustrous appearance that transforms any room.",
    features: ["Luxury Finish", "Lustrous", "Irresistible Comfort"],
    image: "https://www.westexflooring.com/wp-content/uploads/2022/02/westex-silken-velvet-680-340x460.jpg",
    link: "https://www.westexflooring.com/carpets/collection/silken-velvet/",
  },
  {
    name: "Ultima Twist",
    brand: "Westex Flooring",
    description: "The ideal choice for residential or contract carpeted areas, offering a superb combination of performance and style with exceptional durability.",
    features: ["High Performance", "Durable", "Versatile"],
    image: "https://www.westexflooring.com/wp-content/uploads/2022/02/westex-ultima-twist-680-340x460.jpg",
    link: "https://www.westexflooring.com/carpets/collection/ultima-twist/",
  },
  {
    name: "Westend Velvet",
    brand: "Westex Flooring",
    description: "For richness, comfort and style, the Westend Velvet collection is hard to beat — tasteful good looks and a sumptuous feel that elevates any interior.",
    features: ["Rich & Comfortable", "Tasteful Design", "Sumptuous Feel"],
    image: "https://www.westexflooring.com/wp-content/uploads/2022/02/westex-westend-velvet-680-340x460.jpg",
    link: "https://www.westexflooring.com/carpets/collection/westend-velvet/",
  },
];

// Group ranges by brand
const brandGroups = [
  {
    brand: "Associated Weavers",
    logo: null,
    website: "https://associated-weavers.co.uk/",
    ranges: carpetRanges.filter((r) => r.brand === "Associated Weavers"),
  },
  {
    brand: "Cormar Carpets",
    logo: null,
    website: "https://www.cormarcarpets.co.uk/",
    ranges: carpetRanges.filter((r) => r.brand === "Cormar Carpets"),
  },
  {
    brand: "Westex Flooring",
    logo: null,
    website: "https://www.westexflooring.com/",
    ranges: carpetRanges.filter((r) => r.brand === "Westex Flooring"),
  },
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
                <strong className="text-charcoal"> Associated Weavers</strong>,
                <strong className="text-charcoal"> Cormar Carpets</strong> and
                <strong className="text-charcoal"> Westex Flooring</strong>, plus many more.
                Contact us for a no-obligation quote and we can provide samples on visit too.
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                As an independent fitter, we offer a free measuring service and can provide you with
                a no-obligation quote for supplying and fitting your new carpets.
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

      {/* Carpet Samples by Manufacturer */}
      {brandGroups.map((group, groupIdx) => (
        <section
          key={group.brand}
          className={`py-20 md:py-28 ${groupIdx % 2 === 0 ? "bg-background" : ""}`}
          style={groupIdx % 2 !== 0 ? { background: "#1A1A1C" } : undefined}
        >
          <div className="container">
            <AnimatedSection className="mb-14">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-2">
                    Our Supplier
                  </p>
                  <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
                    {group.brand}
                  </h2>
                  <div className="gold-divider mt-4" />
                </div>
                <a
                  href={group.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {group.ranges.map((range, i) => (
                <AnimatedSection key={range.name} delay={i * 0.1}>
                  <div className="group bg-charcoal border border-gold/10 overflow-hidden hover:border-gold/30 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={range.image}
                        alt={`${range.name} carpet by ${range.brand}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-gold/90 text-charcoal text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1">
                          {range.brand}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-warm-cream tracking-wide">
                        {range.name}
                      </h3>
                      <div className="w-8 h-0.5 bg-gold/50 mt-2 mb-4" />
                      <p className="text-warm-cream/60 text-sm leading-relaxed mb-5">
                        {range.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {range.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs text-gold/80 border border-gold/20 px-3 py-1 tracking-wide"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Rooms Section — warm cream */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
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

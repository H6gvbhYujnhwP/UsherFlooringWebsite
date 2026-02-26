/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * TownLanding: Reusable town-specific landing page for local SEO
 * Each town gets unique content, services list, and CTA
 */
import { Link } from "wouter";
import { ArrowRight, Check, MapPin, Phone, Clock, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

const HERO_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/spYHdhwg5aGvgCOjWfy6Ue/sandbox/YBDl5gKjn9NnNz02VNdZX1-img-1_1770383307000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3BZSGRod2c1YUd2Z0NPaldmeTZVZS9zYW5kYm94L1lCRGw1Z0tqbjlObk56MDJWTmRaWDEtaW1nLTFfMTc3MDM4MzMwNzAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jA0VDCcNPRpeULa3gYNZNtEXpVabVvFZdtaW0p8MJy-ND9aHWO30fK1H0LsgjjFanozM~xb-THmVX0p0FC53j4PfLBFb7iK7dSj~KisLYgRBTtb-4prZw8NK4TWAzTqeSE~YRR24G6v~7RwYMrOAOuKeDbAPihENGHL-CUESKnmhZo3YahGSPcUgeTW9sK46qNAolhDstXCRgktO~TdNdePj2b7pJquxyEKD7WHS22ogdCjB5sWwCoOE0y6ojJID9ccvbeufAL88-nwVORjWr58KETZKoqmdcBiLk9JUDrn0vcjPBVw7O-CU6ruu~bMF73YWIRxQlQo5KPBMyt1lKw__";

export interface TownData {
  slug: string;
  name: string;
  county: string;
  intro: string;
  description: string;
  localDetail: string;
  nearbyTowns: string[];
}

const allServices = [
  "Carpet supply and fitting",
  "Laminate flooring installation",
  "Luxury Vinyl Tile (LVT) fitting",
  "Vinyl flooring supply and fitting",
  "Free home measuring service",
  "Samples brought to your door",
  "Uplift and disposal of old flooring",
  "Free no-obligation quotes",
];

const brands = [
  "Associated Weavers",
  "Cormar Carpets",
  "Westex Flooring",
  "Polyflor",
  "Lifestyle Floors",
];

interface TownLandingProps {
  town: TownData;
}

export default function TownLanding({ town }: TownLandingProps) {
  // Update document title for SEO
  useEffect(() => {
    document.title = `Flooring in ${town.name} | Carpets, Laminate, Vinyl & LVT | Usher Flooring`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        `Usher Flooring supplies and fits carpets, laminate, vinyl and LVT flooring in ${town.name}, ${town.county}. Free measuring, expert fitting, quality brands. Call 01277 711 629.`
      );
    }
    // Restore on unmount
    return () => {
      document.title =
        "Usher Flooring | Carpets, Laminate, Vinyl & LVT in Wickford, Essex";
    };
  }, [town]);

  return (
    <>
      <PageHero
        title={`Flooring in ${town.name}`}
        subtitle={`Supply & fit carpets, laminate, vinyl and LVT across ${town.name} and surrounding areas`}
        image={HERO_IMG}
        compact
      />

      {/* Intro Section */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
                {town.intro}
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
                {town.description}
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                {town.localDetail}
              </p>
              <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
                We work with the UK's leading flooring manufacturers including{" "}
                {brands.map((b, i) => (
                  <span key={b}>
                    <strong className="text-charcoal">{b}</strong>
                    {i < brands.length - 2
                      ? ", "
                      : i === brands.length - 2
                        ? " and "
                        : ""}
                  </span>
                ))}
                , plus many more. Whatever your style, budget or room, we can
                help you find the perfect flooring.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-charcoal p-8 md:p-10">
                <h3 className="font-serif text-xl text-warm-cream font-semibold tracking-wide">
                  Our Services in {town.name}
                </h3>
                <div className="w-10 h-0.5 bg-gold mt-3" />
                <ul className="mt-6 space-y-4">
                  {allServices.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-warm-cream/70">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Why Choose Usher Flooring
            </p>
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Your Local Flooring Experts
            </h2>
            <div className="gold-divider mt-4 mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Local to You",
                desc: `Based near ${town.name}, we provide a personal, local service with no call-centre runaround.`,
              },
              {
                icon: Star,
                title: "Quality Brands",
                desc: "We stock flooring from the UK's finest manufacturers — no cheap imports or unknown brands.",
              },
              {
                icon: Clock,
                title: "Free Measuring",
                desc: "We visit your home, measure up and provide a free no-obligation quote at a time that suits you.",
              },
              {
                icon: Phone,
                title: "Expert Advice",
                desc: "Not sure what flooring is right? We'll guide you through the options and bring samples to your home.",
              },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="bg-[#1A1A1C] border border-white/5 p-8 h-full">
                  <feature.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-serif text-lg text-warm-cream font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-warm-cream/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flooring Types */}
      <section className="py-20 md:py-28" style={{ background: "#1A1A1C" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Our Flooring Range
            </p>
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Flooring Types Available in {town.name}
            </h2>
            <div className="gold-divider mt-4 mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Carpets",
                desc: `We supply and fit a wide range of carpets in ${town.name} — from plush deep-pile bedroom carpets to hard-wearing options for hallways and stairs. Brands include Associated Weavers, Cormar and Westex.`,
                href: "/carpets",
              },
              {
                title: "Laminate Flooring",
                desc: `Our laminate flooring range for ${town.name} homes includes realistic wood and stone effects in a variety of finishes. Durable, easy to maintain and great value for money.`,
                href: "/laminate",
              },
              {
                title: "Luxury Vinyl Tiles (LVT)",
                desc: `LVT is one of the most popular flooring choices in ${town.name}. Waterproof, durable and available in stunning wood and stone designs from Polyflor and Lifestyle Floors.`,
                href: "/lvt",
              },
              {
                title: "Vinyl Flooring",
                desc: `Practical and affordable vinyl flooring for kitchens, bathrooms and utility rooms across ${town.name}. Easy to clean, waterproof and available in a huge range of designs.`,
                href: "/vinyl",
              },
            ].map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.1}>
                <div className="bg-background border border-white/5 p-8 h-full flex flex-col">
                  <h3 className="font-serif text-xl text-warm-cream font-semibold mb-3">
                    {type.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-gold mb-4" />
                  <p className="text-warm-cream/60 leading-relaxed flex-1">
                    {type.desc}
                  </p>
                  <Link
                    href={type.href}
                    className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium mt-6 transition-colors"
                  >
                    View {type.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 md:py-28" style={{ background: "#F0EBE3" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-10">
            <h2 className="section-heading text-3xl md:text-4xl text-charcoal">
              We Also Cover Nearby Areas
            </h2>
            <div className="gold-divider mt-4 mx-auto" />
            <p className="mt-6 text-charcoal/70 text-lg max-w-2xl mx-auto">
              As well as {town.name}, we supply and fit flooring across the
              following nearby towns and areas:
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {town.nearbyTowns.map((nearby) => {
              const nearbySlug = nearby.toLowerCase().replace(/[\s-]+/g, "-").replace("on-sea", "");
              // Only link if we have a page for this town
              const hasPage = TOWN_SLUGS.includes(`flooring-${nearbySlug}`);
              return hasPage ? (
                <Link
                  key={nearby}
                  href={`/flooring-${nearbySlug}`}
                  className="bg-charcoal text-warm-cream/80 hover:text-gold px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  {nearby}
                </Link>
              ) : (
                <span
                  key={nearby}
                  className="bg-charcoal text-warm-cream/80 px-5 py-2.5 text-sm font-medium"
                >
                  {nearby}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container text-center">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Get Started
            </p>
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Ready for New Flooring in {town.name}?
            </h2>
            <div className="gold-divider mt-4 mx-auto" />
            <p className="mt-6 text-warm-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free measuring service and no-obligation
              quote. We can bring samples to your home so you can see how they
              look in your own space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-charcoal font-semibold px-8 py-4 text-lg tracking-wide transition-all duration-300"
              >
                GET A FREE QUOTE
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:01277711629"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold/40 hover:border-gold text-warm-cream font-semibold px-8 py-4 text-lg tracking-wide transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                01277 711 629
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

// List of all town page slugs for internal linking
export const TOWN_SLUGS = [
  "flooring-wickford",
  "flooring-basildon",
  "flooring-rayleigh",
  "flooring-southend",
  "flooring-benfleet",
  "flooring-billericay",
  "flooring-brentwood",
  "flooring-chelmsford",
  "flooring-romford",
];

// Town data for all 9 landing pages
export const TOWNS: TownData[] = [
  {
    slug: "flooring-wickford",
    name: "Wickford",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Wickford",
    description:
      "Usher Flooring is proud to be based in Wickford, providing a truly local flooring service to homeowners and businesses across the town. Whether you need new carpets for the bedrooms, laminate for the living room, or LVT for the kitchen, we offer a complete supply and fitting service with free measuring and no-obligation quotes.",
    localDetail:
      "As your local Wickford flooring specialist, we understand the needs of homes in the area — from period properties in the High Street conservation area to modern builds on the newer estates. We offer a personal service that the big chain stores simply cannot match, with expert advice and samples brought directly to your door.",
    nearbyTowns: [
      "Basildon",
      "Rayleigh",
      "Southend-on-Sea",
      "Benfleet",
      "Billericay",
      "Shotgate",
      "Runwell",
      "Battlesbridge",
    ],
  },
  {
    slug: "flooring-basildon",
    name: "Basildon",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Basildon",
    description:
      "Looking for quality flooring in Basildon? Usher Flooring supplies and fits carpets, laminate, vinyl and luxury vinyl tiles across Basildon and the surrounding area. We offer a free home measuring service and can bring samples to you so you can see how your new flooring will look in your own space.",
    localDetail:
      "From the town centre to Laindon, Vange, Pitsea and Langdon Hills, we cover all areas of Basildon. Whether you're renovating a family home or updating a rental property, we provide honest advice and competitive prices with no hard sell — just quality flooring from trusted brands, professionally fitted.",
    nearbyTowns: [
      "Wickford",
      "Laindon",
      "Pitsea",
      "Vange",
      "Langdon Hills",
      "Benfleet",
      "Rayleigh",
      "Billericay",
    ],
  },
  {
    slug: "flooring-rayleigh",
    name: "Rayleigh",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Rayleigh",
    description:
      "Usher Flooring provides a professional flooring supply and fitting service to homeowners in Rayleigh and the surrounding areas. From luxurious carpets to hard-wearing laminate and waterproof LVT, we stock a wide range of flooring from the UK's best manufacturers.",
    localDetail:
      "Rayleigh is one of our most popular service areas, and we've fitted flooring in homes across the town — from the charming streets near the High Street to the family homes around Rayleigh Weir and Hullbridge Road. We pride ourselves on a clean, tidy installation with minimal disruption to your daily routine.",
    nearbyTowns: [
      "Wickford",
      "Hockley",
      "Hullbridge",
      "Rochford",
      "Southend-on-Sea",
      "Benfleet",
      "Basildon",
      "Eastwood",
    ],
  },
  {
    slug: "flooring-southend",
    name: "Southend-on-Sea",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Southend-on-Sea",
    description:
      "Need new flooring in Southend-on-Sea? Usher Flooring offers a complete supply and fitting service for carpets, laminate, vinyl and LVT across Southend and all surrounding areas. We provide free home visits with samples so you can choose your perfect flooring in the comfort of your own home.",
    localDetail:
      "We serve all areas of Southend including Westcliff-on-Sea, Leigh-on-Sea, Thorpe Bay, Shoeburyness and Prittlewell. Whether you're updating a seafront flat or a family home further inland, we bring the same level of care and quality to every job — backed by leading brands and years of experience.",
    nearbyTowns: [
      "Westcliff-on-Sea",
      "Leigh-on-Sea",
      "Thorpe Bay",
      "Shoeburyness",
      "Rochford",
      "Rayleigh",
      "Benfleet",
      "Hadleigh",
    ],
  },
  {
    slug: "flooring-benfleet",
    name: "Benfleet",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Benfleet",
    description:
      "Usher Flooring provides expert flooring supply and installation in Benfleet and the surrounding area. We carry a full range of carpets, laminate, vinyl and luxury vinyl tiles from top UK brands, all professionally fitted by our experienced team.",
    localDetail:
      "Covering both South Benfleet and Thundersley, we're just a short drive away and can visit your home at a time that suits you. We'll measure up, show you samples and provide a competitive quote — all with no obligation. Our fitters take pride in a clean, precise finish every time.",
    nearbyTowns: [
      "Thundersley",
      "Hadleigh",
      "Canvey Island",
      "Rayleigh",
      "Basildon",
      "Wickford",
      "Southend-on-Sea",
      "Leigh-on-Sea",
    ],
  },
  {
    slug: "flooring-billericay",
    name: "Billericay",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Billericay",
    description:
      "Usher Flooring offers a premium flooring supply and fitting service to homeowners in Billericay. From sumptuous carpets to contemporary LVT and practical laminate, we source the best flooring from trusted UK manufacturers and fit it to the highest standard.",
    localDetail:
      "Billericay homeowners appreciate quality, and that's exactly what we deliver. Whether you're renovating a character property in the town centre or updating a modern family home in Great Burstead or Noak Bridge, we provide a personal, reliable service with attention to detail that sets us apart.",
    nearbyTowns: [
      "Wickford",
      "Basildon",
      "Brentwood",
      "Ingatestone",
      "Stock",
      "Hutton",
      "Shenfield",
      "Great Burstead",
    ],
  },
  {
    slug: "flooring-brentwood",
    name: "Brentwood",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Brentwood",
    description:
      "Looking for quality flooring in Brentwood? Usher Flooring supplies and fits carpets, laminate, vinyl and luxury vinyl tiles across Brentwood and the wider Essex area. We offer free home visits, expert advice and competitive prices on all flooring types.",
    localDetail:
      "From Shenfield to Hutton, Pilgrims Hatch to Warley, we cover all areas of Brentwood. Our clients in Brentwood often choose premium carpet ranges from Westex and Associated Weavers, or the latest LVT designs from Polyflor — and we're happy to bring samples to your home so you can see them in situ before deciding.",
    nearbyTowns: [
      "Shenfield",
      "Hutton",
      "Ingatestone",
      "Billericay",
      "Romford",
      "Harold Wood",
      "Upminster",
      "Chelmsford",
    ],
  },
  {
    slug: "flooring-chelmsford",
    name: "Chelmsford",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Chelmsford",
    description:
      "Usher Flooring provides a professional flooring service to homes and businesses across Chelmsford, the county town of Essex. We supply and fit carpets, laminate, vinyl and LVT from leading manufacturers, with free measuring and no-obligation quotes as standard.",
    localDetail:
      "Whether you're in the city centre, Springfield, Broomfield, Writtle or Great Baddow, we cover all areas of Chelmsford. As Essex's county town, Chelmsford has a diverse mix of property types — and we have the experience and product range to find the right flooring for every home, from Victorian terraces to new-build apartments.",
    nearbyTowns: [
      "Springfield",
      "Broomfield",
      "Writtle",
      "Great Baddow",
      "Brentwood",
      "Ingatestone",
      "Billericay",
      "Maldon",
    ],
  },
  {
    slug: "flooring-romford",
    name: "Romford",
    county: "Essex",
    intro: "Flooring Supply & Fitting in Romford",
    description:
      "Usher Flooring has a long history of serving customers in Romford and the surrounding area. Now based in Wickford, we continue to supply and fit quality flooring across Romford, Collier Row, Gidea Park, Harold Hill and all nearby areas.",
    localDetail:
      "Having previously been based in Romford, we know the area inside out and have many satisfied customers across the borough. We still provide the same friendly, personal service — visiting your home with samples, measuring up and providing a free quote. Our move to Wickford means we now cover an even wider area of Essex and East London.",
    nearbyTowns: [
      "Collier Row",
      "Gidea Park",
      "Harold Hill",
      "Harold Wood",
      "Hornchurch",
      "Upminster",
      "Dagenham",
      "Brentwood",
    ],
  },
];

/*
 * Design: "Gentleman's Club" British Heritage Luxury
 * Showroom page — Masonry gallery with parallax pop hover effect
 */
import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar, Phone, MapPin, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/viPhXgWTCJHdjhFp.jpeg";

const SHOWROOM_PHOTOS = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/PRCAxVPxgiebRQnc.jpeg",
    alt: "Usher Flooring showroom — wide view with carpet and laminate displays",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/RlKNfZILrbnZVHUc.jpeg",
    alt: "Westex carpet sample display with Ultima Twist collection",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/dKpgCHNGawpolEfo.jpeg",
    alt: "Invictus luxury vinyl tile display stand close-up",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/daYjeqQAtfHEKYTa.jpeg",
    alt: "Showroom view with Westex display and herringbone flooring",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/hgHoGQoybGwAKybB.jpeg",
    alt: "Lifestyle Floors carpet display wall with samples",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/uZqGrTnnYVmSDzJk.jpeg",
    alt: "LVT boards and Lifestyle Floors display corner",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/yEStGgPpOIdgEPQf.jpeg",
    alt: "Invictus LVT and laminate sample boards",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/TmjLSyZdxOuawOMW.jpeg",
    alt: "Westex Flooring Excellence colour wheel with Silken Velvet and Westend Velvet",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048135071/viPhXgWTCJHdjhFp.jpeg",
    alt: "Panoramic showroom view with Invictus and Lifestyle Floors displays",
    span: "col-span-2 row-span-1",
  },
];

function GalleryImage({
  photo,
  index,
  onClick,
}: {
  photo: (typeof SHOWROOM_PHOTOS)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) scale(1.03) translateZ(20px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`${photo.span} relative group cursor-pointer`}
      onClick={onClick}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full overflow-hidden transition-all duration-500 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          style={{ minHeight: "200px" }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Hover border glow */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-all duration-500" />
        {/* View indicator */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="text-warm-cream text-xs uppercase tracking-[0.2em] font-semibold">
            View Photo
          </span>
          <div className="w-8 h-8 border border-gold/50 flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  photos: typeof SHOWROOM_PHOTOS;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center border border-warm-cream/20 hover:border-gold/50 text-warm-cream/70 hover:text-gold transition-all duration-300"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Previous */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center border border-warm-cream/20 hover:border-gold/50 text-warm-cream/70 hover:text-gold transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center border border-warm-cream/20 hover:border-gold/50 text-warm-cream/70 hover:text-gold transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="max-w-[90vw] max-h-[85vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          className="max-w-full max-h-[85vh] object-contain"
        />
        <p className="text-center mt-4 text-warm-cream/50 text-sm tracking-wide">
          {photos[currentIndex].alt}
        </p>
      </motion.div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-warm-cream/40 text-xs uppercase tracking-[0.3em]">
        {currentIndex + 1} / {photos.length}
      </div>
    </motion.div>
  );
}

export default function Showroom() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + SHOWROOM_PHOTOS.length) % SHOWROOM_PHOTOS.length : null
    );
  const nextPhoto = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % SHOWROOM_PHOTOS.length : null
    );

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

      {/* Showroom Gallery — dark background */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="section-heading text-3xl md:text-4xl text-warm-cream">
              Explore Our Showroom
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p className="mt-8 text-warm-cream/60 text-lg max-w-2xl mx-auto">
              Take a look around our showroom featuring displays from leading manufacturers
              including Westex, Invictus, Lifestyle Floors and many more.
            </p>
          </AnimatedSection>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[280px] gap-3 md:gap-4">
            {SHOWROOM_PHOTOS.map((photo, index) => (
              <GalleryImage
                key={index}
                photo={photo}
                index={index}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={SHOWROOM_PHOTOS}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </>
  );
}

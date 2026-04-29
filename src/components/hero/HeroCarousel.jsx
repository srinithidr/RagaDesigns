import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { image1, image2, image3 } from "../../assets/hero";


import {
  Carousel,
  CarouselSlide,
  CarouselViewport,
} from "@/components/ui/carousel";

const slides = [
  {
    id: "slide-1",
    label: "Signature Residences",
    headline: "Luxury spaces shaped for premium lifestyle brands.",
    description:
      "We design immersive interiors and architectural experiences that capture brand identity, increase guest engagement, and deliver measurable impact.",
    image:
      image1,
    imageAlt:
      "Modern living room with warm ambient lighting and luxury finishes.",
  },
  {
    id: "slide-2",
    label: "Creative Studios",
    headline: "Bold architecture for visionary hospitality and retail.",
    description:
      "From concept to completion, our studio pairs strategic design with artful interiors to create memorable flagship storefronts, lounges, and creative workspaces.",
    image:
      image2,
    imageAlt:
      "Sleek boutique interior with statement lighting and contemporary furnishings.",
  },
  {
    id: "slide-3",
    label: "Brand-Driven Design",
    headline: "Elegant spaces that tell your story with clarity.",
    description:
      "We combine refined material palettes, curated lighting, and responsive planning to create interiors that feel both timeless and thoughtfully tailored.",
    image:
      image3,
    imageAlt:
      "Open contemporary office with sculptural elements and premium finishes.",
  },
];

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(slides[0].id);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      setActiveSlide((previousSlide) => {
        const currentIndex = slides.findIndex((item) => item.id === previousSlide);
        const nextIndex = (currentIndex + 1) % slides.length;
        return slides[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(autoSlideTimer);
  }, []);

  return (
    <section className="relative overflow-hidden h-[clamp(560px,80vh,920px)] max-h-[100svh] w-full bg-slate-950">
      <Carousel
        className="h-full w-full max-w-full mx-auto"
        value={activeSlide}
        onValueChange={setActiveSlide}
        loop
        slideValues={slides.map((slide) => slide.id)}
      >
        <CarouselViewport className="h-full w-full">
          {slides.map((slide) => (
            <CarouselSlide key={slide.id} className="h-full w-full">
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="relative z-10 mx-auto flex h-full items-center px-4 py-8 sm:items-end sm:px-6 lg:px-10">
                  <div className="w-full max-w-[52rem] rounded-[1.5rem] border border-white/15 bg-slate-950/50 p-4 sm:p-6 lg:p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
                    <span className="inline-flex rounded-full bg-white/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-100 ring-1 ring-cyan-200/10 sm:text-xs">
                      {slide.label}
                    </span>
                    <h1 className="mt-3 sm:mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                      {slide.headline}
                    </h1>
                    <p className="mt-2 sm:mt-4 max-w-3xl text-xs sm:text-sm leading-6 sm:leading-7 text-slate-200 sm:text-base lg:text-lg">
                      {slide.description}
                    </p>
                    <div className="mt-4 sm:mt-8 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center">
                      <Button
                        variant="default"
                        size="lg"
                        className="w-full sm:w-auto bg-cyan-500 text-white hover:bg-cyan-400"
                      >
                        Discover projects
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        className="w-full sm:w-auto text-white border border-white/30 hover:bg-white/10"
                      >
                        Contact us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselSlide>
          ))}
        </CarouselViewport>
      </Carousel>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.1),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.08),_transparent_25%)]" />

      {/*
      <div className="absolute inset-x-3 sm:inset-x-6 lg:inset-x-10 top-1/2 flex -translate-y-1/2 items-center justify-between">
        <button
          type="button"
          onClick={() => {
            const currentIndex = slides.findIndex(
              (item) => item.id === activeSlide,
            );
            const previousIndex =
              (currentIndex + slides.length - 1) % slides.length;
            setActiveSlide(slides[previousIndex].id);
          }}
          className="pointer-events-auto flex h-9 w-9 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white shadow-lg sm:shadow-xl shadow-black/30 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <button
          type="button"
          onClick={() => {
            const currentIndex = slides.findIndex(
              (item) => item.id === activeSlide,
            );
            const nextIndex = (currentIndex + 1) % slides.length;
            setActiveSlide(slides[nextIndex].id);
          }}
          className="pointer-events-auto flex h-9 w-9 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white shadow-lg sm:shadow-xl shadow-black/30 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          aria-label="Next slide"
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      */}

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:gap-3">
        {slides.map((slide) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(slide.id)}
            aria-label={`Go to ${slide.label}`}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition ${
              activeSlide === slide.id
                ? "bg-white"
                : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;

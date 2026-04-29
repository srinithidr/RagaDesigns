import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

function Carousel({ className, children, value, onValueChange, loop = false, slideValues = [], ...props }) {
  const [viewportRef, embla] = useEmblaCarousel({ loop });

  React.useEffect(() => {
    if (!embla || !slideValues.length) return;

    const selectedIndex = slideValues.indexOf(value);
    if (selectedIndex === -1) return;

    if (embla.selectedScrollSnap() !== selectedIndex) {
      embla.scrollTo(selectedIndex);
    }
  }, [embla, slideValues, value]);

  React.useEffect(() => {
    if (!embla || !slideValues.length || typeof onValueChange !== "function") return;

    const handleSelect = () => {
      const activeIndex = embla.selectedScrollSnap();
      const nextValue = slideValues[activeIndex];
      if (nextValue && nextValue !== value) {
        onValueChange(nextValue);
      }
    };

    embla.on("select", handleSelect);
    return () => embla.off("select", handleSelect);
  }, [embla, slideValues, onValueChange, value]);

  return (
    <CarouselContext.Provider value={{ viewportRef }}>
      <div className={cn("relative overflow-hidden rounded-[2rem] bg-transparent", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselViewport({ className, children, ...props }) {
  const context = React.useContext(CarouselContext);

  return (
    <div
      ref={context?.viewportRef}
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      <div className="flex h-full w-full">{children}</div>
    </div>
  );
}

function CarouselSlide({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative flex min-w-full min-h-full flex-shrink-0 h-full items-center justify-center outline-none",
        className,
      )}
      {...props}
    />
  );
}

export { Carousel, CarouselViewport, CarouselSlide };

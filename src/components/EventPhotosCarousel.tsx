import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import heroImg from "@/assets/hero-ai.jpg";
import aiBrain from "@/assets/ai-brain.jpg";

const photos = [
  { src: blog1, alt: "RepresentAI community workshop on AI fundamentals", caption: "AI Fundamentals Workshop" },
  { src: blog2, alt: "Panel discussion on responsible AI adoption", caption: "Responsible AI Panel" },
  { src: blog3, alt: "Networking session at RepresentAI summit", caption: "Community Networking" },
  { src: heroImg, alt: "Hands-on AI training session", caption: "Hands-On Training" },
  { src: aiBrain, alt: "Keynote presentation on AI in business", caption: "AI in Business Keynote" },
];

const EventPhotosCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Moments from Our Events
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          A glimpse into our workshops, panels, and community gatherings shaping the future of AI.
        </p>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="relative rounded-2xl overflow-hidden group card-hover">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white font-semibold p-4 text-sm">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card shadow-md border-border hidden md:flex"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card shadow-md border-border hidden md:flex"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventPhotosCarousel;

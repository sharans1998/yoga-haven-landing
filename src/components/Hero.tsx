import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        // Parallax effect - slower scroll for the image
        imageRef.current.style.transform = `translateY(${
          scrollPosition * 0.2
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yoga-cream/80 via-transparent to-yoga-cream z-10"></div>

      {/* Background image with parallax effect */}
      <div ref={imageRef} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-yoga-cream/30 backdrop-blur-[2px]"></div>
        <div
          className="w-full h-full bg-center bg-cover animate-image-pan"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format")',
            backgroundPosition: "center 30%",
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 relative z-20">
        <div className="max-w-3xl mx-auto text-center" ref={textRef}>
          <div className="bg-yoga-cream/30 backdrop-blur-sm p-1 md:p-2 rounded-full inline-block mb-6 animate-fade-in">
            <span className="text-yoga-forest font-medium px-4 py-1 text-sm md:text-base">
              Yonitara Birth
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 text-yoga-charcoal leading-tight animate-slide-down">
            Empowering with &nbsp;
            <span className="italic text-yoga-forest">Informed Choices</span>
          </h1>

          <p className="text-lg md:text-xl text-yoga-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            The only 100% online, evidence-based yoga school dedicated to
            women's holistic health, from menarche to menopause.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button
              className={cn(
                "rounded-full text-white font-medium px-6 py-6",
                "bg-yoga-forest hover:bg-yoga-forest/90 transition-all",
                "text-base"
              )}
              role="link"
              // ref="#classes"
            >
              Explore Our Classes
            </Button>
            <Button
              variant="outline"
              className={cn(
                "rounded-full border-yoga-forest text-yoga-forest",
                "hover:bg-yoga-forest/5 hover:text-yoga-forest",
                "font-medium px-6 py-6 text-base"
              )}
            >
              Book a Free Session
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="hidden md:block absolute -left-24 top-1/4 w-64 h-64 bg-yoga-sage/30 rounded-full blur-3xl mix-blend-multiply"></div>
      <div className="hidden md:block absolute -right-32 top-1/3 w-80 h-80 bg-yoga-clay/20 rounded-full blur-3xl mix-blend-multiply"></div>
    </section>
  );
};

export default Hero;

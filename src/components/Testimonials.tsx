import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "The post-partum program at Yonitara helped me reconnect with my body and build strength gradually. The community of other mothers made all the difference in my recovery journey.",
    name: "Sarah Johnson",
    title: "Post-Partum Program",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    quote:
      "Completing the teacher training here transformed not just my practice but my entire perspective on wellness. The instructors create a perfect balance of challenge and support.",
    name: "Michael Chen",
    title: "Teacher Training Graduate",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    quote:
      "I've been attending daily classes for over a year now. The variety of styles and instructors ensures I'm always learning and growing, no matter how busy my schedule gets.",
    name: "Emma Rodriguez",
    title: "Regular Class Attendee",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-yoga-deep-purple/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="section-transition text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6">
            Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-display text-yoga-charcoal mb-6">
            Stories from Our <span className="italic">Community</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-yoga-sand opacity-70"></div>
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full bg-yoga-sage opacity-40"></div>

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 shadow-sm border border-yoga-sand">
            <Quote className="text-yoga-deep-purple/20 w-16 h-16 absolute top-6 right-6" />

            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "transition-opacity duration-500 absolute inset-0",
                    index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <blockquote className="text-xl md:text-2xl text-yoga-charcoal/90 font-display italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-yoga-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-yoga-charcoal/70 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button
                onClick={() => {
                  prevTestimonial();
                  if (intervalRef.current) clearInterval(intervalRef.current);
                }}
                className="w-10 h-10 rounded-full border border-yoga-sand flex items-center justify-center text-yoga-charcoal/70 hover:bg-yoga-sand/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  nextTestimonial();
                  if (intervalRef.current) clearInterval(intervalRef.current);
                }}
                className="w-10 h-10 rounded-full border border-yoga-sand flex items-center justify-center text-yoga-charcoal/70 hover:bg-yoga-sand/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-8 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    if (intervalRef.current) clearInterval(intervalRef.current);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-yoga-deep-purple w-6"
                      : "bg-yoga-sand hover:bg-yoga-sand/80"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useRef, useEffect } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-yoga-cream overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image collage */}
          <div className="relative h-[500px] md:h-[600px] order-2 lg:order-1">
            <div
              ref={imgRef1}
              className="absolute w-3/4 h-3/4 top-0 left-0 z-10 image-reveal image-reveal-delay-1"
            >
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format"
                  alt="Yoga studio with natural light"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-sage rounded-2xl -z-10"></div>
            </div>

            <div
              ref={imgRef2}
              className="absolute w-2/3 h-2/3 bottom-0 right-0 image-reveal image-reveal-delay-2"
            >
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format"
                  alt="Mountain view from yoga retreat"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-clay/50 rounded-2xl -z-10"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-yoga-clay/20 -z-10"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-yoga-clay/10 -z-10"></div>
          </div>

          {/* Text content */}
          <div
            ref={sectionRef}
            className="order-1 lg:order-2 section-transition"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-yoga-forest/10 text-yoga-forest font-medium text-sm mb-6">
              Our Story
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
              A Sanctuary for Wellness <span className="italic">& Growth</span>
            </h2>

            <p className="text-yoga-charcoal/80 text-lg mb-6 leading-relaxed">
              Founded with a vision of creating a nurturing space for
              transformation, Yonitara brings together the ancient wisdom of
              yoga with modern approaches to wellness.
            </p>

            <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
              Our studio is a home for practitioners of all levels—from
              beginners taking their first steps into yoga to experienced
              teachers deepening their practice and knowledge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-yoga-sand transition-transform hover:translate-y-[-5px]">
                <h3 className="font-display text-xl text-yoga-charcoal mb-2">
                  Experienced Instructors
                </h3>
                <p className="text-yoga-charcoal/70">
                  Our teachers bring decades of practice and specialized
                  training to every class.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-yoga-sand transition-transform hover:translate-y-[-5px]">
                <h3 className="font-display text-xl text-yoga-charcoal mb-2">
                  Supportive Community
                </h3>
                <p className="text-yoga-charcoal/70">
                  Join a welcoming group of practitioners on the journey toward
                  wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

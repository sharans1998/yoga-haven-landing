import React, { useRef, useEffect } from "react";
import { FormDialog } from "./FormDialog";

const CTA = ({
  titlePre = "Begin Your PeriNatal Expert Journey",
  titleItalics = "Today",
  titlePost = "",
  description = "Whether you're looking to become a premium perinatal expert, have a holistic understanding of pregnancy and postpartum or want to broaden your skill set, we're here to support you.",
  buttonText = "Book a Call",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-yoga-lilac/90 backdrop-blur-sm"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-yoga-deep-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yoga-clay/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center section-transition rounded-3xl bg-white/80 backdrop-blur-md p-10 md:p-16 shadow-sm border border-yoga-sand"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6">
            {titlePre} <span className="italic">{titleItalics}</span>{" "}
            {titlePost}
          </h2>

          <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-base">
            <FormDialog
              buttonText={buttonText}
              title={buttonText}
              description="Leave us your details and we'll get back to you shortly."
              submitText="Submit"
              formId="j4ndpvz5jyus"
              source={`cta_book-a-call_${window.location.href}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React, { useRef, useEffect } from "react";
import {
  Baby,
  Book,
  CalendarClock,
  Clock,
  FileBadge2,
  Speech,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  delay,
  colorClass,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  colorClass: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "section-transition bg-white rounded-3xl p-8 shadow-sm border border-yoga-sand transition-all duration-300",
        "hover:shadow-md hover:translate-y-[-5px]"
      )}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
          colorClass
        )}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">
        {title}
      </h3>

      <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
        {description}
      </p>

      <Button
        className="bg-transparent hover:bg-yoga-deep-purple/5 text-yoga-deep-purple hover:text-yoga-deep-purple px-0 py-0"
        variant="ghost"
      >
        Learn more →
      </Button>
    </div>
  );
};

const Services = () => {
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
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-b from-yoga-lilac to-white"
    >
      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 section-transition"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6">
            Our Offerings
          </div>

          <h2 className="text-4xl md:text-5xl font-display text-yoga-charcoal mb-6">
            Specialized Programs for{" "}
            <span className="italic">Your Journey</span>
          </h2>

          <p className="text-yoga-charcoal/80 text-lg leading-relaxed">
            We offer expertly designed programs to support your unique path
            toward wellness, strength, and inner balance at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Pre & Postnatal Teacher’s Training Certification"
            description="A specialized training blending Eastern wisdom with Western science to support mothers beyond yoga."
            icon={FileBadge2}
            delay={1}
            colorClass="bg-yoga-deep-purple"
          />

          <ServiceCard
            title="Regular Yoga & Lifestyle Sessions"
            description="Holistic classes designed to nurture women’s health, from menstrual health to menopause."
            icon={CalendarClock}
            delay={2}
            colorClass="bg-yoga-deep-purple/80"
          />

          <ServiceCard
            title="One-on-One Consultations"
            description="Personalized support for fertility, pregnancy, and postnatal recovery through yoga, Ayurveda, and therapeutic practices."
            icon={Speech}
            delay={3}
            colorClass="bg-yoga-deep-purple/60"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

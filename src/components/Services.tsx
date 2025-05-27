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
import { FormDialog } from "./FormDialog";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  delay,
  colorClass,
  link,
  popUpModal = false,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  colorClass: string;
  link?: string;
  popUpModal?: boolean;
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
        "section-transition bg-white rounded-3xl p-8 shadow-sm border border-yoga-sand transition-all duration-300 h-full flex flex-col ",
        "hover:shadow-md hover:translate-y-[-5px] group"
      )}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
          colorClass,
          "group-hover:bg-yoga-deep-purple"
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
      {popUpModal ? (
        <FormDialog
          buttonText="Learn more →"
          buttonVariant="secondary"
          title="Explore Regular Yoga & Lifestyle Sessions"
          description="Leave us your details and we'll get back to you shortly."
          submitText="Submit"
          formId="j4ndpvz5jyus"
          source={`services_regular-yoga_${window.location.pathname}`}
        />
      ) : (
        <a
          href={link ? link : "#"}
          className="w-full mt-auto hover:bg-yoga-deep-purple/5  hover:text-yoga-deep-purple px-0 py-0 rounded-md"
        >
          <Button className="bg-transparent text-yoga-deep-purple hover:bg-transparent">
            Learn more →
          </Button>
        </a>
      )}
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
            title="Teacher’s Training Certification"
            description="A specialized training blending Eastern wisdom with Western science to support mothers beyond yoga."
            icon={FileBadge2}
            delay={1}
            colorClass="bg-yoga-deep-purple/80"
            link="/teachers-training"
          />

          <ServiceCard
            title="Postnatal Rehab Program"
            description="Holistic classes designed to nurture women’s health, from menstrual health to menopause."
            icon={Baby}
            delay={2}
            colorClass="bg-yoga-deep-purple/80"
            link="/postpartum"
          />

          <ServiceCard
            title="Regular Yoga & Lifestyle Sessions"
            description="Personalized support for fertility, pregnancy, and postnatal recovery through yoga, Ayurveda, and therapeutic practices."
            icon={CalendarClock}
            delay={3}
            colorClass="bg-yoga-deep-purple/80"
            popUpModal={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

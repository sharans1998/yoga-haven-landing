import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { useIsMobile } from "@/hooks/use-mobile";

const About = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add smooth appearing animation to elements with section-transition class
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-transition").forEach((el) => {
      sectionObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [toast]);

  const smallScreenBanner =
    "https://res.cloudinary.com/dyb4kpthp/image/upload/q_auto/v1745245394/About_Us_Background_sxkaon.png";
  const largeScreenBanner =
    "https://res.cloudinary.com/dyb4kpthp/image/upload/q_auto/v1744820772/Shortlisted_pic_for_Website_1_c54cl9.jpg";

  return (
    <div className="min-h-screen bg-yoga-lilac">
      <SEO
        title="Yonitara Birth - About Us"
        description="Learn about Yonitara Birth's mission to empower women through holistic yoga and wellness practices. Discover the passionate minds behind Yonitara Yoga Institute, bringing years of combined experience and a shared vision."
        image="https://res.cloudinary.com/dyb4kpthp/image/upload/v1747830601/Yonitara-_About.png"
        url="https://yonitara.com/about"
      />
      <Navbar />
      <main>
        {/* Full Screen Banner Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${
                isMobile ? smallScreenBanner : largeScreenBanner
              })`,
              backgroundPosition: "center center",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-yoga-charcoal/60 via-yoga-charcoal/30 to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-yoga-lilac/10 backdrop-blur-sm p-1 md:p-2 rounded-full inline-block mb-6 animate-fade-in">
                <span className="text-white font-medium px-4 py-1 text-sm md:text-base">
                  Our Story
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 text-white leading-tight animate-slide-down">
                About <span className="italic text-yoga-sage">Yonitara</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                Empowering Women with Holistic Health
              </p>

              <Button
                className="rounded-full text-yoga-charcoal font-medium px-6 py-6 
                bg-yoga-lilac hover:bg-yoga-lilac/90 transition-all text-base animate-fade-in"
                onClick={() => {
                  // scroll to the mission section
                  const missionSection =
                    document.querySelector("#mission-section");
                  if (missionSection) {
                    missionSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Discover Our Journey
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 flex items-center flex-col w-full animate-bounce">
            <span className="text-white/80 text-sm mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-white" id="mission-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
              <div className="section-transition h-full">
                <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6">
                  Our Mission
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                  Empowering with <span className="italic">Informed</span>{" "}
                  Choices
                </h2>

                <p className="text-yoga-charcoal/80 text-lg mb-6 leading-relaxed">
                  Empowering mothers with holistic health, backed by
                  evidence-based knowledge and expert guidance, enabling them to
                  take control of their motherhood journey.
                </p>

                <p className="text-yoga-charcoal/80 text-lg mb-6 leading-relaxed">
                  We believe in the natural power of a woman’s body to heal and
                  thrive with the right support.
                </p>
              </div>

              <div className="section-transition h-full">
                <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6">
                  Our Vision
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                  Celebrate the Journey of{" "}
                  <span className="italic">Motherhood</span>
                </h2>

                <p className="text-yoga-charcoal/80 text-lg mb-6 leading-relaxed">
                  A world where women actively participate in their birthing and
                  motherhood journey, rather than merely experiencing it as
                  something that happens to them.
                </p>

                <p className="text-yoga-charcoal/80 text-lg mb-6 leading-relaxed">
                  Our institute strives to blend Eastern wisdom with Western
                  scientific rigor to support mothers through all stages of
                  pregnancy and postpartum recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yoga-lilac to-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 section-transition">
              <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6">
                Our Team
              </div>

              <h2 className="text-4xl md:text-5xl font-display text-yoga-charcoal mb-6">
                Meet Our <span className="italic">Founders</span>
              </h2>

              <p className="text-yoga-charcoal/80 text-lg leading-relaxed">
                The passionate minds behind Yonitara Yoga Institute, bringing
                years of combined experience and a shared vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-yoga-sand section-transition">
                <div className="h-80 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dyb4kpthp/image/upload/f_auto,q_auto,w_800,c_limit/v1741445137/Shruthi-about-us_u5ncwu.jpg"
                    alt="Emma Thompson"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-2">
                    Shruthi Jain
                  </h3>
                  <p className="text-yoga-deep-purple mb-4">
                    Pre & Postnatal Yoga Expert
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    A leader in yoga therapy, Shruthi holds an MSc in Yoga
                    Therapy from{" "}
                    <span className="whitespace-nowrap">S-VYASA</span>{" "}
                    University and is a registered RYT 500 and RPYT. With over a
                    decade of experience, Shruthi has transformed the lives of
                    pregnant women through holistic wellness. An accomplished
                    marathon runner, she continues to inspire others with her
                    achievements, including completing races while pregnant.
                    Shruthi has led yoga workshops for major corporations like
                    Capgemini, WeWork, and H&M, leaving a lasting impact on
                    corporate wellness.
                  </p>
                  <div className="gap-4 hidden">
                    <Button
                      variant="outline"
                      className="border-yoga-deep-purple text-yoga-deep-purple hover:bg-yoga-deep-purple/5 rounded-full px-6"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-yoga-sand section-transition">
                <div className="h-80 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dyb4kpthp/image/upload/f_auto,q_auto,w_800,c_limit/v1741445160/Pankhuree-about-us_dhu66v.jpg"
                    alt="David Chen"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-2">
                    Pankhuree
                  </h3>
                  <p className="text-yoga-deep-purple mb-4">
                    Yoga & Fitness Coach
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    A passionate yoga and fitness coach, Pankhuree specializes
                    in pre and postnatal yoga. Certified in craniosacral
                    therapy, Bach flower remedies, yoga therapy, and Ayurveda,
                    she offers a holistic approach to well-being. As the former
                    Head of Yoga and Innovation at iMumz, a Shark Tank-featured
                    startup, she has empowered over 10,000 expecting mothers
                    through personalized care and guidance. Her goal is to
                    enhance fertility, support healthy pregnancies, and aid in
                    postpartum recovery by helping women tap into their inner
                    strength and wisdom.
                  </p>
                  <div className="gap-4 hidden">
                    <Button
                      variant="outline"
                      className="border-yoga-deep-purple text-yoga-deep-purple hover:bg-yoga-deep-purple/5 rounded-full px-6"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;

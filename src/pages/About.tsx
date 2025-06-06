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
                bg-yoga-lilac hover:bg-yoga-lilac/90 transition-all text-base animate-fade-in md:mt-32"
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
                    MSc in Yoga Therapy (S-VYASA University) <br />
                    RYT 500 | RPYT | Childbirth Educator
                    <br />
                    UESCA Certified Running Coach
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    Shruthi Jain is a yoga therapist, childbirth educator, and
                    co-founder of YoniTara Birth, India’s only 100% online yoga
                    school for women’s health. With over 10,000 hours of
                    teaching experience, she has trained thousands of women
                    through pregnancy and postpartum, combining traditional yoga
                    with evidence-based practices. She also leads prenatal
                    retreats, helping women connect deeply with their bodies
                    during this transformative time.
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    Holding an MSc in Yoga Therapy, Shruthi specializes in
                    pre/postnatal yoga, gynecological wellness, and teacher
                    training. Her classes emphasize strength, breath, and
                    self-trust—supporting women across all life stages.
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    A passionate runner since age 16, Shruthi has earned
                    multiple podium finishes in major races like the TCS World
                    10K and Bengaluru Marathon, even running competitively
                    during pregnancy and postpartum. Her journey is a unique
                    blend of endurance and intuitive, mindful movement.
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    Shruthi has conducted workshops for Capgemini, H&M, WeWork,
                    and New York Road Runners, and her work has been featured in
                    Bangalore Times and Rajasthan Patrika. Whether leading a
                    yoga class or pacing a runner, Shruthi helps women reclaim
                    their strength—inside and out.
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
                    Yoga & Fitness Coach <br />
                    Women's Holistic Wellness Expert
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    Pankhuree is a deeply passionate yoga and fitness coach who
                    brings a multi-dimensional, holistic approach to women’s
                    health. With extensive expertise in pre and postnatal yoga,
                    she is also certified in craniosacral therapy, Bach flower
                    remedies, yoga therapy, and Ayurvedic lifestyle coaching,
                    allowing her to support women through every stage of their
                    reproductive journey—naturally and compassionately.
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    As the former Head of Yoga and Innovation at iMumz—a Shark
                    Tank India-featured health tech platform serving over
                    200,000 mothers—Pankhuree led a team of 25+ wellness experts
                    and personally supported over 10,000 expecting mothers. Her
                    work combined traditional practices with cutting-edge
                    wellness solutions, bridging ancient wisdom with modern-day
                    motherhood challenges.
                  </p>
                  <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                    Her mission is to help women enhance fertility, experience
                    empowered pregnancies, and heal fully postpartum—not just
                    physically, but emotionally and energetically. Through her
                    practice, she guides women to reconnect with their inner
                    strength, intuition, and womb wisdom, creating space for
                    true transformation in the motherhood journey.
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

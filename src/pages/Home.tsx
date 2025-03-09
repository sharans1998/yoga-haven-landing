import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { toast } = useToast();

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

  return (
    <div className="min-h-screen bg-yoga-cream">
      <Navbar />
      <main>
        <Hero />

        {/* Simple Description Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center section-transition">
              <div className="inline-block px-4 py-1 rounded-full bg-yoga-forest/10 text-yoga-forest font-medium text-sm mb-6">
                About Yonitara Birth
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                Find Balance in <span className="italic">Every Movement</span>
              </h2>

              <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                At YoniTara Birth, we empower women through a holistic approach
                to health and wellness. We believe in the natural power of a
                woman’s body to heal and thrive with the right support.
              </p>

              <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                From gynecological health to pregnancy and postpartum recovery,
                we integrate yoga, Ayurveda, and modern science to nurture every
                phase of womanhood.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

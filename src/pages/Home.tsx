
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
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
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-transition').forEach((el) => {
      sectionObserver.observe(el);
    });

    // Welcome toast notification
    setTimeout(() => {
      toast({
        title: "Welcome to Harmony Yoga",
        description: "Explore our programs and find your perfect practice.",
        duration: 5000,
      });
    }, 1500);

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
                Welcome to Harmony
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                Find Balance in <span className="italic">Every Movement</span>
              </h2>
              
              <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                At Harmony Yoga Institute, we believe that yoga is more than just physical exercise—it's a pathway to holistic wellbeing. Our studio offers a sanctuary where practitioners of all levels can discover the transformative power of mindful movement and breath.
              </p>
              
              <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                Whether you're a new mother looking to rebuild strength, an aspiring teacher deepening your practice, or simply seeking balance in your daily life, our expert instructors and thoughtfully designed programs provide the guidance and support you need on your journey.
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

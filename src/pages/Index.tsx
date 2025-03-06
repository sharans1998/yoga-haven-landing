
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
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
        <About />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

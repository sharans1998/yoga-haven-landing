
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
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
        <div className="absolute inset-0 bg-yoga-cream/90 backdrop-blur-sm"></div>
        <div 
          className="w-full h-full bg-center bg-cover"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format")',
            backgroundPosition: 'center bottom'
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-yoga-forest/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yoga-clay/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center section-transition rounded-3xl bg-white/80 backdrop-blur-md p-10 md:p-16 shadow-sm border border-yoga-sand"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6">
            Begin Your Yoga Journey <span className="italic">Today</span>
          </h2>
          
          <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
            Whether you're looking to strengthen your body after childbirth, deepen your practice through teacher training, or simply find balance in your daily life, we're here to support you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-yoga-forest hover:bg-yoga-forest/90 text-white rounded-full px-8 py-6 text-base"
            >
              Schedule Your First Class
            </Button>
            <Button 
              variant="outline" 
              className="border-yoga-forest text-yoga-forest hover:bg-yoga-forest/5 rounded-full px-8 py-6 text-base"
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

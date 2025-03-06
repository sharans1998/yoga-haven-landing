
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CTA from '@/components/CTA';
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from 'lucide-react';

const TeachersTraining = () => {
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

    return () => {
      sectionObserver.disconnect();
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-yoga-cream">
      <Navbar />
      <main>
        {/* Banner Section */}
        <section className="relative min-h-[60vh] overflow-hidden pt-20">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-yoga-cream/80 via-transparent to-yoga-cream z-10"></div>

          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-yoga-cream/30 backdrop-blur-[2px]"></div>
            <div 
              className="w-full h-full bg-center bg-cover"
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format")',
                backgroundPosition: 'center 30%'
              }}
            />
          </div>

          <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-yoga-cream/30 backdrop-blur-sm p-1 md:p-2 rounded-full inline-block mb-6 animate-fade-in">
                <span className="text-yoga-forest font-medium px-4 py-1 text-sm md:text-base">
                  200 & 300-Hour Programs
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 text-yoga-charcoal leading-tight animate-slide-down">
                Teacher <span className="italic text-yoga-forest">Training</span>
              </h1>
              
              <p className="text-lg md:text-xl text-yoga-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                Transform your practice and discover the teacher within through our comprehensive, Yoga Alliance certified training programs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
                <Button
                  className="rounded-full text-white font-medium px-6 py-6 bg-yoga-forest hover:bg-yoga-forest/90 transition-all text-base"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full border-yoga-forest text-yoga-forest hover:bg-yoga-forest/5 hover:text-yoga-forest font-medium px-6 py-6 text-base"
                >
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Program Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="section-transition">
                <div className="inline-block px-4 py-1 rounded-full bg-yoga-forest/10 text-yoga-forest font-medium text-sm mb-6">
                  Program Overview
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                  Embark on a <span className="italic">Transformational</span> Journey
                </h2>
                
                <p className="text-yoga-charcoal/80 text-lg mb-6 leading-relaxed">
                  Our teacher training program is more than just learning to teach yoga—it's a profound journey of personal growth, deepening your understanding of yoga philosophy, anatomy, and teaching methodology.
                </p>
                
                <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                  Led by experienced instructors with decades of combined teaching experience, our program blends traditional yogic wisdom with modern teaching approaches.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-yoga-forest mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-yoga-charcoal">Yoga Alliance Certified</h3>
                      <p className="text-yoga-charcoal/70">Recognized 200-hour and 300-hour certifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-yoga-forest mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-yoga-charcoal">Flexible Scheduling</h3>
                      <p className="text-yoga-charcoal/70">Weekend intensives or extended programs available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-yoga-forest mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-yoga-charcoal">Limited Class Size</h3>
                      <p className="text-yoga-charcoal/70">Maximum 15 students for personalized attention</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] md:h-[600px] section-transition">
                <div className="absolute w-3/4 h-3/4 top-0 left-0 z-10 image-reveal image-reveal-delay-1">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1599447292461-74fb7d5a541a?q=80&w=1200&auto=format" 
                      alt="Yoga teacher training session" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-sage rounded-2xl -z-10"></div>
                </div>
                
                <div className="absolute w-2/3 h-2/3 bottom-0 right-0 image-reveal image-reveal-delay-2">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format" 
                      alt="Yoga teacher training workshop" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-clay/50 rounded-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* You'll Learn Section */}
        <section className="py-16 md:py-24 bg-yoga-cream">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 section-transition">
              <div className="inline-block px-4 py-1 rounded-full bg-yoga-forest/10 text-yoga-forest font-medium text-sm mb-6">
                Curriculum Highlights
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display text-yoga-charcoal mb-6">
                What You'll <span className="italic">Learn</span>
              </h2>
              
              <p className="text-yoga-charcoal/80 text-lg leading-relaxed">
                Our comprehensive curriculum combines theory and practice to prepare you fully for teaching and deepen your personal practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-yoga-sand transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] section-transition">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yoga-forest">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">
                  Philosophy & History
                </h3>
                
                <ul className="space-y-3 text-yoga-charcoal/70 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Yoga sutras and ancient texts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Eight limbs of yoga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>History of yoga traditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Yogic lifestyle and ethics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-yoga-sand transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] section-transition">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yoga-clay/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">
                  Teaching Methodology
                </h3>
                
                <ul className="space-y-3 text-yoga-charcoal/70 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Class sequencing and planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Clear instruction techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Hands-on adjustments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Creating safe, inclusive classes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-yoga-sand transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] section-transition">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yoga-sage">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">
                  Anatomy & Physiology
                </h3>
                
                <ul className="space-y-3 text-yoga-charcoal/70 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Functional anatomy for yoga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Biomechanics of asanas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Common injuries and modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Subtle body energetics</span>
                  </li>
                </ul>
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

export default TeachersTraining;

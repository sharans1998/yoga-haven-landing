
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CTA from '@/components/CTA';
import { useToast } from "@/hooks/use-toast";
import { Heart, ShieldCheck, Users } from 'lucide-react';

const PostpartumFitness = () => {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1544126592-87d29226b446?q=80&w=2000&auto=format")',
                backgroundPosition: 'center 40%'
              }}
            />
          </div>

          <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-yoga-cream/30 backdrop-blur-sm p-1 md:p-2 rounded-full inline-block mb-6 animate-fade-in">
                <span className="text-yoga-forest font-medium px-4 py-1 text-sm md:text-base">
                  Specialized Program
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 text-yoga-charcoal leading-tight animate-slide-down">
                Postpartum <span className="italic text-yoga-forest">Fitness</span>
              </h1>
              
              <p className="text-lg md:text-xl text-yoga-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                Rebuild strength, find community, and nurture yourself through our specialized postpartum yoga and fitness program.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
                <Button
                  className="rounded-full text-white font-medium px-6 py-6 bg-yoga-forest hover:bg-yoga-forest/90 transition-all text-base"
                >
                  Join Our Program
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full border-yoga-forest text-yoga-forest hover:bg-yoga-forest/5 hover:text-yoga-forest font-medium px-6 py-6 text-base"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 section-transition">
              <div className="inline-block px-4 py-1 rounded-full bg-yoga-forest/10 text-yoga-forest font-medium text-sm mb-6">
                Program Highlights
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display text-yoga-charcoal mb-6">
                Your Journey to <span className="italic">Strength</span>
              </h2>
              
              <p className="text-yoga-charcoal/80 text-lg leading-relaxed">
                Our postpartum program is thoughtfully designed to support new mothers through every step of recovery and rebuilding.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-yoga-sand transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] section-transition">
                <img 
                  src="https://images.unsplash.com/photo-1608404862898-ca7de5c2eb4a?q=80&w=1000&auto=format" 
                  alt="Mother and baby in yoga class" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">
                  Baby-Friendly Classes
                </h3>
                
                <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                  Bring your little one along to our specialized classes designed for mothers with babies. Our nurturing environment welcomes both you and your child, allowing you to practice without worrying about childcare.
                </p>
                
                <ul className="space-y-2 text-yoga-charcoal/70 mb-6">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Safe environment for babies up to crawling age</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Feeding and changing stations available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Supportive community of new parents</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-yoga-sand transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] section-transition">
                <img 
                  src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=1000&auto=format" 
                  alt="Postpartum yoga class" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                
                <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">
                  Core & Pelvic Floor Recovery
                </h3>
                
                <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
                  Our specialized sequences focus on safely rebuilding core strength and restoring pelvic floor function—essential elements of postpartum recovery often overlooked in general fitness programs.
                </p>
                
                <ul className="space-y-2 text-yoga-charcoal/70 mb-6">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Diastasis recti-aware exercises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Progressive strength building approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="text-yoga-forest h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Modifications for all recovery stages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 md:py-24 bg-yoga-cream">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] order-2 lg:order-1 section-transition">
                <div className="absolute w-3/4 h-3/4 top-0 left-0 z-10 image-reveal image-reveal-delay-1">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1607247098789-dafd523388e4?q=80&w=1200&auto=format" 
                      alt="Mother with baby in yoga class" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-sage rounded-2xl -z-10"></div>
                </div>
                
                <div className="absolute w-2/3 h-2/3 bottom-0 right-0 image-reveal image-reveal-delay-2">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1200&auto=format" 
                      alt="Women in postpartum fitness class" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-clay/50 rounded-2xl -z-10"></div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 section-transition">
                <div className="inline-block px-4 py-1 rounded-full bg-yoga-forest/10 text-yoga-forest font-medium text-sm mb-6">
                  Why Join Our Program
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                  Support for Your <span className="italic">Transformation</span>
                </h2>
                
                <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                  The postpartum period is a profound transition that deserves specialized attention and care. Our program offers more than just physical exercise—it's a holistic approach to your wellbeing.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-clay/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="text-yoga-clay h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">Self-Care Priority</h3>
                      <p className="text-yoga-charcoal/70">Dedicated time to nurture your body and mind during this crucial recovery period.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-forest/20 flex items-center justify-center flex-shrink-0">
                      <Users className="text-yoga-forest h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">Community Connection</h3>
                      <p className="text-yoga-charcoal/70">Build relationships with other new mothers sharing similar experiences and challenges.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-sage/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-yoga-sage h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">Expert Guidance</h3>
                      <p className="text-yoga-charcoal/70">Led by instructors specifically trained in postpartum recovery and women's health.</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="bg-yoga-forest hover:bg-yoga-forest/90 text-white rounded-full px-8 py-6 text-base"
                >
                  Learn More About Our Approach
                </Button>
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

export default PostpartumFitness;

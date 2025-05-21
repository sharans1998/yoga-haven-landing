import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  LocateFixed,
  PersonStanding,
  Speech,
  Timer,
  Waves,
} from "lucide-react";
import SEO from "@/components/SEO";

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
    <div className="min-h-screen bg-yoga-lilac">
      <SEO
        title="Yonitara Birth - Postpartum Fitness"
        description="Discover our Postpartum Fitness Program designed to support your recovery after childbirth. Join us for a holistic approach to postpartum healing."
        url="https://yonitara.com/postpartum-fitness"
        image="https://res.cloudinary.com/dyb4kpthp/image/upload/v1747830601/Yonitara-_Abhyasa.png"
      />
      <Navbar />
      <main>
        {/* Banner Section */}
        <section className="relative min-h-[60vh] overflow-hidden pt-20">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-yoga-lilac/80 via-transparent to-yoga-lilac z-10"></div>

          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-yoga-lilac/30 backdrop-blur-[2px]"></div>
          </div>

          <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-yoga-lilac/30 backdrop-blur-sm p-1 md:p-2 rounded-full inline-block mb-6 animate-fade-in">
                <span className="text-yoga-deep-purple font-medium px-4 py-1 text-sm md:text-base">
                  Supporting Your Recovery After Childbirth
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 text-yoga-charcoal leading-tight animate-slide-down">
                <span className="italic text-yoga-deep-purple">Postnatal</span>{" "}
                Rehab Program
              </h1>

              <p className="text-lg md:text-xl text-yoga-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                A structured, holistic approach to postpartum healing, strength
                building, and emotional well-being.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
                <Button className="rounded-full text-white font-medium px-6 py-6 bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 transition-all text-base">
                  Join Our Program
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-yoga-deep-purple text-yoga-deep-purple hover:bg-yoga-deep-purple/5 hover:text-yoga-deep-purple font-medium px-6 py-6 text-base"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="section-transition">
                <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6">
                  Program Overview
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                  Help your body <span className="italic">Heal</span> and Thrive
                </h2>

                <p className="text-yoga-charcoal/80 text-lg mb-6 leading-relaxed">
                  Our Postnatal Yoga & Fitness Program is designed to help
                  mothers recover physically & emotionally after childbirth. We
                  go beyond traditional workouts, combining yoga, strength
                  training, Pilates, endurance training, and mindfulness for a
                  safe and effective recovery plan.
                </p>

                <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                  Led by experienced instructors with decades of combined
                  teaching experience, our program blends traditional yogic
                  wisdom with modern teaching approaches.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-yoga-deep-purple mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-yoga-charcoal">
                        Core & Pelvic Floor Strengthening
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        Regain strength and stability to heal from diastasis
                        recti, back pain, and weakened muscles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-yoga-deep-purple mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-yoga-charcoal">
                        Postnatal Healing
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        Gentle yoga, breathwork, and therapeutic exercises to
                        restore balance and energy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-yoga-deep-purple mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-yoga-charcoal">
                        Emotional Well-Being
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        Mindfulness practices to manage postpartum anxiety,
                        depression, and stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] md:h-[600px] section-transition">
                {/*<div className="absolute w-3/4 h-3/4 top-0 left-0 z-10 image-reveal image-reveal-delay-1">
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
                </div> */}
                <div className="absolute w-full h-full z-10 image-reveal image-reveal-delay-1">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1745244956/WhatsApp_Image_2025-04-18_at_17.31.58_1_j1tto6.jpg"
                      alt="Yoga teacher training session"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-sage rounded-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yoga-lilac to-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] order-2 lg:order-1 section-transition">
                {/* <div className="absolute w-3/4 h-3/4 top-0 left-0 z-10 image-reveal image-reveal-delay-1">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1607247098789-dafd523388e4?q=80&w=1200&auto=format"
                      alt="Mother with baby in yoga class"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 bg-indigo-300"
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
                </div> */}
                <div className="absolute w-full h-full z-10 image-reveal image-reveal-delay-1">
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1740576966/HEIC_to_WEBP_Shruthi_Tanvi_yjhoin.webp"
                      alt="Yoga teacher training session"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-yoga-sage rounded-2xl -z-10"></div>
                </div>
              </div>

              <div className="order-1 lg:order-2 section-transition ">
                <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6">
                  Why Join Our Program
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-medium text-yoga-charcoal mb-6 leading-tight">
                  Support for Your{" "}
                  <span className="italic">Transformation</span>
                </h2>

                <p className="text-yoga-charcoal/80 text-lg mb-8 leading-relaxed">
                  The postpartum period is a profound transition that deserves
                  specialized attention and care. Our program offers more than
                  just physical exercise—it's a holistic approach to your
                  wellbeing.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                      <Speech className="text-yoga-deep-purple h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                        Expert-Led Classes
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        Learn from certified instructors specializing in
                        postnatal recovery
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                      <Waves className="text-yoga-deep-purple h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                        Flexible Schedule
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        Access pre-recorded modules & live sessions to fit your
                        busy life
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                      <LocateFixed className="text-yoga-deep-purple h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                        Ayurvedic & Holistic Guidance
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        Natural healing practices, including Ayurvedic nutrition
                        and lifestyle support
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                      <Timer className="text-yoga-deep-purple h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                        Time-Efficient Workouts
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        Just 20-30 minutes a day to help you regain strength and
                        energy
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                      <PersonStanding className="text-yoga-deep-purple h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                        Full-Body Recovery Plan
                      </h3>
                      <p className="text-yoga-charcoal/70">
                        A structured blend of strength training, yoga, Pilates,
                        endurance, and mindfulness—so you heal fully, not just
                        get “back in shape”
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 text-white rounded-full px-8 py-6 text-base hidden">
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

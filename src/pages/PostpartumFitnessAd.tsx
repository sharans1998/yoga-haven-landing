import React, { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import NameEmailPhone from "@/components/NameEmailPhone";

const PostpartumFitnessAd = () => {
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
      <main>
        {/* Banner Section */}
        <div className="container mx-auto px-6 pt-20 pb-10 md:pt-20 md:pb-10 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-medium mb-6 text-yoga-charcoal leading-tight ">
              Free Workshop: Postpartum Fitness —{" "}
              <span className="italic text-yoga-deep-purple">Abhyasa</span>{" "}
              Style
            </h1>

            <p className="text-lg md:text-xl text-yoga-charcoal/80 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Feel Strong, Confident & Energized After Baby
            </p>
          </div>
        </div>

        {/* Workshop Details Section */}
        <div className="mx-auto pb-16 max-w-[600px]">
          <p className="mb-4">
            <strong>💖 Mama, we see you! </strong>
            “Will my body ever feel strong again?” We&apos;ve been there - and
            we&apos;ve got you. As moms and postpartum fitness experts, we
            created a proven formula that helped us heal, feel strong, and
            thrive - and now we&apos;re sharing it with you!
          </p>
          <NameEmailPhone />
          <p className="mt-4">
            <strong>👩🏻‍🍼 Led by New Moms & Experts:</strong> <br />
            🔥 Shruthi Jain - Marathoner, Pregnancy & Postpartum Trainer, Birth
            Educator (10 months postpartum & thriving!) <br />
            🔥 Tanvi Chawda - Strength & Conditioning Coach, Postpartum Fitness
            Expert, Certified Pilates Instructor
          </p>
          <div className="relative mx-auto h-80 w-80">
            <img
              src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1740576966/HEIC_to_WEBP_Shruthi_Tanvi_yjhoin.webp?q=60&w=1000&auto=format"
              alt="Emma Thompson"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* <ImageWrapper
              src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1740576966/HEIC_to_WEBP_Shruthi_Tanvi_yjhoin.webp"
              alt="Image of Shruthi and Tanvi"
            /> */}
          </div>
          <p className="mt-4">
            <strong>💡 What You&apos;ll Learn: </strong>
          </p>
          <div>
            <ul>
              <li>
                ✔ How to safely rebuild core strength & say goodbye to the “mom
                pooch”
              </li>
              <li>
                ✔ Techniques to heal & strengthen your pelvic floor (no more
                leaks!)
              </li>
              <li>
                ✔ Safe weight loss strategies — no extreme diets or long
                workouts needed
              </li>
              <li>
                ✔ Tips to relieve postpartum pains like back pain, tightness &
                poor posture
              </li>
            </ul>
          </div>
          <p className="mt-4">
            👶 Your body is powerful. Let&apos;s help it heal & thrive —
            together!
          </p>
        </div>
      </main>
    </div>
  );
};

export default PostpartumFitnessAd;

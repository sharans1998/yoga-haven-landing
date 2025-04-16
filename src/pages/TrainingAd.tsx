import MinimalFooter from "@/components/MinimalFooter";
import MinimalHeader from "@/components/MinimalHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrainingAd = () => {
  return (
    <div className="min-h-screen bg-yoga-lilac">
      {/* Minimal Header */}
      <MinimalHeader />
      <main>
        <section className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-display font-medium mb-6 text-yoga-charcoal leading-tight">
              Master Pre-Natal and Post-Natal Yoga in Just 8 Weeks with Our{" "}
              <span className="italic text-yoga-deep-purple">
                Comprehensive Certification Program!
              </span>
            </h1>

            <video
              src="https://res.cloudinary.com/dyb4kpthp/video/upload/v1744817895/yoni-natal-sutra_nkv31k.mp4"
              width="640"
              height="360"
              style={{
                height: "auto",
                width: "100%",
                aspectRatio: "640 / 360",
                margin: "0 0 20px 0",
              }}
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            >
              Your browser does not support the video tag.
            </video>
            <Link
              className="flex animate-bounce justify-center"
              to="/training/call-back"
            >
              <Button className="rounded-full text-white font-medium px-6 py-6 bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 transition-all text-base">
                Book a Free Strategy Call
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default TrainingAd;

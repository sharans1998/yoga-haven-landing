import MinimalFooter from "@/components/MinimalFooter";
import MinimalHeader from "@/components/MinimalHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrainingCallbackConfirmAd = () => {
  return (
    <div className="min-h-screen bg-yoga-lilac">
      <MinimalHeader />
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-sm border border-yoga-sand">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-display font-medium mb-6 text-yoga-charcoal leading-tight">
                <span className="italic text-yoga-deep-purple">Thank You</span>{" "}
                for Booking Your Call!
              </h1>
              <p className="text-lg md:text-xl text-yoga-charcoal/80 max-w-2xl mx-auto leading-relaxed mb-12">
                We're thrilled to have you take the first step toward becoming a
                certified Pre-Natal and Post-Natal Yoga Trainer.
              </p>

              <div className="space-y-8 text-left max-w-xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yoga-deep-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                      Confirmation Email
                    </h3>
                    <p className="text-yoga-charcoal/70">
                      Check your inbox for a confirmation email with all the
                      details of our upcoming call.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yoga-deep-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                      Mark Your Calendar
                    </h3>
                    <p className="text-yoga-charcoal/70">
                      Make sure to mark the date and time of our call on your
                      calendar so you don't miss it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yoga-deep-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                      Join The Call
                    </h3>
                    <p className="text-yoga-charcoal/70">
                      Join the call on time, with a laptop and a noise-free
                      background for a productive session :)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/">
                  <Button className="rounded-full text-white font-medium px-6 py-6 bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 transition-all text-base">
                    Back to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default TrainingCallbackConfirmAd;

import CalendlyCalendar from "@/components/CalendlyCalendar";
import MinimalFooter from "@/components/MinimalFooter";
import MinimalHeader from "@/components/MinimalHeader";

const TrainingCallback = () => {
  return (
    <div className="min-h-screen bg-yoga-lilac">
      {/* Minimal Header */}
      <MinimalHeader />
      <main>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-display font-medium mb-6 text-yoga-charcoal leading-tight ">
            Book Your Free{" "}
            <span className="italic text-yoga-deep-purple">Consultation</span>{" "}
            Call Now
          </h1>

          <p className="text-lg md:text-xl text-yoga-charcoal/80 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Start Your Journey to Becoming a Certified Pre-Natal and Post-Natal
            Yoga Trainer!
          </p>
        </div>
        <div className="h-auto">
          <CalendlyCalendar />
        </div>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default TrainingCallback;

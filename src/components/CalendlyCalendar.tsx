import { InlineWidget } from "react-calendly";

const CalendlyCalendar = () => {
  return (
    <div className="mb-6 overflow-scroll">
      <InlineWidget url="https://calendly.com/yonitara-birth/30min" />
    </div>
  );
};

export default CalendlyCalendar;

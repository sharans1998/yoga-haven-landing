
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-yoga-cream">
      <div className="text-center max-w-md px-6">
        <div className="inline-block px-4 py-1 rounded-full bg-yoga-forest/10 text-yoga-forest font-medium text-sm mb-6 animate-fade-in">
          Page Not Found
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-medium mb-6 text-yoga-charcoal leading-tight animate-slide-down">
          404
        </h1>
        <p className="text-xl text-yoga-charcoal/80 mb-10 animate-fade-in">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          className="bg-yoga-forest hover:bg-yoga-forest/90 text-white rounded-full px-8 py-6 animate-slide-up"
          onClick={() => window.location.href = '/'}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

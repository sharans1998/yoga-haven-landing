import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found | Yonitara Birth"
        description="The requested page was not found. Please return to the Yonitara Birth homepage."
        url="https://yonitara.com/404"
      />
      <div className="min-h-screen flex items-center justify-center bg-yoga-lilac">
        <div className="text-center max-w-md px-6">
          <div className="inline-block px-4 py-1 rounded-full bg-yoga-deep-purple/10 text-yoga-deep-purple font-medium text-sm mb-6 animate-fade-in">
            Page Not Found
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-medium mb-6 text-yoga-charcoal leading-tight animate-slide-down">
            404
          </h1>
          <p className="text-xl text-yoga-charcoal/80 mb-10 animate-fade-in">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button
            className="bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 text-white rounded-full px-8 py-6 animate-slide-up"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;

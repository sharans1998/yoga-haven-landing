import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { FormDialog } from "./FormDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

      if (scrollDirection === "down") {
        setIsScrolled(currentScrollY > 10);
      } else {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "-top-52 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl mx-auto rounded-full bg-yoga-lilac/95 backdrop-blur-md shadow-lg py-3 px-6 md:px-8"
          : "top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl mx-auto rounded-full bg-yoga-lilac/80 backdrop-blur-sm shadow-md py-4 px-6 md:px-10"
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-yoga-charcoal">
          <img
            src="/https://res.cloudinary.com/dyb4kpthp/image/upload/v1745254602/logo_uxdzt4.svg"
            alt="Yonitara Birth"
            className="h-8"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 font-medium"
          >
            About
          </Link>
          <Link
            to="/teachers-training"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 font-medium"
          >
            Teachers Training
          </Link>
          <Link
            to="/postpartum"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 font-medium"
          >
            Postpartum Fitness
          </Link>
          <FormDialog
            buttonText="Get in Touch"
            title="Get in Touch"
            description="Leave us your details and we'll get back to you shortly."
            submitText="Submit"
            formId="j4ndpvz5jyus"
            source={`navbar_get-in-touch_${window.location.href}`}
          />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-yoga-charcoal"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[4.5rem] bg-yoga-lilac/95 backdrop-blur-md flex flex-col md:hidden z-[1000] transition-all duration-300 ease-in-out rounded-2xl",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col py-8 px-6 gap-6">
          <Link
            to="/"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/teachers-training"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Teachers Training
          </Link>
          <Link
            to="/postpartum"
            className="text-yoga-charcoal hover:text-yoga-deep-purple transition-colors duration-200 text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Postpartum Fitness
          </Link>
          <FormDialog
            buttonText="Get in Touch"
            title="Get in Touch"
            description="Leave us your details and we'll get back to you shortly."
            submitText="Submit"
            formId="j4ndpvz5jyus"
            source={`navbar_get-in-touch_${window.location.href}`}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

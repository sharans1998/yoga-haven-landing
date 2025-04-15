import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
          <span className="text-2xl font-display font-medium">Yonitara</span>
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
          <Button className="bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 text-white rounded-full px-6">
            Book a Class
          </Button>
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
          "fixed inset-0 bg-white/30 backdrop-blur-md flex flex-col mt-16 md:hidden z-[1000] transition-transform duration-300 ease-in-out min-h-screen",
          isMobileMenuOpen ? "translate-x-0 px-6" : "translate-x-[110%]"
        )}
      >
        <nav className="flex flex-col gap-6 items-center">
          <Link
            to="/"
            className="text-yoga-charcoal text-xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-yoga-charcoal text-xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/teachers-training"
            className="text-yoga-charcoal text-xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Teachers Training
          </Link>
          <Link
            to="/postpartum"
            className="text-yoga-charcoal text-xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Postpartum Fitness
          </Link>
          <Button
            className="bg-yoga-deep-purple hover:bg-yoga-deep-purple/90 text-white mt-4 rounded-full px-6 w-full max-w-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Class
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

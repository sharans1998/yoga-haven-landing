
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled
          ? "bg-yoga-cream/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-yoga-charcoal"
        >
          <span className="text-2xl font-display font-medium">Harmony</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-yoga-charcoal hover:text-yoga-forest transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-yoga-charcoal hover:text-yoga-forest transition-colors duration-200 font-medium"
          >
            About
          </Link>
          <Link 
            to="/teachers-training" 
            className="text-yoga-charcoal hover:text-yoga-forest transition-colors duration-200 font-medium"
          >
            Teachers Training
          </Link>
          <Link 
            to="/postpartum-fitness" 
            className="text-yoga-charcoal hover:text-yoga-forest transition-colors duration-200 font-medium"
          >
            Postpartum Fitness
          </Link>
          <Button 
            className="bg-yoga-forest hover:bg-yoga-forest/90 text-white rounded-full px-6"
          >
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
          "fixed inset-0 bg-yoga-cream flex flex-col pt-24 px-6 md:hidden z-40 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
            to="/postpartum-fitness"
            className="text-yoga-charcoal text-xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Postpartum Fitness
          </Link>
          <Button 
            className="bg-yoga-forest hover:bg-yoga-forest/90 text-white mt-4 rounded-full px-6 w-full max-w-xs"
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

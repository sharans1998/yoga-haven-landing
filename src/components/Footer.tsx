import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-yoga-lilac pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">
              <img src="/Logo.svg" alt="Yonitara Birth" className="h-8" />
            </h3>
            <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
              Empowering with Informed Choices
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/yonitara.birth"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-yoga-deep-purple border border-yoga-sand hover:bg-yoga-deep-purple hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/YoniTara.birth"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-yoga-deep-purple border border-yoga-sand hover:bg-yoga-deep-purple hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@yonitarabirth"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-yoga-deep-purple border border-yoga-sand hover:bg-yoga-deep-purple hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-yoga-charcoal mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-yoga-charcoal/70 hover:text-yoga-deep-purple transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-yoga-charcoal/70 hover:text-yoga-deep-purple transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-medium text-yoga-charcoal mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/teachers-training"
                  className="text-yoga-charcoal/70 hover:text-yoga-deep-purple transition-colors"
                >
                  Teachers Training
                </Link>
              </li>
              <li>
                <Link
                  to="/postpartum"
                  className="text-yoga-charcoal/70 hover:text-yoga-deep-purple transition-colors"
                >
                  Postpartum Fitness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium text-yoga-charcoal mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a className="flex items-center gap-3" href="tel:+919108700146">
                  <Phone className="w-5 h-5 text-yoga-deep-purple" />
                  <span className="text-yoga-charcoal/70">Call us</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yonitara.birth@gmail.com"
                  className="text-yoga-charcoal/70 hover:text-yoga-deep-purple transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-yoga-deep-purple" />
                  Write to us
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3"
                  href="https://wa.me/919108700146"
                >
                  <img
                    src="https://res.cloudinary.com/dyb4kpthp/image/upload/v1745254602/whatsapp_lp8bbr.svg"
                    alt="WhatsApp"
                    className="w-5 h-5 text-yoga-deep-purple"
                  />
                  <span className="text-yoga-charcoal/70">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-yoga-sand">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-yoga-charcoal/60 text-sm">
              &copy; {new Date().getFullYear()} Yonitara. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-yoga-charcoal/60 text-sm hover:text-yoga-deep-purple transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-yoga-charcoal/60 text-sm hover:text-yoga-deep-purple transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

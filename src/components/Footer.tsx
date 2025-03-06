
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yoga-cream pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-medium text-yoga-charcoal mb-4">Harmony</h3>
            <p className="text-yoga-charcoal/70 mb-6 leading-relaxed">
              Creating space for wellness, growth, and community through the practice of yoga.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-yoga-forest border border-yoga-sand hover:bg-yoga-forest hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-yoga-forest border border-yoga-sand hover:bg-yoga-forest hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-yoga-forest border border-yoga-sand hover:bg-yoga-forest hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-yoga-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Instructors</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Class Schedule</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Events</a>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-medium text-yoga-charcoal mb-4">Programs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Post-Partum Fitness</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Teacher Training</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Daily Classes</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Workshops</a>
              </li>
              <li>
                <a href="#" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">Private Sessions</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium text-yoga-charcoal mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yoga-forest mt-0.5" />
                <span className="text-yoga-charcoal/70">123 Serenity Lane,<br />Mindful City, MC 10101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yoga-forest" />
                <span className="text-yoga-charcoal/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yoga-forest" />
                <a href="mailto:info@harmonyyoga.com" className="text-yoga-charcoal/70 hover:text-yoga-forest transition-colors">info@harmonyyoga.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-yoga-sand">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-yoga-charcoal/60 text-sm">
              &copy; {new Date().getFullYear()} Harmony Yoga Institute. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-yoga-charcoal/60 text-sm hover:text-yoga-forest transition-colors">Privacy Policy</a>
              <a href="#" className="text-yoga-charcoal/60 text-sm hover:text-yoga-forest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

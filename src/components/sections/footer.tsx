"use client";

import { Droplet, Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail, Clock4 } from 'lucide-react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#1a3d52] text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-2 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent-cyan transition-colors duration-300">
                <Droplet className="w-6 h-6 text-white group-hover:text-[#1a3d52] transition-colors duration-300" />
              </div>
              <span className="text-xl font-bold">Amphitrite</span>
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed">
              Pioneering sustainable water treatment solutions across India. Excellence in STP, ETP, and RO systems for over 15 years.
            </p>
            <p className="text-sm text-blue-300 italic">"Clean Water, Sustainable Future"</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-300 block">Services</Link></li>
              <li><Link href="#projects" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-300 block">Projects</Link></li>
              <li><Link href="#about" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-300 block">About</Link></li>
              <li><Link href="#office" className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-300 block">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">Contact Us</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-accent-cyan" />
                <span>No 1-4, Abirami Homes, Bhuvaneshwari Nagar, Velachery, Chennai – 600 042</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent-cyan" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91-9876543210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent-cyan" />
                <a href="mailto:contact@amphitritetech.com" className="hover:text-white transition-colors">contact@amphitritetech.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock4 className="w-5 h-5 shrink-0 text-accent-cyan" />
                <span>Mon-Sat: 9 AM - 6 PM</span>
              </li>
            </ul>
            <div>
              <p className="text-blue-200 mb-3">Follow Us:</p>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-white/20 text-blue-200 hover:bg-accent-cyan hover:border-accent-cyan hover:text-[#1a3d52] transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" aria-label="Twitter" className="p-2 rounded-full border border-white/20 text-blue-200 hover:bg-accent-cyan hover:border-accent-cyan hover:text-[#1a3d52] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-white/20 text-blue-200 hover:bg-accent-cyan hover:border-accent-cyan hover:text-[#1a3d52] transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-white/20 text-blue-200 hover:bg-accent-cyan hover:border-accent-cyan hover:text-[#1a3d52] transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Column 4: Get Started */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Get Started</h4>
            <div className="bg-[#1e3a47]/60 rounded-lg p-6 border border-white/10">
              <h5 className="font-semibold text-white">Request Free Consultation</h5>
              <p className="text-sm text-blue-200 mt-2 mb-4">
                Get expert advice on water treatment solutions tailored to your needs.
              </p>
              <form className="space-y-3">
                <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 focus:bg-white/20 focus:ring-accent-cyan" />
                <Button type="submit" className="w-full bg-accent-cyan text-[#1a3d52] font-bold hover:bg-cyan-300 transition-colors">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © 2025 Amphitrite Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
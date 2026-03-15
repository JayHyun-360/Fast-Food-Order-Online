import React from 'react';
import { Flame, Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-red p-2 rounded-lg">
                <Flame className="text-brand-gold w-6 h-6" />
              </div>
              <span className="font-display text-3xl tracking-wider">DULOHAN'S</span>
            </Link>
            <p className="text-brand-light/60 font-sans leading-relaxed">
              From Mangagoy to the world. Bringing the bold flavors of Filipino street food to the fast-food scene. Quality, speed, and sarap in every bite.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-8 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4 font-sans text-brand-light/60">
              {['Home', 'Menu', 'Deals', 'About', 'Contact', 'Franchise'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="hover:text-brand-gold transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl mb-8 text-brand-gold">Find Us</h4>
            <ul className="space-y-6 font-sans text-brand-light/60">
              <li className="flex gap-4">
                <MapPin className="text-brand-red shrink-0" />
                <span>123 Sizzle St., Quezon City, Metro Manila, Philippines</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-red shrink-0" />
                <span>+63 (2) 8888-DULO (3856)</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-red shrink-0" />
                <span>hello@dulohans.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl mb-8 text-brand-gold">Join the Sizzle</h4>
            <p className="text-brand-light/60 font-sans mb-6">Subscribe for exclusive deals and new menu drops.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-red transition-colors font-sans"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-red text-white px-4 rounded-lg hover:bg-brand-gold transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-light/40 font-sans text-sm">
          <p>© 2026 Dulohan's Fast Food. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

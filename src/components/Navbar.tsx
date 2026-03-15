import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = ({ onOpenCart }: { onOpenCart: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Deals', path: '/deals' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-brand-dark/95 backdrop-blur-sm shadow-lg py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-2 rounded-lg sizzle-hover">
            <Flame className="text-brand-gold w-6 h-6" />
          </div>
          <span className="font-display text-2xl text-brand-light tracking-wider group-hover:text-brand-gold transition-colors">
            DULOHAN'S
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "font-display text-lg tracking-wide transition-colors hover:text-brand-gold",
                location.pathname === link.path ? "text-brand-gold" : "text-brand-light"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-brand-light hover:text-brand-gold transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-dark">
                {totalItems}
              </span>
            )}
          </button>
          
          <Link 
            to="/order"
            className="hidden sm:block bg-brand-red text-brand-light font-display px-6 py-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all shadow-lg hover:shadow-brand-red/20 active:scale-95"
          >
            ORDER NOW
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-xl text-brand-light hover:text-brand-gold"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/order"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-red text-brand-light font-display text-center py-3 rounded-lg"
              >
                ORDER NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#C0392B_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-brand-light/60 text-sm font-medium tracking-widest uppercase">#1 Filipino Fast Food</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl text-brand-light leading-[0.9] mb-6">
            FAST. BOLD. <br />
            <span className="text-brand-red">SARAP.</span>
          </h1>
          
          <p className="text-brand-light/80 text-lg md:text-xl max-w-md mb-8 font-sans leading-relaxed">
            Experience the real taste of the streets, elevated. 
            Fresh ingredients, bold spices, and that unmistakable Dulohan sizzle.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="/order"
              className="bg-brand-red text-brand-light font-display text-2xl px-8 py-4 rounded-full flex items-center gap-3 hover:bg-brand-gold hover:text-brand-dark transition-all group shadow-2xl shadow-brand-red/20"
            >
              ORDER NOW
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/menu"
              className="border-2 border-brand-light/20 text-brand-light font-display text-2xl px-8 py-4 rounded-full hover:bg-brand-light hover:text-brand-dark transition-all"
            >
              VIEW MENU
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 animate-bounce-slow">
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1000" 
              alt="Signature Burger"
              className="w-full max-w-lg mx-auto drop-shadow-[0_35px_35px_rgba(192,57,43,0.4)] rounded-3xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center p-4 text-center border-4 border-brand-dark shadow-xl z-20"
          >
            <span className="font-display text-brand-dark text-xl leading-tight uppercase font-black">
              Freshly <br /> Sizzled
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Diagonal Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-brand-light diagonal-split transform rotate-180" />
    </section>
  );
};

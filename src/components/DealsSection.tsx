import React from 'react';
import { motion } from 'motion/react';
import { DEALS } from '../constants';
import { Clock, Tag } from 'lucide-react';

export const DealsSection = () => {
  return (
    <section id="deals" className="py-24 bg-brand-dark text-brand-light overflow-hidden relative">
      {/* Decorative Text Marquee Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-5 pointer-events-none select-none">
        <div className="text-[20vw] font-display whitespace-nowrap animate-marquee">
          HOT DEALS • HOT DEALS • HOT DEALS • HOT DEALS • HOT DEALS • 
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-gold mb-4">
              <Tag size={24} />
              <span className="font-display text-2xl tracking-widest">LIMITED TIME OFFERS</span>
            </div>
            <h2 className="text-5xl md:text-7xl leading-none">Sizzling <br /> <span className="text-brand-red">Barkada Deals</span></h2>
          </div>
          <p className="text-brand-light/60 max-w-sm font-sans">
            Grab these exclusive bundles and save big. Perfect for sharing with friends or family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {DEALS.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-light/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 flex flex-col sm:flex-row gap-8 group hover:bg-brand-light/10 transition-all"
            >
              <div className="w-full sm:w-48 h-48 rounded-3xl overflow-hidden flex-shrink-0">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-brand-gold text-sm mb-2 font-sans font-semibold">
                    <Clock size={14} />
                    ENDING SOON
                  </div>
                  <h3 className="text-3xl mb-2">{deal.title}</h3>
                  <p className="text-brand-light/60 text-sm font-sans mb-6">{deal.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-brand-light/40 line-through text-lg mr-3 font-display">₱{deal.originalPrice}</span>
                    <span className="text-brand-gold text-3xl font-display">₱{deal.dealPrice}</span>
                  </div>
                  <button className="bg-brand-red text-brand-light font-display text-xl px-6 py-3 rounded-2xl hover:bg-brand-gold hover:text-brand-dark transition-all active:scale-95">
                    GRAB DEAL
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

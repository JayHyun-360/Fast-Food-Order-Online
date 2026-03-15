import React from 'react';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { DealsSection } from '../components/DealsSection';
import { motion } from 'motion/react';
import { Flame, Clock, ShieldCheck, Zap } from 'lucide-react';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Features Bar */}
      <section className="bg-brand-red py-12 relative z-20 -mt-12 mx-6 rounded-3xl shadow-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: "Fast Delivery", sub: "Under 30 mins" },
            { icon: Flame, title: "Fresh Sizzle", sub: "Cooked to order" },
            { icon: ShieldCheck, title: "Safe Food", sub: "Hygienic prep" },
            { icon: Clock, title: "24/7 Service", sub: "Always open" }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center text-brand-light">
              <feature.icon className="mb-4 text-brand-gold" size={32} />
              <h4 className="text-xl mb-1">{feature.title}</h4>
              <p className="text-xs text-brand-light/60 font-sans uppercase tracking-widest">{feature.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <MenuSection />
      
      {/* Promo Banner */}
      <section className="py-24 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-gold rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-6xl md:text-8xl text-brand-dark leading-none mb-8">
                GET <span className="text-brand-red">10% OFF</span> <br /> YOUR FIRST ORDER!
              </h2>
              <p className="text-brand-dark/80 text-xl mb-10 font-sans leading-relaxed">
                Use code <span className="font-display text-3xl text-brand-red bg-white px-4 py-1 rounded-lg ml-2">DULO10</span> at checkout.
              </p>
              <button className="bg-brand-dark text-brand-light font-display text-2xl px-10 py-5 rounded-full hover:bg-brand-red transition-all shadow-2xl active:scale-95">
                CLAIM MY DISCOUNT 🔥
              </button>
            </div>
            
            {/* Decorative Food Image */}
            <div className="absolute -right-20 -bottom-20 w-full max-w-lg opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" 
                alt="Promo Burger" 
                className="w-full h-full object-contain rotate-12 group-hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <DealsSection />

      {/* Social Proof Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-brand-dark mb-4">Loved by the Streets</h2>
            <p className="text-brand-dark/60 font-sans">See what our customers are saying about the Dulohan experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Juan Dela Cruz", text: "The best sisig rice bowl I've ever had. Fast and consistent!", rating: 5 },
              { name: "Maria Santos", text: "Dulohan's burgers are on another level. That secret sauce is magic.", rating: 5 },
              { name: "Kevin Reyes", text: "Super fast delivery even during rush hour. My go-to lunch spot.", rating: 4 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-brand-dark/5">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-brand-dark/80 font-sans italic mb-6">"{review.text}"</p>
                <h5 className="text-xl text-brand-dark">— {review.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Star: React.FC<{ size: number, fill: string, className?: string }> = ({ size, fill, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

import React from 'react';
import { motion } from 'motion/react';
import { Flame, Users, Award, Heart } from 'lucide-react';

export const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-light min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-6xl md:text-8xl text-brand-dark leading-none mb-8">Started in <br /> <span className="text-brand-red">Mangagoy.</span></h1>
            <p className="text-brand-dark/60 font-sans text-lg mb-8 leading-relaxed">
              Dulohan's Fast Food began as a small humble stall in <strong>Mangagoy, Bislig City</strong>, founded by the <strong>Dulohan Family</strong>. Our journey started with a simple dream: to bring the bold, sizzling flavors of Filipino street food to a fast-food setting without losing the soul of the original recipes.
            </p>
            <p className="text-brand-dark/60 font-sans text-lg mb-12 leading-relaxed">
              Even as we expanded, we have consistently taken humble steps, ensuring that every growth milestone is rooted in the same values of hard work and community service that defined our early days. Today, we've grown into a nationwide favorite, but our commitment to "Fast, Bold, Sarap" remains unchanged.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl text-brand-red mb-1">50+</h4>
                <p className="text-brand-dark/40 font-display uppercase tracking-widest text-sm">Branches</p>
              </div>
              <div>
                <h4 className="text-4xl text-brand-red mb-1">1M+</h4>
                <p className="text-brand-dark/40 font-display uppercase tracking-widest text-sm">Happy Tummies</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Kitchen" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-gold p-8 rounded-[2rem] shadow-xl max-w-xs border-4 border-brand-dark">
              <p className="font-accent text-2xl text-brand-dark leading-tight">
                "We don't just serve food, we serve memories of the street."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Flame, title: "Bold Flavor", text: "We never shy away from spices and authentic tastes." },
            { icon: Users, title: "Community", text: "Supporting local farmers and street food culture." },
            { icon: Award, title: "Quality", text: "Premium ingredients, prepared with meticulous care." },
            { icon: Heart, title: "Passion", text: "Every meal is made with the love for Filipino cuisine." }
          ].map((value, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-brand-dark/5 text-center">
              <div className="bg-brand-red/10 text-brand-red w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon size={32} />
              </div>
              <h4 className="text-2xl text-brand-dark mb-4">{value.title}</h4>
              <p className="text-brand-dark/60 font-sans text-sm leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>

        {/* Team Teaser */}
        <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-center text-brand-light relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl mb-8">Join the <span className="text-brand-red">Dulohan Family</span></h2>
            <p className="text-brand-light/60 font-sans max-w-2xl mx-auto mb-12 text-lg">
              We're always looking for passionate individuals to join our crew or become a franchise partner. Let's grow the sizzle together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-brand-red text-white font-display text-2xl px-10 py-5 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all shadow-2xl active:scale-95">
                FRANCHISE NOW
              </button>
              <button className="border-2 border-white/20 text-white font-display text-2xl px-10 py-5 rounded-full hover:bg-white hover:text-brand-dark transition-all">
                JOIN OUR TEAM
              </button>
            </div>
          </div>
          
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#C0392B_0%,transparent_70%)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

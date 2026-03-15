import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Twitter } from 'lucide-react';

export const ContactPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-light min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h1 className="text-6xl md:text-8xl text-brand-dark leading-none mb-8">Get in <br /> <span className="text-brand-red">Touch</span></h1>
            <p className="text-brand-dark/60 font-sans text-lg mb-12 leading-relaxed">
              Have a question about our menu? Interested in franchising? Or just want to say hi? We'd love to hear from you.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { icon: MapPin, title: "Headquarters", detail: "123 Sizzle St., Quezon City, Metro Manila" },
                { icon: Phone, title: "Phone", detail: "+63 (2) 8888-DULO" },
                { icon: Mail, title: "Email", detail: "hello@dulohans.com" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-brand-red p-4 rounded-2xl text-white shadow-lg shadow-brand-red/20">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-brand-dark/60 font-sans">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center hover:bg-brand-red transition-all">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-brand-dark/5">
            <h3 className="text-3xl text-brand-dark mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-display text-brand-dark/40 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-brand-dark/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all font-sans" placeholder="Juan Dela Cruz" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-display text-brand-dark/40 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-brand-dark/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all font-sans" placeholder="juan@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-display text-brand-dark/40 uppercase tracking-widest">Subject</label>
                <input type="text" className="w-full bg-brand-dark/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all font-sans" placeholder="Franchise Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-display text-brand-dark/40 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-brand-dark/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all font-sans resize-none" placeholder="Tell us what's on your mind..."></textarea>
              </div>
              <button className="w-full bg-brand-red text-white font-display text-2xl py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-dark transition-all shadow-xl shadow-brand-red/20 active:scale-95">
                SEND MESSAGE
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

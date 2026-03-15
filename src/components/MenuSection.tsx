import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Plus, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

export const MenuSection = () => {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-brand-dark mb-4">Our Signature Menu</h2>
          <p className="text-brand-dark/60 max-w-2xl mx-auto font-sans">
            Crafted with passion, served with speed. Every item on our menu is a result of years of perfecting the Filipino fast-food experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} onAdd={() => addToCart(item)} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="font-display text-2xl text-brand-red border-b-2 border-brand-red hover:text-brand-gold hover:border-brand-gold transition-all">
            SEE FULL MENU →
          </button>
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem, index: number, onAdd: () => void }> = ({ item, index, onAdd }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-brand-dark/5"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {item.tags?.map(tag => (
          <span key={tag} className="absolute top-4 left-4 bg-brand-red text-white font-display px-3 py-1 rounded-full text-sm shadow-lg">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl text-brand-dark">{item.name}</h3>
          <span className="text-xl font-display text-brand-red">₱{item.price}</span>
        </div>
        <p className="text-brand-dark/60 text-sm mb-6 line-clamp-2 font-sans">
          {item.description}
        </p>
        
        <button 
          onClick={onAdd}
          className="w-full bg-brand-dark text-brand-light font-display text-xl py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-red transition-colors active:scale-95"
        >
          <Plus size={20} />
          ADD TO ORDER
        </button>
      </div>
    </motion.div>
  );
};

import React from 'react';
import { MENU_ITEMS } from '../constants';
import { useCart } from '../context/CartContext';
import { Plus, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export const MenuPage = () => {
  const { addToCart } = useCart();
  const categories = ['All', 'Burgers', 'Chicken', 'Sides', 'Rice Meals', 'Beverages', 'Desserts', 'Combos'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-light min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl text-brand-dark leading-none mb-4">The Menu</h1>
            <p className="text-brand-dark/60 font-sans max-w-md">Browse our full selection of Filipino fast-food favorites. From sizzling rice bowls to our signature burgers.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/20" size={20} />
              <input 
                type="text" 
                placeholder="Search menu..."
                className="w-full bg-white border border-brand-dark/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-brand-red transition-colors font-sans"
              />
            </div>
            <button className="bg-white border border-brand-dark/10 p-3 rounded-xl hover:bg-brand-dark hover:text-white transition-all">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
          {categories.map((cat, i) => (
            <button 
              key={cat}
              className={`px-8 py-3 rounded-full font-display text-xl whitespace-nowrap transition-all ${
                i === 0 ? 'bg-brand-red text-brand-light shadow-lg' : 'bg-white text-brand-dark border border-brand-dark/10 hover:border-brand-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-brand-dark/5"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-brand-red font-display text-lg shadow-sm">
                  ₱{item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-brand-dark mb-2">{item.name}</h3>
                <p className="text-brand-dark/60 text-xs mb-6 font-sans line-clamp-2">{item.description}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full bg-brand-dark text-brand-light font-display text-lg py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-red transition-colors active:scale-95"
                >
                  <Plus size={18} />
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

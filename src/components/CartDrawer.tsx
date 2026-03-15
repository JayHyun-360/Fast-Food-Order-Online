import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-light shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-dark/10 flex items-center justify-between bg-brand-dark text-brand-light">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-gold" />
                <h2 className="text-2xl font-display">Your Order ({totalItems})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-brand-dark/5 p-8 rounded-full mb-6">
                    <ShoppingBag size={64} className="text-brand-dark/20" />
                  </div>
                  <h3 className="text-2xl text-brand-dark mb-2">Your cart is empty</h3>
                  <p className="text-brand-dark/60 mb-8 font-sans">Looks like you haven't added any sizzle to your order yet.</p>
                  <button 
                    onClick={onClose}
                    className="bg-brand-red text-brand-light font-display text-xl px-8 py-3 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all"
                  >
                    START ORDERING
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-brand-dark/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg text-brand-dark leading-tight">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-brand-dark/20 hover:text-brand-red transition-colors p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-brand-red font-display text-lg">₱{item.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-brand-dark/5 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-white rounded-md transition-colors text-brand-dark"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-display text-lg w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-white rounded-md transition-colors text-brand-dark"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-display text-xl text-brand-dark">₱{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-brand-dark/10 bg-white">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-brand-dark/60 font-sans">
                    <span>Subtotal</span>
                    <span>₱{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-brand-dark/60 font-sans">
                    <span>Delivery Fee</span>
                    <span>₱49</span>
                  </div>
                  <div className="flex justify-between text-brand-dark text-2xl pt-2 border-t border-brand-dark/5">
                    <span>Total</span>
                    <span className="text-brand-red">₱{totalPrice + 49}</span>
                  </div>
                </div>
                
                <Link 
                  to="/order"
                  onClick={onClose}
                  className="w-full bg-brand-red text-brand-light font-display text-2xl py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-dark transition-all shadow-xl shadow-brand-red/20"
                >
                  CHECKOUT NOW
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

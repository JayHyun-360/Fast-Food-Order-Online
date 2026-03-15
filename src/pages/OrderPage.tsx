import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, CreditCard, Truck, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OrderPage = () => {
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="pt-48 pb-24 bg-brand-light min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-brand-dark/5"
        >
          <div className="bg-green-100 text-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl text-brand-dark mb-4">Order Placed!</h2>
          <p className="text-brand-dark/60 font-sans mb-10 leading-relaxed">
            Your order has been received and is being sizzled to perfection. Estimated delivery: 25-30 mins.
          </p>
          <Link 
            to="/"
            className="block w-full bg-brand-red text-white font-display text-2xl py-5 rounded-2xl hover:bg-brand-gold hover:text-brand-dark transition-all shadow-xl shadow-brand-red/20 active:scale-95"
          >
            BACK TO HOME
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-brand-light min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl text-brand-dark leading-none mb-12">Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-brand-dark/5">
              <div className="flex items-center gap-3 mb-8">
                <Truck className="text-brand-red" />
                <h3 className="text-3xl text-brand-dark">Delivery Details</h3>
              </div>
              <form onSubmit={handleOrder} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-display text-brand-dark/40 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full bg-brand-dark/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all font-sans" placeholder="Juan Dela Cruz" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-display text-brand-dark/40 uppercase tracking-widest">Phone Number</label>
                    <input required type="tel" className="w-full bg-brand-dark/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all font-sans" placeholder="+63 912 345 6789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-display text-brand-dark/40 uppercase tracking-widest">Delivery Address</label>
                  <textarea required rows={3} className="w-full bg-brand-dark/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all font-sans resize-none" placeholder="House No., Street, Barangay, City"></textarea>
                </div>
                
                <div className="pt-8 border-t border-brand-dark/5">
                  <div className="flex items-center gap-3 mb-8">
                    <CreditCard className="text-brand-red" />
                    <h3 className="text-3xl text-brand-dark">Payment Method</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Cash on Delivery', 'GCash', 'Maya'].map(method => (
                      <button 
                        key={method}
                        type="button"
                        className="p-4 rounded-2xl border-2 border-brand-dark/5 hover:border-brand-red transition-all text-center group"
                      >
                        <span className="font-display text-lg text-brand-dark group-hover:text-brand-red">{method}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  disabled={cart.length === 0}
                  className="w-full bg-brand-red text-white font-display text-2xl py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-dark transition-all shadow-xl shadow-brand-red/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-12"
                >
                  PLACE ORDER 🔥
                </button>
              </form>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-8">
            <div className="bg-brand-dark text-brand-light p-8 rounded-[2.5rem] shadow-2xl sticky top-32">
              <div className="flex items-center gap-3 mb-8">
                <ShoppingBag className="text-brand-gold" />
                <h3 className="text-3xl">Order Summary</h3>
              </div>
              
              <div className="space-y-6 mb-12 max-h-[40vh] overflow-y-auto pr-2 no-scrollbar">
                {cart.length === 0 ? (
                  <p className="text-brand-light/40 font-sans italic">Your cart is empty.</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="bg-brand-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">{item.quantity}</span>
                        <span className="font-sans text-brand-light/80">{item.name}</span>
                      </div>
                      <span className="font-display text-xl">₱{item.price * item.quantity}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex justify-between text-brand-light/60 font-sans">
                  <span>Subtotal</span>
                  <span>₱{totalPrice}</span>
                </div>
                <div className="flex justify-between text-brand-light/60 font-sans">
                  <span>Delivery Fee</span>
                  <span>₱49</span>
                </div>
                <div className="flex justify-between text-3xl pt-4 border-t border-white/5">
                  <span>Total</span>
                  <span className="text-brand-gold">₱{totalPrice + 49}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

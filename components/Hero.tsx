'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted for: ${address}`);
    // In a real app, this would send data to a server or CRM
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12 px-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop")',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="container relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Find Out What Your Home Could Sell For in Today’s <span className="text-emerald-400">St. Johns County</span> Market
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 max-w-xl leading-relaxed">
            Get a fast, no-pressure home value estimate and a local pricing strategy from a Northeast Florida listing expert.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-300 italic">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>No obligation. No spam. Local market data included.</span>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-2xl border border-zinc-100"
        >
          <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <MapPin className="text-emerald-600" />
            Get Your Free Valuation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-zinc-700 mb-1">
                Property Address *
              </label>
              <input
                required
                type="text"
                id="address"
                placeholder="123 Sunshine Blvd, St. Augustine, FL"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-zinc-700 mb-1">
                  Phone or Email
                </label>
                <input
                  type="text"
                  id="contact"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 text-lg group"
            >
              Get My Home Value
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-zinc-500">
            By clicking, you agree to receive a one-time valuation report. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

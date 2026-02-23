'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, TrendingUp } from 'lucide-react';

const wins = [
  {
    neighborhood: "Palencia",
    result: "Sold $25k Over Asking",
    days: "4 Days on Market",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    neighborhood: "Nocatee",
    result: "Record Price for Model",
    days: "Under Contract in 48 Hours",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    neighborhood: "St. Augustine",
    result: "Multiple Offers Received",
    days: "Closed in 21 Days",
    image: "https://images.unsplash.com/photo-1448630360428-65ff2c0257ef?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-zinc-900 text-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Seller Wins</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Proven results across Northeast Florida's most competitive neighborhoods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {wins.map((win, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 hover:border-emerald-500/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={win.image} 
                  alt={win.neighborhood}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs">
                  <MapPin className="w-4 h-4" />
                  {win.neighborhood}
                </div>
                <h3 className="text-xl font-bold leading-tight">{win.result}</h3>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {win.days}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

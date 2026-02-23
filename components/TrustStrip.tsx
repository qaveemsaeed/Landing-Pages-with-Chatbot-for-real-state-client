'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Target, Wrench } from 'lucide-react';

const features = [
  {
    title: "Accurate Neighborhood Comps",
    description: "Real-time data from the MLS, not generic automated estimates that miss local nuances.",
    icon: BarChart3,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Pricing Strategy",
    description: "A tailored plan to position your home to attract serious, qualified buyers in today's market.",
    icon: Target,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Repair & Staging Guidance",
    description: "Expert advice on which small improvements will yield the highest return on your investment.",
    icon: Wrench,
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

export default function TrustStrip() {
  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-200">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 italic font-serif">
            Why Local Sellers Use This
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center text-center space-y-4"
            >
              <div className={`${feature.bg} p-4 rounded-full`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

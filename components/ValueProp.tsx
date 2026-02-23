'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  "Estimated value range based on current inventory",
  "Buyer demand snapshot for your specific zip code",
  "Recommended list price strategy to maximize profit",
  "Simple improvements to increase your final sale price"
];

export default function ValueProp() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                What You Will Receive Within 24 Hours
              </h2>
              <p className="text-lg text-zinc-600">
                Our comprehensive market analysis goes beyond the numbers to give you a clear roadmap for your sale.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-800 font-medium text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://picsum.photos/seed/agent/800/1000" 
                alt="Local Listing Expert"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <p className="text-xl font-bold">Your Local Listing Expert</p>
                <p className="text-emerald-400 font-medium">Northeast Florida Specialist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

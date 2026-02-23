'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is this home valuation really free?",
    answer: "Yes, 100% free. We provide this as a service to Northeast Florida homeowners to help them understand their market position. There is no obligation to list your home with us."
  },
  {
    question: "Will you spam me with emails and calls?",
    answer: "Absolutely not. We hate spam as much as you do. We will only contact you to deliver your report and answer any specific questions you have about the data."
  },
  {
    question: "How accurate is this compared to a site like Zillow?",
    answer: "While automated sites use broad algorithms, we use 'boots on the ground' local data, including recent sales, current competition, and neighborhood-specific trends that algorithms often miss."
  },
  {
    question: "Do you work in my specific area?",
    answer: "We specialize in St. Johns County (St. Augustine, Ponte Vedra, Nocatee), Duval County (Jacksonville), and the surrounding Northeast Florida coastal communities."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-50 rounded-full mb-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-zinc-200 rounded-2xl overflow-hidden transition-all hover:border-emerald-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-zinc-50 transition-colors"
              >
                <span className="font-bold text-zinc-900 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

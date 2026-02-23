'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, MapPin, Calendar } from 'lucide-react';

type Step = 'initial' | 'address' | 'timeline' | 'contact' | 'success';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('initial');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsOpen(true);
    }, 15000); // Trigger after 15 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleAction = (nextStep: Step) => {
    setStep(nextStep);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm">Local Market Expert</p>
                  <p className="text-xs text-emerald-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                    Online now
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-6 h-[400px] overflow-y-auto bg-zinc-50 space-y-4">
              {/* Initial Message */}
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 text-sm text-zinc-800">
                  Curious what your home could sell for in today’s St. Johns County market?
                </div>
              </div>

              {step === 'initial' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-2 pl-10"
                >
                  <button 
                    onClick={() => handleAction('address')}
                    className="text-left p-3 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    Get Home Value
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-left p-3 bg-white text-zinc-700 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-colors border border-zinc-200"
                  >
                    Thinking About Selling
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-left p-3 bg-white text-zinc-700 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-colors border border-zinc-200"
                  >
                    Just Researching
                  </button>
                </motion.div>
              )}

              {step === 'address' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="flex gap-2 justify-end">
                    <div className="bg-emerald-100 p-3 rounded-2xl rounded-tr-none text-sm text-emerald-900 font-medium">
                      Get Home Value
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 text-sm text-zinc-800">
                      Great! What is the property address?
                    </div>
                  </div>
                  <div className="pl-10">
                    <input 
                      type="text" 
                      placeholder="Enter address..."
                      className="w-full p-3 rounded-xl border border-zinc-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                      onKeyDown={(e) => e.key === 'Enter' && handleAction('timeline')}
                    />
                  </div>
                </motion.div>
              )}

              {step === 'timeline' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 text-sm text-zinc-800">
                      When are you thinking about selling?
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pl-10">
                    {['0-30 days', '1-3 months', '3-6 months'].map((t) => (
                      <button 
                        key={t}
                        onClick={() => handleAction('contact')}
                        className="text-left p-3 bg-white text-zinc-700 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-colors border border-zinc-200"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 'contact' && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 text-sm text-zinc-800">
                      Almost done! Where should we send your report?
                    </div>
                  </div>
                  <div className="pl-10 space-y-2">
                    <input 
                      type="email" 
                      placeholder="Email address"
                      className="w-full p-3 rounded-xl border border-zinc-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button 
                      onClick={() => handleAction('success')}
                      className="w-full p-3 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors"
                    >
                      Send My Report
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-zinc-900">Request Received!</p>
                    <p className="text-sm text-zinc-600">We'll have your report ready within 24 hours.</p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-emerald-600 font-bold text-sm hover:underline"
                  >
                    Close Chat
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-600 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-emerald-700 transition-all hover:scale-110 active:scale-95 group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />}
      </button>
    </div>
  );
}

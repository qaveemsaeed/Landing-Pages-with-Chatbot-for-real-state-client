'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Final CTA */}
        <div className="bg-emerald-600 rounded-3xl p-10 md:p-16 text-center text-white mb-20 shadow-2xl shadow-emerald-200 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready for a real number, not a guess?
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              Stop wondering what your home is worth. Get your professional valuation report today.
            </p>
            <button 
              onClick={scrollToTop}
              className="bg-white text-emerald-700 hover:bg-zinc-100 font-bold py-4 px-10 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-lg mx-auto group"
            >
              Request My Home Value
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900">Local Listing Expert</h3>
            <p className="text-zinc-600 leading-relaxed">
              Specializing in high-impact marketing and strategic pricing for Northeast Florida homeowners.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-sm">Service Areas</h4>
            <ul className="space-y-2 text-zinc-600">
              <li>St. Johns County</li>
              <li>Ponte Vedra & Nocatee</li>
              <li>St. Augustine</li>
              <li>Jacksonville & Duval</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-zinc-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                (904) 555-0123
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                hello@stjohnsvaluation.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                St. Augustine, FL
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-zinc-600 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Fair Housing</li>
              <li>© {new Date().getFullYear()} Local Real Estate. All rights reserved.</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 text-center text-zinc-400 text-xs">
          <p>Each office is independently owned and operated. Information deemed reliable but not guaranteed.</p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ValueProp from '@/components/ValueProp';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Hero />
      <TrustStrip />
      <ValueProp />
      <SocialProof />
      <FAQ />
      <Footer />
      <Chatbot />
    </main>
  );
}

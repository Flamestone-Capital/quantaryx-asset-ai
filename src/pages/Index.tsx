import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Vision from '@/components/Vision';
import InvestorSection from '@/components/InvestorSection';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Vision />
        <InvestorSection />
        <CTA />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

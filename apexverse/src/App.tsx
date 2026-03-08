import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { HowItWorks, UseCases } from './components/HowItWorks';
import { Pricing, FAQ, Footer } from './components/Pricing';
import { Testimonials, CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

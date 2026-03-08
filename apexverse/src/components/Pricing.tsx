import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Star, Shield } from 'lucide-react';

export const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "0",
      desc: "Perfect for developers and small prototypes.",
      features: [
        "100 pages / month",
        "Standard AI parsing",
        "JSON/Markdown export",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "79",
      desc: "For growing startups building production AI apps.",
      features: [
        "5,000 pages / month",
        "Advanced table extraction",
        "Vector DB connectors",
        "Priority API access",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large organizations with massive data needs.",
      features: [
        "Unlimited pages",
        "Private cloud deployment",
        "Custom AI model training",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-gray/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Pricing</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold mb-6">Scale as you <span className="text-gradient">grow.</span></h3>
          <p className="text-white/50 max-w-2xl mx-auto">
            Simple, transparent pricing for teams of all sizes. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-3xl border ${t.popular ? 'border-brand-primary bg-brand-primary/5' : 'border-white/10 glass'} flex flex-col`}
            >
              {t.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">{t.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{t.price === "Custom" ? "" : "$"}</span>
                  <span className="text-6xl font-bold">{t.price}</span>
                  <span className="text-white/40">{t.price === "Custom" ? "" : "/mo"}</span>
                </div>
                <p className="text-white/50 text-sm">{t.desc}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {t.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-brand-primary" />
                    <span className="text-white/80">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${t.popular ? 'bg-brand-primary text-black hover:scale-[1.02]' : 'glass text-white hover:bg-white/10'}`}>
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      q: "What file formats do you support?",
      a: "We support PDF, DOCX, XLSX, CSV, and common image formats (JPG, PNG) via our advanced OCR engine."
    },
    {
      q: "How accurate is the table extraction?",
      a: "Our vision-language models achieve over 98% accuracy on complex, nested tables, outperforming standard OCR tools."
    },
    {
      q: "Can I integrate Apexverse with my existing RAG pipeline?",
      a: "Yes, we provide direct connectors for popular vector databases like Pinecone and Weaviate, or you can use our REST API."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We are SOC2 compliant and use enterprise-grade encryption. We also offer private cloud deployments for sensitive data."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">FAQ</h2>
          <h3 className="text-4xl font-display font-bold">Common Questions</h3>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="glass p-8 rounded-2xl border-white/5">
              <h4 className="text-lg font-bold mb-4">{f.q}</h4>
              <p className="text-white/50 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
                <Zap className="text-black fill-black" size={18} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Apexverse</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              The intelligent document layer for the next generation of AI applications. Transform unstructured data into structured knowledge.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="text-white/40 hover:text-brand-primary text-sm font-medium transition-colors">{s}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-xs text-white/20">© 2026 Apexverse AI. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

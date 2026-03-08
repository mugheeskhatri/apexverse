import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "CTO at DataFlow",
      text: "Apexverse saved us months of engineering time. Their table extraction is the best we've seen, period.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Marcus Thorne",
      role: "AI Lead at Nexa",
      text: "The RAG-ready output changed how we build our knowledge base. Clean Markdown is a game changer.",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder of ResearchAI",
      text: "We process thousands of scientific papers daily. Apexverse handles the scale effortlessly.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl relative"
            >
              <Quote className="text-brand-primary/20 absolute top-8 right-8" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-brand-primary fill-brand-primary" />)}
              </div>
              <p className="text-lg text-white/80 mb-8 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/5 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[40px] border-brand-primary/20"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Ready to unlock your <span className="text-brand-gradient">document data?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join 500+ AI teams building the future of knowledge with Apexverse. Start for free today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-brand-primary transition-all hover:scale-105">
              Get Started for Free
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Talk to an Expert
            </button>
          </div>
          <p className="mt-8 text-white/30 text-sm">No credit card required • 100 pages free / month</p>
        </motion.div>
      </div>
    </section>
  );
};

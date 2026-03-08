import React from 'react';
import { motion } from 'motion/react';
import { Upload, Cpu, Database, CheckCircle } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="text-brand-primary" />,
      title: "Upload Documents",
      desc: "Drop your PDFs, images, or spreadsheets into our API or dashboard."
    },
    {
      icon: <Cpu className="text-brand-primary" />,
      title: "AI Analysis",
      desc: "Our vision-language models parse layouts, tables, and semantic structures."
    },
    {
      icon: <Database className="text-brand-primary" />,
      title: "Structured Export",
      desc: "Receive clean, AI-ready JSON, Markdown, or direct Vector DB sync."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-gray/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">The Process</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold">From raw file to <span className="text-gradient">AI knowledge.</span></h3>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-8 border-brand-primary/30 shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                  {s.icon}
                </div>
                <div className="bg-brand-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-6">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
                <p className="text-white/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const UseCases = () => {
  const cases = [
    {
      title: "AI Chatbots",
      desc: "Feed your customer support bot with structured knowledge from product manuals and FAQs.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Enterprise Search",
      desc: "Index thousands of internal documents for lightning-fast, semantic employee search.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Research Automation",
      desc: "Extract data from scientific papers and financial reports for automated analysis.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Use Cases</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold">Built for <span className="text-gradient">every industry.</span></h3>
          </div>
          <button className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all">
            Explore All Solutions
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={c.image} 
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <h4 className="text-3xl font-bold mb-4">{c.title}</h4>
                <p className="text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

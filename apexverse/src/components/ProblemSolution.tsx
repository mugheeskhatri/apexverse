import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, Layers, Search, Zap } from 'lucide-react';

export const ProblemSolution = () => {
  const problems = [
    {
      icon: <Layers className="text-red-400" />,
      title: "Unstructured Chaos",
      desc: "Documents like PDFs and images are 'dead' data. AI models struggle to understand layouts, tables, and nested hierarchies."
    },
    {
      icon: <Search className="text-red-400" />,
      title: "Context Loss",
      desc: "Standard parsers lose the semantic relationship between sections, leading to poor RAG performance and hallucinations."
    },
    {
      icon: <Zap className="text-red-400" />,
      title: "Manual Bottlenecks",
      desc: "Developers spend 80% of their time cleaning data instead of building features. Scaling document processing is expensive and slow."
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle2 className="text-brand-primary" />,
      title: "Layout-Aware Extraction",
      desc: "Our AI understands the visual structure of your documents, perfectly preserving tables, headers, and metadata."
    },
    {
      icon: <CheckCircle2 className="text-brand-primary" />,
      title: "RAG-Optimized Output",
      desc: "Get clean Markdown or JSON designed specifically for vector embeddings and large language models."
    },
    {
      icon: <CheckCircle2 className="text-brand-primary" />,
      title: "Enterprise Scalability",
      desc: "Process millions of pages with a single API call. Built-in OCR, table parsing, and metadata tagging."
    }
  ];

  return (
    <section className="py-24 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <AlertCircle size={16} />
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Documents are the <span className="text-white/40">biggest hurdle</span> in AI development.
            </h2>
            <div className="space-y-8">
              {problems.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">{p.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 border-brand-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl rounded-full" />
            
            <div className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <Zap size={16} />
              The Apexverse Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              AI-ready data, <span className="text-brand-gradient">delivered instantly.</span>
            </h2>
            <div className="space-y-8">
              {solutions.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">{s.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="mt-10 w-full py-4 bg-brand-primary text-black font-bold rounded-xl hover:scale-[1.02] transition-transform">
              See the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

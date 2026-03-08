import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Database, Cpu } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-brand-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            The Future of Document Intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8"
          >
            Turn any document into <span className="text-brand-gradient">AI-ready knowledge</span> in seconds.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Apexverse automates document parsing, extracting structured data from PDFs, images, and spreadsheets for RAG systems, chatbots, and enterprise search.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-brand-primary transition-all hover:scale-105 flex items-center justify-center gap-2 group">
              Start Building for Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              View Documentation
            </button>
          </motion.div>
        </div>

        {/* Product Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="glass rounded-2xl p-4 md:p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 px-3 py-1 bg-white/5 rounded text-[10px] font-mono text-white/40">apexverse.ai/dashboard/parser</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <FileText size={16} className="text-brand-primary" />
                  Source Document (PDF)
                </div>
                <div className="aspect-[3/4] bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col gap-4">
                  <div className="h-4 w-3/4 bg-white/10 rounded" />
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="h-32 w-full bg-white/5 rounded border border-dashed border-white/20 flex items-center justify-center text-xs text-white/20">Table Data</div>
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-5/6 bg-white/10 rounded" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <Cpu size={16} className="text-brand-primary" />
                  AI-Ready JSON Output
                </div>
                <div className="aspect-[3/4] bg-brand-dark rounded-lg border border-white/10 p-6 font-mono text-xs text-brand-primary/80 overflow-hidden">
                  <pre>
{`{
  "document_id": "ax_9821",
  "metadata": {
    "title": "Q4 Financial Report",
    "pages": 42
  },
  "sections": [
    {
      "header": "Executive Summary",
      "content": "Revenue grew by 24%..."
    }
  ],
  "tables": [
    {
      "id": "table_1",
      "rows": 12,
      "data": [...]
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute -top-6 -right-6 hidden lg:block">
            <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 animate-bounce duration-[3000ms]">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Database size={20} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider">Vector Sync</div>
                <div className="text-sm font-bold">Pinecone Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

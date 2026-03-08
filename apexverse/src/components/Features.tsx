import React from 'react';
import { motion } from 'motion/react';
import { 
  Upload, 
  Cpu, 
  Table, 
  Code, 
  Database, 
  Workflow,
  Shield,
  Zap
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Upload size={24} />,
      title: "Universal Upload",
      desc: "Support for PDF, DOCX, Images (OCR), XLSX, and more. No matter the format, we handle the parsing."
    },
    {
      icon: <Cpu size={24} />,
      title: "AI Document Parsing",
      desc: "Advanced LLM-based parsing that understands semantic context, not just text coordinates."
    },
    {
      icon: <Table size={24} />,
      title: "Table Extraction",
      desc: "Perfectly extract complex nested tables into structured JSON or Markdown formats."
    },
    {
      icon: <Code size={24} />,
      title: "AI-Ready Output",
      desc: "Clean, structured data ready to be fed directly into your LLM prompts or RAG pipelines."
    },
    {
      icon: <Database size={24} />,
      title: "Vector DB Integration",
      desc: "Direct connectors for Pinecone, Weaviate, and Milvus. Sync your knowledge base in one click."
    },
    {
      icon: <Workflow size={24} />,
      title: "RAG-Ready Pipeline",
      desc: "Automated chunking and embedding strategies built right into the extraction process."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      desc: "SOC2 compliant, data encryption at rest, and private cloud deployment options."
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Processing",
      desc: "Sub-second parsing for standard documents. Scale to thousands of pages per minute."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold mb-6">Engineered for the <span className="text-gradient">AI Era.</span></h3>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Everything you need to transform static documents into dynamic knowledge bases for your AI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-8 rounded-3xl hover:border-brand-primary/50 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

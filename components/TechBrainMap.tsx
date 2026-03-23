
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UI_TEXT } from '../translations.ts';

interface TechBrainMapProps {
  lang: 'en' | 'zh';
}

interface TechNode {
  id: string;
  label: string;
  category: 'frontend' | 'backend' | 'ai' | 'infra';
  level: number;
  x: number;
  y: number;
  align: 'start' | 'middle' | 'end';
  description: string;
}

const TechBrainMap: React.FC<TechBrainMapProps> = ({ lang }) => {
  const t = UI_TEXT[lang];
  const [hoveredNode, setHoveredNode] = useState<TechNode | null>(null);

  // 重新分佈節點座標，確保空間最大化且無重疊
  const nodes: TechNode[] = [
    // --- FRONTEND ECOSYSTEM (Top Left Quadrant) ---
    { id: 'fe', label: 'Frontend Hub', category: 'frontend', level: 98, x: 120, y: 120, align: 'middle', description: lang === 'zh' ? '構建高性能、低延遲的現代網頁應用架構。' : 'Architecting high-performance, low-latency modern web applications.' },
    { id: 'micro_fe', label: 'Micro-Frontends', category: 'frontend', level: 92, x: 40, y: 40, align: 'start', description: 'Module Federation & Independent Deployment Patterns.' },
    { id: 'wasm', label: 'WebAssembly', category: 'frontend', level: 85, x: 30, y: 150, align: 'start', description: 'High-compute tasks migration from JS to C++/Rust binaries.' },
    { id: 'xstate', label: 'State Machines', category: 'frontend', level: 90, x: 80, y: 200, align: 'start', description: 'Complex UI logic management via XState & Finite Automata.' },
    { id: 'three', label: 'WebGL / Three.js', category: 'frontend', level: 94, x: 200, y: 50, align: 'start', description: 'Immersive 3D interactive experiences & GPU acceleration.' },
    
    // --- BACKEND & ARCHITECTURE (Top Right Quadrant) ---
    { id: 'be', label: 'Backend Core', category: 'backend', level: 96, x: 400, y: 120, align: 'middle', description: lang === 'zh' ? '設計可擴展、安全且高併發的分布式服務。' : 'Designing scalable, secure, and high-concurrency distributed services.' },
    { id: 'grpc', label: 'gRPC / Protobuf', category: 'backend', level: 88, x: 500, y: 40, align: 'end', description: 'High-performance RPC framework for microservices communication.' },
    { id: 'eda', label: 'Event-Driven Arch', category: 'backend', level: 93, x: 540, y: 130, align: 'end', description: 'Asynchronous workflows using RabbitMQ, Kafka or Redis Pub/Sub.' },
    { id: 'graphql', label: 'Federated GraphQL', category: 'backend', level: 91, x: 500, y: 200, align: 'end', description: 'Unified data graph across multiple backend services.' },
    { id: 'redis', label: 'Distributed Cache', category: 'backend', level: 95, x: 320, y: 50, align: 'end', description: 'In-memory data structures for extreme performance.' },

    // --- AI & INTELLIGENCE (Bottom Left Quadrant) ---
    { id: 'ai', label: 'Intelligence Layer', category: 'ai', level: 95, x: 120, y: 320, align: 'middle', description: lang === 'zh' ? '將尖端 LLM 技術融入產品，創造智能化用戶體驗。' : 'Integrating cutting-edge LLM tech into products for smart UX.' },
    { id: 'rag', label: 'RAG Pipelines', category: 'ai', level: 94, x: 40, y: 260, align: 'start', description: 'Retrieval-Augmented Generation for private knowledge bases.' },
    { id: 'vector', label: 'Vector Databases', category: 'ai', level: 90, x: 30, y: 360, align: 'start', description: 'Semantic search optimization using Pinecone or Milvus.' },
    { id: 'agent', label: 'Agentic Workflows', category: 'ai', level: 89, x: 80, y: 420, align: 'start', description: 'Autonomous task decomposition and tool-use by LLMs.' },
    { id: 'tuning', label: 'LoRA / Fine-tuning', category: 'ai', level: 82, x: 220, y: 400, align: 'start', description: 'Adapting pre-trained models for domain-specific tasks.' },

    // --- INFRASTRUCTURE & DEVOPS (Bottom Right Quadrant) ---
    { id: 'infra', label: 'Cloud Lattice', category: 'infra', level: 92, x: 400, y: 320, align: 'middle', description: lang === 'zh' ? '自動化佈署、持續監控與邊緣運算優化。' : 'Automated deployment, monitoring, and edge-computing.' },
    { id: 'iac', label: 'Terraform / IaC', category: 'infra', level: 88, x: 500, y: 260, align: 'end', description: 'Infrastructure as Code for reproducible environment setup.' },
    { id: 'k8s', label: 'K8s Orchestration', category: 'infra', level: 85, x: 540, y: 350, align: 'end', description: 'Container management and auto-scaling for high availability.' },
    { id: 'edge', label: 'Edge Runtimes', category: 'infra', level: 94, x: 500, y: 420, align: 'end', description: 'Vercel Edge / Cloudflare Workers for zero-latency execution.' },
    { id: 'cicd', label: 'CI/CD Pipelines', category: 'infra', level: 96, x: 300, y: 420, align: 'end', description: 'Automated testing and blue-green deployment strategies.' }
  ];

  const connections = [
    ['fe', 'be'], ['be', 'infra'], ['infra', 'ai'], ['ai', 'fe'],
    ['fe', 'micro_fe'], ['fe', 'wasm'], ['fe', 'xstate'], ['fe', 'three'],
    ['be', 'grpc'], ['be', 'eda'], ['be', 'graphql'], ['be', 'redis'],
    ['ai', 'rag'], ['ai', 'vector'], ['ai', 'agent'], ['ai', 'tuning'],
    ['infra', 'iac'], ['infra', 'k8s'], ['infra', 'edge'], ['infra', 'cicd']
  ];

  const getColor = (cat: string) => {
    switch(cat) {
      case 'frontend': return '#00f3ff';
      case 'backend': return '#ff003c';
      case 'ai': return '#39ff14';
      case 'infra': return '#f3ff00';
      default: return '#fff';
    }
  };

  return (
    <div className="relative w-full h-[450px] overflow-hidden bg-black/40 border border-white/5 rounded-sm">
      <svg className="w-full h-full" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid meet">
        <defs>
          {['frontend', 'backend', 'ai', 'infra'].map(cat => (
            <radialGradient id={`glow-${cat}`} key={cat}>
              <stop offset="0%" stopColor={getColor(cat)} stopOpacity="0.4" />
              <stop offset="100%" stopColor={getColor(cat)} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Connections */}
        {connections.map(([startId, endId], i) => {
          const start = nodes.find(n => n.id === startId);
          const end = nodes.find(n => n.id === endId);
          if (!start || !end) return null;
          const color = getColor(start.category);
          return (
            <React.Fragment key={i}>
              <line
                x1={start.x} y1={start.y} x2={end.x} y2={end.y}
                stroke={color} strokeWidth="0.5" strokeOpacity="0.1"
              />
              <motion.circle
                r="1"
                fill={color}
                animate={{ 
                  cx: [start.x, end.x],
                  cy: [start.y, end.y],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 2
                }}
              />
            </React.Fragment>
          );
        })}

        {/* Nodes and Labels */}
        {nodes.map(node => {
          const isCore = node.id.length <= 5;
          const color = getColor(node.category);
          return (
            <g key={node.id} 
              className="cursor-crosshair"
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {isCore && (
                <circle cx={node.x} cy={node.y} r="30" fill={`url(#glow-${node.category})`} />
              )}
              
              <motion.circle
                cx={node.x} cy={node.y} r={isCore ? 6 : 3}
                fill={color}
                animate={{ 
                  scale: hoveredNode?.id === node.id ? 1.5 : 1,
                  filter: hoveredNode?.id === node.id ? `drop-shadow(0 0 8px ${color})` : 'none',
                }}
              />
              
              <text 
                x={node.x} 
                y={node.y + (node.y > 225 ? 15 : -12)} 
                fill={hoveredNode?.id === node.id ? color : "white"} 
                fontSize={isCore ? "10" : "8"} 
                fontFamily="Orbitron" 
                textAnchor={node.align}
                className="pointer-events-none uppercase font-bold tracking-tighter transition-all"
                style={{ opacity: hoveredNode ? (hoveredNode.id === node.id ? 1 : 0.2) : 0.6 }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Info Overlay */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-4 right-4 w-52 p-4 bg-black/90 border-t-2 border-b-2 backdrop-blur-xl shadow-2xl z-50 pointer-events-none"
            style={{ borderColor: getColor(hoveredNode.category) }}
          >
            <div className="text-[11px] font-tech font-bold uppercase mb-2" style={{ color: getColor(hoveredNode.category) }}>
              {hoveredNode.label}
            </div>
            <div className="h-1 bg-white/5 w-full mb-3">
              <motion.div initial={{ width: 0 }} animate={{ width: `${hoveredNode.level}%` }} className="h-full" style={{ backgroundColor: getColor(hoveredNode.category) }} />
            </div>
            <p className="text-[9px] text-white/80 italic font-mono leading-tight">
              {hoveredNode.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="w-1 h-1 bg-[#39ff14] rounded-full animate-ping" />
        <div className="text-[7px] font-tech text-[#39ff14] uppercase tracking-[0.4em]">
          NEURAL_MAP_OPTIMIZED // NO_COLLISION
        </div>
      </div>
    </div>
  );
};

export default TechBrainMap;

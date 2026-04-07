import { motion, AnimatePresence } from 'motion/react';
import { X, Search as SearchIcon, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockWorks = [
  { id: 1, name: "Boda en la Costa", category: "Bodas", tags: ["mar", "playa", "atardecer"] },
  { id: 2, name: "Retrato de Autor", category: "Retratos", tags: ["estudio", "bnw", "minimalista"] },
  { id: 3, name: "Evento Exclusivo", category: "Eventos", tags: ["gala", "noche", "lujo"] },
  { id: 4, name: "Boda en el Bosque", category: "Bodas", tags: ["naturaleza", "verde", "boho"] },
  { id: 5, name: "Sesión Lifestyle", category: "Retratos", tags: ["urbano", "calle", "moda"] },
  { id: 6, name: "Fashion Editorial", category: "Eventos", tags: ["revista", "estilo", "pasarela"] },
];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(mockWorks);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults(mockWorks);
    } else {
      const filtered = mockWorks.filter(work => 
        work.name.toLowerCase().includes(query.toLowerCase()) ||
        work.category.toLowerCase().includes(query.toLowerCase()) ||
        work.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-24 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-silver-950/95 backdrop-blur-xl"
      />
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative w-full max-w-2xl space-y-8 pb-12"
      >
        <div className="relative group">
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-silver-500 group-focus-within:text-silver-50 transition-colors" />
          <input 
            autoFocus
            type="text" 
            placeholder="Busca por palabras clave (boda, retrato, playa...)"
            className="w-full pl-16 pr-20 py-6 bg-white/5 border border-white/10 rounded-2xl text-xl text-silver-50 focus:outline-none focus:border-silver-400 transition-all placeholder:text-silver-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-silver-400" />
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-silver-500 font-bold px-4">
            {results.length > 0 ? `Resultados (${results.length})` : "No se encontraron resultados"}
          </h3>
          
          <div className="grid grid-cols-1 gap-2">
            <AnimatePresence mode="popLayout">
              {results.map((work, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  key={work.id}
                  className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-silver-800 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-silver-500" />
                    </div>
                    <div>
                      <h4 className="text-silver-100 font-medium">{work.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-silver-500">{work.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-2">
                      {work.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[8px] uppercase tracking-widest text-silver-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-silver-500 group-hover:text-silver-50 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

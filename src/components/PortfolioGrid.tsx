import { motion } from 'motion/react';
import { useState } from 'react';
import { Camera, Heart, ExternalLink } from 'lucide-react';

// Reusable Portfolio Item Component
// This is designed to be easily copied and adapted by AI in VS Code
const PortfolioItem = ({ name, price, category, image, hoverImage }: {
  name: string;
  price: string;
  category: string;
  image: string;
  hoverImage: string;
  key?: any;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] rounded-2xl border border-white/5">
        {/* Main Image */}
        <motion.img 
          src={image} 
          alt={name}
          referrerPolicy="no-referrer"
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Hover Image (Detail) */}
        <motion.img 
          src={hoverImage} 
          alt={`${name} detail`}
          referrerPolicy="no-referrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-10 h-10 rounded-full bg-[#050505]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-50 hover:bg-[#111] transition-all">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#050505]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-50 hover:bg-[#111] transition-all">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-[#050505]/60 backdrop-blur-sm border border-white/10 text-zinc-300 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif tracking-wide text-zinc-50 group-hover:text-zinc-400 transition-colors">
            {name}
          </h3>
          <span className="text-sm font-medium text-zinc-300">
            {price}
          </span>
        </div>
        <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-2">
          <Camera className="w-3 h-3" /> photostudiosimona Signature
        </p>
      </div>
    </motion.div>
  );
};

export const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = ['Todos', 'Bodas', 'Eventos', 'Retratos'];
  
  const items = [
    { name: "Boda en la Costa", price: "Desde 1200€", category: "Bodas", img: "https://picsum.photos/seed/simona-wedding-1/800/1000", hover: "https://picsum.photos/seed/simona-wedding-detail-1/800/1000" },
    { name: "Retrato de Autor", price: "Desde 250€", category: "Retratos", img: "https://picsum.photos/seed/simona-portrait-1/800/1000", hover: "https://picsum.photos/seed/simona-portrait-detail-1/800/1000" },
    { name: "Evento Exclusivo", price: "Desde 500€", category: "Eventos", img: "https://picsum.photos/seed/simona-event-1/800/1000", hover: "https://picsum.photos/seed/simona-event-detail-1/800/1000" },
    { name: "Boda en el Bosque", price: "Desde 1100€", category: "Bodas", img: "https://picsum.photos/seed/simona-wedding-2/800/1000", hover: "https://picsum.photos/seed/simona-wedding-detail-2/800/1000" },
    { name: "Sesión Lifestyle", price: "Desde 300€", category: "Retratos", img: "https://picsum.photos/seed/simona-lifestyle-1/800/1000", hover: "https://picsum.photos/seed/simona-lifestyle-detail-1/800/1000" },
    { name: "Fashion Editorial", price: "Desde 400€", category: "Eventos", img: "https://picsum.photos/seed/simona-fashion-1/800/1000", hover: "https://picsum.photos/seed/simona-fashion-detail-1/800/1000" },
  ];

  const filteredItems = activeCategory === 'Todos' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-serif text-zinc-50">Portfolio Seleccionado</h2>
          <p className="text-zinc-400 font-light max-w-md">
            Una mirada a mis trabajos más recientes. Cada imagen cuenta una historia única capturada por photostudiosimona.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-[10px] uppercase tracking-widest rounded-full border transition-all ${
                activeCategory === cat 
                  ? "bg-zinc-50 text-zinc-950 border-zinc-50 shadow-lg shadow-white/10" 
                  : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredItems.map((item, i) => (
          <PortfolioItem 
            key={i}
            name={item.name}
            price={item.price}
            category={item.category}
            image={item.img}
            hoverImage={item.hover}
          />
        ))}
      </div>
    </div>
  );
};

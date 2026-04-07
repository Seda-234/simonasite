import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Heart, ExternalLink, Camera } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  category: string;
  key?: string | number;
}

export const ProductCard = ({ name, price, image, hoverImage, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-silver-900 rounded-2xl border border-white/5">
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
          <button className="w-10 h-10 rounded-full bg-silver-950/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-silver-400 hover:text-silver-50 hover:bg-silver-900 transition-all">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-silver-950/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-silver-400 hover:text-silver-50 hover:bg-silver-900 transition-all">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-silver-950/60 backdrop-blur-sm border border-white/10 text-silver-300 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-serif tracking-wide text-silver-50 group-hover:text-silver-400 transition-colors">
            {name}
          </h3>
          <span className="text-sm font-medium text-silver-300">
            {price}
          </span>
        </div>
        <p className="text-xs text-silver-500 uppercase tracking-widest font-medium flex items-center gap-2">
          <Camera className="w-3 h-3" /> Lumina Signature Style
        </p>
      </div>

      {/* Border Beam Effect on Hover */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute -inset-[1px] rounded-2xl border border-silver-400/20 pointer-events-none"
      />
    </motion.div>
  );
};

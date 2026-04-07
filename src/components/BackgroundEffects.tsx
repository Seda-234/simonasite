import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/src/lib/utils';

export const BackgroundEffects = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" ref={containerRef}>
      {/* Soft Animated Gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
        }}
      />
      
      {/* Grid Shimmer */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 45%, #ffffff 50%, transparent 55%)`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Light Field / Beam Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-10%] left-[20%] w-[1px] h-[120%] bg-gradient-to-b from-transparent via-white to-transparent rotate-[15deg] blur-sm" />
        <div className="absolute top-[-10%] right-[30%] w-[1px] h-[120%] bg-gradient-to-b from-transparent via-white to-transparent rotate-[-10deg] blur-md" />
      </div>

      {/* Particle Drift */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-silver-400 rounded-full opacity-30"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, '-20%'],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Slow Parallax Abstract Shapes */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[10%] left-[5%] w-64 h-64 border border-silver-400/10 rounded-full blur-3xl bg-silver-400/5"
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-[10%] right-[5%] w-96 h-96 border border-silver-300/10 rounded-full blur-3xl bg-silver-300/5"
      />
    </div>
  );
};

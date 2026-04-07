import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Camera, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Bodas & Romance",
    desc: "Capturando la esencia del amor en entornos naturales y urbanos.",
    images: [
      "https://picsum.photos/seed/simona-w1/800/1000",
      "https://picsum.photos/seed/simona-w2/800/1000",
      "https://picsum.photos/seed/simona-w3/800/1000",
      "https://picsum.photos/seed/simona-w4/800/1000",
    ]
  },
  {
    title: "Retratos de Autor",
    desc: "Explorando la personalidad a través de la luz y la sombra.",
    images: [
      "https://picsum.photos/seed/simona-p1/800/1000",
      "https://picsum.photos/seed/simona-p2/800/1000",
      "https://picsum.photos/seed/simona-p3/800/1000",
      "https://picsum.photos/seed/simona-p4/800/1000",
    ]
  },
  {
    title: "Eventos & Moda",
    desc: "Dinámismo y estilo en cada disparo editorial.",
    images: [
      "https://picsum.photos/seed/simona-e1/800/1000",
      "https://picsum.photos/seed/simona-e2/800/1000",
      "https://picsum.photos/seed/simona-e3/800/1000",
      "https://picsum.photos/seed/simona-e4/800/1000",
    ]
  }
];

export const PortfolioDetail = () => {
  return (
    <div className="min-h-screen bg-silver-950 text-silver-50 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="space-y-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-silver-400 hover:text-silver-50 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Volver al inicio</span>
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight">
              Explora mi <span className="italic text-silver-400">Universo</span>
            </h1>
            <p className="text-xl text-silver-400 font-light max-w-2xl leading-relaxed">
              Aquí encontrarás una selección extendida de mis proyectos. Cada galería representa un viaje visual distinto, desde la intimidad de una boda hasta la fuerza de un retrato editorial.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-32">
          {categories.map((cat, idx) => (
            <section key={idx} className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-8">
                <div className="space-y-2">
                  <h2 className="text-4xl font-serif text-silver-100">{cat.title}</h2>
                  <p className="text-silver-500 font-light">{cat.desc}</p>
                </div>
                <div className="flex items-center gap-4 text-silver-400">
                  <span className="text-[10px] uppercase tracking-widest">{cat.images.length} Fotografías</span>
                  <div className="w-12 h-[1px] bg-white/10" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl group"
                  >
                    <img 
                      src={img} 
                      alt={`${cat.title} ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-silver-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-4">
                        <Heart className="w-5 h-5 text-white/80 cursor-pointer hover:text-white transition-colors" />
                        <Instagram className="w-5 h-5 text-white/80 cursor-pointer hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-24 border-t border-white/5 text-center space-y-8">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02]">
            <Camera className="w-4 h-4 text-silver-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-silver-400">¿Listo para crear algo único?</span>
            <Sparkles className="w-4 h-4 text-silver-400" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-silver-50">Hablemos de tu próximo proyecto</h3>
          <Link 
            to="/#faq-contact"
            className="inline-block px-12 py-5 bg-silver-50 text-silver-950 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-white/10"
          >
            Contactar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

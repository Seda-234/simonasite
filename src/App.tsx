import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from '@/src/components/Navbar';
import { BackgroundEffects } from '@/src/components/BackgroundEffects';
import { ProductCard } from '@/src/components/ProductCard';
import { Section } from '@/src/components/Section';
import { BookingModal } from '@/src/components/BookingModal';
import { SearchModal } from '@/src/components/SearchModal';
import { UserModal } from '@/src/components/UserModal';
import { PortfolioDetail } from '@/src/pages/PortfolioDetail';
import { ArrowRight, Star, Camera, Image, Heart, Calendar, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef}>
      {/* 1. HOOK / HERO SECTION - DISTINCT POP-UP FEEL */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-8 pt-24 z-10"
      >
        {/* Hero Background Overlay for distinction */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-silver-900/50 to-silver-950" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6 max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-semibold text-silver-400">
            Fotografía & Edición Profesional
          </span>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-balance text-silver-50">
            Capturando la <span className="italic text-silver-400">Luz</span>, Contando tu Historia
          </h1>
          <p className="text-lg md:text-xl text-silver-400 max-w-2xl mx-auto font-light leading-relaxed">
            Especialista en bodas, eventos y retratos. Transformamos momentos efímeros en recuerdos que duran para siempre.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/portfolio" className="group relative px-8 py-4 bg-silver-50 text-silver-950 rounded-full font-medium tracking-widest uppercase text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
              <span className="relative z-10 flex items-center gap-2">
                Ver Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-silver-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/10 rounded-full font-medium tracking-widest uppercase text-xs hover:bg-white/5 transition-all text-silver-300"
            >
              Sobre Mí
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* 2. PROMISE OF VALUE / VALUE PROPOSITION */}
      <Section id="value-proposition" className="bg-silver-900/30 backdrop-blur-sm border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-silver-50 leading-tight">
                Más que una Foto, <br />
                <span className="text-silver-400 italic">Un Legado</span>
              </h2>
              <p className="text-lg text-silver-400 font-light leading-relaxed">
                Mi enfoque combina la fotografía documental con una estética cinematográfica. Busco la autenticidad en cada disparo, capturando no solo cómo se ve el momento, sino cómo se siente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Camera, title: "Equipo Pro", desc: "Tecnología de vanguardia para nitidez absoluta." },
                { icon: Image, title: "Edición Artística", desc: "Retoque detallado con estilo propio." },
                { icon: Heart, title: "Pasión & Entrega", desc: "Compromiso total con cada proyecto." },
                { icon: Calendar, title: "Disponibilidad", desc: "Cobertura nacional para tus eventos." },
              ].map((item, i) => (
                <div key={i} className="group space-y-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:shadow-xl hover:shadow-white/5 transition-all">
                  <item.icon className="w-6 h-6 text-silver-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-silver-100">{item.title}</h4>
                  <p className="text-xs text-silver-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-silver-400/10 to-transparent rounded-3xl blur-3xl" />
            <img 
              src="https://picsum.photos/seed/photographer-working/1000/1000" 
              alt="Photography Art" 
              referrerPolicy="no-referrer"
              className="relative w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl shadow-black/50"
            />
            <div className="absolute -bottom-8 -left-8 p-8 bg-silver-900/90 backdrop-blur-xl border border-white/10 rounded-2xl max-w-xs shadow-2xl shadow-black/50">
              <p className="text-sm italic text-silver-300 font-serif leading-relaxed">
                "La fotografía es el arte de congelar el tiempo para que las emociones puedan respirar para siempre."
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-widest font-bold text-silver-500">
                — photostudiosimona
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. VALUE PROPOSITION MORE DETAIL (PORTFOLIO GRID) */}
      <Section id="portfolio" className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-silver-50">Portfolio Seleccionado</h2>
            <p className="text-silver-400 font-light max-w-md">
              Una mirada a mis trabajos más recientes. Cada imagen cuenta una historia única capturada por photostudiosimona.
            </p>
          </div>
          <div className="flex gap-4">
            {['Todos', 'Bodas', 'Eventos', 'Retratos'].map((cat, i) => (
              <button 
                key={i}
                className={cn(
                  "px-6 py-2 text-[10px] uppercase tracking-widest rounded-full border transition-all",
                  i === 0 ? "bg-silver-50 text-silver-950 border-silver-50 shadow-lg shadow-white/10" : "border-white/10 text-silver-500 hover:border-white/30 hover:text-silver-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[
            { name: "Boda en la Costa", price: "Desde 1200€", category: "Bodas", img: "https://picsum.photos/seed/simona-wedding-1/800/1000", hover: "https://picsum.photos/seed/simona-wedding-detail-1/800/1000" },
            { name: "Retrato de Autor", price: "Desde 250€", category: "Retratos", img: "https://picsum.photos/seed/simona-portrait-1/800/1000", hover: "https://picsum.photos/seed/simona-portrait-detail-1/800/1000" },
            { name: "Evento Exclusivo", price: "Desde 500€", category: "Eventos", img: "https://picsum.photos/seed/simona-event-1/800/1000", hover: "https://picsum.photos/seed/simona-event-detail-1/800/1000" },
            { name: "Boda en el Bosque", price: "Desde 1100€", category: "Bodas", img: "https://picsum.photos/seed/simona-wedding-2/800/1000", hover: "https://picsum.photos/seed/simona-wedding-detail-2/800/1000" },
            { name: "Sesión Lifestyle", price: "Desde 300€", category: "Retratos", img: "https://picsum.photos/seed/simona-lifestyle-1/800/1000", hover: "https://picsum.photos/seed/simona-lifestyle-detail-1/800/1000" },
            { name: "Fashion Editorial", price: "Desde 400€", category: "Eventos", img: "https://picsum.photos/seed/simona-fashion-1/800/1000", hover: "https://picsum.photos/seed/simona-fashion-detail-1/800/1000" },
          ].map((item, i) => (
            <ProductCard 
              key={i}
              name={item.name}
              price={item.price}
              category={item.category}
              image={item.img}
              hoverImage={item.hover}
            />
          ))}
        </div>
      </Section>

      {/* 4. PROOF (TESTIMONIALS) */}
      <Section id="proof" className="bg-silver-900/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[10px] uppercase tracking-[0.3em] text-silver-400">
            <Star className="w-3 h-3 fill-silver-400 text-silver-400" /> Confianza de Nuestros Clientes
          </div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-serif italic text-silver-200 leading-relaxed">
              "Simona capturó nuestra boda de una manera que ni siquiera recordábamos. Cada vez que vemos las fotos, volvemos a sentir la misma emoción. Su ojo para el detalle es inigualable."
            </h2>
            <div className="mt-12 space-y-2">
              <p className="text-sm font-bold uppercase tracking-widest text-silver-50">Sofía & Marc</p>
              <p className="text-xs text-silver-500 uppercase tracking-widest">Boda en Mallorca</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
            {[
              { label: "Vogue", logo: "VOGUE" },
              { label: "Elle", logo: "ELLE" },
              { label: "Harper's Bazaar", logo: "BAZAAR" },
              { label: "Glamour", logo: "GLAMOUR" },
            ].map((brand, i) => (
              <div key={i} className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity cursor-default">
                <span className="text-xl font-serif tracking-[0.2em] text-silver-300">{brand.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. ABOUT ME SECTION */}
      <Section id="about" className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
            <img 
              src="https://picsum.photos/seed/photographer-portrait/800/1000" 
              alt="Simona Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-silver-950/80 via-transparent to-transparent" />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] font-semibold text-silver-500">
                Detrás de la lente
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-silver-50">Sobre Mí</h2>
            </div>
            
            <div className="space-y-6 text-silver-400 font-light leading-relaxed text-lg">
              <p>
                Hola, soy la persona detrás de photostudiosimona. Mi pasión por la fotografía comenzó hace años como una forma de explorar el mundo y capturar la belleza en lo cotidiano. Con el tiempo, esa pasión se convirtió en mi profesión y en mi forma de vida.
              </p>
              <p>
                Mi enfoque se centra en la autenticidad y la emoción. No busco simplemente tomar fotos, sino crear imágenes que cuenten una historia y que permitan revivir momentos especiales una y otra vez. Me especializo en capturar la luz natural y en crear una atmósfera cinematográfica en cada uno de mis trabajos.
              </p>
              <p>
                Con años de experiencia en bodas, eventos y retratos, he aprendido que cada proyecto es único. Mi objetivo es siempre superar las expectativas de mis clientes y entregar un legado visual que perdure en el tiempo.
              </p>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div className="space-y-1">
                <p className="text-2xl font-serif text-silver-50">150+</p>
                <p className="text-[10px] uppercase tracking-widest text-silver-500">Eventos Cubiertos</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="space-y-1">
                <p className="text-2xl font-serif text-silver-50">8 Años</p>
                <p className="text-[10px] uppercase tracking-widest text-silver-500">De Experiencia</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="space-y-1">
                <p className="text-2xl font-serif text-silver-50">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-silver-500">Clientes Felices</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. FAQ & CONTACT SECTION (MATCHING REFERENCE) */}
      <Section id="faq-contact" className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: FAQ Text */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.5em] font-semibold text-silver-500 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-silver-500" /> ALGUNA PREGUNTA
              </span>
              <h2 className="text-6xl md:text-7xl font-serif text-silver-50 leading-tight">
                Preguntas <br /> frecuentes !!
              </h2>
              <p className="text-silver-400 font-light leading-relaxed max-w-md">
                Tengo respuestas a tus preguntas más comunes sobre mis servicios de reportaje individual en Sevilla. Si tienes alguna duda adicional, no dudes en contactarme.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form (Matching Reference) */}
          <div className="bg-silver-900/40 backdrop-blur-xl border border-white/5 p-12 rounded-3xl space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-serif text-silver-50">¿Tienes alguna pregunta?</h3>
              <p className="text-silver-500 text-sm leading-relaxed">
                Si tienes alguna otra pregunta o necesitas más información, no dudes en contactarme. Estoy aquí para ayudarte.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-xl text-silver-50 placeholder:text-silver-600 focus:outline-none focus:border-silver-400 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-xl text-silver-50 placeholder:text-silver-600 focus:outline-none focus:border-silver-400 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <input 
                  type="tel" 
                  placeholder="Teléfono" 
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-xl text-silver-50 placeholder:text-silver-600 focus:outline-none focus:border-silver-400 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <textarea 
                  placeholder="Mensaje" 
                  rows={4}
                  className="w-full px-6 py-4 bg-transparent border border-white/10 rounded-xl text-silver-50 placeholder:text-silver-600 focus:outline-none focus:border-silver-400 transition-colors resize-none"
                />
              </div>
              <div className="pt-4 flex justify-end">
                <button className="group relative px-12 py-4 bg-white text-silver-950 rounded-lg font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
                  <span className="relative z-10">Enviar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen font-sans selection:bg-silver-400/30 bg-silver-950">
        <BackgroundEffects />
        <Navbar 
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenUser={() => setIsUserOpen(true)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioDetail />} />
        </Routes>

        <AnimatePresence>
          {isBookingOpen && <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />}
          {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
          {isUserOpen && <UserModal isOpen={isUserOpen} onClose={() => setIsUserOpen(false)} />}
        </AnimatePresence>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-white/5 text-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <Link to="/">
              <h2 className="text-xl font-serif tracking-[0.3em] uppercase text-silver-50 hover:text-silver-400 transition-colors">
                photostudiosimona
              </h2>
            </Link>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-silver-500 font-medium">
              <Link to="/portfolio" className="hover:text-silver-50 transition-colors">Portfolio</Link>
              <a href="/#value-proposition" className="hover:text-silver-50 transition-colors">Servicios</a>
              <a href="/#faq-contact" className="hover:text-silver-50 transition-colors">Contacto</a>
              <a href="https://www.instagram.com/_simona_photograph/" target="_blank" rel="noopener noreferrer" className="hover:text-silver-50 transition-colors">Instagram</a>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-silver-600">
              © 2026 photostudiosimona. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

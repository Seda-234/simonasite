import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Search, Menu, User, X, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSearch: () => void;
  onOpenUser: () => void;
}

export const Navbar = ({ onOpenBooking, onOpenSearch, onOpenUser }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Servicios', href: '/#value-proposition' },
    { name: 'Cambios', href: '/#changes' },
    { name: 'Contacto', href: '/#faq-contact' },
  ];

  const isHome = location.pathname === '/';

  const handleScroll = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-silver-950/80 backdrop-blur-md border-b border-white/5"
      >
        {/* Left: Menu Icon & Desktop Links */}
        <div className="flex items-center gap-8 flex-1">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors md:hidden"
          >
            <Menu className="w-5 h-5 text-silver-400" />
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-[0.3em] uppercase text-silver-400">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleScroll(link.href);
                    }
                  }}
                  className="hover:text-silver-50 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={link.href} className="hover:text-silver-50 transition-colors">
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Center: Brand Name */}
        <div className="flex-none text-center">
          <Link to="/">
            <h1 className="text-base md:text-2xl font-serif tracking-[0.2em] md:tracking-[0.3em] uppercase text-silver-50 whitespace-nowrap hover:text-silver-400 transition-colors">
              photostudiosimona
            </h1>
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center justify-end gap-4 md:gap-6 text-silver-400 flex-1">
          <button onClick={onOpenSearch} className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block">
            <Search className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-silver-50 transition-colors" />
          </button>
          <button onClick={onOpenUser} className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block">
            <User className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-silver-50 transition-colors" />
          </button>
          <button onClick={onOpenBooking} className="p-2 hover:bg-white/5 rounded-full transition-colors group">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 group-hover:text-silver-50 transition-colors" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-silver-950 flex flex-col p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl font-serif tracking-[0.2em] uppercase text-silver-50">Menu</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-silver-400" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                link.href.startsWith('/#') ? (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault();
                        handleScroll(link.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="text-4xl font-serif text-silver-200 hover:text-silver-50 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ) : (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-serif text-silver-200 hover:text-silver-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => { setIsOpen(false); onOpenSearch(); }}
                className="text-4xl font-serif text-silver-200 hover:text-silver-50 transition-colors text-left"
              >
                Buscar
              </motion.button>
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => { setIsOpen(false); onOpenUser(); }}
                className="text-4xl font-serif text-silver-200 hover:text-silver-50 transition-colors text-left"
              >
                Mi Cuenta
              </motion.button>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-12 border-t border-white/5 flex flex-col gap-6">
              <div className="flex gap-6">
                <a href="https://www.instagram.com/_simona_photograph/" target="_blank" rel="noopener noreferrer" className="text-silver-400 hover:text-silver-50 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-silver-600">
                © 2026 photostudiosimona
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

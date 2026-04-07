import { motion } from 'motion/react';
import { X, User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserModal = ({ isOpen, onClose }: UserModalProps) => {
  const [isLogin, setIsLogin] = useState(true);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-silver-950/90 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-md bg-silver-900 border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-silver-400" />
        </button>

        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-silver-800 rounded-2xl flex items-center justify-center border border-white/10">
              <User className="w-8 h-8 text-silver-400" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-serif text-silver-50">Área de Clientes</h2>
            <p className="text-silver-400 text-sm">Accede a tus galerías privadas y descarga tus fotos.</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" />
                <input 
                  type="text" 
                  placeholder="Código de acceso"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-silver-50 focus:outline-none focus:border-silver-400 placeholder:text-silver-700"
                />
              </div>
              <p className="text-[10px] text-silver-500 text-center">
                El código fue enviado a tu correo tras la sesión.
              </p>
            </div>

            <button 
              type="button"
              className="w-full py-4 bg-silver-50 text-silver-950 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Acceder a mi Galería <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-silver-500">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-medium">Conexión Segura & Privada</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

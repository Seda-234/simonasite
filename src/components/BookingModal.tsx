import { motion } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: 'Boda',
    name: '',
    email: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

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
        className="relative w-full max-w-lg bg-silver-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-silver-400" />
        </button>

        {step === 1 && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-silver-50">Reserva tu Sesión</h2>
              <p className="text-silver-400 text-sm">Selecciona el tipo de servicio y la fecha deseada.</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {['Boda', 'Evento', 'Retrato', 'Editorial'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, type })}
                    className={`p-4 rounded-xl border text-xs uppercase tracking-widest transition-all ${
                      formData.type === type 
                        ? 'bg-silver-50 text-silver-950 border-silver-50' 
                        : 'border-white/10 text-silver-400 hover:border-white/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" />
                  <input 
                    type="date" 
                    className="w-full pl-12 pr-4 py-4 bg-silver-800/50 border border-white/10 rounded-xl text-silver-50 focus:outline-none focus:border-silver-400 [color-scheme:dark]"
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-500" />
                  <select 
                    className="w-full pl-12 pr-4 py-4 bg-silver-800/50 border border-white/10 rounded-xl text-silver-50 focus:outline-none focus:border-silver-400 appearance-none cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="" className="bg-silver-900 text-silver-400">Selecciona una hora</option>
                    <option value="10:00" className="bg-silver-900 text-silver-50">10:00 AM</option>
                    <option value="12:00" className="bg-silver-900 text-silver-50">12:00 PM</option>
                    <option value="16:00" className="bg-silver-900 text-silver-50">04:00 PM</option>
                    <option value="18:00" className="bg-silver-900 text-silver-50">06:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setStep(2)}
              disabled={!formData.date || !formData.time}
              className="w-full py-4 bg-silver-50 text-silver-950 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              Siguiente
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-silver-50">Tus Datos</h2>
              <p className="text-silver-400 text-sm">Casi listo. Necesitamos tu contacto para confirmar.</p>
            </div>

            <div className="space-y-4">
              <input 
                required
                type="text" 
                placeholder="Nombre completo"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-silver-50 focus:outline-none focus:border-silver-400"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input 
                required
                type="email" 
                placeholder="Email"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-silver-50 focus:outline-none focus:border-silver-400"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-4 border border-white/10 text-silver-400 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
              >
                Atrás
              </button>
              <button 
                type="submit"
                className="flex-2 py-4 bg-silver-50 text-silver-950 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Confirmar Cita
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-silver-50">¡Solicitud Enviada!</h2>
              <p className="text-silver-400 text-sm">
                Gracias, {formData.name}. He recibido tu solicitud para el {formData.date} a las {formData.time}. Te contactaré pronto para confirmar.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-full py-4 border border-white/10 text-silver-50 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              Cerrar
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

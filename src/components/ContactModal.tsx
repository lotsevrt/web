import { useState, useEffect } from 'react';

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Таймер на 60 секунд (60000 мс)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xl font-bold transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Зв'яжіться зі мною</h2>
        
        {}
        <form action="https://formspree.io/f/xeepvpbv" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Ім'я</label>
            <input type="text" name="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Повідомлення</label>
            <textarea name="message" rows={3} required className="w-full px-4 py-2 border border-slate-300 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
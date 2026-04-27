import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    // Головна обгортка, яка отримує клас "dark", якщо активна темна тема
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-10 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
        
        {/* Кнопка перемикання теми */}
        <div className="max-w-4xl mx-auto flex justify-end mb-4">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg shadow hover:shadow-md transition-all font-medium border border-slate-200 dark:border-slate-700"
          >
            {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
          </button>
        </div>

        {/* Картка резюме */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 shadow-xl rounded-2xl overflow-hidden transition-colors duration-300">
          <Header />
          <div className="p-8 space-y-8">
            <About />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Education />
              <div className="space-y-8">
                <Skills />
                <Languages />
              </div>
            </div>
            <Reviews />
            <Footer />
          </div>
        </div>
      </div>
      
      {/* Модальне вікно, яке з'явиться через 1 хвилину */}
      <ContactModal />
    </div>
  );
}

export default App;
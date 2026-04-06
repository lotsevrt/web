function Header() {
  return (
    <header className="bg-slate-800 text-white p-8 sm:p-12">
      <div className="max-w-3xl mx-auto text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 text-white">
          Хвалько Владислав
        </h1>
        <p className="text-xl sm:text-2xl text-blue-400 font-medium mb-6">
          Спеціальність: Кібербезпека (КБ-303)
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-base text-slate-300">
          <span className="flex items-center gap-2">📍 м. Львів</span>
          <span className="flex items-center gap-2">📞 +380971648738</span>
          <span className="flex items-center gap-2">✉️ vladyslav.khvalko.kb.2023@lpnu.ua</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
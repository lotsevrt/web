function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 inline-block">
        Освіта
      </h2>
      <div className="space-y-6">
        <div className="relative pl-4 border-l-2 border-slate-300 hover:border-blue-500 transition-colors duration-300">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5"></div>
          <h3 className="text-xl font-semibold text-slate-800">Національний університет «Львівська політехніка»</h3>
          <p className="text-slate-600 font-medium mt-1">Бакалавр | Кібербезпека</p>
          <p className="text-slate-400 text-sm mt-1">2023 — теперішній час | м. Львів</p>
        </div>
        
        <div className="relative pl-4 border-l-2 border-slate-300 hover:border-blue-500 transition-colors duration-300">
          <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5"></div>
          <h3 className="text-xl font-semibold text-slate-800">Вараський ліцей №1</h3>
          <p className="text-slate-600 font-medium mt-1">Повна загальна середня освіта</p>
          <p className="text-slate-400 text-sm mt-1">Випуск: 2023 | м. Вараш</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
function Languages() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 inline-block">
        Мови
      </h2>
      <div className="flex flex-wrap gap-3">
        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm">
          Українська (Рідна)
        </span>
        <span className="px-4 py-2 bg-slate-100 text-slate-700 border border-slate-200 rounded-full font-medium text-sm">
          Англійська (B1/B2)
        </span>
      </div>
    </section>
  );
}

export default Languages;
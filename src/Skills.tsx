function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 inline-block">
        Навички
      </h2>
      <ul className="space-y-4">
        <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <strong className="block text-blue-600 text-lg mb-1">Програмування</strong>
          <span className="text-slate-600">Python (автоматизація, OSINT), HTML/CSS, JavaScript, React.</span>
        </li>
        <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <strong className="block text-blue-600 text-lg mb-1">Кібербезпека</strong>
          <span className="text-slate-600">OSINT (Shodan, VirusTotal, Hunter), робота з API.</span>
        </li>
        <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <strong className="block text-blue-600 text-lg mb-1">Інструменти безпеки</strong>
          <span className="text-slate-600">Nmap, Metasploit, захист від фішингу.</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
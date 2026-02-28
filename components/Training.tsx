const pills = [
  "Langages de programmation",
  "IA & Data Science",
  "Outils numériques",
  "Accompagnement pédagogique",
];

export default function Training() {
  return (
    <section id="formation" className="relative bg-[#050b15] py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="glow-orb w-[600px] h-[600px] bg-blue-500/10 top-[-100px] right-[-100px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-indigo-600/8 bottom-0 left-0" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-8">
            <span className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-blue-300 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-400/5 w-fit">
              Formation Professionnelle
            </span>
            <h2 className="font-newsreader text-4xl lg:text-6xl font-bold text-white leading-[1.05]">
              Montez en compétences avec nos{" "}
              <span className="text-blue-400 italic">formations IT certifiantes</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Nos programmes s&apos;adressent aux professionnels souhaitant maîtriser
              les technologies de demain — avec ou sans certification reconnue,
              adaptés aux adultes en activité.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {pills.map((pill) => (
                <span key={pill}
                  className="px-4 py-2 rounded-full bg-white/[0.04] text-sm text-slate-300 font-medium border border-white/[0.08] hover:border-blue-400/40 transition-colors cursor-default">
                  {pill}
                </span>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#070d18] font-bold text-base hover:bg-blue-50 transition-all duration-300 shadow-2xl shadow-blue-500/10 hover:-translate-y-1 w-fit">
              Explorer nos programmes →
            </a>
          </div>

          {/* Right — image */}
          <div className="flex-1 w-full lg:max-w-[540px]">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-indigo-600/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/[0.08] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80"
                  alt="Formation professionnelle IT"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b15]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

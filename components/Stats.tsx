const stats = [
  { value: "+50",  label: "Clients accompagnés", desc: "Organisations transformées" },
  { value: "+100", label: "Projets réalisés",    desc: "Livrés dans les délais" },
  { value: "+30",  label: "Formations dispensées", desc: "Équipes formées" },
  { value: "5 ans", label: "D'expérience",       desc: "Au service de l'innovation" },
];

export default function Stats() {
  return (
    <section className="relative bg-[#050b15] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="glow-orb w-[800px] h-[400px] bg-blue-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label}
              className={`flex flex-col items-center gap-3 py-12 px-8 text-center ${
                i < 3 ? "border-r border-white/[0.06]" : ""
              } ${i >= 2 ? "border-t lg:border-t-0 border-white/[0.06]" : ""}`}>
              <span className="font-newsreader text-5xl lg:text-6xl font-bold text-white">
                {stat.value}
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-blue-400">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-600">{stat.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

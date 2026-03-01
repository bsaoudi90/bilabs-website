import { ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Analyse & Audit",
    description: "Diagnostic approfondi de vos besoins et de votre SI.",
  },
  {
    number: "02",
    title: "Stratégie",
    description: "Feuille de route sur mesure et adaptée à vos contraintes.",
  },
  {
    number: "03",
    title: "Mise en œuvre",
    description: "Déploiement et intégration des solutions.",
  },
  {
    number: "04",
    title: "Amélioration",
    description: "Mesure des performances et ajustements.",
  },
];

export default function HowItWorks() {
  return (
    <section id="approche" className="relative py-32 overflow-hidden bg-[#030514]">
      {/* Background glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Découvrez comment <span className="text-gradient-accent">Bilabs</span> peut transformer votre SI
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl px-4 ring-1 ring-white/10 glass rounded-full py-2 inline-block">
            Une approche structurée et éprouvée par nos experts
          </p>
        </div>

        {/* Desktop Flowchart */}
        <div className="hidden lg:block relative mt-12 mb-32">
          {/* Horizontal Connection Lines */}
          <div className="absolute top-[35px] left-[15%] right-[15%] h-px bg-white/10"></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center relative">
                {/* Connector Dot */}
                <div className="w-8 h-8 rounded-full bg-[#080c1f] border border-blue-500/50 flex items-center justify-center z-10 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <span className="text-xs font-bold text-blue-400">{step.number}</span>
                </div>

                {/* Arrow pointing right (except last) */}
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute top-[28px] -right-4 w-4 h-4 text-blue-500/50" />
                )}

                <div className="text-center w-full">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Flowchart */}
        <div className="lg:hidden flex flex-col items-center gap-10 mt-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative w-full max-w-xs">
              <div className="w-12 h-12 rounded-full bg-[#080c1f] border border-blue-500/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)] mb-6">
                <span className="text-sm font-bold text-blue-400">{step.number}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-base text-slate-400 leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="flex flex-col items-center mt-10">
                  <div className="w-px h-10 bg-white/10 absolute -bottom-10"></div>
                  <ArrowDown className="w-5 h-5 text-blue-500/50 absolute -bottom-14" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-brand-card/80 backdrop-blur-xl overflow-hidden shadow-2xl p-6">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-indigo-600/10 blur-3xl pointer-events-none" />

            {/* Window chrome */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Tableau de bord — BILABS SI</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative z-10">
              {[
                { label: "Projets actifs", value: "12", delta: "+3 ce mois", color: "text-blue-400", bar: "bg-blue-500", pct: 75 },
                { label: "Uptime SI", value: "99.8%", delta: "stable", color: "text-emerald-400", bar: "bg-emerald-500", pct: 99 },
                { label: "Incidents résolus", value: "47", delta: "ce mois", color: "text-indigo-400", bar: "bg-indigo-500", pct: 88 },
                { label: "Formations suivies", value: "8", delta: "+2 équipes", color: "text-purple-400", bar: "bg-purple-500", pct: 60 },
              ].map((kpi, i) => (
                <div key={i} className="rounded-xl border border-white/6 bg-white/3 p-4 flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">{kpi.label}</span>
                  <span className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</span>
                  <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                    <div className={`h-full rounded-full ${kpi.bar} opacity-60`} style={{ width: `${kpi.pct}%` }} />
                  </div>
                  <span className="text-[10px] text-slate-500">{kpi.delta}</span>
                </div>
              ))}
            </div>

            {/* Activity chart */}
            <div className="relative z-10 rounded-xl border border-white/6 bg-white/2 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-white">Activité du projet</span>
                <span className="text-[10px] text-slate-500 font-mono">7 derniers jours</span>
              </div>
              <div className="flex items-end gap-2 h-16">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-linear-to-t from-indigo-600/60 to-blue-400/30"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                  <span key={i} className="flex-1 text-center text-[9px] text-slate-600 font-mono">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

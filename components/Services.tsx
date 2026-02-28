import { Settings2, BarChart3, Laptop2, GraduationCap, CheckCircle2 } from "lucide-react";

const services = [
  {
    Icon: Settings2,
    accent: "border-blue-500/30",
    glow: "bg-blue-500/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    title: "Conseil IT",
    price: "Stratégie",
    description: "Alignez vos SI avec vos objectifs métier.",
    features: ["Diagnostic & Audit", "Feuille de route IT", "Accompagnement projet"],
    link: "#contact",
  },
  {
    Icon: BarChart3,
    accent: "border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    glow: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/20",
    title: "Data & BI",
    price: "Intelligence",
    description: "Transformez vos données brutes en décisions.",
    features: ["Tableaux de bord sur mesure", "Modèles prédictifs", "Analyse de données"],
    link: "#contact",
    highlight: true,
  },
  {
    Icon: Laptop2,
    accent: "border-purple-500/30",
    glow: "bg-purple-500/10",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    title: "Développement Web",
    price: "Sur-mesure",
    description: "Applications web et mobiles performantes.",
    features: ["Applications métiers", "Solutions SaaS", "Maintenance & Scalabilité"],
    link: "#contact",
  },
  {
    Icon: GraduationCap,
    accent: "border-emerald-500/30",
    glow: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
    title: "Formations",
    price: "Compétences",
    description: "Montez en compétences avec nos experts.",
    features: ["Parcours certifiants", "Formations IA & Data", "Éligibles CPF"],
    link: "#formation",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#030514] py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="glow-orb w-[800px] h-[800px] bg-indigo-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Des expertises <span className="text-gradient">pour chaque ambition</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl px-6 ring-1 ring-white/10 glass rounded-full py-2 inline-block">
            De la vision à la mise en œuvre, couvrez tout votre cycle numérique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i}
              className={`relative rounded-3xl border ${s.accent} bg-white/[0.02] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 overflow-hidden ${s.highlight ? 'bg-white/[0.04]' : ''}`}>

              {/* Background Glow */}
              <div className={`absolute top-0 left-0 w-full h-32 ${s.glow} blur-3xl opacity-50`}></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                  <s.Icon className={`w-6 h-6 ${s.iconColor}`} />
                </div>
                {s.highlight && (
                  <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                    Populaire
                  </span>
                )}
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-sm text-slate-400 mb-1">{s.title}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{s.price}</h3>
                <p className="text-sm text-slate-500 leading-relaxed border-b border-white/10 pb-6">{s.description}</p>
              </div>

              <ul className="flex flex-col gap-4 mb-8 flex-1 relative z-10">
                {s.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{feat}</span>
                  </li>
                ))}
              </ul>

              <a href={s.link}
                className={`w-full py-3 rounded-full text-sm font-semibold text-center transition-all ${s.highlight
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}>
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

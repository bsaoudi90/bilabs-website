import { Network, Target, Award } from "lucide-react";

const features = [
  {
    Icon: Network,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    tag: "360°",
    title: "Expertise pluridisciplinaire",
    description: "Conseil IT, data science, développement logiciel et pédagogie réunis en un seul interlocuteur de confiance.",
  },
  {
    Icon: Target,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    tag: "Custom",
    title: "Solutions sur mesure",
    description: "Chaque mission est conçue autour de vos contraintes. Pas d'approche standardisée, des réponses parfaitement adaptées.",
  },
  {
    Icon: Award,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    tag: "CPF",
    title: "Accompagnement certifiant",
    description: "Formations éligibles CPF, parcours certifiants reconnus et accompagnement pédagogique pour les professionnels en activité.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-[#070d18] py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-600/10 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left */}
          <div className="lg:w-[420px] shrink-0 flex flex-col gap-8 lg:sticky lg:top-28">
            <span className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              Différenciation
            </span>
            <h2 className="font-newsreader text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              Un partenaire stratégique,{" "}
              <span className="text-slate-500 italic">bien plus qu&apos;un prestataire</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Nous fusionnons vision métier, excellence technologique et
              vocation pédagogique pour créer de la valeur durable.
            </p>
            <a href="#contact"
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-blue-500/20 hover:-translate-y-1 w-fit">
              Parlons de votre transformation
              <span className="w-4 h-px bg-white group-hover:w-8 transition-all duration-300" />
            </a>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-5">
            {features.map(({ Icon, ...feat }) => (
              <div key={feat.title}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 flex gap-7 items-start hover:border-blue-500/25 hover:bg-white/[0.04] transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${feat.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${feat.iconColor}`} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-newsreader text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {feat.title}
                    </h3>
                    <span className="font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      {feat.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

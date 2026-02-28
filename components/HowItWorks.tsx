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

        {/* App Showcase illustration (matches the phone UI in the bottom of that section) */}
        <div className="mt-32 max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-[300px] h-[400px] rounded-t-3xl border border-white/10 border-b-0 bg-[#080c1f] overflow-hidden shadow-2xl flex flex-col items-center pt-8">
            {/* Fake phone notch */}
            <div className="absolute top-2 w-1/3 h-5 bg-black rounded-full flex items-center justify-between px-3">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mt-10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white text-center px-4">Transformer votre IT,<br />Étape par étape</h3>
            <div className="mt-auto w-full h-[50%] bg-gradient-to-t from-blue-900/40 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

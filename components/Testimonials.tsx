import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "BILABS CONSEIL a transformé notre façon d'analyser les données. Leur expertise en BI nous a permis de prendre des décisions stratégiques bien plus rapidement.",
    name: "Marie Dubois",
    role: "Directrice Financière",
    company: "Groupe Industrie",
    initials: "MD",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    quote: "La formation dispensée par BILABS CONSEIL était parfaitement adaptée à notre équipe. Des formateurs pédagogues, des contenus concrets et immédiatement applicables.",
    name: "Thomas Bernard",
    role: "DSI",
    company: "PME Logistique",
    initials: "TB",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    quote: "Notre application mobile développée par BILABS CONSEIL a dépassé toutes nos attentes. Un suivi professionnel de A à Z, réactif et rigoureux.",
    name: "Sophie Martin",
    role: "CEO",
    company: "Startup Santé Numérique",
    initials: "SM",
    gradient: "from-purple-500 to-purple-700",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#070d18] py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="glow-orb w-[600px] h-[600px] bg-blue-600/8 top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-20">
          <p className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400 mb-5">
            Paroles de clients
          </p>
          <h2 className="font-newsreader text-4xl lg:text-6xl font-bold text-white">
            Ils nous font{" "}
            <span className="text-slate-500 italic">confiance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 flex flex-col gap-8 hover:border-blue-500/25 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
              {/* Decorative quote mark */}
              <span className="absolute top-5 right-7 font-newsreader text-7xl text-white/[0.04] select-none leading-none pointer-events-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-newsreader text-[17px] text-slate-300 leading-relaxed flex-1 italic relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "50+", label: "Clients accompagnés", subtitle: "Satisfaction garantie" },
  { value: "100+", label: "Projets IT & Data", subtitle: "Livrées avec succès" },
  { value: "30+", label: "Formations certifiantes", subtitle: "Experts formés" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="glow-orb w-[800px] h-[800px] bg-indigo-600/15 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow" />
      <div className="glow-orb w-[600px] h-[600px] bg-blue-500/10 bottom-0 right-[-100px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">

        {/* Top Badges */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-fade-up">
          <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            <span className="text-xs font-medium text-slate-300">100+ Clients Satisfaits</span>
          </div>
          <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-xs font-medium text-slate-300">Découvrez nos nouvelles formations</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up delay-100 max-w-4xl text-white leading-tight">
          Passez à la vitesse supérieure avec <span className="text-gradient-accent">Bilabs</span>, Innovez et Performez
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-slate-400 max-w-2xl mb-10 animate-fade-up delay-200">
          L'expertise IT & Data au service de vos ambitions. Des solutions sur mesure pour accélérer votre transformation numérique et propulser votre croissance.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-300">
          <a href="#contact" className="btn-primary px-8 py-3.5 w-full sm:w-auto text-base">
            Session découverte
          </a>
          <a href="#services" className="btn-glass px-8 py-3.5 w-full sm:w-auto text-base flex items-center justify-center gap-2">
            Découvrir nos experts <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Abstract Floating Element & Stats Box */}
        <div className="mt-24 w-full relative animate-fade-up delay-400">
          {/* Decorative glowing center line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-500/50 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-8 relative">
            {/* Horizontal line connector for desktop */}
            <div className="hidden md:block absolute top-[64px] left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center group relative">
                {/* Node dot on the line */}
                <div className="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-400/50 absolute -top-10 md:-top-[22px] group-hover:scale-150 group-hover:bg-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                {/* Vertical connecting line to the item */}
                <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent absolute -top-8 md:-top-5"></div>

                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">{s.subtitle}</span>
                <span className="text-4xl md:text-5xl font-bold text-white mb-2">{s.value}</span>
                <span className="text-sm text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

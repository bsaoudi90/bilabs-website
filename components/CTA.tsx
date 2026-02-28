"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  const handleContactClick = () => {
    window.location.href = "mailto:contact@bilabsconseil.com";
  };

  return (
    <section id="contact" className="relative bg-[#030514] py-36 overflow-hidden">
      {/* Glow */}
      <div className="glow-orb w-[900px] h-[500px] bg-indigo-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-[20%] w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center relative z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="glass px-6 py-2 rounded-full mb-10 flex items-center justify-center animate-fade-up">
          <span className="text-sm font-bold tracking-widest uppercase text-indigo-400">
            Prêt pour l'étape suivante ?
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-8 animate-fade-up delay-100">
          Propulsez votre <span className="text-gradient-accent">croissance</span> vers de nouveaux sommets
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 animate-fade-up delay-200">
          Discutons de vos enjeux lors d'une session stratégique gratuite.
          Une vision claire, des solutions concrètes, sans engagement.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up delay-300 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleContactClick}
            className="w-full sm:w-auto btn-primary px-10 py-4 text-base shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            Réserver ma session offerte
          </button>
          <a href="#services" className="w-full sm:w-auto text-white hover:text-indigo-400 flex items-center justify-center gap-2 font-medium transition-colors">
            Explorer les expertises <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 pt-16 mt-8 animate-fade-up delay-400 w-full">
          {[
            "Étude personnalisée",
            "Confidentialité absolue",
            "Accompagnement A-Z",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-60">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
              <span className="text-sm font-medium tracking-wide text-white">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

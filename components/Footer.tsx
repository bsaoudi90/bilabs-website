import Image from "next/image";

const footerLinks = {
  Services: [
    "Conseil IT & Technologique",
    "Business Intelligence",
    "Développement Web & Mobile",
    "Data Science",
  ],
  Formation: [
    "Langages de programmation",
    "IA & Data Science",
    "Outils numériques",
    "Parcours certifiants",
  ],
  Entreprise: ["À propos", "Notre équipe", "Blog & Ressources", "Contact"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#030514] border-t border-white/5 pt-20">

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">

          {/* Brand & Description */}
          <div className="flex flex-col gap-6 max-w-sm">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image src="/logo.png" alt="Bilabs Conseil Logo" fill className="object-contain brightness-0 invert" />
              </div>
              <span className="font-inter text-xl font-bold tracking-tight text-white">
                Bilabs<span className="text-gray-400 font-normal">Conseil</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Votre partenaire technologique pour une transformation numérique
              durable et réussie.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Fake social placeholders */}
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white text-xs font-bold">in</span>
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white text-xs font-bold">X</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 lg:gap-24">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-5 min-w-[140px]">
                <h4 className="text-white font-semibold text-sm">
                  {title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#"
                        className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-[#030514]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 Bilabs Conseil. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-6">
            {["Mentions légales", "Confidentialité", "CGU"].map((link) => (
              <a key={link} href="#"
                className="text-sm text-slate-500 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Formation", href: "#formation" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-0 flex justify-center w-full transition-all duration-500">
      <div
        className={`w-full max-w-5xl transition-all duration-300 ${scrolled ? "glass-pill py-2 px-4 md:px-6" : "bg-transparent py-4 px-4 md:px-6"
          } rounded-full flex items-center justify-between`}
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <Image src="/logo.png" alt="Bilabs Conseil Logo" fill className="object-contain brightness-0 invert" />
          </div>
          <span className="font-inter text-xl font-bold tracking-tight text-white">
            Bilabs<span className="text-gray-400 font-normal">Conseil</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 glass px-6 py-2 rounded-full border-none bg-white/5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="btn-primary px-6 py-2 text-sm">
            Prendre RDV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[calc(100%+16px)] left-4 right-4 md:hidden glass-card p-6 flex flex-col gap-4 animate-fade-up">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="btn-primary w-full py-3 mt-4">
            Prendre un RDV
          </a>
        </div>
      )}
    </header>
  );
}

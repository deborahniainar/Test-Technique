'use client';

import Image from 'next/image';
import { FaCalendarAlt, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge avec icon */}
        <div className="inline-flex items-center gap-3 bg-white backdrop-blur-lg border-2 border-primary rounded-full px-6 py-3 mb-8 hover:bg-white/85 transition-all duration-300 shadow-(--shadow-glow-sm)">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/images/logo-bulle.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-dark font-bold text-2xl md:text-base tracking-wide">
            CRÉER UN SITE WEB{' '}
            <span className="underline decoration-dark decoration-2 underline-offset-2">
              VRAIMENT
            </span>{' '}
            UNIQUE
          </span>
        </div>

        {/* Titre principale */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Votre <span className="text-primary">site</span> doit{' '}
          <span className="text-primary">donner envie</span> de
          <br />
          rester, pas de{' '}
          <span className="text-primary line-through decoration-dark decoration-4">
            revenir
          </span>{' '}
          <span className='line-through decoration-dark decoration-4'>en</span>
          <br />
          <span className="text-primary line-through decoration-dark decoration-4">
            arrière
          </span>.
        </h1>

        {/* Description */}
        <p className="text-muted text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Design moderne, SEO solide, Suivi complet :
          <br className="hidden md:block" />
          on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </p>

        {/* CTA Boutons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">

          <div className="relative">
            <button className="bg-gradient-to-r from-primary to-primary/30 hover:bg-primary-hover text-dark font-bold px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20">
              <FaCalendarAlt className="w-5 h-5" />
              Prendre RDV
            </button>

            <div className="absolute -bottom-12 -left-8 hidden sm:block">
              <Image
                src="/images/un-ptit-click.png"
                alt="Un ptit click ?"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          <button className="border-2 border-primary/30 hover:border-primary text-primary font-semibold px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 hover:bg-primary/10 group">
            Découvrir nos projets
            <FaArrowDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
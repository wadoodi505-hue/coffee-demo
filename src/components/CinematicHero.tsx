import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Make sure to register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

import heroCupImg from '@assets/generated_images/hero_cup.jpg';
import beansImg from '@assets/generated_images/coffee_beans.jpg';
import roastingImg from '@assets/generated_images/roasting_process.jpg';
import brewingImg from '@assets/generated_images/brewing_process.jpg';
import espressoImg from '@assets/generated_images/espresso.jpg';
import latteImg from '@assets/generated_images/latte.jpg';

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=500%', // 5 sections
        scrub: 1,
        pin: true,
      }
    });

    // Scene 1: Cup in darkness
    tl.to('.scene-1-text', { opacity: 0, y: -50, duration: 1 })
      .to('.scene-1-cup', { scale: 1.5, opacity: 0, duration: 1 }, "<")
      
    // Scene 2: Beans/Origin
      .fromTo('.scene-2', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, "<0.5")
      .to('.scene-2', { opacity: 0, scale: 1.2, duration: 1 })
      
    // Scene 3: Roasting
      .fromTo('.scene-3', { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1 }, "<0.5")
      .to('.scene-3', { opacity: 0, y: -100, duration: 1 })
      
    // Scene 4: Brewing
      .fromTo('.scene-4', { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 }, "<0.5")
      .to('.scene-4', { opacity: 0, duration: 1 })
      
    // Scene 5: Transformation / Drinks
      .fromTo('.scene-5-drinks', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, "<0.5")
      .to('.scene-5-drinks', { scale: 1.1, duration: 1 })
      .to('.scene-5-drinks', { opacity: 0, duration: 1 })
      
    // Scene 6: Typography Climax
      .fromTo('.scene-6', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 }, "<0.2")
      .to('.scene-6-text-1', { x: -100, duration: 1 }, "<")
      .to('.scene-6-text-2', { x: 100, duration: 1 }, "<")
      
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-background">
      
      {/* Scene 1: The Awakening (Darkness -> Cup) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <div className="scene-1-text text-center space-y-6">
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium">Brobex Coffee</p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white max-w-5xl mx-auto leading-tight">
            Crafted for <br />
            <span className="italic text-primary">Extraordinary</span> <br />
            Mornings
          </h1>
          <div className="mt-12 animate-bounce">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Scroll to Explore</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full scene-1-cup z-0">
        <img src={heroCupImg} alt="Hero Cup" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Scene 2: Origins / Beans */}
      <div className="absolute inset-0 w-full h-full scene-2 opacity-0 z-10">
        <img src={beansImg} alt="Coffee Beans" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide text-center">
            Sourced with <br/><span className="text-primary italic">Obsession</span>
          </h2>
        </div>
      </div>

      {/* Scene 3: Roasting */}
      <div className="absolute inset-0 w-full h-full scene-3 opacity-0 z-20">
        <img src={roastingImg} alt="Roasting Process" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-background/90 flex items-center justify-center">
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide text-center">
            Masterfully <br/><span className="text-primary italic">Roasted</span>
          </h2>
        </div>
      </div>

      {/* Scene 4: Brewing */}
      <div className="absolute inset-0 w-full h-full scene-4 opacity-0 z-30">
        <img src={brewingImg} alt="Brewing Process" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-12 md:p-24">
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide">
            Extracted to <br/><span className="text-primary italic">Perfection</span>
          </h2>
        </div>
      </div>

      {/* Scene 5: Transformation */}
      <div className="absolute inset-0 w-full h-full scene-5-drinks opacity-0 z-40 bg-background flex flex-col items-center justify-center p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-6xl">
          <div className="aspect-[3/4] relative overflow-hidden group">
            <img src={espressoImg} alt="Espresso" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-2xl font-serif tracking-widest uppercase">Espresso</span>
            </div>
          </div>
          <div className="aspect-[3/4] relative overflow-hidden group mt-12">
            <img src={latteImg} alt="Latte" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-2xl font-serif tracking-widest uppercase">Latte</span>
            </div>
          </div>
          {/* We reuse some images for the cinematic effect if not all generated perfectly, but let's use placeholders if needed. Actually we have espresso and latte */}
          <div className="aspect-[3/4] relative overflow-hidden group">
            <img src={espressoImg} alt="Macchiato" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-2xl font-serif tracking-widest uppercase">Macchiato</span>
            </div>
          </div>
          <div className="aspect-[3/4] relative overflow-hidden group mt-12">
            <img src={latteImg} alt="Mocha" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-2xl font-serif tracking-widest uppercase">Mocha</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scene 6: Typography Climax */}
      <div className="absolute inset-0 w-full h-full scene-6 opacity-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden">
        <h2 className="scene-6-text-1 text-7xl md:text-[12rem] font-serif leading-none whitespace-nowrap text-stroke opacity-20 absolute top-1/4">
          SIGNATURE
        </h2>
        <h2 className="scene-6-text-2 text-7xl md:text-[12rem] font-serif leading-none whitespace-nowrap text-stroke opacity-20 absolute bottom-1/4">
          COLLECTION
        </h2>
        <div className="z-10 text-center space-y-6">
          <p className="text-primary tracking-[0.5em] uppercase text-sm">Experience The</p>
          <h2 className="text-5xl md:text-8xl font-serif text-white">
            Brobex Reserve
          </h2>
        </div>
      </div>

    </div>
  );
}

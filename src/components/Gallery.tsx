import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import gallery1 from '@assets/generated_images/gallery_1.jpg';
import gallery2 from '@assets/generated_images/roasting_process.jpg';
import gallery3 from '@assets/generated_images/brewing_process.jpg';
import gallery4 from '@assets/generated_images/espresso.jpg';

gsap.registerPlugin(ScrollTrigger);

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.gallery-img', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section className="py-20 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12 px-2 md:px-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white">The Atmosphere</h2>
          <a href="#" className="text-primary hover:text-white transition-colors tracking-widest uppercase text-sm border-b border-primary hover:border-white pb-1">
            Follow @Brobex
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="gallery-img aspect-square overflow-hidden group">
            <img src={gallery1} alt="Cafe Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="gallery-img aspect-square md:translate-y-8 overflow-hidden group">
            <img src={gallery2} alt="Roasting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="gallery-img aspect-square overflow-hidden group">
            <img src={gallery3} alt="Brewing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="gallery-img aspect-square md:translate-y-8 overflow-hidden group">
            <img src={gallery4} alt="Espresso" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}

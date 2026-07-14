import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import beansImg from '@assets/generated_images/coffee_beans.jpg';

gsap.registerPlugin(ScrollTrigger);

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.story-text > *', {
      scrollTrigger: {
        trigger: '.story-text',
        start: 'top bottom-=100',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.fromTo('.parallax-img', 
      { y: -100 },
      {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="story" ref={containerRef} className="py-32 bg-card relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 w-full story-text space-y-8">
          <p className="text-primary tracking-[0.2em] uppercase text-sm">Our Origin</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Not just coffee. <br/>
            <span className="italic text-muted-foreground">An obsession.</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
            <p>
              Brobex Coffee was born from a singular, uncompromising vision: to elevate the daily ritual of coffee into an extraordinary sensory experience. We don't just source beans; we curate moments.
            </p>
            <p>
              Our relationships with exclusive micro-lots across the coffee belt allow us to secure harvests that never reach the open market. Each batch is meticulously analyzed, roasted with scientific precision, and brewed to exact specifications.
            </p>
            <p className="text-foreground border-l-2 border-primary pl-6 py-2 italic font-serif text-xl">
              "We believe that a great cup of coffee has the power to shift your perspective and set the tone for an extraordinary day."
            </p>
          </div>
          
          <button className="mt-8 border-b border-primary text-primary pb-2 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors duration-300">
            Discover Our Story
          </button>
        </div>

        <div className="lg:w-1/2 w-full parallax-container h-[600px] overflow-hidden relative">
          <img 
            src={beansImg} 
            alt="Coffee Beans Macro" 
            className="parallax-img absolute top-[-100px] left-0 w-full h-[calc(100%+200px)] object-cover" 
          />
        </div>

      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Sourcing', desc: 'Direct trade relationships with top 1% estates.' },
  { num: '02', title: 'Roasting', desc: 'Custom profiles crafted to highlight unique terroir.' },
  { num: '03', title: 'Grinding', desc: 'Precision burr grinding matched to the brewing method.' },
  { num: '04', title: 'Brewing', desc: 'Exact temperature and pressure control for flawless extraction.' },
  { num: '05', title: 'Serving', desc: 'Presented in bespoke ceramics to enhance aromatics.' },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const lines = gsap.utils.toArray('.process-line');
    const items = gsap.utils.toArray('.process-item');

    items.forEach((item: any, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    lines.forEach((line: any) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none'
      });
    });
  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-24">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">The Methodology</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white">The Brobex Standard</h2>
        </div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

          {steps.map((step, i) => (
            <div key={i} className={`process-item relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} w-full mb-4 md:mb-0 text-center md:text-left`}>
                <div className={`max-w-sm ${i % 2 !== 0 && 'md:text-right'}`}>
                  <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>

              {/* Number Circle */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 md:translate-y-1 w-12 h-12 rounded-full bg-card border border-primary flex items-center justify-center z-10">
                <span className="text-primary font-serif italic text-lg">{step.num}</span>
              </div>

              {/* Connecting line for mobile */}
              <div className="md:hidden process-line absolute left-1/2 top-12 bottom-[-4rem] w-[1px] bg-primary/30 -translate-x-1/2 z-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

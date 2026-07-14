import React from 'react';

const testimonials = [
  {
    quote: "The attention to detail is staggering. This isn't a coffee shop, it's a temple for coffee purists.",
    author: "James W.",
    role: "Food Critic"
  },
  {
    quote: "I've tasted coffee all over the world, but the Brobex Gold Reserve was an entirely new experience.",
    author: "Elena R.",
    role: "Sommelier"
  },
  {
    quote: "A masterclass in design and flavor. Every morning here feels like a luxury retreat.",
    author: "Michael T.",
    role: "Creative Director"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none text-[20rem] font-serif font-black leading-none text-white whitespace-nowrap select-none overflow-hidden flex items-center justify-center">
        BROBEX
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col border border-border/50 p-8 hover:border-primary/50 transition-colors duration-500 bg-background/50 backdrop-blur-sm">
              <span className="text-primary text-6xl font-serif mb-4 leading-none">"</span>
              <p className="text-lg text-white mb-8 flex-grow font-serif italic font-light">{t.quote}</p>
              <div>
                <p className="text-white font-medium uppercase tracking-widest text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

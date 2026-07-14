import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import espressoImg from '@assets/generated_images/espresso.jpg';
import latteImg from '@assets/generated_images/latte.jpg';
import cappuccinoImg from '@assets/generated_images/cappuccino.jpg';
import icedCoffeeImg from '@assets/generated_images/iced_coffee.jpg';
import coldBrewImg from '@assets/generated_images/cold_brew.jpg';
import mochaImg from '@assets/generated_images/gallery_1.jpg'; // Using gallery as fallback if needed, but we have enough

gsap.registerPlugin(ScrollTrigger);

const drinks = [
  { name: 'Espresso', desc: 'Pure, concentrated coffee essence. Dark, rich, and topped with golden crema.', img: espressoImg },
  { name: 'Latte', desc: 'Smooth espresso balanced with steamed milk and delicate foam.', img: latteImg },
  { name: 'Cappuccino', desc: 'Equal parts espresso, steamed milk, and rich microfoam.', img: cappuccinoImg },
  { name: 'Cold Brew', desc: 'Slow-steeped for 24 hours. Exceptionally smooth and bold.', img: coldBrewImg },
  { name: 'Iced Coffee', desc: 'Refreshingly crisp over ice, preserving nuanced flavor notes.', img: icedCoffeeImg },
  { name: 'Caramel Macchiato', desc: 'Vanilla-flavored syrup, steamed milk, espresso, and caramel drizzle.', img: latteImg }, // Reusing latte as visual
];

export function SignatureDrinks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.drink-card');
    
    cards.forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: i % 2 === 0 ? 0 : 0.2 // Stagger effect for grid
      });
    });
  }, { scope: containerRef });

  return (
    <section id="collections" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">The Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Signature Drinks</h2>
          <p className="text-muted-foreground text-lg">
            Each cup is a testament to our obsessive pursuit of perfection. From bean to brew, we control every variable to deliver an unparalleled tasting experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {drinks.map((drink, i) => (
            <div key={i} className="drink-card group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={drink.img} 
                  alt={drink.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif text-white mb-2">{drink.name}</h3>
                  <div className="h-[2px] w-12 bg-primary mb-4 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {drink.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

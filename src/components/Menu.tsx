import React, { useState } from 'react';

const menuData = {
  'Hot Coffee': [
    { name: 'Pour Over', price: '$8', desc: 'Single-origin, manually brewed to perfection.' },
    { name: 'Espresso', price: '$5', desc: 'Our signature Brobex blend.' },
    { name: 'Americano', price: '$5.5', desc: 'Espresso stretched with hot water.' },
    { name: 'Cortado', price: '$6', desc: 'Equal parts espresso and steamed milk.' },
    { name: 'Flat White', price: '$6.5', desc: 'Espresso with velvety microfoam.' },
    { name: 'Latte', price: '$7', desc: 'Espresso, steamed milk, light foam.' },
    { name: 'Cappuccino', price: '$7', desc: 'Espresso, steamed milk, deep foam.' },
    { name: 'Mocha', price: '$8', desc: 'Espresso, single-estate dark chocolate, steamed milk.' },
  ],
  'Cold Coffee': [
    { name: 'Cold Brew', price: '$7', desc: '24-hour steep, exceptionally smooth.' },
    { name: 'Nitro Cold Brew', price: '$8', desc: 'Infused with nitrogen for a creamy texture.' },
    { name: 'Iced Latte', price: '$7.5', desc: 'Espresso and milk over artisan ice.' },
    { name: 'Iced Americano', price: '$6', desc: 'Espresso and water over ice.' },
  ],
  'Signature': [
    { name: 'The Gold Reserve', price: '$15', desc: 'Geisha beans, siphon brewed, served with tasting notes.' },
    { name: 'Smoked Vanilla Latte', price: '$9', desc: 'House-made smoked Madagascar vanilla, espresso, milk.' },
    { name: 'Black Salt Mocha', price: '$9', desc: 'Dark chocolate, espresso, activated charcoal, black sea salt.' },
  ],
  'Bakery & Desserts': [
    { name: 'Butter Croissant', price: '$6', desc: 'Isigny Ste Mère butter, baked fresh hourly.' },
    { name: 'Almond Croissant', price: '$7.5', desc: 'Twice baked, rich frangipane filling.' },
    { name: 'Espresso Tart', price: '$12', desc: 'Dark chocolate ganache infused with our signature roast.' },
    { name: 'Matcha Opera Cake', price: '$14', desc: 'Layers of almond sponge, matcha buttercream, chocolate ganache.' },
  ]
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Hot Coffee');

  return (
    <section id="menu" className="py-32 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">The Offerings</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white">Curated Menu</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm tracking-widest uppercase pb-2 transition-all duration-300 border-b-2 ${
                activeCategory === cat 
                  ? 'border-primary text-white' 
                  : 'border-transparent text-muted-foreground hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors">{item.name}</h3>
                <div className="flex-1 border-b border-border border-dashed mx-4 opacity-30" />
                <span className="text-lg text-white font-medium">{item.price}</span>
              </div>
              <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

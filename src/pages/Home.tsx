import React from 'react';
import { Navbar } from '@/components/Navbar';
import { CinematicHero } from '@/components/CinematicHero';
import { SignatureDrinks } from '@/components/SignatureDrinks';
import { Story } from '@/components/Story';
import { Process } from '@/components/Process';
import { MenuSection } from '@/components/Menu';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <CinematicHero />
        <SignatureDrinks />
        <Story />
        <Process />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

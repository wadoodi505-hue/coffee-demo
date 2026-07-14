import React from 'react';

// Define a type that accepts the standard SVG props PLUS the "size" prop
interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Instagram = ({ size = 20, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 20, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const Twitter = ({ size = 20, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <span className="font-serif text-3xl tracking-widest font-bold text-white mb-6 block">
              BROBEX
            </span>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed mb-8">
              Crafted for extraordinary mornings. Elevating the daily ritual of coffee into an unparalleled sensory experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <span className="font-bold text-xs">TT</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#collections" className="text-muted-foreground hover:text-white transition-colors">Collections</a></li>
              <li><a href="#story" className="text-muted-foreground hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#process" className="text-muted-foreground hover:text-white transition-colors">Process</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-white transition-colors">Menu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm font-light mb-4">Subscribe for exclusive releases and private tasting events.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background border border-border px-4 py-2 w-full focus:outline-none focus:border-primary text-white text-sm"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 uppercase tracking-widest text-xs font-medium hover:bg-white hover:text-background transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-light">
            &copy; {new Date().getFullYear()} Brobex Coffee. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

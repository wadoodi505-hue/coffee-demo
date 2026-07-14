import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Connect</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Reservations & Inquiries</h2>
            <p className="text-muted-foreground mb-12 text-lg font-light max-w-md">
              For private events, wholesale partnerships, or general inquiries, please leave us a message.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white uppercase tracking-widest text-sm mb-2">Location</h4>
                <p className="text-muted-foreground font-light">123 Luxury Avenue, District 1<br/>San Francisco, CA 94105</p>
              </div>
              <div>
                <h4 className="text-white uppercase tracking-widest text-sm mb-2">Email</h4>
                <a href="mailto:brobex.ffx@gmail.com" className="text-primary hover:text-white transition-colors">brobex.ffx@gmail.com</a>
              </div>
              <div>
                <h4 className="text-white uppercase tracking-widest text-sm mb-2">Hours</h4>
                <p className="text-muted-foreground font-light">Mon - Fri: 6am - 6pm<br/>Sat - Sun: 7am - 7pm</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="space-y-6 bg-card p-8 md:p-12 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-border pb-2 focus:border-primary outline-none text-white transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-transparent border-b border-border pb-2 focus:border-primary outline-none text-white transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-border pb-2 focus:border-primary outline-none text-white transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-border pb-2 focus:border-primary outline-none text-white transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-background transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="max-w-md w-full px-6 py-12 text-center bg-card border border-border shadow-2xl">
        <h1 className="text-6xl font-serif font-bold text-white mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you are looking for has not been roasted yet.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-8 py-3 tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-background transition-colors duration-300"
        >
          Return to Reserve
        </Link>
      </div>
    </div>
  );
}

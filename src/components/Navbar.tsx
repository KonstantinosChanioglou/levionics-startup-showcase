const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-hero/90 backdrop-blur-md border-b border-hero-muted/10">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <span className="font-heading text-xl font-bold text-hero-foreground tracking-tight">Levionics</span>
      <div className="hidden md:flex items-center gap-8">
        <a href="#problem" className="text-hero-muted hover:text-hero-foreground text-sm transition-colors">Problem</a>
        <a href="#solution" className="text-hero-muted hover:text-hero-foreground text-sm transition-colors">Solution</a>
        <a href="#why" className="text-hero-muted hover:text-hero-foreground text-sm transition-colors">Why Levionics</a>
        <a href="#team" className="text-hero-muted hover:text-hero-foreground text-sm transition-colors">Team</a>
        <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">Contact Us</a>
      </div>
    </div>
  </nav>
);

export default Navbar;

const Footer = () => (
  <footer className="bg-hero py-8 px-6 border-t border-hero-muted/10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-heading text-sm font-semibold text-hero-foreground">Levionics</span>
      <p className="text-hero-muted text-xs">© {new Date().getFullYear()} Levionics. All rights reserved. TU Delft spin-off.</p>
    </div>
  </footer>
);

export default Footer;

import logo from "@/assets/logo.png";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-hero/90 backdrop-blur-md border-b border-border/30">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Levionics" className="h-10" />
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#problem" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Problem</a>
        <a href="#solution" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Solution</a>
        <a href="#why" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Why Levionics</a>
        <a href="#team" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Team</a>
        <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">Contact Us</a>
      </div>
    </div>
  </nav>
);

export default Navbar;

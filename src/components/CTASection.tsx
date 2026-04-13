import logo from "@/assets/logo.png";

const CTASection = () => (
  <section id="contact" className="py-24 px-6 bg-card text-center border-t border-border">
    <div className="max-w-2xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Ready to Navigate Without GPS?
      </h2>
      <p className="text-muted-foreground text-lg mb-10">
        We're looking for pilot partners and investors to bring navigation-grade magnetic-levitation gyroscopes to market.
      </p>
      <a href="mailto:info@levionics.com" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
        Get In Touch
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-background py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="Levionics" className="h-5" />
      <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Levionics. All rights reserved. TU Delft spin-off. Manufactured in Europe.</p>
    </div>
  </footer>
);

export { CTASection, Footer };
export default CTASection;

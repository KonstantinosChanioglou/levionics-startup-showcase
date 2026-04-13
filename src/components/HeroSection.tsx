import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-hero/60" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-hero-foreground leading-tight mb-6">
        Enabling Reliable & Scalable Autonomous Navigation in GPS-Denied Environments
      </h1>
      <p className="text-hero-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Our magnetic-levitation gyroscope delivers navigation-grade stability without the size, power, and cost penalties of current high-end systems.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#solution" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
          Discover Our Technology
        </a>
        <a href="#contact" className="border border-hero-muted/30 text-hero-foreground px-8 py-3 rounded-md font-medium hover:bg-hero-muted/10 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;

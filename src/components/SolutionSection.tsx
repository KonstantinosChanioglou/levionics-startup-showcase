import maglevPhoto from "@/assets/maglev-photo.png";
import tudelftLogo from "@/assets/tudelft-logo.png";
import productComparison from "@/assets/product-comparison.png";

const SolutionSection = () => (
  <section id="solution" className="py-24 px-6 bg-section-alt">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
        Breaking the Trade-Off
      </h2>
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Levionics introduces a new class of <strong className="text-primary">magnetic-levitation gyroscopes</strong> that deliver navigation-grade stability without the size, power, and cost penalties of today's high-end systems.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            By replacing mechanical springs with controlled passive diamagnetic levitation, we eliminate drift at its source. The result: FOG-level performance in a device that is <strong className="text-foreground">10× smaller</strong>, consumes <strong className="text-foreground">10× less power</strong>, and is <strong className="text-foreground">significantly more cost-effective</strong>.
          </p>
          <div className="flex items-center gap-3 mt-6 p-4 rounded-lg bg-card border border-border">
            <img src={tudelftLogo} alt="TU Delft" className="h-10 object-contain brightness-0 invert" />
            <p className="text-muted-foreground text-sm">
              Patented technology developed at <strong className="text-foreground">TU Delft</strong>, one of Europe's leading engineering universities.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={maglevPhoto} alt="Magnetic levitation technology" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>

      {/* Three feature cards side by side */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Ultra Low Mechanical Drift</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Diamagnetic levitation eliminates springs, vibrations, and aging effects that plague MEMS sensors.</p>
        </div>
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Compact & Power Efficient</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">No kilometer-scale fiber coils. Our microscopic structures replace the bulk of optical gyroscopes.</p>
        </div>
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Scalable Deployment</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Low cost and small form factor finally enable navigation-grade autonomy across fleet-scale platforms.</p>
        </div>
      </div>

      {/* Prototype image */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Prototype</h3>
        <img src={productComparison} alt="FOG vs Levionics gyroscope size comparison" className="rounded-lg max-w-full md:max-w-2xl h-auto" />
      </div>
    </div>
  </section>
);

export default SolutionSection;

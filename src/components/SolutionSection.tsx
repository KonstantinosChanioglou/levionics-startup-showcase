const SolutionSection = () => (
  <section id="solution" className="py-24 px-6 bg-section-alt">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
        Breaking the Trade-Off
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Levionics introduces a new class of <strong className="text-primary">magnetic-levitation gyroscopes</strong> that deliver navigation-grade stability without the size, power, and cost penalties of today's high-end systems.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        By replacing mechanical springs with controlled passive diamagnetic levitation, we eliminate drift at its source. The result: FOG-level performance in a device that is <strong className="text-foreground">10× smaller</strong>, consumes <strong className="text-foreground">10× less power</strong>, and is <strong className="text-foreground">significantly more cost-effective</strong>.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "No Mechanical Drift", desc: "Diamagnetic levitation eliminates springs, vibrations, and aging effects that plague MEMS sensors." },
          { title: "Compact & Efficient", desc: "No kilometer-scale fiber coils. Our microscopic structures replace the bulk of optical gyroscopes." },
          { title: "Scalable Deployment", desc: "Low cost and small form factor finally enable navigation-grade autonomy across fleet-scale platforms." },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;

const WhySection = () => (
  <section id="why" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Why Levionics?</h2>
      <p className="text-muted-foreground text-lg mb-12">Patented technology developed at TU Delft, validated by industry leaders.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { stat: "€600M", label: "Addressable market by 2035 in maritime gyroscopes alone" },
          { stat: "60+", label: "Industry interviews validating the unmet need" },
          { stat: "TRL 4", label: "Proof of concept achieved — TRL 5 targeted May 2027" },
        ].map((item) => (
          <div key={item.stat} className="text-center">
            <div className="font-heading text-4xl font-bold text-primary mb-2">{item.stat}</div>
            <p className="text-muted-foreground text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;

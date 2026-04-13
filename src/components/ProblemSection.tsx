const ProblemSection = () => (
  <section id="problem" className="py-24 px-6 bg-background">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
        When GPS drops out, navigation collapses.
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        Autonomous vehicles rely on GPS for positioning. But underwater, in tunnels, near jamming zones, or in contested environments, GPS simply isn't available. Current solutions force a painful trade-off.
      </p>
      <h3 className="font-heading text-xl font-semibold text-primary mb-4">The market is stuck.</h3>
      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        Low-cost MEMS gyroscopes lose accuracy within seconds. High-end Fiber Optic Gyroscopes achieve precision but are bulky, power-hungry, and cost €8,000–€150,000. Operators must deploy support vessels at over €35,000/day just to compensate for navigation uncertainty.
      </p>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Why this matters</h3>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Underwater vehicles run seabed mapping, mine countermeasures, border control, and offshore energy inspections. Without reliable navigation, missions fail, costs spike, and scalable autonomy remains out of reach.
      </p>
    </div>
  </section>
);

export default ProblemSection;

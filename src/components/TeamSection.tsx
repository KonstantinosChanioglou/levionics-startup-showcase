const team = [
  { name: "Konstantinos Chanioglou", role: "Co-Founder & Business Developer", bg: "MSc Software Engineering" },
  { name: "Pepijn van Kampen", role: "Co-Founder & Technical Lead", bg: "Ir. MSc Mechanical Engineering" },
];

const advisors = [
  { name: "Prof. Peter Steeneken", role: "Scientific Advisor — MEMS & Precision Sensing, TU Delft" },
  { name: "Dr. Farbod Alijani", role: "Scientific Advisor — TU Delft" },
];

const TeamSection = () => (
  <section id="team" className="py-24 px-6 bg-section-alt">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Team</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {team.map((m) => (
          <div key={m.name} className="bg-card rounded-lg p-6 border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
              {m.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h3 className="font-heading font-semibold text-foreground text-lg">{m.name}</h3>
            <p className="text-primary text-sm font-medium mb-1">{m.role}</p>
            <p className="text-muted-foreground text-sm">{m.bg}</p>
          </div>
        ))}
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-6 text-center">Advisors</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {advisors.map((a) => (
          <div key={a.name} className="bg-card rounded-lg p-5 border border-border text-center">
            <h4 className="font-heading font-semibold text-foreground">{a.name}</h4>
            <p className="text-muted-foreground text-sm">{a.role}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-muted-foreground text-sm mt-8">
        Backed by NWO, European Research Council, Dutch Ministry of Defence & partnered with Lobster Robotics and Aqua Smart XL.
      </p>
    </div>
  </section>
);

export default TeamSection;

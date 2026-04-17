import konstantinosPhoto from "@/assets/konstantinos-photo.png";
import pepijnPhoto from "@/assets/pepijn-photo.png";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Konstantinos Chanioglou", role: "Co-Founder & Business Developer", bg: "MSc Software Engineering", photo: konstantinosPhoto, linkedin: "https://www.linkedin.com/in/konstantinos-chanioglou-a34b8b190/" },
  { name: "Pepijn van Kampen", role: "Co-Founder & Technical Lead", bg: "Ir. MSc Mechanical Engineering", photo: pepijnPhoto, linkedin: "https://www.linkedin.com/in/pepijn-van-kampen/" },
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
            <img src={m.photo} alt={m.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground text-lg">{m.name}</h3>
            <p className="text-primary text-sm font-medium mb-1">{m.role}</p>
            <p className="text-muted-foreground text-sm mb-3">{m.bg}</p>
            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
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
    </div>
  </section>
);

export default TeamSection;

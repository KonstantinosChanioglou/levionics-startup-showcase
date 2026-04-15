import { ExternalLink, Calendar } from "lucide-react";

const newsItems = [
  {
    date: "April 2026",
    type: "Milestone",
    title: "Levionics Joins NWO Research Programme",
    description: "Selected for NWO funding to advance GPS-denied navigation technology for autonomous maritime systems.",
    link: null,
  },
  {
    date: "March 2026",
    type: "Partnership",
    title: "Partnership with Lobster Robotics",
    description: "Strategic collaboration to integrate Levionics navigation modules into underwater robotic platforms.",
    link: null,
  },
  {
    date: "January 2026",
    type: "Press",
    title: "ERC Technology Transfer Programme Award",
    description: "Levionics awarded ERC TTT grant to bring patented TU Delft magnetic levitation gyroscope to market.",
    link: null,
  },
];

const NewsSection = () => (
  <section id="news" className="py-24 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        Latest News
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
        Milestones, partnerships, and press coverage.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {newsItems.map((item, i) => (
          <article
            key={i}
            className="bg-card border border-border/40 rounded-xl p-6 flex flex-col gap-3 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              <span>{item.date}</span>
              <span className="ml-auto text-[10px] uppercase tracking-wider font-medium text-primary">
                {item.type}
              </span>
            </div>
            <h3 className="text-foreground font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-1 hover:underline"
              >
                Read more <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;

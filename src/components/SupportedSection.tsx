import nwoLogo from "@/assets/nwo-logo.png";
import ercLogo from "@/assets/erc-logo.png";
import tttLogo from "@/assets/ttt-logo.png";
import modLogo from "@/assets/mod-logo.png";

const SupportedSection = () => (
  <section className="py-16 px-6 bg-card border-t border-border">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
        Supported Through
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        <img src={nwoLogo} alt="NWO" className="h-16 md:h-20 object-contain" />
        <img src={ercLogo} alt="European Research Council" className="h-10 md:h-14 object-contain" />
        <img src={tttLogo} alt="Thematic Technology Transfer" className="h-10 md:h-14 object-contain" />
        <img src={modLogo} alt="Ministerie van Defensie" className="h-12 md:h-16 object-contain" />
      </div>
    </div>
  </section>
);

export default SupportedSection;

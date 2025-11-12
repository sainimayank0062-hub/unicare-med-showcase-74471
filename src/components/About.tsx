import aboutBg from "@/assets/about-bg.webp";

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt="Healthcare Professional"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Our Company
          </h2>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-medium p-8 md:p-12 border border-primary/10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unicare Medical Solutions is a trusted hospital infrastructure
              partner specializing in advanced Modular Operation Theater setups,
              Surgical Scrub Systems, Medical Gas Pipeline Systems, and Critical
              Care Equipment. We focus on hygiene, durability, infection
              control, and international healthcare standards with turnkey
              project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

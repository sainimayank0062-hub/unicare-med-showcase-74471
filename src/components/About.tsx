const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Our Company
          </h2>
          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12">
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

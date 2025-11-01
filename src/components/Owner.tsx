import ownerPhoto from "@/assets/owner-photo.jpg";

const Owner = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Founder
            </h2>
          </div>

          <div className="bg-card rounded-2xl shadow-large p-8 md:p-12 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Owner Photo */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={ownerPhoto}
                    alt="Mr. Ravinder Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Owner Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Mr. Ravinder Sharma
                </h3>
                <p className="text-xl text-primary font-semibold mb-6">
                  Founder & Project Head – Unicare Medical Solutions
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 10+ years of experience in Modular OT & ICU setup
                  execution, Mr. Ravinder Sharma has delivered multiple hospital
                  turnkey projects across India. His commitment to precision,
                  safety & cleanroom hygiene ensures long-lasting medical
                  infrastructure performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;

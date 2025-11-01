import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { Shield, Award, Users, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modular Operation Theater"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-accent text-foreground rounded-full text-sm font-bold backdrop-blur-sm border border-primary/30">
              ✨ Your Safety. Our Precision. ✨
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            UNICARE MEDICAL
            <span className="block text-primary mt-2">
              SOLUTION
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Premium Modular Operation Theater & Hospital Infrastructure Manufacturer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/917678443838?text=Hello, I want to get the best quote for Modular OT setup",
                  "_blank"
                )
              }
              className="bg-gradient-primary text-lg px-10 py-7 shadow-large text-primary-foreground font-semibold"
            >
              Get Best Quote Now 🚀
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("products");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-lg px-10 py-7 border-2 border-primary/40 shadow-medium"
            >
              View Products
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-accent backdrop-blur-sm rounded-xl border-2 border-primary/20">
              <Shield className="w-12 h-12 text-primary mb-3" />
              <p className="text-sm font-bold text-foreground">ISO Certified</p>
              <p className="text-xs text-muted-foreground mt-1">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-accent backdrop-blur-sm rounded-xl border-2 border-primary/20">
              <Award className="w-12 h-12 text-primary mb-3" />
              <p className="text-sm font-bold text-foreground">10+ Years</p>
              <p className="text-xs text-muted-foreground mt-1">Experience</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-accent backdrop-blur-sm rounded-xl border-2 border-primary/20">
              <Users className="w-12 h-12 text-primary mb-3" />
              <p className="text-sm font-bold text-foreground">500+ Clients</p>
              <p className="text-xs text-muted-foreground mt-1">Trusted Nationwide</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-accent backdrop-blur-sm rounded-xl border-2 border-primary/20">
              <CheckCircle2 className="w-12 h-12 text-primary mb-3" />
              <p className="text-sm font-bold text-foreground">100% Quality</p>
              <p className="text-xs text-muted-foreground mt-1">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;

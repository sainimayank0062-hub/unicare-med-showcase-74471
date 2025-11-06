import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductContactDialog from "@/components/ProductContactDialog";
import glassOtImage from "@/assets/product-glass-ot.jpg";
import steelOtImage from "@/assets/product-steel-ot.jpg";
import hplOtImage from "@/assets/product-hpl-ot.jpg";
import icuImage from "@/assets/product-icu-new.png";
import bedHeadImage from "@/assets/product-bed-head-new.png";
import ppgiOtImage from "@/assets/product-ppgi-ot.jpg";
import jointlessOtImage from "@/assets/product-jointless-ot.jpg";
import modularOtImage from "@/assets/product-modular-ot.jpg";
import semiModularOtImage from "@/assets/product-semi-modular-ot.jpg";
import manifoldGasImage from "@/assets/product-manifold-gas.jpg";
import curtainTrackImage from "@/assets/product-curtain-track.webp";
import scrubSinkImage from "@/assets/product-scrub-sink.png";

const products = [
  {
    name: "Jointless Modular Operation Theater",
    description:
      "Seamless cleanroom construction ensuring zero bacteria settlement and high infection control.",
    price: "XX,XXX",
    image: jointlessOtImage,
  },
  {
    name: "HPL Modular Operation Theater",
    description:
      "Antibacterial HPL panels with durability, hygiene & scratch resistance.",
    price: "XX,XXX",
    image: hplOtImage,
  },
  {
    name: "PPGI Modular Operation Theater",
    description: "Cost-effective modular OT setup with coated steel paneling.",
    price: "XX,XXX",
    image: ppgiOtImage,
  },
  {
    name: "Glass Modular Operation Theater",
    description:
      "Toughened glass cleanroom design with premium hygiene & luxury finish.",
    price: "XX,XXX",
    image: modularOtImage,
  },
  {
    name: "Semi Modular Operation Theater",
    description: "Smart modular upgrade solution for mid-level hospitals.",
    price: "XX,XXX",
    image: semiModularOtImage,
  },
  {
    name: "Manifold Gas Room System",
    description:
      "Leak-proof medical gas pipeline system with safety compliance.",
    price: "XX,XXX",
    image: manifoldGasImage,
  },
  {
    name: "Bioclad Modular Operation Theater",
    description:
      "Antibacterial Bioclad wall systems with fungus & contamination resistance.",
    price: "XX,XXX",
    image: glassOtImage,
  },
  {
    name: "Stainless Steel Modular Operation Theater",
    description: "SS304 construction for maximum hygiene & durability.",
    price: "XX,XXX",
    image: steelOtImage,
  },
  {
    name: "Modular ICU Setup",
    description:
      "Patient-centered ICU infrastructure with monitoring & oxygen control systems.",
    price: "XX,XXX",
    image: icuImage,
  },
  {
    name: "Bed Head Panel",
    description:
      "Integrated oxygen, suction, lighting & electrical utility panel.",
    price: "XX,XXX",
    image: bedHeadImage,
  },
  {
    name: "Surgical Scrub Sink",
    description:
      "Sensor-based stainless steel scrub station for surgeon sterilization.",
    price: "XX,XXX",
    image: scrubSinkImage,
  },
  {
    name: "Cubical Curtain Track System",
    description:
      "Hospital-grade smooth track curtains providing patient privacy.",
    price: "XX,XXX",
    image: curtainTrackImage,
  },
];

const Products = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleContactClick = (productName: string) => {
    setSelectedProduct(productName);
    setDialogOpen(true);
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Premium hospital infrastructure solutions
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden border-2 hover:border-primary/40 bg-gradient-to-br from-white to-accent/30 hover-shine"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-primary">
                      ₹{product.price}*
                    </span>
                  </div>
                  <Button
                    onClick={() => handleContactClick(product.name)}
                    className="w-full font-semibold"
                  >
                    Contact Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 mb-8">
          *Prices may vary based on specifications and customization
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
          onClick={() =>
              window.open(
                "https://wa.me/918586995235?text=Hello, I want to get the best quote for Modular OT setup",
                "_blank"
              )
            }
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto animate-glow-pulse"
          >
            Get Best Quote Now
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-secondary text-secondary-foreground border-2 border-primary/30 px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-medium w-full sm:w-auto"
          >
            Contact Us
          </button>
        </div>

        <ProductContactDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          productName={selectedProduct}
        />
      </div>
    </section>
  );
};

export default Products;

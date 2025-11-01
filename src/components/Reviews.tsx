import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Dr. Amit Verma",
    review:
      "Excellent finishing and installation quality. Zero contamination issues.",
    rating: 5,
  },
  {
    name: "Dr. Priya Jain",
    review: "Project delivered before deadline with professional execution.",
    rating: 5,
  },
  {
    name: "Dr. Rohit Raj",
    review: "Durable, hygienic, and impressive modular build quality.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clients & Reviews
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by healthcare professionals across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.review}"
                </p>
                <p className="text-foreground font-semibold">– {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

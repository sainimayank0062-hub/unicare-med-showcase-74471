import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ProductContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  hospital: z.string().trim().max(200, "Hospital name must be less than 200 characters").optional(),
  city: z.string().trim().min(1, "City is required").max(100, "City must be less than 100 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  requirements: z.string().trim().min(10, "Please provide more details (minimum 10 characters)").max(1000, "Requirements must be less than 1000 characters"),
});

const ProductContactDialog = ({ open, onOpenChange, productName }: ProductContactDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    city: "",
    phone: "",
    requirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    try {
      contactSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check all fields and try again.",
          variant: "destructive",
        });
        return;
      }
    }

    try {
      // Create form data for submission
      const submitData = new FormData();
      submitData.append("Product", productName);
      submitData.append("name", formData.name);
      submitData.append("hospital", formData.hospital || "Not specified");
      submitData.append("city", formData.city);
      submitData.append("phone", formData.phone);
      submitData.append("requirements", formData.requirements);

      const response = await fetch("https://formsubmit.co/unicaremedical2023@gmail.com", {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your enquiry has been submitted successfully.",
        });

        // Reset form and close dialog
        setFormData({
          name: "",
          hospital: "",
          city: "",
          phone: "",
          requirements: "",
        });
        setErrors({});
        onOpenChange(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Contact Us About: {productName}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Connect directly with Ravinder sir for expert guidance
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input type="hidden" name="Product" value={productName} />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your full name"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Hospital / Clinic Name
            </label>
            <Input
              type="text"
              name="hospital"
              value={formData.hospital}
              onChange={(e) =>
                setFormData({ ...formData, hospital: e.target.value })
              }
              placeholder="Enter hospital or clinic name"
              className={errors.hospital ? "border-destructive" : ""}
            />
            {errors.hospital && (
              <p className="text-sm text-destructive mt-1">{errors.hospital}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              City *
            </label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              placeholder="Enter your city"
              className={errors.city ? "border-destructive" : ""}
            />
            {errors.city && (
              <p className="text-sm text-destructive mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone *
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Enter your phone number"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Requirement Details *
            </label>
            <Textarea
              name="requirements"
              value={formData.requirements}
              onChange={(e) =>
                setFormData({ ...formData, requirements: e.target.value })
              }
              placeholder="Describe your requirements..."
              rows={4}
              className={errors.requirements ? "border-destructive" : ""}
            />
            {errors.requirements && (
              <p className="text-sm text-destructive mt-1">{errors.requirements}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Submit Enquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductContactDialog;

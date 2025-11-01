import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/917678443838?text=Hello, I want to get the best quote for Modular OT setup",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white rounded-full shadow-large p-4 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:block font-semibold pr-2">
        Chat on WhatsApp | Get Best Quote Instantly
      </span>
    </button>
  );
};

export default WhatsAppButton;

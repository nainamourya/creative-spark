import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+919867204919";
  const message = "Hello! I’m interested in your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = () => {
    // ✅ Google Analytics / GTM tracking (safe)
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "WhatsApp",
        event_label: "Floating WhatsApp Button",
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        source: "floating_button",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 hover:scale-110 transition-all animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

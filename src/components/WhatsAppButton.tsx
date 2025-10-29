import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for smooth animation
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  return (
    <a
      href="https://wa.me/919599505943"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping" style={{ backgroundColor: '#25D366', opacity: 0.75 }} />
    </a>
  );
}

"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // One-time entrance animation delay after page load
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const message = "Hello Ceylon 3D, I'd like to ask about a 3D printing project.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-40 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 rounded-full"
          style={{
            bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
            right: "20px",
          }}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-label="Chat with Ceylon 3D on WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* Label (Desktop hover slide-out to the left) */}
          <span 
            className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-[180px] opacity-0 group-hover:opacity-100 bg-gray-900 border border-white/[0.08] text-white text-xs font-semibold py-2.5 rounded-l-full transition-all duration-300 ease-in-out whitespace-nowrap shadow-xl transform translate-x-2 group-hover:translate-x-0 mr-[-6px]"
          >
            <span className="px-4">Chat on WhatsApp</span>
          </span>

          {/* Circular Button */}
          <div className="flex items-center justify-center w-[52px] h-[52px] md:w-[58px] md:h-[58px] rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95">
            {/* Official SVG WhatsApp logo */}
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.012 2C6.506 2 2.024 6.482 2.024 11.988c0 1.76.457 3.477 1.328 4.992L1 22l5.168-1.357c1.467.801 3.125 1.222 4.838 1.222 5.506 0 9.99-4.482 9.99-9.988S17.518 2 12.012 2zm6.262 14.33c-.276.777-1.364 1.409-2.14 1.503-.54.065-1.244.092-3.136-.694-2.42-.999-3.955-3.468-4.076-3.629-.12-.162-1.025-1.365-1.025-2.604 0-1.238.647-1.849.888-2.09.24-.242.525-.302.7-.302h.502c.162 0 .378.016.54.39.176.417.607 1.48.661 1.588.054.108.09.233.018.378-.072.146-.108.252-.216.378-.108.127-.228.283-.324.378-.108.108-.222.226-.096.442.126.216.56.924 1.201 1.494.825.733 1.517.96 1.733 1.069.216.108.342.09.468-.054.126-.145.54-.629.684-.841.144-.212.288-.176.486-.104.198.072 1.26.594 1.476.702.216.108.36.162.414.252.054.09.054.522-.222 1.301z" />
            </svg>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

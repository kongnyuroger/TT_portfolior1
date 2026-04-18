"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-[60]"
        >
          <Link
            href="#contact"
            className="flex items-center gap-2 px-6 py-4 rounded-full bg-brand-blue text-black font-bold shadow-2xl shadow-brand-blue/30 hover:scale-105 active:scale-95 transition-transform"
          >
            <MessageCircle size={24} />
            <span className="hidden sm:inline">Work With Me</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

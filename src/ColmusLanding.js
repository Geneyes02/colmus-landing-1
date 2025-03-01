import React from "react";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function ColmusLanding() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-10 bg-gray-900 w-full overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative text-7xl font-extrabold tracking-wide text-white drop-shadow-xl z-10"
      >
        Supercharge Your Sales with AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="relative mt-6 text-3xl max-w-4xl text-gray-200 leading-relaxed font-light z-10"
      >
        Automate outreach, generate high-quality leads, and close more deals effortlessly with AI-driven precision.
      </motion.p>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
      >
        <Button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-800 text-white px-14 py-6 rounded-full text-2xl shadow-3xl transform hover:scale-110">
          Get Started Risk-Free
        </Button>
      </motion.div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AppleIntro from "@/components/intro/Intro";

export default function CinematicIntro() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Only show once per session for high performance and smooth first impression
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showIntro && <AppleIntro onFinish={handleFinish} />}
    </AnimatePresence>
  );
}

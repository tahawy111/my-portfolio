"use client";
import {} from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export default function Reveal({
  children,
  width = "fit-content",
}: RevealProps) {
  return (
    <div className={`absolute overflow-hidden`} style={{ width }}>
      <motion.div variants={{ hidden: { opacity: 0, y: 75 },visible: { opacity: 1, y: 0 }, }}>
        {children}
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

const BackgroundSlider = ({ imageUrl }) => (
  <motion.div
    className="background-slider"
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ 
      scale: 1,
      opacity: 1,
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      scale: { duration: 1.5, ease: "easeOut" },
      opacity: { duration: 1.5, ease: "easeOut" },
      backgroundPosition: {
        duration: 30,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }}
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  />
);

export default BackgroundSlider;
import React from 'react';
import { motion } from 'framer-motion';

const DownIndicator = () => (
  <motion.div 
    className="down-indicator"
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      y: [0, -10, 0],
    }}
    transition={{
      y: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  >
    <span>↓ Explore Gear Below ↓</span>
  </motion.div>
);

export default DownIndicator;
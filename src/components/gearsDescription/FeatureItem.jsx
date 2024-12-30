import React from 'react';
import { motion } from 'framer-motion';

const featureVariants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
  }
};

const FeatureItem = ({ icon, text }) => (
  <motion.div
    className="feature-item"
    variants={featureVariants}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
  >
    <motion.i className={`icon ${icon}`} />
    <motion.p>{text}</motion.p>
  </motion.div>
);

export default FeatureItem;
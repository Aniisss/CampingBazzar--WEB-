import React from "react";
import { motion } from "framer-motion";
import { Compass, Shield, Sun } from "lucide-react";
import FeatureCard from "../welcomePage/FeatureCard";
import "./GearIntroduction.css";

const features = [
  {
    icon: Compass,
    title: "Premium Quality",
    description: "Carefully selected materials for lasting durabilitay"
  },
  {
    icon: Shield,
    title: "Reliable Performance",
    description: "Tested in extreme conditions for your peace of mind"
  },
  {
    icon: Sun,
    title: "Comfort First",
    description: "Designed for maximum comfort in the wilderness"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

function GearIntroduction() {
  return (
    <motion.section 
      className="gear-introduction"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="gear-intro-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container">
        <motion.h2 
          className="introduction-title"
          variants={titleVariants}
        >
          Why Choose Our Camping Gear?
        </motion.h2>
        
        <motion.p 
          className="introduction-text"
          variants={titleVariants}
        >
          Experience the perfect blend of innovation and reliability with our premium camping equipment.
          Every piece is crafted for adventurers who demand the best.
        </motion.p>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="explore-more"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
        >
          <span>↓ Discover More Below ↓</span>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default GearIntroduction;
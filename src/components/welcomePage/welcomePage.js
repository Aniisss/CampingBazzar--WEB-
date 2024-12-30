import React from "react";
import { Compass, Tent, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundSlider from "./BackgroundSlider";
import FeatureCard from "./FeatureCard";
import CTAButtons from "./CTAButtons";
import { BACKGROUND_IMAGES, FEATURES } from "./constants";
import "./welcomePage.css";

const FEATURE_ICONS = {
  "Premium Gear": Tent,
  "Plan Adventures": Compass,
  Community: Users,
};

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

function WelcomePage({ onExploreClick }) {
  return (
    <AnimatePresence>
      <motion.div
        className="welcome-page"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <BackgroundSlider imageUrl={BACKGROUND_IMAGES[0]} />

        <motion.div className="content-wrapper">
          <div className="welcome-content">
            <motion.div className="title-container" variants={titleVariants}>
              <motion.h1
                animate={{
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 10px rgba(255,215,0,0.3)",
                    "0 0 20px rgba(255,215,0,0.6)",
                    "0 0 10px rgba(255,215,0,0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                Welcome to Camping Bazzar
              </motion.h1>
            </motion.div>

            <motion.p
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              Your Gateway to Outdoor Adventures
            </motion.p>

            <motion.div
              className="features-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {FEATURES.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={FEATURE_ICONS[feature.title]}
                  {...feature}
                  delay={0.8 + index * 0.2}
                />
              ))}
            </motion.div>

            <CTAButtons onExploreClick={onExploreClick} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default WelcomePage;

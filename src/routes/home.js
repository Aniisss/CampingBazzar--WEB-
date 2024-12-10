import React, { useRef } from "react";
import Header from "../components/header/header"; // Ensure consistent casing
import WelcomePage from "../components/welcomePage/welcomePage";
import Footer from "../components/footer/footer";
import GearIntroduction from "../components/gearsDescription/GearIntroduction";
import GearSection from "../components/gearSection/GearSection";
import Forum from "../components/Forum/Forum"; // Ensure consistent casing
import "./home.css";
import ExploreAppSection from "../components/ExploreAppSection/ExploreAppSection";

function Home() {
  // Use `useRef` for smooth scrolling
  const gearSectionRef = useRef(null);
  const forumSectionRef = useRef(null);

  const scrollToGearSection = () => {
    gearSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToForumSection = () => {
    forumSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* Header and Welcome Page */}
      <Header
        className="header-container"
        onCommunityClick={scrollToForumSection}
      />
      <WelcomePage
        className="welcome-container"
        onExploreClick={scrollToGearSection}
      />

      {/* Gear Section and Description */}
      <div ref={gearSectionRef}>
        <GearIntroduction />
        <GearSection />
      </div>

      {/* Forum Section */}
      <section ref={forumSectionRef} className="forum-section">
        <Forum />
      </section>
      <ExploreAppSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;

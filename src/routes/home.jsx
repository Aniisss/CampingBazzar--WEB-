import React, { useRef } from "react";
import Header from "../components/header/header";
import WelcomePage from "../components/welcomePage/welcomePage";
import Footer from "../components/footer/footer";
import GearIntroduction from "../components/gearsDescription/GearIntroduction";
import GearSection from "../components/gearSection/GearSection";
import Forum from "../components/Forum/Forum";
import ExploreAppSection from "../components/ExploreAppSection/ExploreAppSection";
import "./home.css";

function Home() {
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
      <Header
        className="header-component"
        onCommunityClick={scrollToForumSection}
      />

      <main className="main-content">
        <section className="welcome-section">
          <WelcomePage onExploreClick={scrollToGearSection} />
        </section>

        <section ref={gearSectionRef} className="gear-section">
          <GearIntroduction />
          <GearSection />
        </section>

        <section ref={forumSectionRef} className="forum-section">
          <Forum />
        </section>

        <section className="explore-section">
          <ExploreAppSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

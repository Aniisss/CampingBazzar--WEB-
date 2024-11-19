import React from "react";
import Header from "../components/header/header";
import WelcomePage from "../components/welcomePage/welcomePage";
import Footer from "../components/footer/footer";
import GearsDescription from "../components/gearsDescription/gearsDescription";

function Home() {
  return (
    <div className="Home">
      <Header />
      <WelcomePage />
      <GearsDescription />
      <Footer />
    </div>
  );
}

export default Home;

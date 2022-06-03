import React from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section2A from "./Section2A";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="overflow">
      <Header />
      <Section1 />
      <Section2 />
      <Section2A />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Home;

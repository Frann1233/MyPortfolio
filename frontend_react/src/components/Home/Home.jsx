import React from "react";
import { About, FirstSection, Contact, Work } from "../../container";
import {
  Navbar,
  TextZoneBodyStart,
  TextZoneBodyEnd,
  TextZoneHtmlStart,
  TextZoneHtmlEnd,
} from "../../components";

const Home = () => {
  return (
    <div id="home">
      <TextZoneBodyStart />
      <TextZoneHtmlStart />
      <FirstSection />
      <Work />
      <About />
      <Contact />
      <TextZoneBodyEnd />
      <TextZoneHtmlEnd />
    </div>
  );
};

export default Home;

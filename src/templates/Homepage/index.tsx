import React from "react";
import Hero from "./hero";
import Layout from "@/layout";
import Features from "./features";
import Projects from "./projects";
import TechStack from "./tech-stack";
import ContactUs from "./contact-us";
import AboutMe from "./about-me";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Projects />
      {/* <WorkingProcess /> */}
      <TechStack />
      <AboutMe/>
      <ContactUs />
    </Layout>
  );
};

export default Homepage;

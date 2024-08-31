import React from "react";
import Hero from "./hero";
import Layout from "@/layout";
import Features from "./features";
import Projects from "./projects";
import TechStack from "./tech-stack";
import ContactMe from "./contact-me";
import AboutMe from "./about-me";
import WorkExperiences from "./work-experience";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Projects />
      <TechStack />
      <WorkExperiences />
      <AboutMe />
      <ContactMe />
    </Layout>
  );
};

export default Homepage;

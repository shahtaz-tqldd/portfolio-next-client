import React from "react";
import Hero from "./hero";
import Layout from "@/layout";
import Features from "./features";
import Projects from "./projects";
import TechStack from "./tech-stack";
import ContactMe from "./contact-me";
import AboutMe from "./about-me";
import WorkExperiences from "./work-experience";
import Blogs from "./blogs";

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
      <Blogs />
    </Layout>
  );
};

export default Homepage;

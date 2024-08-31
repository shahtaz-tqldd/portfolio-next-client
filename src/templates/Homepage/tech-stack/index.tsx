import React from "react";
import { techs } from "./common";
import AOS from "@/components/ui/aos";

const TechStack = () => {
  return (
    <section className="container py-20">
      <div className="max-w-5xl mx-auto">
        <AOS>
          <h2 className="text-center text-7xl font-science">
            Skills and Expertise
          </h2>
          <p className="text-white/50 text-center mt-8 mb-20 text-lg">
            I am proficient in the following technlogy and I am eger to learn
            more to build robust and optimized frontend and backend development.
            I am determined to write optmize code.
          </p>
        </AOS>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {techs?.map((tech, index) => (
            <AOS
              key={index}
              className="flex items-center gap-2"
              delay={index * 0.05}
            >
              <tech.icon className="text-2xl text-green-300" />
              <span className="text-green-300 text-xl">{tech.name}</span>
            </AOS>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

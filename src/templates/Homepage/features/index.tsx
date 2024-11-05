"use client";
import React from "react";
import { features } from "./common";
import AOS from "@/components/ui/aos";
import { BorderBeam } from "@/components/magicui/border-beam";

const Features = () => {
  return (
    <section className="container py-20">
      <h2 className="text-center md:text-5xl text-3xl font-science mb-16">
        My Expertise
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 overflow-hidden">
        {features?.map((feature, index) => (
          <AOS key={index} delay={0.1 * index}>
            <div
              className={`p-6 pb-4 rounded-xl relative group bg-white/[0.03] hover:bg-white/5 tr group`}
            >
              <AOS key={index} delay={0.2 * index}>
                <div className="mb-4">
                  <img src={feature.img} className="h-20 w-20 object-contain" alt="" />
                  {/* <feature.icon className="h-12 w-12 text-primary mb-4" /> */}
                </div>
                <h2 className="text-2xl font-semibold -mb-2 font-science">
                  {feature.title}
                </h2>
              </AOS>
              <AOS key={index} delay={0.25 * index}>
                <p className="text-white/50 group-hover:text-white/70 tr">{feature.text}</p>
              </AOS>
              <BorderBeam
                size={250}
                duration={12}
                delay={index * 9}
                className=""
              />
            </div>
          </AOS>
        ))}
      </div>
    </section>
  );
};

export default Features;

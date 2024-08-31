"use client";
import React from "react";
import { features } from "./common";
import AOS from "@/components/ui/aos";

const Features = () => {
  return (
    <section className="container py-20">
      <h2 className="text-center text-7xl font-science mb-16">
        My Strong Suit
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {features?.map((feature, index) => (
          <AOS key={index} delay={0.1 * index}>
            <div
              className={`hover:-translate-y-2 tr  px-8 pt-14 pb-5 rounded-2xl ${
                index === 1 ? "bg-green-500/10" : "bg-white/5"
              }`}
            >
              <AOS key={index} delay={0.2 * index}>
                <div>
                  <feature.icon className="h-12 w-12 text-green-300 mb-4" />
                </div>
                <h2 className="text-2xl font-bold mb-3 font-science">
                  {feature.title}
                </h2>
              </AOS>
              <AOS key={index} delay={0.25 * index}>
                <p className="text-white/50">{feature.text}</p>
              </AOS>
            </div>
          </AOS>
        ))}
      </div>
    </section>
  );
};

export default Features;

import Marquee from "@/components/magicui/marquee";
import React from "react";
import { testimonials } from "./common";
import TestimonialCard from "./testimonial-card";

const Testimonial = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);
  return (
    <section className="container py-20">
      <h2 className="text-center text-7xl font-science mb-16">Client Review</h2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-accent "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-accent"></div>
      </div>
    </section>
  );
};

export default Testimonial;

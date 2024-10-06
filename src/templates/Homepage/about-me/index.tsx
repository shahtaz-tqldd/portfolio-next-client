import React from "react";
import Image from "next/image";
import img from "@/assets/images/img2.png";
import AOS from "@/components/ui/aos";

const AboutMe = () => {
  return (
    <section id="about" className="container pt-24 pb-10">
      <div className="grid grid-cols-2 items-center">
        <div className="relative">
          <AOS direction="right">
            <Image
              src={img}
              height={800}
              width={800}
              className="w-full h-[560px] object-contain"
              alt="shahtaz rahman"
            />
            <div className="bg-gradient-to-t from-dark to-transparent h-20 w-full absolute bottom-0"></div>
          </AOS>
        </div>
        <div>
          <AOS delay={0.25}>
            <h2 className="pt-4 text-5xl font-science mb-12">Who Am I?</h2>
          </AOS>
          <AOS delay={0.5}>
            <p className="text-white/60 text-base">
              Hey there! I’m a self-taught software developer with a passion for
              turning complex problems into sleek, user-friendly solutions. For
              the past two years, I’ve been diving deep into the world of
              full-stack development, mastering everything from JavaScript and
              TypeScript to React, Next.js, Node.js, and beyond.
              <br />
              <br />
              My tech journey started out of pure curiosity—I just had to figure
              out how things tick! Fast forward to today, and I’m working on all
              kinds of cool projects, from enterprise-level apps to dynamic,
              interactive websites. Every project I tackle helps me refine my
              skills and come up with better ways to solve real-world challenges
              with tech.
              <br />
              <br />
              Whether I’m coding solo or collaborating with cross-functional
              teams, I love crafting high-quality products that not only meet,
              but totally exceed expectations. Plus, with my solid foundation in
              data structures and algorithms, I’m always up for a challenge!
            </p>
          </AOS>
          <div className="mt-6 flex gap-12">
            <AOS delay={0.5}>
              <h2 className="pt-4 text-6xl font-bold font-science">02+</h2>
              <p className="text-white/60">Years in the Game</p>
            </AOS>
            <AOS delay={0.75}>
              <h2 className="pt-4 text-6xl font-bold font-science">24+</h2>
              <p className="text-white/60">Projects Completed</p>
            </AOS>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React from "react";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import img from "@/assets/images/img2.png";
import AOS from "@/components/ui/aos";
const AboutMe = () => {
  return (
    <section id="about" className="container pt-24 pb-10">
      <div className="grid grid-cols-2 gap-32">
        <div className="relative">
          <AOS direction="right">
            <Image
              src={img}
              height={1000}
              width={1000}
              className="rounded-3xl w-full h-full object-cover"
              alt="shahtaz rahman"
            />
          </AOS>
        </div>
        <div>
          <AOS delay={0.25}>
            <h2 className="pt-4 text-7xl font-science mb-12">About Me</h2>
          </AOS>
          <AOS delay={0.5}>
            <p className="text-white/60 text-base">
              I am a self taught software developer. I thrive on transforming
              complex problems into elegant and user-friendly solutions. With
              over 2 years of experience in the tech industry, I have honed my
              skills in full-stack development, specializing in JavaScript,
              TypeScript, React, Next.js, Redux, Node.js, MongoDB, REST API,
              GraphQL, and WebSocket. <br />
              <br /> My journey began with a curiosity for how things work and
              has evolved into a career dedicated to creating efficient,
              scalable, and innovative software. I have had the privilege of
              working on a diverse range of projects, from developing
              enterprise-level applications to crafting dynamic, interactive
              websites. Each project has reinforced my knowledge and skills to
              solve real-life problems with a logical approach through
              technology.
              <br />
              <br />
              My ability to work seamlessly with cross-functional teams,
              combined with foundational knowledge of data structures and
              algorithms, allows me to deliver high-quality products that meet
              and exceed users&apos; expectations.
            </p>
          </AOS>
          <div className="mt-8 flex gap-8">
            <AOS delay={1}>
              <h2 className="pt-4 text-6xl font-bold font-science">2+</h2>
              <p className=" text-white/60">Years of Experience</p>
            </AOS>
            <AOS delay={1.25}>
              <h2 className="pt-4 text-6xl font-bold font-science">24+</h2>
              <p className=" text-white/60">Projects and Works</p>
            </AOS>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

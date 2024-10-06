import { cn } from "@/lib/utils";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import WordPullUp from "@/components/magicui/word-pull-up";
import SocialMedia from "../contact-me/social-media";
import DotPattern from "@/components/magicui/dot-pattern";
import AOS from "@/components/ui/aos";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

const Hero = () => {
  const greetings = "Hey, I’m Shahtaz Rahman";
  return (
    <section id="home" className="center min-h-[90vh]">
      <div className="container flex flex-col items-center">
        <AOS delay={0.25} direction="none">
          <Image
            src={profile}
            height={500}
            width={500}
            className="h-32 w-32 rounded-full object-contain border border-primary/15 bg-[#151515] z-10 relative"
            alt="Shahtaz Rahman"
          />
        </AOS>

        <WordPullUp
          className="text-5xl font-bold tracking-[0.1rem] font-science mt-6"
          words={greetings}
        />

        <AOS delay={0.25}>
          <p className="text-center text-lg text-white/60 mt-10 max-w-5xl">
            I’m a software developer who loves turning ideas into reality
            through code. Whether it's crafting sleek, interactive interfaces
            with React and Next.js or building powerful, scalable backends using
            Node.js or Django—I’ve got you covered!
          </p>
        </AOS>
        <AOS delay={0.5}>
          <div className="mt-10 flex justify-center gap-5 mb-10">
            <a
              href="https://drive.google.com/file/d/1lV9dIwZU1Ede97Fao-GY1s3EjLPyjvO-/view"
              target="__blank"
            >
              <PrimaryButton>Check Out My Resume</PrimaryButton>
            </a>
            <a href="#skills">
              <SecondaryButton>Explore My Skills</SecondaryButton>
            </a>
          </div>
        </AOS>
        <AOS delay={0.75}>
          <SocialMedia />
        </AOS>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] "
        )}
      />
    </section>
  );
};

export default Hero;

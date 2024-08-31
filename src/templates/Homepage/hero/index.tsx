import { cn } from "@/lib/utils";
import Image from "next/image";
import profile from "@/assets/images/profile.png";
import WordPullUp from "@/components/magicui/word-pull-up";
import SocialMedia from "../contact-us/social-media";
import DotPattern from "@/components/magicui/dot-pattern";
import AOS from "@/components/ui/aos";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";

const Hero = () => {
  const greetings = "Hi there, Good Morning";
  return (
    <section id="home" className="container pt-12 pb-16">
      <div className="flex flex-col items-center">
        <AOS delay={0.25} direction="none">
          <Image
            src={profile}
            height={500}
            width={500}
            className="h-32 w-32 rounded-full object-contain border border-white/20 bg-purple-500/10"
            alt=""
          />
        </AOS>

        <WordPullUp
          className="text-5xl font-bold tracking-[0.1rem] font-science mt-6"
          words={greetings}
        />

        <AOS delay={0.25}>
          <p className="text-center text-lg text-white/60 mt-10 max-w-5xl">
            I am a Software Developer proficient in web application development,
            specializing in both frontend and backend. I use React and Next JS
            to create dynamic, responsive interfaces and I can develop robust
            and optimized backend applications using Node JS or Django
          </p>
        </AOS>
        <AOS delay={0.5}>
          <div className="mt-10 flex justify-center gap-5 mb-10">
            <PrimaryButton>Get My Resume</PrimaryButton>
            <SecondaryButton>See Projects</SecondaryButton>
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
    </section>
  );
};

export default Hero;

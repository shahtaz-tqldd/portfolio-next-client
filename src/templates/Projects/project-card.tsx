import AOS from "@/components/ui/aos";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

interface ProjectCardData {
  name: string;
  img: StaticImageData;
  description: string;
  tags?: string[];
}

interface ProjectCardProps {
  data: ProjectCardData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, index }) => {
  const { name, description, img, tags } = data;
  const redirectLink = name.toLowerCase().split(" ").join("-");
  return (
    <div className="h-[532px] group flex flex-col justify-between">
      <div>
        <div className="h-[320px] w-full overflow-hidden rounded-xl">
          <Image
            src={img}
            className="h-full w-full object-cover rounded-xl group-hover:scale-110 transition duration-300"
            alt={name}
            height={300}
            width={500}
          />
        </div>
        <AOS delay={index * 0.2}>
          <h2 className="mt-12 text-2xl font-bold font-science mb-3 text-white/80 group-hover:text-white tr">
            {name}
          </h2>
        </AOS>
        <AOS delay={index * 0.25}>
          <p className="text-white/50 group-hover:text-white/70 tr">
            {description}
          </p>
        </AOS>
      </div>

      <div className=" flex items-center justify-between">
        <div className="flex gap-1.5">
          {tags?.map((tag, i) => (
            <span key={i} className="text-xs py-1 px-2 bg-green-500/10 text-white/60">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${redirectLink}`}
          className="flex items-center gap-1 cursor-pointer text-white/50 group-hover:text-green-300 tr"
        >
          <h2>See Details</h2>
          <RiArrowRightUpLine className="text-2xl rotate-45 group-hover:rotate-0 tr" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

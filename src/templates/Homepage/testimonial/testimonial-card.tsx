import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4 tr",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="h-10 w-10 object-cover rounded-full" width="60" height="60" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40 mt-1">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-white/60">{body}</blockquote>
    </figure>
  );
};

export default TestimonialCard;

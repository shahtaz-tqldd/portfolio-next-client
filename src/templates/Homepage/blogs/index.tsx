import React from "react";
import { blogs } from "./common";
import AOS from "@/components/ui/aos";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const Blogs = () => {
  return (
    <section id="blogs" className="container pt-24 pb-10">
      <h2 className="text-center text-5xl font-science mb-16">My Write Up</h2>
      <div className="mt-20 grid grid-cols-4 gap-4">
        {blogs?.map(({ img, title, tags, published }, index) => (
          <Link
            key={index}
            href={`/blogs/${title
              .split(" ")
              .map((word) => word.toLowerCase())
              .join("-")}`}
          >
            <AOS
              delay={(index + 1) * 0.15}
              className="group bg-white/[0.03] hover:bg-white/5 tr p-3.5 h-[344px] rounded-xl"
            >
              <div className="h-44 mb-10 overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt=""
                  className="rounded-lg h-full w-full object-cover group-hover:scale-105 tr"
                />
              </div>
              <AOS delay={(index + 1) * 0.20}>
                <div className="fl gap-2 -mb-2 text-white/50">
                  <CalendarDays className="h-3.5 w-3.5 mb-[1px]" />
                  <span className="text-xs">{published}</span>
                </div>
              </AOS>
              <AOS delay={(index + 1) * 0.25}>
                <h2 className="font-semibold text-white/75 group-hover:text-white tr">
                  {title}
                </h2>
              </AOS>
              <AOS delay={(index + 1) * 0.30} className="-mb-10">
                <div className="flex flex-wrap gap-1 text-xs  text-white/60 group-hover:text-primary tr">
                  {tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 py-1 px-2.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AOS>
            </AOS>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

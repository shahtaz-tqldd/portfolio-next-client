import React from "react";
import { blogs } from "./common";
import Image from "next/image";
import AOS from "@/components/ui/aos";
import Link from "next/link";

const Blogs = () => {
  return (
    <section id="blogs" className="container pt-28 pb-10">
      <h2 className="text-center text-7xl font-science mb-16">
        Blogs and Aritcles
      </h2>

      <div className="mt-20 grid grid-cols-3 gap-6">
        {blogs?.map(({ img, title, tags, published }, index) => (
          <Link href={`/blogs/${title.split(" ").map(word => word.toLowerCase()).join("-")}`} key={index} className="group">
            <AOS delay={(index + 1) * 0.25}>
              <div className="h-[260px] mb-10 overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt=""
                  className="rounded-2xl h-full w-full object-cover group-hover:scale-105 tr"
                />
              </div>
              <AOS delay={(index + 1) * 0.1}>
                <p className="text-sm text-white/50">{published}</p>
              </AOS>
              <AOS delay={(index + 1) * 0.25}>
                <h2 className="text-2xl text-white/75 group-hover:text-white tr font-medium font-science">{title}</h2>
              </AOS>
              <AOS delay={(index + 1) * 0.4}>
                <div className="flex flex-wrap gap-4 text-xs text-white/60 group-hover:text-green-300 tr">
                  {tags?.map((tag, i) => (
                    <span key={i}>{tag}</span>
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

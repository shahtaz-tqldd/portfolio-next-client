"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { blogs } from "../common";
import Link from "next/link";

const imgFallback = "https://img.png";
const BlogDetails = () => {
  const { name } = useParams();

  const selectedBlog = blogs.find(
    (blog) => blog.title.toLowerCase().split(" ").join("-") === name
  );

  return (
    <section className="container py-6 grid grid-cols-10 gap-14">
      <div className="col-span-7">
        <div>
          <img
            src={selectedBlog?.img || imgFallback}
            className="w-full h-[400px] object-cover rounded-xl border border-white/10"
            height={400}
            width={600}
            alt={selectedBlog?.title || "blog image"}
          />
        </div>
        <h2 className="mt-10 text-sm text-white/60">
          {selectedBlog?.published}
        </h2>
        <h2 className="mt-6 text-4xl font-science">{selectedBlog?.title}</h2>
        <div className="flex gap-1 mt-4">
          {selectedBlog?.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs py-1.5 px-3 rounded-full bg-white/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-5 text-white/65">{selectedBlog?.body}</p>
      </div>
      <div className="col-span-3">
        <div className="sticky top-24">
          <h2 className="text-2xl font-science font-semibold mb-6">
            Continue Reading
          </h2>

          <div className="flex flex-col gap-5">
            {blogs?.map((blog, index) => (
              <Link
                key={index}
                href={blog.title.toLowerCase().split(" ").join("-")}
                className="group"
              >
                <span className="text-xs text-white/40">{blog.published}</span>
                <h2 className="font-medium text-white/80 group-hover:text-white tr">
                  {blog.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;

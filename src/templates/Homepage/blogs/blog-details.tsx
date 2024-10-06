"use client";
import React from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { X } from "lucide-react";
import { blogs } from "./common";

const imgFallback = "https://img.png";
const BlogDetails = () => {
  const { name } = useParams();
  const router = useRouter();

  const selectedBlog = blogs.find(
    (blog) => blog.title.toLowerCase().split(" ").join("-") === name
  );

  return (
    <section className="container py-6">
      <button
        onClick={() => router.back()}
        className="fixed border h-10 w-10 hover:bg-white/10 cursor-pointer tr rounded-full border-white/20 center"
      >
        <X />
      </button>
      <div className="max-w-[1020px] mx-auto">
        <div>
          <img
            src={selectedBlog?.img || imgFallback}
            className="w-full h-[480px] object-cover rounded-2xl border border-white/10"
            height={400}
            width={600}
            alt={selectedBlog?.title || "blog image"}
          />
        </div>
        <h2 className="mt-10 text-sm text-white/60">{selectedBlog?.published}</h2>
        <h2 className="mt-6 text-5xl font-science">{selectedBlog?.title}</h2>
        <div className="flex gap-5 mt-4">
          {selectedBlog?.tags?.map((tag, i) => (
            <span key={i} className="text-sm text-primary">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg mt-5 text-white/65">{selectedBlog?.body}</p>
        
      </div>
    </section>
  );
};

export default BlogDetails;

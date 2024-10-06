import type { NextPage } from "next";
import BlogDetails from "@/templates/Blogs/blog-details";
import Layout from "@/layout";

const BlogDetailsPage: NextPage = () => {
  return (
    <Layout>
      <BlogDetails />
    </Layout>
  );
};

export default BlogDetailsPage;

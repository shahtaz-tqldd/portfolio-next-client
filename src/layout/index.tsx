import React from "react";
import Navbar from "@/components/navbar/top-navbar";
import Footer from "@/components/footer";
import { MessageCircle } from "lucide-react";
import ShimmerButton from "@/components/magicui/shimmer-button";

type LayoutProps = {
  hideFooter?: boolean;
  children: React.ReactNode;
};

const Layout = ({ hideFooter, children }: LayoutProps) => (
  <main className="bg-dark text-white">
    <Navbar />
    {children}
    <div className="fixed bottom-10 right-10">
      <ShimmerButton>
        <div className="fl gap-2">
          <MessageCircle className="h-4 w-4" />
          <span>Message</span>
        </div>
      </ShimmerButton>
     
    </div>
    {hideFooter ? null : <Footer />}
  </main>
);

export default Layout;

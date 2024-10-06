import React from "react";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src={logo} height={64} width={200} className="h-10 -ml-6" alt="logo" /> */}
      <h2 className="text-xl font-science">Shahtaz Rahman</h2>
      <p className="text-sm text-white/50 -mt-1">Software Developer</p>
    </Link>
  );
};

export default Logo;

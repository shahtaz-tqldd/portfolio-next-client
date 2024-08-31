import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

const SocialMedia = () => {
  const social = [
    {
      title: "Linked In",
      link: "https://www.linkedin.com/company/algostar",
      icon: FaLinkedinIn,
    },
    { title: "X", link: "https://x.com/algostarDev", icon: FaXTwitter },
    {
      title: "Facebook",
      link: "https://www.facebook.com/algostar.dev",
      icon: FaFacebookF,
    },
  ];
  return (
    <div className="flex items-center gap-3">
      {social.map((link, index) => (
        <a
          href={link.link}
          target="_blank"
          key={index}
          className="h-12 w-12 border border-white/20 bg-white/10 hover:bg-blue-500/20 tr rounded-full center"
        >
          <link.icon className="h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;

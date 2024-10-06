import React from "react";
import SocialMedia from "./social-media";
import { Mail, Phone } from "lucide-react";
import PrimaryButton from "@/components/buttons/primary-button";

const ContactMe = () => {
  return (
    <section id="contact" className="container pt-24 pb-10">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-left text-5xl font-science">Let&apos;s Connect!</h2>
          <p className="mt-5 text-white/60">
            Got an awesome project in mind? Need help bringing your ideas to
            life? I&apos;m your go-to software developer for building seamless web
            applications. Let&apos;s make something
            awesome together!
          </p>
          <div className="mt-12 flex flex-col gap-8">
            <div>
              <div className="py-1 text-sm flex items-center gap-2">
                <span className="ml-8 text-white/50">Give me a ring at</span>
              </div>
              <a
                href="tel:+8801521305382"
                className="text-base flex items-center gap-2"
              >
                <Phone className="h-4" />{" "}
                <span className="text-white">+8801521305382</span>
              </a>
            </div>
            <div>
              <div className="py-1 text-sm flex items-center gap-2">
                <span className="ml-8 text-white/50">Shoot me an email at</span>
              </div>
              <a
                href="mailto:shahtaz67@gmail.com"
                className="text-base flex items-center gap-2"
              >
                <Mail className="h-4" />{" "}
                <span className="text-white">shahtaz67@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="mt-20">
            <SocialMedia />
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl h-fit">
          <h2 className="text-2xl font-bold mb-5">Drop Me a Line</h2>
          <form className="flex flex-col gap-5">
            <div>
              <h3 className="text-white/80 text-sm mb-2">Your Name</h3>
              <input
                type="text"
                placeholder="What's your name?"
                className="bg-white/15 py-3 px-4 rounded-lg w-full outline-none border border-white/20 focus:border-primary/40"
              />
            </div>
            <div>
              <h3 className="text-white/80 text-sm mb-2">Your Email Address</h3>
              <input
                type="email"
                placeholder="How can I reach you?"
                className="bg-white/15 py-3 px-4 rounded-lg w-full outline-none border border-white/20 focus:border-primary/40"
              />
            </div>
            <div>
              <h3 className="text-white/80 text-sm mb-2">Your Message</h3>
              <textarea
                style={{ scrollbarWidth: "none" }}
                placeholder="Tell me what's on your mind!"
                className="h-60 bg-white/15 py-3 px-4 rounded-lg w-full outline-none border border-white/20 focus:border-primary/40"
              />
            </div>
            <div className="mt-2 flex justify-end">
              <PrimaryButton>Send Message</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

import ShinyButton from "@/components/magicui/shiny-button";
import { Mail, Phone } from "lucide-react";
import React from "react";
import SocialMedia from "./social-media";
import PrimaryButton from "@/components/buttons/primary-button";
import MainButton from "@/components/buttons/main-button";

const ContactMe = () => {
  return (
    <section id="contact" className="container pt-28 pb-10">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-left text-7xl font-science">Reach out</h2>
          <p className="text-lg mt-5 text-white/60">
            As a software developer I can help you to develop your next project.
            I can shape your ideas into digital presence through developing
            seamless web application
          </p>
          <div className="mt-20 flex flex-col gap-6">
            <div>
              <p className="text-white/60 mb-1 uppercase ml-12">Reach out at</p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/20 center">
                  <Phone className="h-4" />
                </div>
                <span className="text-lg text-white font-science">
                  {" "}
                  +8801521305382
                </span>
              </div>
            </div>
            <div>
              <p className="text-white/60 mb-1 uppercase ml-12">
                Directly Email
              </p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/20 center">
                  <Mail className="h-4" />
                </div>
                <span className="text-lg text-white font-science">
                  {" "}
                  shahtaz67@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="mt-40">
            <SocialMedia />
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
          <h2 className="text-2xl font-bold">Please Fill out the Form</h2>
          <p className="text-white/50 mt-2 mb-8">
            Your enquary and project details is completly safe and sound
          </p>
          <form className="flex flex-col gap-5">
            <div>
              <h3 className="text-white/80 text-sm mb-2">Your Name</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/15 py-3 px-4 rounded-lg w-full outline-none border border-white/20 focus:border-green-200"
              />
            </div>
            <div>
              <h3 className="text-white/80 text-sm mb-2">Your Email Address</h3>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/15 py-3 px-4 rounded-lg w-full outline-none border border-white/20 focus:border-green-200"
              />
            </div>
            <div>
              <h3 className="text-white/80 text-sm mb-2">Your Message</h3>
              <textarea
                style={{ scrollbarWidth: "none" }}
                placeholder="Write your message"
                className="h-60 bg-white/15 py-3 px-4 rounded-lg w-full outline-none border border-white/20 focus:border-green-200"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <MainButton>Send Message</MainButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

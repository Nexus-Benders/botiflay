import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      label: "Facebook",
      href: "https://www.facebook.com",
      icon: "/social/facebook.png",
    },
    {
      id: 2,
      label: "Linkedin",
      href: "https://www.facebook.com",
      icon: "/social/linkedin.png",
    },

    {
      id: 3,
      label: "Youtube",
      href: "https://www.facebook.com",
      icon: "/social/youtube.png",
    },
    {
      id: 4,
      label: "Twitter",
      href: "https://www.facebook.com",
      icon: "/social/twitter.png",
    },
  ];

  return (
    <div
      className={`bg-[url("/assets/footer.png")] bg-cover bg-center bg-no-repeat lg:min-h-[550px]  relative w-full flex justify-center items-center`}
    >
      <div className="flex justify-center items-center h-full">
        <div className="w-[627px] h-60 relative">
          <div className="left-0 top-[38px] absolute text-center justify-start text-white text-5xl font-bold font-['Space_Grotesk'] uppercase leading-[60px]">
            Ready to make
            <br />
            your website stand out?
          </div>
          <div className="px-10 py-4 left-[210px] top-[190px] absolute bg-gradient-to-b cursor-pointer from-zinc-700/0 to-gray-400/60 rounded-[100px] shadow-[0px_10px_40px_0px_rgba(255,255,255,0.15)] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] shadow-[inset_0px_8px_10px_0px_rgba(246,249,255,0.20)]  outline-1 outline-offset-[-1px] outline-lime-500/0 backdrop-blur-[10px] inline-flex justify-center items-center gap-3">
            <div className="text-center justify-start text-white text-lg font-bold font-['Space_Grotesk'] leading-none">
              Start A Project
            </div>
          </div>
          <div className="px-2 py-1.5 left-[235px] top-0 absolute bg-white/5 rounded-[30px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] inset-shadow-[inset_0px_-1px_1.7000000476837158px_0px_rgba(0,0,0,0.17)]  outline-1 outline-offset-[-1px] outline-white/10 inline-flex justify-center items-center gap-1.5">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-1.5 h-1.5 left-[9px] top-[1.33px] absolute  outline-[1.50px] outline-offset-[-0.75px] outline-lime-500" />
              <div className="w-1.5 h-1.5 left-[1.33px] top-[1.33px] absolute  outline-[1.50px] outline-offset-[-0.75px] outline-lime-500" />
              <div className="w-1.5 h-1.5 left-[9px] top-[9px] absolute  outline-[1.50px] outline-offset-[-0.75px] outline-lime-500" />
              <div className="w-1.5 h-1.5 left-[1.33px] top-[9px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-lime-500" />
            </div>
            <div className="text-center justify-start text-white text-xs font-medium font-['Space_Grotesk'] leading-none">
              24/7 Spots Available
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-10 flex justify-between items-center lg:gap-32 gap-16 xl:gap-52">
        <div className="w-full text-center text-sm  text-[#F4F3F3]">
          &copy; {new Date().getFullYear()} BotiFlay. All rights reserved.
        </div>
        <div className="flex flex-row gap-3 w-full justify-center">
          {socialLinks.map((link) => (
            <Link href={link.href} key={link.id}>
              <Image src={link.icon} alt={link.label} width={56} height={56} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

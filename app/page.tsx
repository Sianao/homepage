"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles, divider } from "@heroui/theme";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { useState } from "react";
export default function Home() {
  const Sites = ({ site }: { site: string }) => {
    return (
      <div className="
         w-[calc(100%-25px)] h-1/2 group  p-[9px] text-white border-transparent 
          border-1 opacity-1  duration-500 hover:border-yellow-700 
         bg-[rgb(19, 20, 24)] rounded-lg  sm:w-[calc(20%)]    items-center sm:
          text-[18px]   flex flex-row ">  
        <div className="flex flex-col p-4 text-3xl m-1 rounded-lg w-full text-clip   ">
          <div className=" ">
          {site}
          </div>
          <div>This is desc</div>
        </div>
        <Icon
          icon="ri:heart-3-line"
          className=" duration-500 text-5xl  pr-5  w-1/2 group-hover:w-[0%] sm:w[0] text-[36px]  text-white items-center justify-center   "
        />
      </div>
    )
  }
  const Icons = ({ icon }: { icon: string }) => {
    return (
      <div className="pr-1">
        <Icon
          onClick={() => { }}
          width={22}
          height={22}
          icon={icon}
          className="transition-all duration-500 ease-out 
        w-[47px] h-[40px]
        box-border
         hover:bg-[rgb(137,172,255)]
        rounded-md
        flex gap-1
        items-center justify-center
        shrink-0
        hover:w-[95px] hover:-translate-y-0.1"
        />
      </div>
    );
  };
  return (
    <div className="flex text-white flex-col f w-full loat-right box-border  bg-black pl-7  pt-10">
      <div className="flex  flex-wrap text-4xl pl-4 pb-4 font-[600] font-[mono]  ">
        <div className=" font-[600] font-[mono]    whitespace-pre ">{`Hello,I'm `}</div>
        <span
          className="font-[600] font-[mono]  
        bg-clip-text text-transparent  bg-[linear-gradient(120deg,rgb(133,62,255),#f76cc6_30%,rgb(255,255,255)_60%)] bg-[length:200%] 
        animate-[backgroundanimation_3s_ease-in-out_infinite]"
        >
          Sianao!
        </span>
      </div>
      
      <div className=" text-white text-[20px]  font-[mono] bg-black  pl-4 ">{`Talk is cheap , so we sleep `}</div>
      <div className="gap-2 h-14 mt-5 flex flex-row pl-4 ">
        <Icons icon="tabler:brand-github-copilot"></Icons>
        <Icons icon="mdi:email-open"></Icons>
        <Icons icon="mingcute:telegram-fill"></Icons>
      </div>

      <div className="w-1/1 items-center justify-center   ">
        <img 
          src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg"
        ></img>
      </div>
      <div>
        <div className="transition-all duration-500 ease-out h-full
        box-border
        text-4xl
        pt-4
        rounded-md
         gap-1
        items-center justify-center
        shrink-0
      font-[mono] 
        flex flex-row hover:-translate-y-0.5" >
          <Icon  color="white" icon="mingcute:telegram-fill"  ></Icon>
          <div className="w-full text-[100%] text-white">Website</div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap py-5 font-mono m-1 items-center   ">
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>


      </div>
      <div>
        <div className="transition-all duration-500 ease-out
        box-border
        text-4xl
        pt-4
        rounded-md
         gap-1
        items-center justify-center
        shrink-0
      font-[mono] 
        flex flex-row hover:-translate-y-0.5" >
          <Icon  color="white" icon="mingcute:telegram-fill"  ></Icon>
          <div className="w-full text-[100%] text-white">Website</div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap py-5 font-mono  box-border ">
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>
        <Sites site="Github"></Sites>


      </div>
    	<footer className="items-center justify-center flex flex-col w-full h-20 bg-black text-white">
		Zyyo © 2024 |
		<a href="https://beian.miit.gov.cn/">
			豫ICP备2023015852号-1 </a>
	</footer>
    </div>
  );
}

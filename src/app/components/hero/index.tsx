import Image from "next/image";
import { ReactNode } from "react";

interface HeroData {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
}

export function Hero(props: HeroData) {
  return (
    <main>
      <div className="flex flex-col items-center justify-center relative">
        <div className="w-full h-96 flex flex-col items-center justify-center bg-baseBackground relative">
          <Image
            className="object-cover w-full opacity-30 relative"
            fill={true}
            priority={true}
            quality={100}
            src={props.bannerUrl}
            alt={props.heading}
          />
        </div>
        <div className="absolute flex flex-col gap-6 items-center justify-center">
          <h1 className="text-baseWhite text-3xl md:text-[44px] font-bold w-[60%] text-center">
            {props.heading}
          </h1>
          <a
            className="flex items-center gap-2 bg-baseButton text-baseWhite font-semibold 
            p-2.5 px-14 rounded-md shadow-md hover:scale-105 duration-200"
            target="_blank"
            href={props.buttonUrl}
          >
            {props.icon}
            {props.buttonTitle}
          </a>
        </div>
      </div>
    </main>
  );
}

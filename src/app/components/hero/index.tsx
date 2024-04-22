import Image from "next/image";

interface HeroData {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
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
          <h1 className="text-baseWhite text-3xl md:text-4xl font-extrabold w-3/4 text-center">
            {props.heading}
          </h1>
          <a
            className="bg-baseButton text-baseWhite font-semibold p-3 px-16 rounded-md shadow-md hover:scale-105 duration-200"
            target="_blank"
            href={props.bannerUrl}
          >
            {props.buttonTitle}
          </a>
        </div>
      </div>
    </main>
  );
}

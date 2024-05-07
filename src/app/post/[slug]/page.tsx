import { Container } from "@/app/components/container";
import { getDataHome, getItemBySlug } from "../../../utils/actions/get-data";
import { PostProps } from "@/utils/post-type";
import Image from "next/image";
import Link from "next/link";
import { HomeData } from "@/utils/home-type";
import { FaWhatsapp } from "react-icons/fa";
import { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - Sua oficina especializada!",
        description: "Oficinal de carros em São Paulo",
      };
    });

    return {
      title: `Metadata - ${objects[0].title}`,
      description: `${objects[0].metadata.description}`,
      openGraph: {
        title: `DevMotors - ${objects[0].title}`,
        images: [objects[0].metadata.banner.url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficinal de carros em São Paulo",
    };
  }
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data: PostProps = await getItemBySlug(slug);
  const { object }: HomeData = await getDataHome();

  return (
    <>
      {data.objects.map((item) => (
        <div key={item.slug}>
          <div className="w-full h-96 flex flex-col items-center justify-center bg-baseBackground relative">
            <Image
              className="object-cover w-full opacity-30 relative"
              fill={true}
              priority={true}
              quality={100}
              src={item.metadata.banner.url}
              alt={item.title}
            />

            <div className="absolute flex flex-col gap-6 items-center justify-center w-full">
              <h1 className="text-baseWhite text-2xl  md:text-5xl font-bold w-[80%] text-center">
                {item.title}
              </h1>

              <Link
                className="flex items-center gap-2 bg-baseButton text-baseWhite font-semibold 
                  p-2.5 px-14 rounded-md shadow-md hover:scale-105 duration-200"
                target="_blank"
                href={object.metadata.cta_button.url}
              >
                <FaWhatsapp size={24} className="text-baseWhite" />
                {object.metadata.cta_button.title}
              </Link>
            </div>
          </div>
          <Container>
            <div className="w-[96%] mx-auto xl:mx-0 xl:w-full flex flex-col md:flex-row items-center justify-between my-20">
              <div className="flex flex-col w-full max-w-3xl">
                <h1 className="w-full flex items-center justify-center md:justify-start text-2xl md:text-3xl lg:text-4xl font-bold mb-6 uppercase">
                  {item.metadata.description.title}
                </h1>
                <p>{item.metadata.description.text}</p>
                {item.metadata.description.button_url && (
                  <Link
                    className="mx-auto md:mx-0 bg-baseBackground text-baseWhite font-bold w-60 flex items-center justify-center p-1 rounded-md mt-4
                    hover:bg-baseWhite hover:text-baseBackground hover:ring-1 hover:ring-baseBackground duration-300 
                    "
                    href={item.metadata.description.button_url}
                    target="_blank"
                  >
                    <button>{item.metadata.description.button_title}</button>
                  </Link>
                )}
              </div>
              <div className="w-80 h-96 mt-10 lg:mt-0 overflow-hidden rounded-xl flex flex-col items-center justify-center bg-baseBackground relative">
                <Image
                  fill
                  objectFit="cover"
                  className="rounded-rounded-xl hover:duration-300 hover:scale-105 transition-all"
                  priority={true}
                  quality={100}
                  src={item.metadata.banner.url}
                  alt={item.title}
                />
              </div>
            </div>
          </Container>
        </div>
      ))}
    </>
  );
}

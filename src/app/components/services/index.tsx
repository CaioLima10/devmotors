import { HomeData } from "@/utils/home-type";
import Image from "next/image";

export async function Services({ object }: HomeData) {
  return (
    <>
      <section
        id="services"
        className="flex flex-col md:flex-row items-center justify-between w-[96%] xl:w-full mx-auto my-20"
      >
        <div className="flex flex-col md:flex-row gap-20 items-center justify-between w-full">
          <article className="w-full max-w-2xl">
            <h1 className="w-full flex items-center justify-center md:justify-start text-4xl font-bold mb-6 uppercase">
              Sobre
            </h1>
            <p>{object.metadata.about.description}</p>
          </article>
          <div className="relative w-80 h-96 overflow-hidden rounded-xl">
            <Image
              fill
              objectFit="cover"
              className="rounded-rounded-xl hover:duration-300 hover:scale-105 transition-all"
              src={object.metadata.about.banner.url}
              alt="banner"
            />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center mx-auto">
        <div className="w-[96%] xl:w-full">
          <h1 className="w-full flex items-center justify-center text-4xl font-bold mb-10 uppercase">
            Conheça nossos serviços
          </h1>
          <article className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {object.metadata.services.map((service, index) => (
              <>
                <div key={index} className="relative w-50 h-60 group">
                  <div className=" overflow-hidden rounded-xl">
                    <Image
                      fill
                      objectFit="cover"
                      className="rounded-xl hover:duration-300 hover:scale-105 transition-all"
                      src={service.image.url}
                      alt={service.image.url}
                    />
                  </div>
                  <p
                    className="flex items-center bg-zinc-400 justify-center absolute 
                  -bottom-8 left-0 right-0 overflow-auto group-hover:font-bold"
                  >
                    {service.description}
                  </p>
                </div>
              </>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

import { HomeData } from "@/utils/home-type";
import { FaClock, FaPhone, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

export function Footer({ object }: HomeData) {
  return (
    <footer
      id="contact"
      className="flex flex-col mx-auto w-[96%] xl:w-full my-20"
    >
      <section
        className="w-full max-w-3xl min-h-[480px] md:h-96 mx-auto rounded-xl bg-baseBackground text-baseWhite 
        flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Contatos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-10">
          <article className="flex gap-4 items-center w-full">
            <FaVoicemail size={36} />

            <div className="flex flex-col">
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </article>

          <article className="flex gap-4 items-center w-full mt-6">
            <AiOutlineMail size={36} />
            <div className="flex flex-col">
              <strong>Contato</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
          </article>

          <article className="flex gap-4 items-center w-full  mt-6">
            <FaRegAddressCard size={36} />
            <div className="flex flex-col">
              <strong>Endereço</strong>
              <p>{object.metadata.contact.address}</p>
            </div>
          </article>

          <article className="flex gap-4 items-center w-full mt-6">
            <FaClock size={36} />
            <div className="flex flex-col">
              <strong>Horario de funcionamento</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </article>
        </div>
      </section>
      <div className="w-full max-w-3xl flex items-center justify-center mx-auto my-6">
        <div className="absolute flex flex-col gap-6 items-center justify-center">
          <a
            className="flex items-center gap-2 bg-baseButton text-baseWhite font-semibold 
            p-2.5 px-14 mt-8 rounded-md shadow-md hover:scale-105 duration-200"
            target="_blank"
            href={object.metadata.cta_button.url}
          >
            <FaWhatsapp size={24} className="text-baseWhite" />
            {object.metadata.cta_button.title}
          </a>
        </div>
      </div>
    </footer>
  );
}

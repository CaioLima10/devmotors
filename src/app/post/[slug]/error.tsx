"use client";

import Link from "next/link";
import { TbMoodEmpty } from "react-icons/tb";

export default function Error() {
  return (
    <div
      style={{ height: "calc(100vh - 56px)" }}
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="flex items-center gap-4 mb-4">
        <TbMoodEmpty size={60} />
        <h1 className="font-bold text-xl md:text-3xl">
          Ops essa página não existe!
        </h1>
      </div>
      <Link
        className="w-60 h-10 bg-baseBackground text-baseWhite rounded-md flex items-center justify-center"
        href={"/"}
      >
        Voltar pra home
      </Link>
    </div>
  );
}

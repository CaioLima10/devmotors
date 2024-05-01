"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [top, setTop] = useState(true);

  const scrollHandle = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, [top]);

  return (
    <header
      className={`w-full flex items-center justify-center h-12 z-10 fixed shadow-md ${
        top ? "bg-baseWhite" : "bg-baseWhite/25"
      }`}
    >
      <div className="w-[96%] xl:w-full max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <div>
            <Link className="font-bold text-xl" href={"/"}>
              Dev Motors
            </Link>
          </div>
          <nav className="flex items-center gap-5">
            <Link
              className="uppercase text-xs hover:font-medium duration-300"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="uppercase text-xs hover:font-medium duration-300"
              href={"/#services"}
            >
              sobre
            </Link>
            <Link
              className="uppercase text-xs hover:font-medium duration-300"
              href={"/#contact"}
            >
              contatos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SubMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-[96%] xl:w-full max-w-7xl mx-auto">
      {isOpen && (
        <div
          className="fixed top-0 w-full min-h-screen left-0 bg-baseBackground/40 z-10"
          onClick={toggleMenu}
        />
      )}
      <div className=" pt-16 pb-4 ">
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-sm bg-baseBackground "
          >
            <Menu size={24} className="text-baseWhite" />
          </button>
          <span className="font-medium">Serviços</span>
        </div>

        <ul
          className={`${
            isOpen
              ? "flex flex-col items-start z-20 fixed top-0 left-0 bg-baseWhite shadow-md w-60 min-h-screen"
              : "hidden"
          } sm:flex items-center gap-4`}
        >
          <button
            onClick={toggleMenu}
            className="flex fixed left-2 top-14  sm:hidden  p-1 rounded-sm bg-baseBackground "
          >
            <X size={24} className="text-baseWhite" />
          </button>
          <li
            className="bg-baseBackground text-baseWhite hover:bg-baseWhite hover:text-baseBackground hover:ring-1 hover:ring-baseBackground
            duration-300 p-1 px-3 mt-24 sm:mt-0 rounded-sm"
          >
            <Link href={"/post/1"}>Página 1</Link>
          </li>
          <li
            className="bg-baseBackground text-baseWhite hover:bg-baseWhite hover:text-baseBackground hover:ring-1 
            hover:ring-baseBackground duration-300 p-1 px-3 rounded-sm"
          >
            <Link href={"/post/2"}>Página 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

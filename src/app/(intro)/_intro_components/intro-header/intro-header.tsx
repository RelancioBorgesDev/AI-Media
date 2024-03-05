"use client";
import Logo from "@/components/logo";
import { ChevronDown, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function IntroHeader() {
  return (
    <header className="flex items-center justify-between z-40 p-4 rounded">
      <Logo logo_link="/" />
      <ul className="flex gap-8 items-center">
        <li></li>
        <li>
          <ScrollLink
            to={"sobre"}
            smooth={true}
            duration={500}
            offset={0}
            activeClass={"text-zinc-950 dark:text-slate-300 ml-6"}
            className="flex gap-2 items-center cursor-pointer text-xl hover:rounded-full hover:bg-slate-100/10 p-2 duration-500 transition-all ease-in-out"
            spy={true}
          >
            Sobre
            <ChevronDown />
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to={"produtos"}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass={"text-zinc-950 dark:text-slate-300 ml-6"}
            className="flex gap-2 items-center cursor-pointer text-xl hover:rounded-full hover:bg-slate-100/10 p-2 duration-500 transition-all ease-in-out"
            spy={true}
          >
            Produtos
            <ChevronDown />
          </ScrollLink>
        </li>
      </ul>
      <button className="bg-[#09090D] p-2 rounded-full hover:brightness-110  duration-100 group">
        <Link href={"/auth"} className="flex gap-2 items-center font-bold">
          Sign in
          <MoveUpRight className="group-hover:scale-125" />
        </Link>
      </button>
    </header>
  );
}

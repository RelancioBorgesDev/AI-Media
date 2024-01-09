"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Auth() {
  return (
    <main className="grid grid-cols-2">
      <div className=" bg-zinc-500 h-screen flex justify-around flex-col">
        <div className="flex flex-col  h-full p-4 gap-60">
          <Logo />
          <p className="text-2xl w-96 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            qui voluptatibus nihil at ex totam est sunt esse doloribus porro
            fugiat aut, similique, quasi laudantium omnis itaque tempora minus
            obcaecati.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col p-5 h-screen justify-center items-center ">
        <div className="w-[402px] flex flex-col gap-2">
          <Button className="w-full bg-[#37323E] text-white font-bold text-2xl">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="w-full bg-[#37323E] text-white font-bold text-2xl">
            <Link href="/signin">Cadastro</Link>
          </Button>
        </div>
        <span className="absolute bottom-8">
          <Logo />
        </span>
      </div>
    </main>
  );
}

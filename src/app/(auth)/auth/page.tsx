"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Auth() {
  return (
    <main className="grid grid-cols-2">
      <div className=" bg-zinc-500 h-screen flex justify-center flex-col">
        <div className="flex flex-col  h-full p-4 gap-64">
          <Logo />
          <p className="text-2xl w-96 text-start font-bold tracking-wide leading-relaxed">
            Write a text that goes with a kitten gif for a friend having a rough
            day asking a friend
          </p>
        </div>
      </div>
      <div className="relative flex flex-col p-5 h-screen justify-center items-center ">
        <div className="w-[402px] flex flex-col gap-2">
          <Button className="w-full bg-[#37323E] text-white font-bold text-2xl hover:bg-slate-800">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="w-full bg-[#37323E] text-white font-bold text-2xl hover:bg-slate-800">
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

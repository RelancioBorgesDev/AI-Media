"use client";
import { Separator } from "@radix-ui/react-separator";
import React, { ReactNode } from "react";

interface IntroInfoProps {
  section_id: string;
  info_title: string;
  info_description: string;
  children: ReactNode;
}

export default function IntroInfo({
  section_id,
  info_title,
  info_description,
  children,
}: IntroInfoProps) {
  return (
    <section
      id={section_id}
      className="h-screen px-10 py-5 flex flex-col gap-16"
    >
      <header className="flex items-center justify-between px-10 py-4">
        <h1 className="text-6xl font-bold">{info_title}</h1>
        <p className="w-[779px] text-2xl font-bold">{info_description}</p>
      </header>
      <Separator orientation="horizontal" className=" text-white" />
      <div className="px-10 flex justify-center gap-8">{children}</div>
    </section>
  );
}

import Link from "next/link";
import React from "react";

interface LogoProps {
  logo_link: string;
}
export default function Logo({ logo_link }: LogoProps) {
  return (
    <span className="w-36 bg-zinc-950 p-2 rounded-full text-2xl font-bold text-white cursor-pointer flex items-center justify-center">
      <Link href={logo_link}>AI Media</Link>
    </span>
  );
}

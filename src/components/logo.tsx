import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <span className="w-36 bg-zinc-950 p-2 rounded-full text-2xl font-bold text-white cursor-pointer flex items-center justify-center">
      <Link href={"/"}>AI Media</Link>
    </span>
  );
}

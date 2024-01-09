"use client"
import Link from "next/link";
import { FacebookLogo, GoogleLogo, InstagramLogo } from "phosphor-react";
import React from "react";

export default function SocialLoginIcons() {
  return (
    <div className="flex justify-around">
      <Link href={"/"}>
        <GoogleLogo size={32} />
      </Link>
      <Link href={"/"}>
        <FacebookLogo size={32} />
      </Link>
      <Link href={"/"}>
        <InstagramLogo size={32} />
      </Link>
    </div>
  );
}

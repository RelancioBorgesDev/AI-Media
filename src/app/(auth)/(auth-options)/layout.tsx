import Logo from "@/components/logo";
import React, { ReactNode } from "react";

export default function AuthOptionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative flex w-full h-screen items-center justify-center gap-32">
      <>
        {children}

        <span className="absolute bottom-14">
          <Logo />
        </span>
      </>
    </main>
  );
}

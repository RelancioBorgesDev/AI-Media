import React, { ReactNode } from "react";


export default function Title({ children }: { children: ReactNode }) {
  return (
    <p className="text-3xl w-96 text-start font-bold tracking-wide leading-relaxed">
      {children}
    </p>
  );
}

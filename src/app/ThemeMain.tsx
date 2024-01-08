"use client";
import { ThemeProvider } from "@/components/theme/theme-provider";
import React, { ReactNode } from "react";

export default function ThemeMain({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}

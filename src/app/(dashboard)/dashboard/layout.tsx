import Header from "@/components/header";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="">{children}</main>
    </div>
  );
}

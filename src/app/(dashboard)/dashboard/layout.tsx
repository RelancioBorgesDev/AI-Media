import React, { ReactNode } from "react";
import Header from "../_components/header/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="">{children}</main>
    </div>
  );
}

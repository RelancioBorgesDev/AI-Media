import React, { ReactNode } from "react";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Auth',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="">{children}</div>;
}

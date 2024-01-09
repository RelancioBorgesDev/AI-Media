import React, { ReactNode } from "react";

export default function FormContainer({ children }: { children: ReactNode }) {
  return (
    <form className="w-[516px] h-[539px] bg-[#26283B] p-10 rounded flex flex-col gap-5 shadow-2xl justify-center">
      {children}
    </form>
  );
}

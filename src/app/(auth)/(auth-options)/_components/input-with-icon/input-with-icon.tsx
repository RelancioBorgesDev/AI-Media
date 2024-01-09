import React, { ElementType, ReactNode } from "react";

interface IInputWithIcon {
  Icon: ElementType;
  children: ReactNode;
}

export default function InputWithIcon({ Icon, children }: IInputWithIcon) {
  return (
    <div className="bg-[#011627] flex p-6 gap-3 text-[#6B6D76] rounded">
      <Icon />
      {children}
    </div>
  );
}

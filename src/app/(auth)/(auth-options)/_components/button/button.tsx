import React from "react";

export default function Button({ value }: { value: string }) {
  return (
    <input
      type="submit"
      className="bg-[#011627] p-3 text-xl font-bold rounded"
      value={value}
    />
  );
}

import Logo from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-900 w-full h-screen">
      <header className="bg-zinc-950 w-full p-5">
        <Logo />
      </header>
    </main>
  );
}

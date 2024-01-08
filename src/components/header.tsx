"use client";
import { useEffect, useState } from "react";
import Logo from "./logo";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Gear, Moon, SignOut, User } from "phosphor-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

export default function Header() {
  const router = usePathname();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(router);
  }, [router]);

  return (
    <header className="bg-zinc-950 w-full p-5 flex items-center justify-between gap-16">
      <div className="flex items-center">
        <Logo />
        <Separator orientation="vertical" className="h-6" />
      </div>

      <ul className="flex gap-4 items-center">
        <li
          className={`text-white font-bold p-3 cursor-pointer relative ${
            activeLink === "/" && "border-b-2"
          }`}
        >
          <Link href="/">Dashboard</Link>
        </li>
        <li
          className={`text-white font-extralight p-3 cursor-pointer relative  ${
            activeLink === "/createContent" && "border-b-2"
          }`}
        >
          <Link href="/createContent">CreateContent</Link>
        </li>
        <li
          className={`text-white font-extralight p-3 cursor-pointer relative  ${
            activeLink === "/createPosts" && "border-b-2"
          }`}
        >
          <Link href="/createPosts">CreatePosts</Link>
        </li>
      </ul>

      <div className="flex gap-4">
        <span className="border-2 border-white rounded-lg">
          <Moon size={50} className="text-white" />
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src={"https://github.com/RelancioBorgesDev.png"}
              alt="profile pic"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col ">
            <DropdownMenuLabel className="flex gap-4 justify-between p-5">
              <Image
                src={"https://github.com/RelancioBorgesDev.png"}
                alt="profile pic"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="text-white">
                <h2 className="text-lg ">Relancio Borges dos Santos</h2>
                <h4 className="text-xs">relancio@gmail.com</h4>
              </div>
              <Button>Ver perfil</Button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="flex gap-4 items-center p-5  text-xl text-white"
                href={"/settings"}
              >
                <Gear size={42} />
                <span>
                  <h1 className="text-lg">Configurações</h1>
                  <h4 className="text-xs">
                    Gerencie as configurações da sua conta
                  </h4>
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-red-500">
              <Link
                className="flex gap-4 items-center p-5  text-xl text-white"
                href={"/settings"}
              >
                <SignOut size={42} />
                <span>
                  <h1 className="text-lg">Sair</h1>
                  <h4 className="text-xs">
                    Faça logout
                  </h4>
                </span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

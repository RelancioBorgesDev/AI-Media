import Logo from "@/components/logo";
import { ChevronDown, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import banner from "@/assets/banner-intro.jpg";
import social from "@/assets/social-media.jpg";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section id="inicio" className="relative px-10 py-5">
        <div className="absolute h-screen bg-cover bg-no-repeat bg-center top-0 bottom-0 right-0 left-0 pointer-events-none">
          <div className="bg-intro opacity-25 h-screen"></div>
        </div>
        <header className="flex items-center justify-between z-40 p-4 rounded">
          <Logo />
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href={"#inicio"}
                className="flex gap-2 items-center cursor-pointer text-xl hover:rounded-full hover:bg-slate-100/10 p-2 duration-500 transition-all ease-in-out"
              >
                Inicio
                <ChevronDown />
              </Link>
            </li>
            <li>
              <Link
                href={"#sobre"}
                className="flex gap-2 items-center cursor-pointer text-xl hover:rounded-full hover:bg-slate-100/10 p-2 duration-500 transition-all ease-in-out"
              >
                Sobre
                <ChevronDown />
              </Link>
            </li>
            <li>
              <Link
                href={"#produtos"}
                className="flex gap-2 items-center cursor-pointer text-xl hover:rounded-full hover:bg-slate-100/10 p-2 duration-500 transition-all ease-in-out"
              >
                Produtos
                <ChevronDown />
              </Link>
            </li>
          </ul>
          <button className="bg-[#09090D] p-2 rounded-full hover:brightness-110  duration-100 group">
            <Link href={"/auth"} className="flex gap-2 items-center font-bold">
              Sign in
              <MoveUpRight className="group-hover:scale-125" />
            </Link>
          </button>
        </header>
        <section className="h-header-subtract-intro flex flex-col  justify-end gap-4">
          <p className="text-white text-5xl text-left leading-tight font-bold">
            Produzindo Conteúdo Social
            <br /> Atraente a partir de Dados
          </p>
          <button className="w-fit rounded-full bg-[#07070D] flex border-2 border-white px-4 py-2 hover:bg-white hover:text-black font-semibold duration-500">
            Saiba mais sobre a criação de conteúdo
          </button>
        </section>
      </section>
      <section id="sobre" className="h-screen px-10 py-5 flex flex-col gap-16">
        <header className="flex items-center justify-between px-10 py-4">
          <h1 className="text-6xl font-bold">Sobre</h1>
          <p className="w-[779px] text-2xl font-bold">
            AIMedia is an AI research and deployment company dedicated to
            advancing the capabilities of artificial intelligence.
          </p>
        </header>
        <Separator orientation="horizontal" className=" text-white" />
        <div className="px-10 flex justify-center gap-8">
          <p className="w-1/2 font-semibold text-xl">
            A AIMedia é uma empresa de pesquisa e implementação de inteligência
            artificial comprometida em impulsionar as capacidades dessa
            tecnologia inovadora. Nossa missão fundamental é assegurar que a
            inteligência artificial geral beneficie toda a humanidade. Buscamos
            utilizar a inteligência artificial de maneira ética e responsável,
            visando contribuir de maneira positiva para a sociedade em diversos
            setores.
          </p>
          <Image
            src={banner}
            alt=""
            className="w-full h-[600px] shadow-xl rounded"
          />
        </div>
      </section>

      <section id="produtos"className=" px-10 py-5 flex flex-col gap-16">
        <header className="flex flex-row-reverse items-center justify-between px-10 py-4">
          <h1 className="text-6xl font-bold">Produtos</h1>
          <p className="w-[779px] text-2xl font-bold">
            AIMedia is an AI research and deployment company dedicated to
            advancing the capabilities of artificial intelligence.
          </p>
        </header>
        <Separator orientation="horizontal" className=" text-white" />
        <div className="px-10 flex justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src={social}
              alt=""
              className="w-full shadow-xl rounded"
              height={300}
            />
            <p className="text-xl font-bold">Gerador de Conteúdo</p>
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src={banner}
              alt=""
              className="w-full  shadow-xl rounded"
              height={300}
            />
            <p className="text-xl font-bold">Gerador de Conteúdo</p>
          </div>
        </div>
      </section>
    </div>
  );
}

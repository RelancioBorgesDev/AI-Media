"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FacebookIcon, Instagram, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { CaretRight, Link, Lock, WhatsappLogo } from "phosphor-react";
import React from "react";

export default function Settings() {
  return (
    <main className="header-subtract p-24 flex flex-col  gap-16">
      <header className="flex items-center  gap-8">
        <Image
          src={"https://github.com/RelancioBorgesDev.png"}
          alt="profile pic"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <span>
          <h1 className="text-gray-100 font-bold text-2xl">Configurações</h1>
          <p className="text-gray-400">
            Gerencie as informações de conta, dados pessoais e assinaturas
          </p>
        </span>
      </header>

      <Tabs className="w-full h-full flex  gap-32" orientation="horizontal">
        <TabsList className="flex flex-col gap-4">
          <TabsTrigger
            value="account"
            className="flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Link size={32} />
              <h1>Conexões</h1>
            </span>
            <CaretRight size={32} />
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Lock size={32} />
              <h1>Segurança</h1>
            </span>
            <CaretRight size={32} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="w-full h-full px-5 flex flex-col gap-5">
            <div className="p-5 flex items-center justify-between gap-5 bg-zinc-800 rounded-lg">
              <Instagram size={32} className="text-white" />
              <span className="flex flex-col">
                <h1 className="text-white font-bold">Instagram</h1>
                <p className="text-gray-500">
                  Conecte sua conta para podermos ter acesso a seus dados do
                  Instagram
                </p>
              </span>
              <Button variant={"outline"} className="text-zinc-950">
                Conectar
              </Button>
            </div>
            <div className="p-5 flex items-center justify-between gap-5 bg-zinc-800 rounded-lg">
              <FacebookIcon size={32} className="text-white" />
              <span className="flex flex-col">
                <h1 className="text-white font-bold">Facebook</h1>
                <p className="text-gray-500">
                  Conecte sua conta para podermos ter acesso a seus dados do
                  Facebook
                </p>
              </span>
              <Button variant={"outline"} className="text-zinc-950">
                Conectar
              </Button>
            </div>
            <div className="p-5 flex items-center justify-between gap-5 bg-zinc-800 rounded-lg">
              <WhatsappLogo size={32} className="text-white" />
              <span className="flex flex-col">
                <h1 className="text-white font-bold">Whatsapp</h1>
                <p className="text-gray-500">
                  Conecte sua conta para podermos ter acesso a seus dados do
                  Whatsapp
                </p>
              </span>
              <Button variant={"outline"} className="text-zinc-950">
                Conectar
              </Button>
            </div>

            <div className="p-5 flex items-center justify-between gap-5 bg-zinc-800 rounded-lg">
              <TwitterIcon size={32} className="text-white" />
              <span className="flex flex-col">
                <h1 className="text-white font-bold">Twitter</h1>
                <p className="text-gray-500">
                  Conecte sua conta para podermos ter acesso a seus dados do
                  Twitter
                </p>
              </span>
              <Button variant={"outline"} className="text-zinc-950">
                Conectar
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password" className="text-white">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}

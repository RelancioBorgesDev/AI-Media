import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center header-subtract gap-4">
        <h1 className="text-2xl text-gray-500 font-bold">
          Ainda não existe dados disponiveis para o dashboard
        </h1>
        <p className="text-gray-500 font-semibold">
          Faça o {""}
          <span className="text-blue-500 hover:underline cursor-pointer">
            <Link href={"/settings"}>link</Link>  {""}
          </span>
        
          de sua rede social em nossa plataforma para obter acesso aos dados
        </p>
      </main>
    </>
  );
}

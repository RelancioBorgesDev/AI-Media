import Image from "next/image";
import banner from "@/assets/banner-intro.jpg";
import social from "@/assets/social-media.jpg";
import IntroHeader from "./_intro_components/intro-header/intro-header";
import IntroInfo from "./_intro_components/intro-info/intro-info";


export default function Intro() {
  return (
    <div className="flex flex-col gap-8">
      <section id="inicio" className="relative px-10 py-5">
        <div className="absolute h-screen bg-cover bg-no-repeat bg-center top-0 bottom-0 right-0 left-0 pointer-events-none">
          <div className="bg-intro opacity-25 h-screen"></div>
        </div>
        <IntroHeader />
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
      <IntroInfo
        section_id="sobre"
        info_title="Sobre"
        info_description="AIMedia is an AI research and deployment company dedicated to advancing the capabilities of artificial intelligence."
      >
        <p className="w-1/2 font-semibold text-xl">
          A AIMedia é uma empresa de pesquisa e implementação de inteligência
          artificial comprometida em impulsionar as capacidades dessa tecnologia
          inovadora. Nossa missão fundamental é assegurar que a inteligência
          artificial geral beneficie toda a humanidade. Buscamos utilizar a
          inteligência artificial de maneira ética e responsável, visando
          contribuir de maneira positiva para a sociedade em diversos setores.
        </p>
        <Image
          src={banner}
          alt=""
          className="w-full h-[600px] shadow-xl rounded"
        />
      </IntroInfo>

      <IntroInfo
        section_id="produtos"
        info_title="Produtos"
        info_description=" AIMedia is an AI research and deployment company dedicated to advancing the capabilities of artificial intelligence."
      >
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
      </IntroInfo>
    </div>
  );
}

import { Separator } from "@/components/ui/separator";
import { KeyRound, Mail } from "lucide-react";
import React from "react";
import FormContainer from "../_components/form-container/form-container";
import SocialLoginIcons from "../_components/social-login-icons/social-login-icons";
import InputWithIcon from "../_components/input-with-icon/input-with-icon";
import Title from "../_components/title/title";
import Button from "../_components/button/button";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div>
        <Title>Faça seu login e aproveite o nossos serviços.</Title>
      </div>
      <div>
        <FormContainer>
          <InputWithIcon Icon={Mail}>
            <input
              type="email"
              placeholder="E-Mail"
              className="bg-transparent w-full h-full outline-none rounded"
            />
          </InputWithIcon>

          <InputWithIcon Icon={KeyRound}>
            <input
              type="password"
              placeholder="Senha"
              className="bg-transparent w-full h-full outline-none rounded"
            />
          </InputWithIcon>

          <small className="hover:underline cursor-pointer">
            Esqueci minha senha
          </small>

          <Button value="Entrar" />

          <small className="text-center hover:underline cursor-pointer">
            <Link href={"/signin"}>Não tem uma conta ? Faça seu Registro</Link>
          </small>

          <Separator
            orientation="horizontal"
            className="w-full  bg-[#6B6D76]"
          />

          <SocialLoginIcons />
        </FormContainer>
      </div>
    </>
  );
}

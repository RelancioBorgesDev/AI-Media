import React from "react";
import Title from "../_components/title/title";
import FormContainer from "../_components/form-container/form-container";
import InputWithIcon from "../_components/input-with-icon/input-with-icon";
import { KeyRound, Mail } from "lucide-react";
import Button from "../_components/button/button";
import SocialLoginIcons from "../_components/social-login-icons/social-login-icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
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

          <InputWithIcon Icon={KeyRound}>
            <input
              type="password"
              placeholder="Confirmar senha"
              className="bg-transparent w-full h-full outline-none rounded"
            />
          </InputWithIcon>

          <Button value="Cadastrar" />
          <small className="text-center hover:underline cursor-pointer">
            <Link href={"/login"}>Já possui conta ? Faça o Login</Link>
          </small>
          <Separator
            orientation="horizontal"
            className="w-full  bg-[#6B6D76]"
          />
          <SocialLoginIcons />
        </FormContainer>
      </div>
      <div>
        <Title>
          Faça seu registro para você poder aproveitar os nossos serviços.
        </Title>
      </div>
    </>
  );
}

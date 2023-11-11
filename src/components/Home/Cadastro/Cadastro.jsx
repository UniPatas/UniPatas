"use client"
import Link from "next/link";
import Image from "next/image";
import Nome from "@/assets/logo-roxa-texto.png";
import Capa from "@/assets/capa.png";
import Logo from "@/assets/logo-unipatas.png";

export default function Cadastro() {

    return (
        <>
            <div className=" bg-[#a110a9] w-screen h-screen flex items-center justify-center p-16 align-center ">
                <head>
                    <title>
                        Cadastro | UniPatas
                    </title>
                </head>
                <div className=" w-96 h-full p-18 rounded-l-lg">
                    <div className="flex flex-col items-center pt-8 bg-white rounded-l-lg ">
                        {" "}
                        {/* conteiner da frase de boas vindas*/}
                        <p class="bg-[#ffc501] text-[#a110a9] px-4 py-4 flex justify-center w-64 font-bold text-3xl rounded-full ">
                            Bem vindos a
                        </p>
                        <Image
                            src={Nome}
                            width={306}
                            height={100}
                            alt="text-unipatas"
                            class="pt-2"
                        />
                        <Image
                            src={Capa}
                            width={337}
                            height={100}
                            alt="Cachorro amarelo de porte médio"
                        />
                    </div>
                </div>
                <div class="h-full w-96 bg-white rounded-r-lg flex flex-col p-8 ">
                    {" "}

                    {/*conteiner da logo */}
                    <div class="flex justify-center pt">
                        <Image src={Logo} width={100} height={50} alt="logo-unipatas" />
                    </div>

                    <div>
                        <h2 className="flex justify-center font-bold text-xl">Cadastro</h2>
                        <h2 className="flex justify-center font-bold text-sm" >Que tipo de perfil deseja?</h2>
                    </div>

                    <form class="p-6 pr-6 flex jutify-center flex-col font-bold">
                        {" "}
                        {/*formulario do login */}
                        <label> CPF </label>
                        <input type="email" class="bg-gray-200 h-8 rounded-md p-2 " />

                        <label> Email </label>
                        <input type="email" class="bg-gray-200 h-8 rounded-md p-2" />

                        <label> Número telefone </label>
                        <input type="num" class="bg-gray-200 h-8 rounded-md p-2" />

                        <label> Login </label>
                        <input type="text" class="bg-gray-200 h-8 rounded-md p-2 " />

                        <label> Senha </label>
                        <input type="password" class="bg-gray-200 h-8 rounded-md p-2 " />
                        <br />

                        <div className="text-xs">
                            <input type="checkbox" name="aceitarTermos" id="aceitarTermos" />
                            <label htmlFor="aceitarTermos"> Permito exibir minhas opções de contato no perfil</label>
                        </div>
                    </form>

                    <div>
                        <Link href={"/login"}> Voltar </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
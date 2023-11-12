"use client";
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

                        {/* conteiner da frase 'faça parte da'*/}
                        <p class="bg-[#ffc501] text-[#a110a9] px-4 py-4 flex justify-center w-64 font-bold text-3xl rounded-full ">
                            Faça parte da
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

                    <div class="flex justify-center pt"> {/*conteiner da logo */}
                        <Image src={Logo} width={100} height={50} alt="logo-unipatas" />
                    </div>

                    <div>
                        <h2 className="flex justify-center font-bold text-xl">Cadastro</h2>
                        <h2 className="flex justify-center font-bold text-sm" >Que tipo de perfil deseja?</h2>
                    </div>

                    <div className="flex justify-center space-x-4 pt-2">
                        <Link href={"/"} className="bg-[#a110a9] h-8 w-18 rounded-full px-4 pt-2 font-bold text-xs text-center text-white">Usuario</Link>
                        <Link href={"/"} className="bg-[#33b3a6] h-8 w-18 rounded-full px-4 pt-2 font-bold text-xs text-center text-white">ONG</Link>
                    </div>

                    <form class="p-2 pr-6 flex jutify-center flex-col font-bold"> {/*formulario do cadastro */}

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

                        <div className="text-xs">  {/*Conteiner checkbox */}
                            <input type="checkbox" name="aceitarTermos" id="aceitarTermos" />
                            <label htmlFor="aceitarTermos"> Permito exibir minhas opções de contato no perfil</label>
                        </div>
                    </form>

                    <div className="flex space-x-20">
                        <Link href={"/login"}> Voltar </Link>
                        <button className="bg-[#a110a9] h-8 w-24 rounded-md text-white font-bold text-sm "> Cadraste-se </button>
                    </div>
                </div>
            </div>
        </>
    )
}
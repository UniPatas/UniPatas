'use client';
import Link from "next/link";
import Image from "next/image";
import Nome from "@/assets/logo-roxa-texto.png";
import Capa from "@/assets/capa.png";
import Logo from "@/assets/logo-unipatas.png";
import '../../../app/globals.css'


export default function Cadastro() {

    return (
        <>
            <section className="bg-[#a110a9] align-center h-screen flex items-center justify-center ">
                <div className=" w-[768px] h-[676px] flex">

                    <div className="flex flex-col w-[384px] ">
                        <Image
                            src={Capa}
                            alt="Cachorro amarelo de porte médio"
                            className="rounded-l-lg h-[676px]"
                        />
                        <div className="fixed bottom-[430px] right-[820px]">
                            <h1 className="bg-[#ffc501] text-[#a110a9] px-4 py-4 flex justify-center w- font-bold text-3xl rounded-full">Faça parte da</h1>

                            <Image
                                src={Nome}
                                alt="Nome'Unipatas'"
                                className="w-[280px] h-[100px]"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-r-lg items-center flex flex-col w-[384px] h-[676px] gap-1 ">

                        <div className="flex justify-center pt-2"> {/*conteiner da logo */}
                            <Image src={Logo} width={100} height={50} alt="logo-unipatas" />
                        </div>

                        <div>
                            <h2 className="flex justify-center font-bold text-xl">Cadastro</h2>
                            <h2 className="flex justify-center font-bold text-sm" >Que tipo de perfil deseja?</h2>
                        </div>

                        <div className="flex justify-center space-x-4 gap-px">
                            <Link href={"#"} className="bg-[#a110a9] h-8 w-18 rounded-full px-4 pt-2 font-bold text-xs text-center text-white">Usuario</Link>
                            <Link href={"/ong"} className="bg-[#33b3a6] h-8 w-18 rounded-full px-4 pt-2 font-bold text-xs text-center text-white">ONG</Link>
                        </div>

                        <form className=" flex jutify-center flex-col font-bold w-72 gap-1"> {/*formulario do cadastro */}

                            <label> CPF </label>
                            <input type="email" className="bg-gray-200 h-8 rounded-md " />

                            <label> Email </label>
                            <input type="email" className="bg-gray-200 h-8 rounded-md p-2" />

                            <label> Número telefone </label>
                            <input type="num" className="bg-gray-200 h-8 rounded-md p-2" />

                            <label> Login </label>
                            <input type="text" className="bg-gray-200 h-8 rounded-md p-2 " />

                            <label> Senha </label>
                            <input type="password" className="bg-gray-200 h-8 rounded-md p-2 " />
                            <br />

                            <div className="text-xs">  {/*Conteiner checkbox */}
                                <input type="checkbox" name="aceitarTermos" id="aceitarTermos" />
                                <label htmlFor="aceitarTermos"> Permito exibir minhas opções de contato no perfil</label>
                                <br />
                                <input type="checkbox" name="#" id="#" />
                                <label htmlFor="#">Lar temporário/voluntário</label>
                            </div>
                        </form>
                        <br />

                        <div className="flex space-x-20 ">
                            <Link href={"/login"}> Voltar </Link>
                            <button className="bg-[#a110a9] h-8 w-24 rounded-md text-white font-bold text-xs "> Cadraste-se </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
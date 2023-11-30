'use client'
import Image from "next/image"
import Link from "next/link";
import Caramelo from "@/assets/caramelo.png";
import Logo from "@/assets/logo-verde-texto.png"
import Yellow from "@/assets/logo-unipatas-yellow.png"
import MultiStepForm from "./MultiFormStep";

export default function RedesSociais() {
    return (
        <>
            <section className="box-border h-screen flex ">
                <div className="flex w-screen h-auto">
                    <div className="w-[642px] h-auto relative">
                        <Image
                            src={Caramelo}
                            className="w-[850px] h-[420px] absolute inset-y-18 left-0 bottom-8 "
                            alt="Imagem mascote caramelo!"/>

                        <div className="relative">
                            <Image
                                src={Logo}
                                className="w-[350px] absolute inset-y-64 left-36 bottom-0" 
                                alt="imagem logo roxa uniPatas!"/>
                        </div>

                        <div className=" relative" >
                            <p className=" bg-[#33b3a6] pb-12 text-center w-72 h-12 text-white absolute inset-y-48 left-44 bottom-0 w-66 font-bold text-3xl rounded-full ">Bem vindos a</p>
                        </div>

                        <div className="relative">
                            <Image
                                src={Yellow}
                                className="w-[150px] h-150px absolute inset-y-8 left-60 bottom-0" 
                                alt="Logo nome do unipatas em amarelo!"/>
                        </div>
                    </div>

                    <div className="w-[50%] h-auto relative ">

                        <MultiStepForm stepDone={2}/>
                        <form className="w-[642px] absolute inset-y-44 left-0 bottom-8 space-y-12">

                            <div className="">
                                <label className="block" htmlFor="nomeOng">Instagram do ONG</label>
                                <div>
                                    <input className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="nomeOng"></input>
                                </div>
                            </div>


                            <div className="">
                                <label className="block" htmlFor="numeroContato">Facebook da ONG</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="numeroContato"></input>
                            </div>


                            <div>
                                <label className="block" htmlFor="cep">Link de doação da ONG</label>
                                <input type="text" className="bg-gray-200 h-8 rounded-md w-[300px] " id="cep"></input>
                            </div>

                            <div className=" text-sm font-bold space-x-8 ">
                                <br />
                                <br/>
                                <Link href={"/cadastro-ongs"}> Voltar para dados</Link>
                                <Link href={"/cadastro-concluido"} query={{loadPage:true}} className="p-[5px] px-[20px] rounded-md bg-[#33b3a6] text-white w-[20px] ">Proximo</Link>
                            </div>
                        </form>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
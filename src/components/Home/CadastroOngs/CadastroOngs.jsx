import Image from "next/image"
import Link from "next/link";
import Caramelo from "@/assets/caramelo.png";
import Logo from "@/assets/logo-verde-texto.png"
import Yellow from "@/assets/logo-unipatas-yellow.png"

export default function CadastroOngs() {
    return (
        <>
            <section className="box-size h-screen flex ">
                <div className="flex w-screen h-auto border-red-700 border-2">
                    <div className="w-[642px] h-auto relative">
                        <Image
                            src={Caramelo}
                            className="w-[850px] h-[420px] absolute inset-y-18 left-0 bottom-8 " />

                        <div className="relative">
                            <Image
                                src={Logo}
                                className="w-[350px] absolute inset-y-64 left-36 bottom-0" />
                        </div>

                        <div className=" relative flex" >
                            <h1 className="absolute inset-y-48 left-56 bottom-0 px-4 py-4 flex justify-center w-66 font-bold text-3xl rounded-full ">Bem vindos a</h1>
                        </div>

                        <div className="relative">
                            <Image
                                src={Yellow}
                                className="w-[150px] h-150px absolute inset-y-8 left-60 bottom-0" />
                        </div>
                    </div>

                    <div className="w-[642px] h-auto relative">
                        <form className="flex flex-col gap-4 absolute inset-y-32 left-0 bottom-8 ">

                            <div className="flex flex-wrap gap">
                                <label className="" htmlFor="nomeOng">Nome da ong</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="nomeOng"></input>
                                <label className="" htmlFor="nomeResponsavel">Nome do responsável</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="nomeResponsavel"></input>
                            </div>

                            <div className="">
                                <label className="block" htmlFor="numeroContato">Numero de contato</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="numeroContato"></input>
                                <label className="block" htmlFor="cpfResponsavel">CPF do responsável</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="cpfResponsavel"></input>
                            </div>

                            <div>
                                <label className="block" htmlFor="cep">CEP</label>
                                <input type="text" className="bg-gray-200 h-8 rounded-md w-[188px] " id="cep"></input>
                            </div>

                            <div className="flex flex-wrap gap-x-4 ">
                                <label className="" htmlFor="cidade">Cidade</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="cidade"></input>
                                <label className="" htmlFor="uf">UF</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="uf"></input>
                            </div>

                            <div>
                                <label className="block" htmlFor="endereço">Endereço</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="endereço"></input>
                            </div>

                            <div className=" text-sm font-bold">
                                <br />
                                <a
                                    href="/cadastro"> Voltar para cadastro de usuário</a>
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
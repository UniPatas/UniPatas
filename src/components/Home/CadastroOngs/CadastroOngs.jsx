import Image from "next/image"
import Link from "next/link";
import Caramelo from "@/assets/caramelo.png";
import Logo from "@/assets/logo-verde-texto.png"
import Yellow from "@/assets/logo-unipatas-yellow.png"

export default function CadastroOngs() {
    return (
        <>
            <section className="box-border h-screen flex ">
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

                        <div className=" relative" >
                            <p className=" bg-[#33b3a6] pb-12 text-center w-72 h-12 text-white absolute inset-y-48 left-44 bottom-0 w-66 font-bold text-3xl rounded-full ">Bem vindos a</p>
                        </div>

                        <div className="relative">
                            <Image
                                src={Yellow}
                                className="w-[150px] h-150px absolute inset-y-8 left-60 bottom-0" />
                        </div>

                        <div className="relative">
                            <p className="bg-[#33b3a6] pb-12 text-center h-[60px] text-white absolute inset-y-12 left-[450px] bottom-0 w-[168%] font-bold text-3xl rounded-l-full"></p>
                        </div>

                        <div className="relative ">
                            <ul className=" absolute inset-y-6 left-[100%] bottom-0 flex space-x-72 font-bold ">
                                <li> ONG</li>
                                <li> Redes </li>
                                <li> Concluído</li>
                            </ul>
                        </div>

                    </div>

                    <div className="w-[642px] h-auto relative ">
                        <form className="w-[642px] absolute inset-y-44 left-0 bottom-8 space-y-6">

                            <div className="">
                                <label className="block" htmlFor="nomeOng">Nome da ong</label>
                                <div>
                                    <input className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="nomeOng"></input>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[55px] " htmlFor="nomeResponsavel">Nome do responsável</label>
                                <div className="relative">
                                    <input className="bg-gray-200 h-8 w-[350px] rounded-md absolute inset-x-96 right-24 bottom-[22px] " type="text" id="nomeResponsavel"></input>
                                </div>
                            </div>


                            <div className="">
                                <label className="block" htmlFor="numeroContato">Número de contato</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="numeroContato"></input>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[59px]" htmlFor="cpfResponsavel">CPF do responsável</label>
                                <div>
                                    <input className="bg-gray-200 h-8 rounded-md w-[350px] absolute inset-x-96 right-24 bottom-[28px] " type="text" id="cpfResponsavel"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="cep">CEP</label>
                                <input type="text" className="bg-gray-200 h-8 rounded-md w-[188px] " id="cep"></input>
                            </div>

                            <div className=" ">
                                <label className="" htmlFor="cidade">Cidade</label>
                                <div>
                                    <input className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="cidade"></input>
                                </div>
                            </div>

                            <div className="relativo">
                                <label className="absolute inset-x-96 left-64 bottom-[345px]" htmlFor="uf">UF</label>
                                <div>
                                    <input className="bg-gray-200 h-8 rounded-md w-[40px] absolute inset-x-96 left-64 bottom-[312px]" type="text" id="uf"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="endereço">Endereço</label>
                                <input className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="endereço"></input>
                            </div>

                            <div className=" text-sm font-bold space-x-8">
                                <br />
                                <Link href={"/cadastro"}> Voltar para cadastro de usuário</Link>

                                <button className="bg-[#a110a9] h-6 w-24 rounded-md text-white font-bold text-xs">Proximo</button>
                            </div>

                            <div className="relative">
                                <p className="absolute inset-x-96 right-12 bottom-[280px]">Foco da ONG</p>
                            </div>
                            <div className="relative ">
                                <ul className="absolute inset-x-96 right-12 bottom-[235px] flex justify-between  ">
                                    <li className=""><input type="checkbox" name="cachorro" id="icachorro" /><label>Cachorro</label> </li>
                                    <li className=""><input type="checkbox" name="gato" id="igato" /><label>Gato</label></li>
                                    <li className=""><input type="checkbox" name="ambos" id="iambos" /><label>Ambos</label></li>
                                </ul>
                            </div>
                            <div className="relative">
                                <p className="absolute inset-x-96 right-12 bottom-[180px]" >Categorias</p>
                            </div>
                            <div className="relative">
                                <ul className="absolute inset-x-96 right-12 bottom-[100px]  ">
                                    <li className=""><input type="checkbox" name="lar" id="lar" /><label>Lar de acolhimento</label> </li>
                                    <li className=""><input type="checkbox" name="temporario" id="temporario" /><label>Lar temporario</label></li>
                                    <li className=""><input type="checkbox" name="terapia" id="terapia" /><label>Terapia infantil com animais</label></li>
                                </ul>
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
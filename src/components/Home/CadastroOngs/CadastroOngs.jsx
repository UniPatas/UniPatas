'use client'
import Image from "next/image"
import Link from "next/link";
import Caramelo from "@/assets/caramelo.png";
import Logo from "@/assets/logo-verde-texto.png"
import Yellow from "@/assets/logo-unipatas-yellow.png"
import { useState } from "react";

export default function CadastroOngs() { 

    const [formValues, setFormValues] = useState({
        nomeOng: "",
        nomeResponsavel: "",
        numeroContato: "",
        cpfResponsavel: "",
        cep: "",
        cidade: "",
        uf: "",
        endereco: "",
        focoOng: [],
        categorias: [],
      });
    
      const recuperaValor = (id) => {
        const idInput = id;
        const valorInput = document.getElementById(idInput).value;
        setFormValues((prevValues) => ({
          ...prevValues,
          [idInput]: valorInput,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Valores do Formulário:", formValues);
        // Adicione aqui a lógica para enviar os dados ao backend ou exibi-los em uma tela de confirmação
      };
    
 
    return (
        <>
            <section className="box-border h-screen flex ">
                <div className="flex w-screen h-auto">
                    <div className="w-[642px] h-auto relative">
                        <Image
                            src={Caramelo}
                            className="w-[850px] h-[420px] absolute inset-y-18 left-0 bottom-8 "
                            alt="Mascote da unipatas, cachorro caramelo!"/>

                        <div className="relative">
                            <Image
                                src={Logo}
                                className="w-[350px] absolute inset-y-64 left-36 bottom-0"
                                alt="Logo verde com nome da UniPatas!" />
                        </div>

                        <div className=" relative" >
                            <p className=" bg-[#33b3a6] pb-12 text-center w-72 h-12 text-white absolute inset-y-48 left-44 bottom-0 w-66 font-bold text-3xl rounded-full ">Bem vindos a</p>
                        </div>

                        <div className="relative">
                            <Image
                                src={Yellow}
                                className="w-[150px] h-150px absolute inset-y-8 left-60 bottom-0" 
                                alt="Logo amarela da uniptas!"/>
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
                                    <input onChange={() => recuperaValor("nomeOng")} className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="nomeOng"></input>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[55px] " htmlFor="nomeResponsavel">Nome do responsável</label>
                                <div className="relative">
                                    <input onChange={() => recuperaValor("nomeResponsavel")} className="bg-gray-200 h-8 w-[350px] rounded-md absolute inset-x-96 right-24 bottom-[22px] " type="text" id="nomeResponsavel"></input>
                                </div>
                            </div>


                            <div className="">
                                <label className="block" htmlFor="numeroContato">Número de contato</label>
                                <input onChange={() => recuperaValor("numeroContato")} className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="numeroContato"></input>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[59px]" htmlFor="cpfResponsavel">CPF do responsável</label>
                                <div>
                                    <input onChange={() => recuperaValor("cpfResponsavel")} className="bg-gray-200 h-8 rounded-md w-[350px] absolute inset-x-96 right-24 bottom-[28px] " type="text" id="cpfResponsavel"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="cep">CEP</label>
                                <input onChange={() => recuperaValor("cep")} type="text" className="bg-gray-200 h-8 rounded-md w-[188px] " id="cep"></input>
                            </div>

                            <div className=" ">
                                <label className="" htmlFor="cidade">Cidade</label>
                                <div>
                                    <input onChange={() => recuperaValor("cidade")} className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="cidade"></input>
                                </div>
                            </div>

                            <div className="relativo">
                                <label className="absolute inset-x-96 left-64 bottom-[345px]" htmlFor="uf">UF</label>
                                <div>
                                    <input onChange={() => recuperaValor("uf")} className="bg-gray-200 h-8 rounded-md w-[40px] absolute inset-x-96 left-64 bottom-[312px]" type="text" id="uf"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="endereço">Endereço</label>
                                <input onChange={() => recuperaValor("endereco")}  className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="endereco"></input>
                            </div>

                            <div className=" text-sm font-bold space-x-8">
                                <br />
                                <Link href={"/cadastro"}> <a>Voltar para cadastro de usuário</a></Link>
                                <Link href={"/redes-sociais"} className="p-[5px] px-[20px] rounded-md bg-[#a110a9] text-white w-[20px] ">Proximo</Link>
                            </div>

                            <div className="relative">
                                <p className="absolute inset-x-96 right-12 bottom-[280px]">Foco da ONG</p>
                            </div>
                            <div className="relative">
                                <ul className="absolute inset-x-88 left-[380px] bottom-[235px] flex justify-around gap-6">
                                    <li className="py-2 rounded-full text-white text-xs bg-[#33b3a6]"><input className=" hidden peer rounded-full w-[90px] text-center hover:text-gray-600" type="checkbox" name="Cachorro" id="icachorro" /><label htmlFor="icachorro" className=" p-2 border-2 w-full rounded-full peer-checked:border-blue-700">Cachorro</label></li>
                                    <li className="py-2 bg-[#a110a9] rounded-full text-white text-xs "><input className="hidden peer rounded-full w-[90px] text-center hover:text-gray-600" type="checkbox" name="Gato" id="igato" /><label htmlFor="igato" className="p-2 border-2 w-full rounded-full peer-checked:border-blue-700">Gatos</label></li>
                                    <li className="py-2 bg-[#ffc501] rounded-full text-white text-xs"><input className="hidden peer rounded-full w-[90px] text-center hover:text-gray-600" type="checkbox" name="Ambos" id="iambos" /><label htmlFor="iambos" className=" p-2 border-2 w-full rounded-full peer-checked:border-blue-700">Ambos</label></li>
                                </ul>
                            </div>
                            <div className="relative">
                                <p className="absolute inset-x-96 right-12 bottom-[200px]" >Categorias</p>
                            </div>
                            <div className="relative">
                                <ul className="absolute inset-x-96 right-12 bottom-[100px]  ">
                                    <li className=""><input type="checkbox" name="lar" id="lar" /><label> Lar de acolhimento</label> </li>
                                    <li className=""><input type="checkbox" name="temporario" id="temporario" /><label> Lar temporario</label></li>
                                    <li className=""><input type="checkbox" name="terapia" id="terapia" /><label> Terapia infantil com animais</label></li>
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
'use client'
import Image from "next/image"
import Link from "next/link";
import Caramelo from "@/assets/caramelo.png";
import Logo from "@/assets/logo-verde-texto.png"
import Yellow from "@/assets/logo-unipatas-yellow.png"
import { useState, useContext, useEffect } from "react";
import CadastroConcluido from "./CadastroConcluido";
import { CadastroContext } from "@/contexts/CadastroContext";
import MultiStepForm from "./MultiFormStep";

export default function CadastroOngs() { 
    //Recebe e armazena em uma variavel, cada valor de input e set que veio dentro do value passado dentro do context
    const { nomeOng, setNome, nomeResponsavel, setNomeResponsavel, telefone, setTelefone, cpf, setCPF, cep, setCep, cidade, setCidade, uf, setUf, endereco, setEndereco } = useContext(CadastroContext); 

    
    const listId = { //Objeto que armazena cada id de cada input, e uma função para armazenar dentro do input o valor que vem pelo contexto
        'nomeOng': function () {
            document.getElementById('nomeOng').value = nomeOng;
        }, 
        'nomeResponsavel': function () {
            document.getElementById('nomeResponsavel').value = nomeResponsavel;
        },
        'telefone': function () {
            document.getElementById('telefone').value = telefone;
        },
        'cpf': function () {
            document.getElementById('cpf').value = cpf;
        },
        'cep': function () {
            document.getElementById('cep').value = cep;
        },
        'cidade': function () {
            document.getElementById('cidade').value = cidade;
        }, 
        'uf': function () {
            document.getElementById('uf').value = uf;
        }, 
        'endereco': function () {
            document.getElementById('endereco').value = endereco;
        }
    };


    useEffect(() => { //Função que executa algo quando a pagina é carregada, nesse caso, vai salvar o conteudo digitado em cada campo input (armazena o estado)
        for (const key in listId) { //Itera sobre cada id na listId
            const verifyId = document.getElementById(key); //Verifica se existe algum elemento com um id correspondente a uma das chaves do atributos do objeto listId

            if (verifyId) { //Caso algum elemento tenha um id correspondente, executa esse bloco de codigo
                console.log('testando')
                listId[key]();
            }
        }    
    },);

    const handleChange = (event) => {
        const { name,  value } = event.target; //Captura o name do input que registrou o evento, e o seu valor
        // Verifica o name do input onde o evento foi registrado, caso seja igual ele vai setar o valor do input na variavel correspondente

        const sets = { // Objeto cujo chaves sejam funções (os sets) de cada input
            'nomeOng':(valor)  => {setNome(valor)},
            'nomeResponsavel': (valor) => {setNomeResponsavel(valor)},
            'telefone': (valor) => {setTelefone(valor)},
            'cpf': (valor) => {setCPF(valor); console.log(valor)},
            'cep': (valor) => {setCep(valor)},
            'cidade': (valor) => {setCidade(valor)},
            'uf': (valor) => {setUf(valor)},
            'endereco': (valor) => {setEndereco(valor)}

        };

        if (sets[name]) { //Verifica se existe o name dento do objeto sets
            sets[name](value);
        };

    }
 
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



                    </div>


                    <div className="w-[50%] h-auto relative ">

                        <MultiStepForm  stepDone={1}/>
                        <form className="w-[642px] absolute inset-y-44 left-0 bottom-8 space-y-6">

                            <div className="">
                                <label className="block" htmlFor="nomeOng">Nome da ong</label>
                                <div>
                                    <input onChange={handleChange} className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="nomeOng" name="nomeOng"></input>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[55px] " htmlFor="nomeResponsavel">Nome do responsável</label>
                                <div className="relative">
                                    <input onChange={handleChange} name="nomeResponsavel" className="bg-gray-200 h-8 w-[350px] rounded-md absolute inset-x-96 right-24 bottom-[22px] " type="text" id="nomeResponsavel"></input>
                                </div>
                            </div>


                            <div className="">
                                <label className="block" htmlFor="numeroContato">Número de contato</label>
                                <input onChange={handleChange} name="telefone" className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="telefone"></input>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[59px]" htmlFor="cpfResponsavel">CPF do responsável</label>
                                <div>
                                    <input onChange={handleChange} name="cpf" className="bg-gray-200 h-8 rounded-md w-[350px] absolute inset-x-96 right-24 bottom-[28px] " type="text" id="cpf"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="cep">CEP</label>
                                <input onChange={handleChange} type="text" name="cep" className="bg-gray-200 h-8 rounded-md w-[188px] " id="cep"></input>
                            </div>

                            <div className=" ">
                                <label className="" htmlFor="cidade">Cidade</label>
                                <div>
                                    <input onChange={handleChange} name="cidade" className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="cidade"></input>
                                </div>
                            </div>

                            <div className="relativo">
                                <label className="absolute inset-x-96 left-64 bottom-[345px]" htmlFor="uf">UF</label>
                                <div>
                                    <input onChange={handleChange} name="uf" className="bg-gray-200 h-8 rounded-md w-[40px] absolute inset-x-96 left-64 bottom-[312px]" type="text" id="uf"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="endereço">Endereço</label>
                                <input onChange={handleChange} name="endereco" className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="endereco"></input>
                            </div>

                            <div className=" text-sm font-bold space-x-8">
                                <br />
                                <Link href={"/cadastro"}> Voltar para cadastro de usuário</Link>
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
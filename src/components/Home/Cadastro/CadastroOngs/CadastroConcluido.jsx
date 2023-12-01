'use client'
import Image from "next/image"
import Link from "next/link";
import Caramelo from "@/assets/caramelo.png";
import Logo from "@/assets/logo-verde-texto.png"
import Yellow from "@/assets/logo-unipatas-yellow.png"
import "@/app/globals.css"
import { useContext, useEffect, useState } from 'react';
import { CadastroContext } from "@/contexts/CadastroContext";
import MultiStepForm from "./MultiFormStep";


export default function CadastroConcluido() {
    // Desestruturar o contextValue la do meu useContext(CadastroContext). Dessa maneira, vai ser possivel consumir o valor de contexto que está sendo compartilhado via provider
    // Desestruturamos os dados que estão sendo exportados 
    const { nomeOng, nomeResponsavel, telefone, cpf, cep, cidade, uf, endereco } = useContext(CadastroContext);
    const page = 3;

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

    
    useEffect(() => { //Função que executa algo quando a pagina é carregada
        // console.log("Página carregada!"); 

        for (const key in listId) { //Itera sobre cada id na listId
            const verifyId = document.getElementById(key); //Verifica se existe algum elemento com um id correspondente a uma das chaves do atributos do objeto listId

            if (verifyId) { //Caso algum elemento tenha um id correspondente, executa esse bloco de codigo
                // console.log('elemento existe')
                listId[key](); //Chama a função correspondente ao id, armazenada no atributo correspondente dentro do objeto ListID
            }
        }

        // <MultiStepForm stepDone={3} />
    },);


    return (
        <>
            <section className="box-border h-screen flex ">
                <div className="flex w-screen h-auto">
                    <div className="w-[642px] h-auto relative">
                        <Image
                            src={Caramelo}
                            className="w-[850px] h-[420px] absolute inset-y-18 left-0 bottom-8 " 
                            alt="Imagem do caramelo, mascote do UniPatas"/>

                        <div className="relative">
                            <Image
                                src={Logo}
                                className="w-[350px] absolute inset-y-64 left-36 bottom-0"
                                 alt="Logo verde com nome UniPatas"/>
                        </div>

                        <div className=" relative" >
                            <p className=" bg-[#33b3a6] pb-12 text-center w-72 h-12 text-white absolute inset-y-48 left-44 bottom-0 w-66 font-bold text-3xl rounded-full ">Bem vindos a</p>
                        </div>

                        <div className="relative">
                            <Image
                                src={Yellow}
                                className="w-[150px] h-150px absolute inset-y-8 left-60 bottom-0"
                                alt="Logo do UniPatas na cor amarela." />
                                
                        </div>


                    </div>

                    <div className="w-[50%] h-auto relative">
                        
                        <MultiStepForm stepDone={3}/> 
                        <form className="w-[642px] absolute inset-y-44 left-0 bottom-8 space-y-6">

                            <div className="">
                                <label className="block" htmlFor="nomeOng">Nome da ong</label>
                                <div>
                                    <input disabled  className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="nomeOng"></input>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[55px] " htmlFor="nomeResponsavel">Nome do responsável</label>
                                <div className="relative">
                                    <input disabled className="bg-gray-200 h-8 w-[350px] rounded-md absolute inset-x-96 right-24 bottom-[22px] " type="text" id="nomeResponsavel"></input>
                                </div>
                            </div>


                            <div className="">
                                <label className="block" htmlFor="numeroContato">Número de contato</label>
                                <input disabled className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="telefone"></input>
                            </div>

                            <div className="relative">
                                <label className="absolute inset-x-96 right-12 bottom-[59px]" htmlFor="cpfResponsavel">CPF do responsável</label>
                                <div>
                                    <input disabled className="bg-gray-200 h-8 rounded-md w-[350px] absolute inset-x-96 right-24 bottom-[28px] " type="text" id="cpf"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="cep">CEP</label>
                                <input disabled type="text" className="bg-gray-200 h-8 rounded-md w-[188px] " id="cep"></input>
                            </div>

                            <div className=" ">
                                <label className="" htmlFor="cidade">Cidade</label>
                                <div>
                                    <input disabled className="bg-gray-200 h-8 rounded-md w-[188px]" type="text" id="cidade"></input>
                                </div>
                            </div>

                            <div className="relativo">
                                <label className="absolute inset-x-96 left-64 bottom-[345px]" htmlFor="uf">UF</label>
                                <div>
                                    <input disabled className="bg-gray-200 h-8 rounded-md w-[40px] absolute inset-x-96 left-64 bottom-[312px]" type="text" id="uf"></input>
                                </div>
                            </div>

                            <div>
                                <label className="block" htmlFor="endereço">Endereço</label>
                                <input disabled className="bg-gray-200 h-8 rounded-md w-[300px]" type="text" id="endereco"></input>
                            </div>

                            <div className=" text-sm font-bold space-x-8">
                                <br />
                                <Link href={"/redes-sociais"}>Voltar para redes</Link>
                                <button type="button" className="bg-[#33b3a6] h-8 w-24 rounded-md text-white font-bold text-xs "> Concluir</button>
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
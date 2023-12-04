'use client'
import Image from "next/image"
import Link from "next/link";
import ImagemLado from "@/assets/imagemSideBarCadastro.png"
import "@/app/globals.css"
import { useContext, useEffect, useState } from 'react';
import { CadastroContext } from "@/contexts/CadastroContext";
import MultiStepForm from "./MultiFormStep";


export default function CadastroConcluido() {
    // Desestruturar o contextValue la do meu useContext(CadastroContext). Dessa maneira, vai ser possivel consumir o valor de contexto que está sendo compartilhado via provider
    // Desestruturamos os dados que estão sendo exportados 
    const { nomeOng, nomeResponsavel, telefone, cpf, cep, cidade, uf, endereco, instagram, facebook, doacao } = useContext(CadastroContext);

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
        },
        'instagram': function () {
            document.getElementById('instagram').value = instagram;
        },
        'facebook': function () {
            document.getElementById('facebook').value = facebook;
        },
        'doacao': function () {
            document.getElementById('doacao').value = doacao;
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
            <section className="box-border h-screen flex">
                <div className="flex w-screen h-[97%] self-center">

                    

                    <div className="w-[542px] h-auto flex flex-col justify-center arredondado-r-lg"> {/*container esquerdo */}
                        <Image src={ImagemLado} className="h-full arredondado-r-lgl" alt="" />
                    
                    </div>


                    <div id="containerPai" className="w-[1230px] h-auto  flex items-center justify-center flex-col"> {/*Container que armazena o forms */}

                        <MultiStepForm  stepDone={3}/>
                        <form id="containerFilho" className="w-[642px]"> {/*Formulário com todos os inputs */}

                            <div className=" h-[80%] flex w-full"> {/*Container dos inputs */}

                                <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 1*/}

                                    <div className="flex flex-col gap-2"> {/*Input do nome da ONG */}
                                        <div>
                                            <label className="" htmlFor="nomeOng">Nome da ong</label>
                                        </div>
                                        <div>
                                            <input disabled className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeOng" name="nomeOng"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input do numero de contato */}
                                        <div>
                                            <label className="" htmlFor="numeroContato">Número de contato</label>
                                        </div>
                                        <div>
                                            <input disabled name="telefone" className="bg-gray-200 h-8 rounded-md w-[180px] text-center" type="text" id="telefone"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input do CEP */}
                                        <div>
                                            <label className=" " htmlFor="cep">CEP</label>
                                        </div>
                                        <div>
                                            <input disabled type="text" name="cep" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" id="cep"></input>
                                        </div>
                                    </div>

                                    <div className="flex gap-6"> {/*Input da Cidade e uf */}
                                        <div className="flex flex-col gap-2">
                                            <label className="block" htmlFor="cidade">Cidade</label>
                                            <input disabled name="cidade" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" type="text" id="cidade"></input>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="block" htmlFor="uf">UF</label>
                                            <input disabled name="uf" className="bg-gray-200 h-8 rounded-md w-[30px] text-center" type="text" id="uf"></input>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col gap-2"> {/*Input do Endereço */}

                                        <div>
                                            <label className="block" htmlFor="endereço">Endereço</label>
                                        </div>
                                        <div className="">
                                            <input disabled name="endereco" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="endereco"></input>
                                        </div>
                                    </div>

                                </div> {/*Final Coluna 1*/}

                                
                                <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 2*/}

                                    <div className="justify-self-end self-start place-self-start flex flex-col gap-2"> {/*Input do nome do responsavel */}
                                        <div className="">
                                            <label className="" htmlFor="nomeResponsavel">Nome do responsável</label>                                            
                                        </div>
                                        <div className=""> 
                                            <input disabled name="nomeResponsavel" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeResponsavel"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">  {/*Input do CPF */}
                                        <div className="">
                                            <label className="" htmlFor="cpfResponsavel">CPF do responsável</label>
                                        </div>
                                        <div>
                                            <input disabled name="cpf" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="cpf"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input do nome do link do instagram*/}
                                        <div>
                                            <label className="" htmlFor="instagram">Instagram da Ong (Link)</label>
                                        </div>
                                        <div>
                                            <input disabled className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="instagram" name="instagram"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input do link do facebook*/}
                                        <div>
                                            <label className="" htmlFor="Facebook">Facebook da Ong (Link)</label>
                                        </div>
                                        <div>
                                            <input disabled name="facebook" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="facebook"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input da chave pix ou meio de doacao */}
                                        <div>
                                            <label className=" " htmlFor="doacao">Link de doação (chavePix e afins..) </label>
                                        </div>
                                        <div>
                                            <input disabled type="text" name="doacao" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" id="doacao"></input>
                                        </div>
                                    </div>

                                </div> {/*Final Coluna 2*/}

                            </div>

                            <div className="text-sm font-bold flex justify-center mt-[4em]"> {/*Botões inferiores*/}
                                <div className="h-auto w-[70%] flex justify-between text-center items-center"> 
                                    <Link className="text-sm " href={"/redes-sociais"}> Voltar para redes</Link>
                                    <Link href={"#"} className="bg-[#33b3a6] h-8 w-24 rounded-md text-white font-bold text-xs flex justify-center items-center">Finalizar</Link>                                    
                                </div>
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
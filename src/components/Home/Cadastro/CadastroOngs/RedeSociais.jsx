'use client'
import Image from "next/image";
import Link from "next/link";
import Caramelo from "@/assets/caramelo.png";
import Logo from "@/assets/logo-verde-texto.png";
import Yellow from "@/assets/logo-unipatas-yellow.png";
import MultiStepForm from "./MultiFormStep";
import ImagemLado from "@/assets/imagemSideBarCadastro.png";
import React, { useState, useEffect, useContext } from "react";
import { CadastroContext } from "@/contexts/CadastroContext";


export default function RedesSociais() {
    const { instagram, setInstagram, facebook, setFacebook, doacao, setDoacao } = useContext(CadastroContext); //Consumindo o contexto global e enviando para lá os dados setados depois retornando


    const listId = { //Objeto que armazena cada id de cada input, e uma função para armazenar dentro do input o valor que vem pelo contexto
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
            'instagram':(valor)  => {setInstagram(valor)},
            'facebook': (valor) => {setFacebook(valor)},
            'doacao': (valor) => {setDoacao(valor)}
        };

        if (sets[name]) { //Verifica se existe o name dento do objeto sets
            sets[name](value);
        };
    };




    return (
        <>
            <section className="box-border h-screen flex">
                <div className="flex w-screen h-[97%] self-center">


                    <div className="w-[542px] h-auto flex flex-col justify-center arredondado-r-lg"> {/*container esquerdo */}
                        <Image src={ImagemLado} className="h-full arredondado-r-lgl" alt="" />
                    
                    </div>


                    <div id="containerPai" className="w-[1580px] h-auto  flex items-center justify-center flex-col"> {/*Container que armazena o forms */}

                        <MultiStepForm stepDone={2}/>
                        <form id="containerFilho" className="w-[642px] h-[90%]  mt-[8em] "> {/*Formulário com todos os inputs */}

                            <div className="flex w-full justify-center"> {/*Container dos inputs */}

                                <div className="h-auto w-auto flex-col justify-between flex-wrap space-y-10"> {/*Coluna 1*/}

                                    <div className="flex flex-col gap-2"> {/*Input do nome do link do instagram*/}
                                        <div>
                                            <label className="" htmlFor="instagram">Instagram da Ong (Link)</label>
                                        </div>
                                        <div>
                                            <input onChange={handleChange} required className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="instagram" name="instagram"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input do link do facebook*/}
                                        <div>
                                            <label className="" htmlFor="Facebook">Facebook da Ong (Link)</label>
                                        </div>
                                        <div>
                                            <input onChange={handleChange} required name="facebook" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="facebook"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input da chave pix ou meio de doacao */}
                                        <div>
                                            <label className=" " htmlFor="doacao">Link de doação (chavePix e afins..) </label>
                                        </div>
                                        <div>
                                            <input onChange={handleChange}  required type="text" name="doacao" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" id="doacao"></input>
                                        </div>
                                    </div>

                                </div> {/*Final Coluna 1*/}

                            </div>

                            <div className="text-sm font-bold flex justify-center mt-[4em]"> {/*Botões inferiores*/}
                                <div className="h-auto w-[50%] flex justify-between text-center items-center"> 
                                    <Link className="text-sm" href={"/cadastro-ongs"}> Voltar para dados</Link>
                                    <Link href={"/cadastro-concluido"} query={{loadPage:true}} className="bg-[#33b3a6] h-8 w-24 rounded-md text-white font-bold text-xs flex justify-center items-center">Proximo</Link>
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



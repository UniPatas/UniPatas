'use client'
import Image from "next/image"
import Link from "next/link";
import ImagemLado from "@/assets/imagemSideBarCadastro.png"
import { useState, useContext, useEffect } from "react";
import { CadastroContext } from "@/contexts/CadastroContext";
import MultiStepForm from "./MultiFormStep";
import "@/app/globals.css"

export default function CadastroOngs() { 
    //Recebe e armazena em uma variavel, cada valor de input e set que veio dentro do value passado dentro do context
    const { nomeOng, setNome, nomeResponsavel, setNomeResponsavel, telefone, setTelefone, cpf, setCPF, cep, setCep,
    cidade, setCidade, uf, setUf, endereco, setEndereco, cachorro, setCachorro, gato, setGato, ambos, setAmbos } = useContext(CadastroContext); 

    
    
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
                listId[key]();
            }
        }    
    },);

    const handleChange = (event) => { //Função para capturar os valores dos inputs do formulário
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
    };


    const handleOptionFocus = (event) => {
        const { name } = event.target; //Captura o name do input que registrou o evento, e o seu valor
        // Verifica o name do input onde o evento foi registrado, caso seja igual ele vai setar o valor do input na variavel correspondente

        const sets = { // Objeto cujo chaves sejam funções (os sets) de cada input
            'cachorro':(valor)  => {setCachorro(valor)},
            'gato': (valor) => {setGato(valor)},
            'ambos': (valor) => {setAmbos(valor)}
        };

        if (sets[name]) { //Verifica se existe o name dento do objeto sets
            if (name === 'cachorro') { // se o name do elemento for cachorro
                if (cachorro === false) { //Se o estado correspondente a esse elemento for false (por padrão, é false);
                    sets[name](true); //Seta o valor para true
                    const elemento = document.getElementById(name); //Recupera o elemento com o id correspondente
                    elemento.classList.add('ring', 'ring-blue-500/50', 'bg-white', 'text-black'); //Adiciona as classes correspondentes
                    elemento.classList.remove('text-white'); //Remove as classes correspondentes

                } else if (cachorro) { //Caso o estado do elemento cachorro seja verdadeiro
                    sets[name](false);
                    const elemento = document.getElementById(name); //Recupera o elemento com o id correspondente
                    elemento.classList.add('text-white'); //Adiciona as classes correspondentes
                    elemento.classList.remove('ring', 'ring-blue-500/50', 'bg-white', 'text-black'); //Adiciona as classes correspondentes                    
                }; 
            } else if (name === 'gato') {
                if (gato === false) { //Se o estado correspondente a esse elemento for false (por padrão, é false);
                    sets[name](true); //Seta o valor para true
                    const elemento = document.getElementById(name); //Recupera o elemento com o id correspondente
                    elemento.classList.add('ring', 'ring-blue-500/50', 'bg-white', 'text-black'); //Adiciona as classes correspondentes
                    elemento.classList.remove('text-white'); //Remove as classes correspondentes

                } else if (gato) { //Caso o estado do elemento cachorro seja verdadeiro
                    sets[name](false);
                    const elemento = document.getElementById(name); //Recupera o elemento com o id correspondente
                    elemento.classList.add('text-white'); //Adiciona as classes correspondentes
                    elemento.classList.remove('ring', 'ring-blue-500/50', 'bg-white', 'text-black'); //Adiciona as classes correspondentes                    
                }; 
            } else if (name === 'ambos') {
                if (ambos === false) { //Se o estado correspondente a esse elemento for false (por padrão, é false);
                    sets[name](true); //Seta o valor para true
                    const elemento = document.getElementById(name); //Recupera o elemento com o id correspondente
                    elemento.classList.add('ring', 'ring-blue-500/50', 'bg-white', 'text-black'); //Adiciona as classes correspondentes
                    elemento.classList.remove('text-white'); //Remove as classes correspondentes

                } else if (ambos) { //Caso o estado do elemento cachorro seja verdadeiro
                    sets[name](false);
                    const elemento = document.getElementById(name); //Recupera o elemento com o id correspondente
                    elemento.classList.add('text-white'); //Adiciona as classes correspondentes
                    elemento.classList.remove('ring', 'ring-blue-500/50', 'bg-white', 'text-black'); //Adiciona as classes correspondentes                    
                }; 
            };
        };
    };
 
    return (
        <>
            <section className="box-border h-screen flex">
                <div className="flex w-screen h-[97%] self-center">

                    

                    <div className="w-[542px] h-auto flex flex-col justify-center arredondado-r-lg"> {/*container esquerdo */}
                        <Image src={ImagemLado} className="h-full arredondado-r-lgl" alt="" />
                    
                    </div>


                    <div id="containerPai" className="w-[1230px] h-auto  flex items-center justify-center flex-col"> {/*Container que armazena o forms */}

                        <MultiStepForm  stepDone={1}/>
                        <form id="containerFilho" className="w-[642px]"> {/*Formulário com todos os inputs */}

                            <div className=" h-[80%] flex w-full"> {/*Container dos inputs */}

                                <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 1*/}

                                    <div className="flex flex-col gap-2"> {/*Input do nome da ONG */}
                                        <div>
                                            <label className="" htmlFor="nomeOng">Nome da ong</label>
                                        </div>
                                        <div>
                                            <input required onChange={handleChange} className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeOng" name="nomeOng"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input do numero de contato */}
                                        <div>
                                            <label className="" htmlFor="numeroContato">Número de contato</label>
                                        </div>
                                        <div>
                                            <input required onChange={handleChange} name="telefone" className="bg-gray-200 h-8 rounded-md w-[180px] text-center" type="text" id="telefone"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Input do CEP */}
                                        <div>
                                            <label className=" " htmlFor="cep">CEP</label>
                                        </div>
                                        <div>
                                            <input required onChange={handleChange} type="text" name="cep" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" id="cep"></input>
                                        </div>
                                    </div>

                                    <div className="flex gap-6"> {/*Input da Cidade e uf */}
                                        <div className="flex flex-col gap-2">
                                            <label className="block" htmlFor="cidade">Cidade</label>
                                            <input required onChange={handleChange} name="cidade" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" type="text" id="cidade"></input>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="block" htmlFor="uf">UF</label>
                                            <input required onChange={handleChange} name="uf" className="bg-gray-200 h-8 rounded-md w-[30px] text-center" type="text" id="uf"></input>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col gap-2"> {/*Input do Endereço */}

                                        <div>
                                            <label className="block" htmlFor="endereço">Endereço</label>
                                        </div>
                                        <div className="">
                                            <input required onChange={handleChange} name="endereco" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="endereco"></input>
                                        </div>
                                    </div>

                                </div> {/*Final Coluna 1*/}

                                
                                <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 2*/}

                                    <div className="justify-self-end self-start place-self-start flex flex-col gap-2"> {/*Input do nome do responsavel */}
                                        <div className="">
                                            <label className="" htmlFor="nomeResponsavel">Nome do responsável</label>                                            
                                        </div>
                                        <div className=""> 
                                            <input required onChange={handleChange} name="nomeResponsavel" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeResponsavel"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">  {/*Input do CPF */}
                                        <div className="">
                                            <label className="" htmlFor="cpfResponsavel">CPF do responsável</label>
                                        </div>
                                        <div>
                                            <input required onChange={handleChange} name="cpf" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="cpf"></input>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2"> {/*Opções de foco da ong */}
                                        <div className="flex gap-6">
                                            <p className=" ">Foco da ONG</p>
                                        </div>

                                        <ul className="flex justify-around gap-6">
                                            <li className="text-xs h-[30px] bg-[#33b3a6] rounded-lg ">
                                                <a onClick={handleOptionFocus} href="#" className="rounded-lg w-[90px] block text-center py-1.5 text-white placeholder:text-center placeholder:text-white h-full " name="cachorro" id="cachorro" disabled placeholder="Cachorro"> Cachorro</a>
                                            </li>
                                            
                                            <li className="bg-[#A110A9] h-[30px] rounded-lg text-xs">
                                                <a onClick={handleOptionFocus} href="#" className="rounded-lg block w-[90px] text-center py-1.5 text-white placeholder:text-white h-full" name="gato" id="gato">Gatos</a>
                                            </li>

                                            <li className="bg-[#ffc501] rounded-lg h-[30px] text-xs">
                                                <a onClick={handleOptionFocus} href="#" required className="rounded-lg w-[90px] text-center py-1.5 block text-white placeholder:text-white placeholder:text-center h-full" name="ambos" id="ambos" >Ambos</a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/*Seleção da categoria da ong*/}
                                    <div className="flex flex-col gap-2 self-end">
                                        <div className=""> 
                                            <p className=" " >Categorias</p>
                                        </div>
                                        <ul className="flex flex-col gap-2  ">
                                            <li className="">
                                                <input type="checkbox" name="lar" id="lar" className="before:w-[18px] before:content-[''] before:h-[18px] before:rounded
                                                before:bg-white before:inline-block before:border before:border-gray-700
                                                checked:before:bg-center checked:before:bg-lime-300	"/>
                                                <label htmlFor="lar" className="ml-2 mb-[px]"> Lar de acolhimento </label> 
                                            </li>
                                            <li className="">
                                                <input type="checkbox" name="lar" id="lar" className="before:w-[18px] before:content-[''] before:h-[18px] before:rounded
                                                before:bg-white before:inline-block before:border before:border-gray-700
                                                checked:before:bg-center checked:before:bg-lime-300	"/>
                                                <label htmlFor="temporario" className="ml-2 mb-[px]"> Lar temporario</label>
                                            </li>
                                            <li className="">
                                                <input type="checkbox" name="lar" id="lar" className="before:w-[18px] before:content-[''] before:h-[18px] before:rounded
                                                before:bg-white before:inline-block before:border before:border-gray-700
                                                checked:before:bg-center checked:before:bg-lime-300	"/>
                                                <label htmlFor="temporario" className="ml-2 mb-[px]"> Terapia infantil com animais</label>
                                            </li>
                                        </ul>
                                    </div>



                                </div> {/*Final Coluna 2*/}

                            </div>

                            <div className="text-sm font-bold flex justify-center mt-[4em]"> {/*Botões inferiores*/}
                                <div className="h-auto w-[70%] flex justify-between text-center items-center"> 
                                    <Link className="text-sm " href={"/cadastro"}> Voltar para cadastro de usuário</Link>
                                    <Link href={"/redes-sociais"} className="bg-[#33b3a6] h-8 w-24 rounded-md text-white font-bold text-xs flex justify-center items-center">Proximo</Link>                                    
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
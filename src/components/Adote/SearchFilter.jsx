"use client";

import { useState } from "react";
import '../../app/globals.css';
import { handleClientScriptLoad } from "next/script";

const SearchFilter = () => {
    const [menuDrop, setMenuDrop] = useState(false);
    const [especieAnimal, setEspecieAnimal] = useState('Especie do animal');
    const [sexoAnimal, setSexoAnimal] = useState('Sexo do animal');
    const [porteAnimal, setPorteAnimal] = useState('Porte do animal');
    const [tipoPostagem, setTipoPostagem] = useState('Tipo da postagem');


    const toggleMenu = () => { {/*Função que atualiza o estado do menu, que é usado para determinar se será exibido ou não */}
        setMenuDrop(!menuDrop);
    };

    const handleOptionSelection = (evento) => { {/*Opçao que seta o valor padrão exibido em cada botão de cada menu dropDown quando o usuario seleciona uma opção */}
        const { id } = evento.target; //Captura o name do input que registrou o evento, e o seu valor

        const elemento = document.getElementById(id).textContent;

        const listId = { //Objeto que armazena cada id de cada input, e uma função para armazenar dentro do input o valor que vem pelo contexto
            'cachorro': function () {
                setEspecieAnimal(elemento)
            }, 
            'gato': function () {
                setEspecieAnimal(elemento);
            },
            'todos': function () {
                setEspecieAnimal(elemento);
            },
            'macho': function () {
                setSexoAnimal(elemento);
            },
            'femea': function () {
                setSexoAnimal(elemento);
            },
            'todosSexos': function() {
                setSexoAnimal(elemento);
            },
            'grande': function() {
                setPorteAnimal(elemento);
            },
            'medio': function() {
                setPorteAnimal(elemento);
            },
            'pequeno': function() {
                setPorteAnimal(elemento);
            },
            'todosTamanhos': function() {
                setPorteAnimal(elemento);
            },
            'maisRecente': function() {
                setTipoPostagem(elemento);
            },
            'deOngs': function() {
                setTipoPostagem(elemento);
            },
            'deUsuario': function() {
                setTipoPostagem(elemento);
            },
            'maisAntigas': function() {
                setTipoPostagem(elemento);
            }
        };
    
        for (let key in listId) { //Itera sobre cada propiedade do objeto listId
            if (id === key) { //Verifica se o id do elemeto que ativou o evento, é igual a alguma das propiedades do listId
                const element = listId[id](); //Caso seja, vai chamar o set que possui dentro de cada propiedade do objeto
            }
        };
    };


    return (
        <>
            <section className="max-w-[1246px] mx-auto bg-[#a110a9] flex justify-center"> {/*Filter section */}
                <div className="w-auto h-[326px] space-y-5 flex items-center"> {/*Body-Filter */}

                    <div className="space-y-8"> {/*Container Filters-Engloba todo conteudo do body*/}

                        <div className="grid grid-cols-3 gap-4 space-x-8"> {/*1x3 linhas e colunas */}

                            <div className="relative"> {/*Filtro de especie de animal */}
                                <button id="1" className="bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-lg text-gray-600
                                placeholder-gray-300 focus:outline-none shadow flex gap-2 w-[250px] h-[50px] justify-center font-black items-center	" onClick={() => toggleMenu()}
                                title="Especie de Animais"> {/*Botão que registra o click Do usuario */}
                                    {especieAnimal} {/*Gera condicionalmente o texto padrão dentro do botão que agrupa o dropDown*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md  w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                    {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                    o menuDropDown caso ele não esteja visivel */}
                                    <button onClick={handleOptionSelection} name="cachorro" id="cachorro"  className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Cachorro</button>
                                    <button onClick={handleOptionSelection} name="gato" id="gato" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Gato</button>
                                    <button onClick={handleOptionSelection} name="todos" id="todos" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Todos</button>

                                </div>
                            </div>

                            <div className="relative"> {/*Filtro de sexo do animal */}
                                <button id="2" className="bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-lg text-gray-600
                                placeholder-gray-300 focus:outline-none shadow flex items-center gap-2 w-[250px] h-[50px] justify-center font-black	" onClick={() => toggleMenu()}> {/*Botão que registra o click Do usuario */}
                                    {sexoAnimal}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md  w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                    {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                    o menuDropDown caso ele não esteja visivel */}
                                    <button onClick={handleOptionSelection} name="macho" id="macho" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Macho</button>
                                    <button onClick={handleOptionSelection} name="femea" id="femea" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Fêmea</button>
                                    <button onClick={handleOptionSelection} name="todosSexos" id="todosSexos" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Todos os sexos</button>

                                </div>
                            </div>

                            <div className="relative"> {/*Filtro do porte do animal */}
                                <button className="bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-lg text-gray-600
                                placeholder-gray-300 focus:outline-none shadow flex items-center gap-2 w-[250px] h-[50px] justify-center font-black	" onClick={() => toggleMenu()}> {/*Botão que registra o click Do usuario */}
                                    {porteAnimal}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md  w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                    {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                    o menuDropDown caso ele não esteja visivel */}
                                    <button onClick={handleOptionSelection} name="grande" id="grande" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Grande</button>
                                    <button onClick={handleOptionSelection} name="medio" id="medio" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Medio</button>
                                    <button onClick={handleOptionSelection} name="pequeno" id="pequeno" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Pequeno</button>
                                    <button onClick={handleOptionSelection} name="todosTamanhos" id="todosTamanhos" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Todos os tamanhos</button>


                                </div>
                            </div>

                        </div> {/*1x3 linhas e colunas */}


                        <div className="w-full flex justify-center items-center"> {/*Container que agrupa a search bar e o filtro de postagem */}
                            <div className="grid grid-cols-3 gap-4  w-auto space-x-5"> {/*1x2 linhas e colunas */}

                                <div className="col-start-1 col-span-2 "> {/*Filtro de tempo de postagem */}
                                    <input className="bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-lg text-gray-600
                                    placeholder-gray-300 focus:outline-none shadow flex items-center gap-2 w-full h-[50px] justify-center font-black" type="text" placeholder="Nome do animal..." /> {/*Botão que registra o click Do usuario */}
                                </div>

                                <div className="col-end-4"> {/*Filtro do porte do animal */}
                                    <button className="bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-lg text-gray-600
                                    placeholder-gray-300 focus:outline-none shadow flex items-center gap-2 w-[250px] h-[50px] justify-center font-black" onClick={() => toggleMenu()}> {/*Botão que registra o click Do usuario */}
                                        {tipoPostagem}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                    <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                        {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                        o menuDropDown caso ele não esteja visivel */}
                                        <button onClick={handleOptionSelection} name="maisRecente" id="maisRecente" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Mais Recente</button>
                                        <button onClick={handleOptionSelection} name="deOngs" id="deOngs" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">De Ongs</button>
                                        <button onClick={handleOptionSelection} name="deUsuario" id="deUsuario" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">De Usuários</button>
                                        <button onClick={handleOptionSelection} name="maisAntigas" id="maisAntigas" className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Mais Antigas</button>

                                    </div>
                                </div>

                            </div> {/*1x2 linhas e colunas */}

                        </div>




                        <div className="flex justify-center">

                            <div className="relative"> {/*Botão de buscar*/}
                                <button className="bg-[#33b3a6] border border-[#33b3a6] focus:border-blue-500 rounded px-3 py-1 text-lg text-white
                                placeholder-gray-300 focus:outline-none shadow flex items-center gap-2 w-[250px] h-[50px] justify-center font-black"> {/*Botão que registra o click Do usuario */}
                                    Buscar
                                </button>
                            </div>

                        </div>


                    </div>


                </div> {/*Body-Filter */}
            </section>
        </>
    )
};

export default SearchFilter;
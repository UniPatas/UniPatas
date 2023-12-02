"use client";

import { useState } from "react";
import '../../app/globals.css';
import { handleClientScriptLoad } from "next/script";

const SearchFilter = () => {
    const [menuDrop, setMenuDrop] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleMenu = () => { {/*Função que atualiza o estado do menu, que é usado para determinar se será exibido ou não */}
        setMenuDrop(!menuDrop);
    };

    const handleOptionSelection = (option, id) => { {/*Opçao que seta o valor padrão exibido em cada botão de cada menu dropDown quando o usuario seleciona uma opção */}
        const listId = {
            1: function (id) {
                return document.getElementById(id).value;
            }, 
            2: function (id) {
                return document.getElementById(id).value;
            },
            3:  function (id) {
                return document.getElementById(id).value;
            }
        };

        for (let number in listId) {
            console.log('Entrou no loop')
            console.log(number)
            if (id === number) {
                console.log('Entrou na condicional')
                const element = listId[id](); 
            }
        }
    
    
        // setSelectedOption(option);
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
                                    {/* {selectedOption ? selectedOption : 'Especie do animal'} Gera condicionalmente o texto padrão dentro do botão que agrupa o dropDown */}
                                    Especie do Animal
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md  w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                    {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                    o menuDropDown caso ele não esteja visivel */}
                                    <button onClick={() => handleOptionSelection('Cachorro', 1)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Cachorro</button>
                                    <button onClick={() => handleOptionSelection('Gato', 1)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Gato</button>
                                    <button onClick={() => handleOptionSelection('Todos', 1)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Todos</button>

                                </div>
                            </div>

                            <div className="relative"> {/*Filtro de sexo do animal */}
                                <button id="2" className="bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-lg text-gray-600
                                placeholder-gray-300 focus:outline-none shadow flex items-center gap-2 w-[250px] h-[50px] justify-center font-black	" onClick={() => toggleMenu()}> {/*Botão que registra o click Do usuario */}
                                    {/* {selectedOption ? selectedOption : 'Sexo'} Gera condicionalmente o texto padrão dentro do botão que agrupa o dropDown */}
                                    Sexo
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md  w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                    {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                    o menuDropDown caso ele não esteja visivel */}
                                    <button onClick={() => handleOptionSelection('Masculino', 2)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Masculino</button>
                                    <button onClick={() => handleOptionSelection('Feminino', 2)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Feminino</button>
                                    <button onClick={() => handleOptionSelection('Todos os sexos', 2)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Todos os sexos</button>

                                </div>
                            </div>

                            <div className="relative"> {/*Filtro do porte do animal */}
                                <button className="bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-lg text-gray-600
                                placeholder-gray-300 focus:outline-none shadow flex items-center gap-2 w-[250px] h-[50px] justify-center font-black	" onClick={() => toggleMenu()}> {/*Botão que registra o click Do usuario */}
                                    {selectedOption ? selectedOption : 'Porte do animal'} {/*Gera condicionalmente o texto padrão dentro do botão que agrupa o dropDown */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md  w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                    {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                    o menuDropDown caso ele não esteja visivel */}
                                    <button onClick={() => handleOptionSelection('Grande', 3)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Grande</button>
                                    <button onClick={() => handleOptionSelection('Medio', 3)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Medio</button>
                                    <button onClick={() => handleOptionSelection('Pequeno', 3)} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Pequeno</button>

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
                                        {selectedOption ? selectedOption : 'Postagem'} {/*Gera condicionalmente o texto padrão dentro do botão que agrupa o dropDown */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> {/*Icone de seta que indica um menu dropDown */}
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                    <div id="menuDropDown" className={`inline bg-white border border-gray-300 py-1 shadow-md rounded-md w-[250px] h-auto absolute text-lg ${menuDrop ? '' : 'hidden'}`}> {/*Menu dropDown da especie dos animais e suas opções(cada link) */}
                                        {/*Na div acima, utilizei uma renderização condicional para a classe hidden, ela só vai existir caso o estado do "menuDrop" seja falso, ou seja, so vai esconder
                                        o menuDropDown caso ele não esteja visivel */}
                                        <button onClick={() => handleOptionSelection('Mais Recente')} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Mais Recente</button>
                                        <button onClick={() => handleOptionSelection('De ongs')} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">De Ongs</button>
                                        <button onClick={() => handleOptionSelection('De Usuarios')} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">De Usuários</button>
                                        <button onClick={() => handleOptionSelection('Mais Antigas')} className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Mais Antigas</button>

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
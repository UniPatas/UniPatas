'use client';

import '@/app/globals.css';
import { useState } from 'react';

const DuvidasFrequentes = () => {

    const valorPadrao = true; {/*False para a duvida não aberta, e true para duvida aberta */}
    const [arrow1, setArrow1] = useState(valorPadrao);
    const [arrow2, setArrow2] = useState(valorPadrao);
    const [arrow3, setArrow3] = useState(valorPadrao);
    const [arrow4, setArrow4] = useState(valorPadrao);

    const handleArrowClick = (evento) => { {/*Altera o icone de seta dentro do container das duvidas */}
        const  { id } = evento.target; {/*Captura o evento de cada elemento que aciona a função */}

        const listId = { 
            'arrow1': function () {
                setArrow1(!arrow1);
            },
            'arrow2': function () {
                setArrow2(!arrow2);
            },
            'arrow3': function () {
                setArrow3(!arrow3);
            },
            'arrow4': function () {
                setArrow4(!arrow4);
            }
        }; {/*Lista com id de cada elemento*/}

        for (const key in listId) {
            if (id === key) {
                listId[key]();
            }
        }


    };
  
    return (
        <div className='w-full h-[500px] teste flex justify-center'> {/*Container pai */}

            <div className='w-[60%] h-full justify-center teste flex flex-col'> {/*Container principal */}

                <div className='w-full h-[50px] teste bg-[#33b3a6] font-bold flex items-center'> {/*Titulo */}
                    Perguntas Frequentes
                </div>
            
                <div className='w-full h-full flex'>

                    <div className='w-[50%] teste h-auto flex flex-col items-center gap-4'> {/*Coluna 1 */}
                    {/*Aqui dentro vai os containers de duvidas */}

                    <details className='teste w-[90%] bg-[#ffc501]'>
                            <summary className="w-full h-[45px] teste cursor-pointer font-bold list-none flex items-center justify-between" id='arrow1' onClick={handleArrowClick}>
                                Dúvida 1
                                
                                { arrow1
                                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              
                              
                               } {/*Exibe condicionalmente cada icone, dependendo do state */}    

                                
                            </summary>

                            Conteudo da dúvida 1
                        </details>

                        <details className='teste w-[90%] bg-[#ffc501]'>
                            <summary className="w-full h-[45px] teste cursor-pointer font-bold list-none flex items-center justify-between" id='arrow2' onClick={handleArrowClick}>
                                Dúdiva 1
                                
                                { arrow2
                                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              
                              
                               } {/*Exibe condicionalmente cada icone, dependendo do state */}    

                                
                            </summary>

                            Conteudo da dúvida 2
                        </details>

                    </div>

                    <div className='w-[50%] teste h-auto flex flex-col items-center gap-4'> {/*Coluna 2 */}
                    {/*Aqui dentro vai os containers de duvidas */}

                        <details className='teste w-[90%] bg-[#ffc501]'>
                            <summary className="w-full h-[45px] teste cursor-pointer font-bold list-none flex items-center justify-between" id='arrow3' onClick={handleArrowClick}>
                                Dúvida 3
                                
                                { arrow3
                                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              
                              
                               } {/*Exibe condicionalmente cada icone, dependendo do state */}    

                                
                            </summary>

                            Conteudo da dúvida 3
                        </details>

                        <details className='teste w-[90%] bg-[#ffc501]'>
                            <summary className="w-full h-[45px] teste cursor-pointer font-bold list-none flex items-center justify-between" id='arrow4' onClick={handleArrowClick}>
                                Dúvida 4
                                
                                { arrow4
                                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              
                              
                               } {/*Exibe condicionalmente cada icone, dependendo do state */}    

                                
                            </summary>

                            Conteudo da dúvida 4
                        </details>                    
                        
                    </div>


                </div>


            </div>
        
        </div>
    )
}

export default DuvidasFrequentes;

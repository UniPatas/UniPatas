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
        console.log(id);

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

    //Matrizes de objetos que armazena os conteudos das duvidas e renderiza dinamicamente. Caso estivesse puxando do BD, viria daqui.
    const sourceColum1 = [ 
        {
            summary: "Quem é o publico alvo?",
            detail: `O público-alvo abrange empresas, ONGs, profissionais da saúde animal e indivíduos apaixonados pela causa, proporcionando oportunidades de envolvimento
            e contribuição para a proteção animal.`,
            id: "arrow1",
            key: "duvida1",
            set: arrow1
        },
        {
            summary: "Como posso contribuir com as ongs ?",
            detail: "Na nossa secção ogs, localizada no menu de navegação no topo do site, você tem acesso a pagina voltada para ongs onde estão dispostos os meios de doação de cada ongs parceira do UniPatas.",
            id: "arrow2",
            key: "duvida2",
            set: arrow2
        }
    ];

    const sourceColum2 = [ 
        {
            summary: "Duvida 3",
            detail: "Conteudo da duvida",
            id: "arrow3",
            key: "duvida3",
            set: arrow3

        },
        {
            summary: "Duvida 4",
            detail: "conteudo da duvida",
            id: "arrow4",
            key: "duvida4",
            set: arrow4
        }
    ];
  
    return (
        <div className='w-full h-[500px] teste flex justify-center'> {/*Container pai */}

            <div className='w-[60%] h-full justify-center teste flex flex-col'> {/*Container principal */}

                <div className='w-full h-[50px] teste bg-[#33b3a6] font-bold flex items-center text-[18px] rounded pl-1'> {/*Titulo */}
                    Perguntas Frequentes
                </div>
            
                <div className='w-full h-full flex'> {/*Contem que armazena as colunas */}

                    <div className='w-[50%] h-auto flex flex-col items-center gap-4'> {/*Coluna 1 */}
                    {/*Aqui dentro vai os containers de duvidas */}

                        {sourceColum1.map((item) => (
                            <details key={item.key} className=' w-[90%] bg-[#ffc501] rounded border-2 border-slate-950 text-[1rem] flex p-2.5'>
                                <summary className="w-full h-[45px] text-[18px] cursor-pointer font-bold flex justify-center list-none">
                                    
                                    <div id={item.id} onClick={handleArrowClick} className='w-[98%] flex items-center justify-between h-full text-[1rem]'>
                                        {item.summary}
                                        
                                        { item.set
                                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    
                                    
                                        } {/*Exibe condicionalmente cada icone, dependendo do state */}    



                                    </div>
                                    
                                </summary>

                                <div className='w-full h-auto  flex justify-center items-center'> {/*Container que agrupa o corpo da duvida. */}
                                    <div className='w-[98%]  text-[1rem] tracking-wide py-1 '>
                                        {item.detail}
                                    </div>
                                </div>

                            </details>

                        ))}

                    </div> {/*Final coluna 1 */}

                    <div className='w-[50%] h-auto flex flex-col items-center gap-4'> {/*Coluna 2 */}
                    {/*Aqui dentro vai os containers de duvidas */}

                        {sourceColum2.map((item) => (
                            <details key={item.key} className=' w-[90%] bg-[#ffc501] rounded border-2 border-slate-950 text-[1rem] flex p-2.5'>
                                <summary className="w-full h-[45px] text-[18px] cursor-pointer font-bold flex justify-center list-none">
                                    
                                    <div id={item.id} onClick={handleArrowClick} className='w-[98%] flex items-center justify-between h-full text-[1rem]'>
                                        {item.summary}
                                        
                                        { item.set
                                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    
                                    
                                        } {/*Exibe condicionalmente cada icone, dependendo do state */}    



                                    </div>
                                    
                                </summary>

                                <div className='w-full h-auto  flex justify-center items-center'> {/*Container que agrupa o corpo da duvida. */}
                                    <div className='w-[98%]  text-[1rem] tracking-wide py-1 '>
                                        {item.detail}
                                    </div>
                                </div>

                            </details>

                        ))}
                        
                    </div>


                </div>


            </div>
        
        </div>
    )
}

export default DuvidasFrequentes;

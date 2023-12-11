'use client';

import '@/app/globals.css';
import { useState } from 'react';
import ShowMore from './ShowMore';


const DuvidasFrequentes = () => {

    const valorPadrao = true; {/*False para a duvida não aberta, e true para duvida aberta */}
    // Declaração do estado `expandedDoubts` utilizando o Hook `useState`
    const [expandedDoubts, setExpandedDoubts] = useState({
        arrow1: valorPadrao,
        arrow2: valorPadrao,
        arrow3: valorPadrao,
        arrow4: valorPadrao,
        arrow5: valorPadrao,
    });
  

    // Função que trata os cliques nos elementos com a propriedade `id`
    const handleArrowClick = (evento) => {
        // Destruturação para obter a propriedade `id` do objeto evento
        const { id } = evento.target;
    
        // Utiliza a função `setExpandedDoubts` para atualizar o estado `expandedDoubts`
        setExpandedDoubts((prevExpandedDoubts) => ({
        // Cria um novo objeto mantendo os valores existentes em `prevExpandedDoubts`
        ...prevExpandedDoubts,
        // Inverte o valor associado à chave específica (`id`) no objeto `prevExpandedDoubts`
        [id]: !prevExpandedDoubts[id],
        }));
    };

    //Matrizes de objetos que armazena os conteudos das duvidas e renderiza dinamicamente. Caso estivesse puxando do BD, viria daqui.
    const doubts = [ 
        {
            summary: "Quem é o publico alvo?",
            detail: `O público-alvo abrange empresas, ONGs, profissionais da saúde animal e indivíduos apaixonados pela causa, proporcionando oportunidades de envolvimento
            e contribuição para a proteção animal.`,
            id: "arrow1",
            key: "duvida1",
            set: expandedDoubts.arrow1,
            colum: 1
        },
        {
            summary: "Como posso contribuir com as ongs ?",
            detail: "Na nossa secção ogs, localizada no menu de navegação no topo do site, você tem acesso a pagina voltada para ongs onde estão dispostos os meios de doação de cada ongs parceira do UniPatas.",
            id: "arrow2",
            key: "duvida2",
            set: expandedDoubts.arrow2,
            colum: 1
        },
        {
            summary: "Sou uma ong e quero ser divulgada",
            detail: "Entre em contato conosco em um dos canais e meios disponiblizados abaixo no rodape da pagina, informando seu interesse.",
            id: "arrow3",
            key: "duvida3",
            set: expandedDoubts.arrow3,
            colum: 2
        },
        {
            summary: "Qual é a missão da UniPatas?",
            detail: `Promover a proteção e o bem-estar dos animais, conectando amantes de animais, ONGs de proteção animal e adotantes responsáveis para criar um mundo mais seguro e amoroso para os animais.`,
            id: "arrow4",
            key: "duvida4",
            set: expandedDoubts.arrow4,
            colum: 2
        },
        {
            summary: "Empresas parceiras",
            detail: `O unipatas oferece parcerias com empresas do ramo animal, entre em contato para saber mais. Através dos nossos canais de contato no rodape da pagina..`,
            id: "arrow5",
            key: "duvida5",
            set: expandedDoubts.arrow5,
            colum: 2
        }

    ];

    return (

        <div className='w-full h-auto flex justify-center mb-[5rem] mt-[5rem]'> {/*Container pai */}


            <div className='w-[60%]  h-full justify-center items-center flex flex-col'> {/*Container principal */}

                <div className=' w-[90%] h-[50px] bg-[#33b3a6] font-bold flex items-center justify-center text-[18px] rounded pl-1'> {/*Titulo */}
                    <div className='w-[98%] h-full flex items-center'>
                        Perguntas Frequentes
                    </div>
                </div>
            
                <div className='  w-full h-full flex justify-items-center items-center gap-1 flex-col pt-2.5'> {/*Contem que armazena as colunas */}

                    <ShowMore data={doubts} expandedDoubts={expandedDoubts} onArrowClick={handleArrowClick} />

                </div>


            </div>

        </div>
    )
}

export default DuvidasFrequentes;

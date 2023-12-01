"use client"

import '../../../app/globals.css';
import Modal from '@/components/Home/ChatBot/Modal';
import { useState } from "react";

export default function ChatBot () {

    const [showModal, setShowModal] = useState(false); {/*Usado para rastrear se deve exibir o modal ou não */}

    const modalMessages = ({/*Parametros */}) => { {/*Essa função vai criar as mensgaens e consumir a api */}
        const carameloMessage = ""; {/*Armazena as mensgens do boot caramelo */}
        const userMessage = ""; {/*Armazena as mensagens do usuario */}


    };
    
    const modalIsOpen = () => {

        if (showModal === true ) {
            let elementoChat = document.getElementById('chatBot');
            elementoChat.classList.add('ring', 'ring-[#33b3a6]', 'ring-offset-2', 'bg-[#3f968a]');


        }
    }; {/*Função que verifica se o modal está aberto, e adiciona classes*/}

    const fecharModal = () => { {/*Essa função é chamada ao clicar no icone de fechar o modal, ela alterna o estado da variavel de controel, e também remove o efeito ring do icone de chat */}
        setShowModal(false);
        
        let elementoChat = document.getElementById('chatBot');
        elementoChat.classList.remove('ring', 'ring-[#33b3a6]', 'ring-offset-2', 'bg-[#3f968a]');

    }

    return (
        <>
            <section>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> {/*Api do google, para importar icones */}

                <aside> 

                    <a href='#' onClick={() => setShowModal(true)}>
                        <button id='chatBot' className="rounded-full bg-[#33b3a6] hover:bg-[#3f968a] focus:bg-[#3f968a] focus:ring-2 
                        focus:ring-[#33b3a6] focus:ring-offset-2 w-[70px] h-[70px] fixed right-[19px] justify-center items-center flex
                        active:ring active:ring-[#33b3a6] active:ring-offset-2 bottom-4 "> {/*Icone arredondado do chatBot */}

                            {showModal && modalIsOpen()} {/*Adiciona o efeito ring ao indentificar que o modal está aberto */}

                            {!showModal && 
                                <span class="fixed justify-self-end self-start right-7 flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            } {/*Exibição condicional, exibe um icone de notificação (alerta) em cima do botão do chat, caso o modal não esteja ativado */}

                            <span class="m-[0px auto] material-symbols-outlined self-center justify-self-center right-0"> {/*Icone de mensagem */}
                            sms
                            </span>
                            
                        </button>
                    </a>

                    {showModal && 
                        <Modal onClose={() => fecharModal()}>
                            {/*A logica e o back-end vem aqui, para gerar as mensagens dinamicamente dentro do moda-body */}

                        </Modal>}
 

                </aside>

            </section>
        </>
    )
};


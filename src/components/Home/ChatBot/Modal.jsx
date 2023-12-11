import Image from "next/image";
import ReactDOM from "react-dom";
import Caramelo from '@/assets/cachorroHeaderChatBot.png';
import '@/app/globals.css'
import { useState, useRef, useEffect } from 'react';
import ToolTip from "./ToolTips/ToolTip";

const Modal = ({ onClose, children }) => {
  const [response, setResponse] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef();
  const [isLoading, setIsLoading] = useState(false); //estado para controlar o estado de carregamento  da resposta do chatBot


  const handleCloseClick = (e) => { //Função para fechar o modal
    e.preventDefault();
    onClose();
  };

    const handleKeyDown = (e) => { //Função para enviar a mensagem do input ao clicar na tecla input
    if (e.key === 'Enter') { //Captura o evento, e captura a propiedade key do evento, se ela for ingual a Enter, chama a função de enviar mensagem
      sendMessage();
    }
  };

  const sendMessage = async () => {
    
    try {
      // Adiciona a mensagem do usuário à lista de mensagens
      setMessages([...messages, { text: userMessage, user: true }]);
      setUserMessage('');

      //Ativa o estado de carregamento
      setIsLoading(true);

      // Simula um atraso de 1 segundo antes de obter a resposta do chatBot
      await new Promise(resolve => setTimeout(resolve, 2000));

      const res = await fetch('http://localhost:5000/post_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      // Adiciona a resposta do chatBot à lista de mensagens após o atraso
      setMessages(prevMessages => [
        ...prevMessages,
        { text: data.response, user: false },
      ]);

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      
      // Desativa o estado de carregamento, independentemente do resultado
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Role a área de mensagens para o final
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;

  }, [messages]);

  const modalContent = (
    <div className="fixed top-0 left-0 w-full h-[100%] flex justify-center items-center">{/*Modal overlay*/}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />{/*Api do google, para importar icones */}

      <div className="fixed flex backdrop-opacity-10 rounded-2xl bottom-35 right-11 w-[500px] h-[500px]"> {/*Modal wrapper*/}
        <div className="bg-white drop-shadow-2xl shadow-2xl flex flex-col h-full w-full rounded-2xl">{/*Modal-Body*/}
          <header className="bg-red-700 flex rounded-t-lg flex-nowrap w-[500px] h-16 bg-gradient-to-r from-[#A110A9] to-[#33B3A6]">{/*Modal Cabeçalho*/}
            <div className="w-[14%]"> {/*Imagem caramelo*/}
              <Image className="w-auto h-full rounded-t-lg" src={Caramelo} alt="Imagem do mascote da plataforma, caramelo, olhando para o horizonte." />
            </div>
            <div className="w-[80%] text-center items-center self-center text-white	font-bold">
              <h1 className="text-2xl tracking-wide">Caramelo irá te ajudar!</h1>
            </div>

            <ToolTip text={"Caso você saia do chat, as mensagens serão perdidas."}>
                <span className="animate-bounce material-symbols-outlined cursor-pointer" onClick={handleCloseClick}>
                  cancel
                </span>

            </ToolTip>

            <div className="">
              <a className="" href="#" > {/*Modal Botão de fechar*/}
              </a>
            </div>  
 
          </header>


          <div ref={messagesContainerRef} className="h-[336px] text-black text-center overflow-y-auto"> {/*Modal Area de mensagens*/}
            {/* Mostrar a conversa aqui */}
            {messages.map((message, index) => (
              <div key={index} className="flex flex-col w-full items-center">

                  {message.user 
                  ? (
                    <div className="w-[70%] h-auto mt-[3rem] mb-[3rem] border-4 border-[#33b3a6] rounded-l-lg  rounded-b-lg">
                      <div className="w-full items-center grid grid-cols-5 h-auto bg-[#33b3a6] text-white font-black	pt-[3px] pb-[3px] text-[1.3rem]"> {/*Head da mensagem */}
                        <p className="col-start-3 col-span-2">
                          Usuário
                        </p>
                        <div className="border border-[#43dacb] bg-white rounded-full w-[50px] h-[50px] col-start-7">
                        </div>
                      </div>
                      <div className="bg-white p-[1rem] break-words rounded-lg font-black"> {/*Corpo da mensagem */}
                        {message.text}                    
                      </div>
                    </div>
                  )
                : (
                  <div className="w-[70%] h-auto mb-[3rem] border-4 border-[#a110a9] rounded-r-lg  rounded-b-lg">
                    <div className="w-full items-center grid grid-cols-6 h-auto bg-[#a110a9] text-white font-black	pt-[3px] pb-[3px] text-[1.3rem]"> {/*Head da mensagem */}
                      <div className=" bg-white rounded-full w-[50px] h-[50px] col-start-1">
                        <Image className="border border-[#d141e1] w-full h-full rounded-full" src={Caramelo} alt="Imagem do mascote da plataforma, caramelo, olhando para o horizonte." />
                      </div>
                      <p className="col-start-3 col-span-2">
                        Caramelo
                      </p>
                    </div>
                    <div className="bg-white p-[1rem] break-words rounded-lg font-black"> {/*Corpo da mensagem */}
                      {message.text}                    
                    </div>
                  </div>
                )}

              </div>
            ))}

            {isLoading && (
              <div class="border border-blue-300 shadow rounded-r-lg  rounded-b-lg  p-4 max-w-sm w-[70%] mb-[3rem] mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            )} {/*Exibe esse container de conteudo sendo carregado, caso a mensagem do chatBot não tenha sido enviada ainda */}

          </div>
          <div className="flex border-t border-t-black self-center rounded-b-lg w-[400px] h-[100px]"> {/*Area de digitar*/}
            <input
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              id="mensagemUsuario"
              name="mensagemUsuario"
              className="text-ellipsis break-words focus:outline-none rounded-b-lg w-[80%] text-center text-lg font-bold"
              placeholder="Digite Aqui..."
            ></input>
            <div className="w-[20%] flex justify-center items-center">
              <button onClick={sendMessage} className="w-16 h-16 rounded-full hover:bg-slate-200 hover:delay-150 hover:ease-in hover:duration-700 hover:ring-4 hover:ring-inset hover:ring-bg-slate-400">
                <span className="material-symbols-outlined">
                  send
                </span>
              </button>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );{/*Variavel que armazena o conteudo do modal, dentro dele tem o conteudo principal do modal 'children'*/}

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );{/*Cria um portal para poder inserir o modal diretamente na div com id modal-root no html da pagina*/}
};

export default Modal;

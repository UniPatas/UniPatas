import Image from "next/image";
import ReactDOM from "react-dom";
import Caramelo from '@/assets/cachorroHeaderChatBot.png';
import { useState, useRef, useEffect } from 'react';

const Modal = ({ onClose, children }) => {
  const [response, setResponse] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef();

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const sendMessage = async () => {
    try {
      const res = await fetch('http://localhost:5000/post_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setResponse(data.response);

      // Adicione a mensagem do usuário e a resposta do bot à lista de mensagens
      setMessages([...messages, { text: userMessage, user: true }, { text: data.response, user: false }]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  useEffect(() => {
    // Role a área de mensagens para o final
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages]);

  const modalContent = (
    <div className="fixed teste top-0 left-0 w-full h-[100%] flex justify-center items-center">{/*Modal overlay*/}
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
            <div className="">
              <a className="relative left-9 bottom-[2px]" href="#" onClick={handleCloseClick}> {/*Modal Botão de fechar*/}
                <span className="material-symbols-outlined">
                  cancel
                </span>
              </a>
            </div>
          </header>
          <div ref={messagesContainerRef} className="h-[336px] text-black text-center overflow-y-auto"> {/*Modal Area de mensagens*/}
            {/* Mostrar a conversa aqui */}
            {messages.map((message, index) => (
              <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-t-black self-center rounded-b-lg w-[400px] h-[100px]"> {/*Area de digitar*/}
            <input
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
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

const ModalPub = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* MODELO DE MODAL */}

      <div className=" fixed inset-0 bg-black-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className=" bg-white w-[50%] h-[50%]">
          {/* CONTEÚDO DO MODALA QUI */}
          <div className=" w-[20px] h-[20px] bg-darker-purple text-center hover:text-white">
            <button onClick={() => onClose()}>X</button>
          </div>
          <div>
            {/* perfil user e logo unipatas */}
            <div> LOGO </div>
            {/* nome e espécie */}
            <div>Nome e Porte</div>
            {/* porrte e sexo */}
            <div>Porte e sexo</div>

            {/* qaudro de caracteristicas */}
            <div>CARACTERISTICAS</div>

            {/* exemplo de publicação */}
            <div>Fotinha e mais informações</div>

            <div>
              <button className="bg-darker-purple text-white rounded p-[5px] hover:bg-pool-green">
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPub;

export default function ModalPub() {
  return (
    <>
      {/* MODELO DE MODAL */}

      <div className=" w-screen h-screen relative top-0 left-0 bg-yellow flex items-center justify-center z-[999]">
        <div className="w-[60%] min-w-[450px] min-h-[200px] bg-white">
          {/* CONTEÚDO DO MODALA QUI */}
          <div className=" w-[20px] h-[20px] bg-darker-purple text-center hover:text-white">
            <button>X</button>
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
}

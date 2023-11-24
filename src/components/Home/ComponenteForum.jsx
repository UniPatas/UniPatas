export function ComponenteForum() {
  return (
    <>
      {/* Componente de destaque de publicações do fórum  */}
      <section>
        <div>
          {/* Título do componente  */}
          <h1 className=" text-center text-[50px] text-darker-purple font-black p-[50px]">
            Fórum
          </h1>
          {/* Div responsável por centralizar o conteúdo  */}
          <div className=" w-full max-w-[1246px] px-[50px] mx-auto">
            {/* Div com os 4 destaques de publicações  */}
            <div className="flex flex-wrap gap-y-[50px] justify-evenly ">
              {/* 1º destaque  */}
              <div className=" flex flex-col justify-between item w-[470px] h-[320px] bg-yellow rounded-custom5 p-[40px]">
                <div>
                  <h1 className="text-[30px] font-bold text-darker-purple">
                    Title
                  </h1>
                </div>

                <div>
                  <p className=" text-[18px] text-darker-purple">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>

                <div className="flex justify-center mt-[10px]">
                  <div>
                    <a
                      href="#"
                      className="text-white font-bold text-[15px] w-[100%] h-[20px] px-[15px] py-[5px] rounded-full bg-darker-purple hover:bg-pool-green"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
              </div>

              {/* 2º destaque  */}
              <div className=" flex flex-col justify-between w-[470px] h-[320px] bg-yellow rounded-custom5 p-[40px]">
                <div>
                  <h1 className="text-[30px] font-bold text-darker-purple">
                    Title
                  </h1>
                </div>

                <div>
                  <p className=" text-[18px] text-darker-purple">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>

                <div className="flex justify-center mt-[10px]">
                  <div>
                    <a
                      href="#"
                      className="text-white font-bold text-[15px] w-[100%] h-[20px] px-[15px] py-[5px] rounded-full bg-darker-purple hover:bg-pool-green"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
              </div>

              {/* 3º destaque  */}
              <div className=" flex flex-col justify-between w-[470px] h-[320px] bg-yellow rounded-custom5 p-[40px]">
                <div>
                  <h1 className="text-[30px] font-bold text-darker-purple">
                    Title
                  </h1>
                </div>

                <div>
                  <p className=" text-[18px] text-darker-purple">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>

                <div className="flex justify-center mt-[10px]">
                  <div>
                    <a
                      href="#"
                      className="text-white font-bold text-[15px] w-[100%] h-[20px] px-[15px] py-[5px] rounded-full bg-darker-purple hover:bg-pool-green"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
              </div>

              {/* 4º destaque  */}
              <div className=" flex flex-col justify-between w-[470px] h-[320px] bg-yellow rounded-custom5 p-[40px]">
                <div>
                  <h1 className="text-[30px] font-bold text-darker-purple">
                    Title
                  </h1>
                </div>

                <div>
                  <p className=" text-[18px] text-darker-purple">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>

                <div className="flex justify-center mt-[10px]">
                  <div>
                    <a
                      href="#"
                      className="text-white font-bold text-[15px] w-[100%] h-[20px] px-[15px] py-[5px] rounded-full bg-darker-purple hover:bg-pool-green"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão "ver mais" */}
            <div className=" flex justify-center">
              <a
                href="#"
                className=" text-darker-purple font-bold text-[30px] my-[30px] hover:underline"
              >
                Ver mais
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

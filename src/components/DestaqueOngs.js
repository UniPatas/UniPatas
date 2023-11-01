export function DestaqueOngs() {
  return (
    <div>
      <h1 className=" text-center text-[50px] text-darker-purple font-black p-[50px]">
        Conheça as ONG's
      </h1>
      <div id="carousel" className=" w-full max-w-[1246px] px-[50px] mx-auto">
        <div className=" flex items-center justify-between w-full bg-gray-400 p-[40px]">
          <div className=" h-[60px] w-[60px] ">
            <button>
              <div className=" h-[60px] w-[60px] bg-yellow rounded-full flex justify-center items-center">
                <span className=" text-ligther-purple text-[40px] hover:text-darker-purple">
                  &lt;
                </span>
              </div>
            </button>
          </div>

          <div>
            <a className=" flex" href="#">
              <div className=" flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                <div className=" h-[177px] w-[255px] rounded-custom6 bg-white">
                  <span>Imagem do perfil da ONG</span>
                </div>
                <div>
                  <span className=" text-[22px] text-white font-bold ">
                    Nome ONG {teste}
                  </span>
                </div>
                <div className=" text-center text-white">
                  <span>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a className=" flex" href="#">
              <div className=" flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                <div className=" h-[177px] w-[255px] rounded-custom6 bg-white">
                  <span>Imagem do perfil da ONG</span>
                </div>
                <div>
                  <span className=" text-[22px] text-white font-bold ">
                    Nome ONG
                  </span>
                </div>
                <div className=" text-center text-white">
                  <span>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a className=" flex" href="#">
              <div className=" flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                <div className=" h-[177px] w-[255px] rounded-custom6 bg-white">
                  <span>Imagem do perfil da ONG</span>
                </div>
                <div>
                  <span className=" text-[22px] text-white font-bold ">
                    Nome ONG
                  </span>
                </div>
                <div className=" text-center text-white">
                  <span>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div>
            <button>
              <div className=" h-[60px] w-[60px] bg-yellow rounded-full flex justify-center items-center">
                <span className=" text-ligther-purple text-[40px] hover:text-darker-purple">
                  &gt;
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const teste = "Olá Mundo"
"use client";
import Slider from "@/components/Home/Sliders/Slider";
import "@/app/globals.css";

export function SliderOurHist() {
  return (
    <>
      {/* Slider de notícias */}
      <section className=" pt-[50px]">
        {/* Fundo roxo */}
        <div className=" w-full">
          {/* Centralizando conteudo no meio do site */}
          <div className=" max-w-[1246px] px-[60px] mx-auto p-[40px]">
            <div
              id="wrapper"
              className=" flex justify-around items-center relative "
            >
              {/* Botão de passar o slide da esquerda */}
              <div
                id="left"
                className="arrowsOurHist absolute left-[-23px] top-[40%]"
              >
                <button>
                  <div className=" h-[60px] w-[60px] bg-white rounded-full flex justify-center items-center ">
                    <span className=" text-ligther-purple text-[40px] hover:text-darker-purple">
                      &lt;
                    </span>
                  </div>
                </button>
              </div>
              {/* Div que contém todos os cards */}
              <div
                id="carouselOurHist"
                onMouseMove={() => Slider({ carouselId: "carouselOurHist", cardClass: "cardOurHist", arrowsClass: "arrowsOurHist" })}
                className="flex justify-between max-w-[100%] overflow-hidden scroll-smooth"
              >
                {/* CARD 1 */}
                
                  <div className="cardOurHist ">
                    <div className=" cursor-pointer flex justify-around items-center flex-col h-[620px] w-[1050px] rounded-custom5 overflow-hidden bg-yellow">
                      <div>
                        {" "}
                        <img
                          className="mt-[25px]"
                          src="https://iuna.es.gov.br/arquivos/images/2022/12/post/p05ss_638f299edfc48.png" alt="Notícia"
                        ></img>
                      </div>
                    </div>
                  </div>

              </div>
              {/* Botão de passar o slide da direita */}
              <div
                id="rigth"
                className="arrowsOurHist absolute right-[-23px] top-[40%]"
              >
                <button>
                  <div className=" h-[60px] w-[60px] bg-white rounded-full flex justify-center items-center ">
                    <span className=" text-ligther-purple text-[40px] hover:text-darker-purple">
                      &gt;
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

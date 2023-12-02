
import Image from "next/image";
import News1 from "@/assets/capa1-slider-news.png";
import SliderHist from "@/components/Home/SliderHistoria/SliderHistCod";
import "@/app/globals.css";

export function SliderHistoria() {
  return (
    <>
      {/* Slider de notícias */}
      <section className=" pt-[50px]">
        {/* Fundo roxo */}
        <div className=" w-full bg-darker-purple">
          {/* Centralizando conteudo no meio do site */}
          <div className=" max-w-[1246px] px-[60px] mx-auto p-[40px]">
            <div
              id="wrapper"
              className=" flex justify-around items-center relative "
            >
              {/* Botão de passar o slide da esquerda */}
              <div
                id="left"
                className="arrowsHist absolute left-[-23px] top-[40%]"
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
                id="carouselHist"
                onMouseMove={SliderHist}
                className=" flex justify-between max-w-[1000px] overflow-hidden scroll-smooth"
              >
                {/* CARD 1 */}
                <a
                  href="https://iuna.es.gov.br/noticia/2022/12/maltratar-animais-domesticos-ou-manter-os-silvestres-em-casa-e-crime.html"
                  target="_blank"
                >
                  <div className="cardHist ml-[45px]">
                    <div className=" cursor-pointer flex justify-around items-center flex-col h-[250px] w-[900px] rounded-custom5 overflow-hidden">
                      <div>
                        {" "}
                        <img
                          className="mt-[25px]"
                          src="https://iuna.es.gov.br/arquivos/images/2022/12/post/p05ss_638f299edfc48.png"
                        ></img>
                      </div>
                    </div>
                  </div>
                </a>

                {/* CARD 2 */}
                <a
                  href="https://meioambiente.itabira.mg.gov.br/detalhe-da-materia/info/voluntarios-ja-podem-se-cadastrar-para-integrar-programa-municipal-de-cuidado-animal/276158"
                  target="_blank"
                >
                  <div className="cardHist ml-[15px]">
                    <div className=" cursor-pointer flex justify-around items-center flex-col h-[250px] w-[900px] rounded-custom5 overflow-hidden">
                      <div>
                        {" "}
                        <img src="https://portalfacilarquivos.blob.core.windows.net/uploads/ITABIRA/imgOrig/%7BA8AEDABA-BCCB-BC7A-A3EA-0AA8BD0A4DAB%7D.png"></img>
                      </div>
                    </div>
                  </div>
                </a>

                {/* CARD 3 */}
                <a href="/">
                  <div className="cardHist ml-[15px]">
                    <div className=" cursor-pointer flex justify-around items-center flex-col h-[250px] w-[900px] rounded-custom5 overflow-hidden">
                      <div>
                        {" "}
                        <Image src={News1} />
                      </div>
                    </div>
                  </div>
                </a>

                {/* CARD 4 */}
                <a
                  href="https://meioambiente.itabira.mg.gov.br/detalhe-da-materia/info/voluntarios-ja-podem-se-cadastrar-para-integrar-programa-municipal-de-cuidado-animal/276158"
                  target="_blank"
                >
                  <div className="cardHist mx-[15px]">
                    <div className=" cursor-pointer flex justify-around items-center flex-col h-[250px] w-[900px] rounded-custom5 overflow-hidden">
                      <div>
                        {" "}
                        <img
                          className=" mt-[25px]"
                          src="https://barbacena.mg.gov.br/imagens/saude/img_2023-05-29-20-33-19-9899-0.jpg"
                        ></img>
                      </div>
                    </div>
                  </div>
                </a>

                {/* CARD 5 */}
                <a href="https://pc.sc.gov.br/?page_id=3623" target="_blank">
                  <div className="card mr-[45px]">
                    <div className=" cursor-pointer flex justify-around items-center flex-col h-[250px] w-[900px] rounded-custom5 overflow-hidden">
                      <div>
                        {" "}
                        <img
                          className=" h-[300px]"
                          src="https://sistemas.pc.sc.gov.br/sospets/assets/banner-maus-tratos-animais.png"
                        ></img>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* Botão de passar o slide da direita */}
              <div
                id="rigth"
                className="arrowsHist absolute right-[-23px] top-[40%]"
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
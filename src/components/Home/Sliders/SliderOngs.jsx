"use client";
import Image from "next/image";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Slider from "@/components/Home/Sliders/Slider";
import "@/app/globals.css";
import Anjinhos4 from "@/assets/anjinho4patas.jpg";
import CatinhoFilo from "@/assets/ongfilo.png";
import AdoteViraLata from "@/assets/adoteumviralata.jpg";
import AmorSemFronteiras from "@/assets/amorsemfronteiras.jpg";
import OngGatinhus from "@/assets/onggatinhus.jpg";

export function SliderOngs() {
  return (
    <>
      <section className="Slider-ongs pb-[30px]">
        <h1 className=" text-center text-[30px] text-darker-purple font-black pb-[40px]">
          Conheça as ONG's
        </h1>

        <div className=" max-w-[1246px] px-[50px] mx-auto ">
          <div
            id="wrapper"
            className=" flex justify-center items-center relative "
          >
            {/* Botão de passar o slide da esquerda */}
            <div id="left" className="arrows absolute left-[-23px] top-[50%]">
              <button>
                <div className=" h-[60px] w-[60px] bg-yellow rounded-full flex justify-center items-center ">
                  <span className=" text-ligther-purple text-[40px] hover:text-darker-purple">
                    &lt;
                  </span>
                </div>
              </button>
            </div>
            {/* Div que contém todos os cards */}
            <div
              id="carousel"
              onMouseMove={() =>
                Slider({
                  carouselId: "carousel",
                  cardClass: "card",
                  arrowsClass: "arrows",
                })
              }
              className="flex justify-center items-center max-w-[900px] overflow-hidden scroll-smooth"
            >
              <a href="#">
                <div className="card ml-0">
                  <div className=" cursor-pointer flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green">
                    <div>
                      {" "}
                      {/* As imagens, nomes e descrições das ONGs serão acrescentadas quando decidirmos as ONGS que estarão aqui. */}
                      <Image
                        className=" h-[170px] w-[255px] mt-[7px] rounded-custom6 bg-white"
                        src={Logo}
                      />
                    </div>
                    <div>
                      <span className=" text-[22px] text-white font-bold ">
                        Nome ONG
                      </span>
                    </div>
                    <div className=" text-center text-white p-[3px]">
                      <span>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested.
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="card ml-[15px]">
                  <div className=" cursor-pointer flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                    <div>
                      <Image
                        className=" h-[170px] w-[255px] mt-[7px] rounded-custom6 bg-white"
                        src={Logo}
                      />
                    </div>
                    <div>
                      <span className=" text-[22px] text-white font-bold ">
                        Nome ONG
                      </span>
                    </div>
                    <div className=" text-center text-white p-[3px]">
                      <span>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested.
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* -------- OS CARDS COMEÇAM AQUI  ----------- */}
              <a href="/ongs">
                <div className="card ml-[15px]">
                  <div className=" cursor-pointer flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                    <div>
                      <Image
                        className=" h-[170px] w-[255px] mt-[7px] rounded-custom6 bg-white"
                        src={Anjinhos4}
                      />
                    </div>
                    <div>
                      <span className=" text-[22px] text-white font-bold ">
                        Anjinhos 4 Patas
                      </span>
                    </div>
                    <div className=" text-center text-white p-[3px]">
                      <span>
                        "Salvando anjinhos de rua desde 2019 🐾💛"<br></br>
                        <br></br>
                        Recife - PE
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              {/* CARD 2 */}
              <a href="/ongs">
                <div className="card ml-[15px]">
                  <div className=" cursor-pointer flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                    <div>
                      <Image
                        className=" h-[170px] w-[255px] mt-[7px] rounded-custom6 bg-white"
                        src={CatinhoFilo}
                      />
                    </div>
                    <div>
                      <span className=" text-[22px] text-white font-bold ">
                        Cantinho da Filó
                      </span>
                    </div>
                    <div className=" text-center text-white p-[3px]">
                      <span>
                        "Instituição que abriga temporariamente Cães e Gatos em
                        situação de rua."<br></br>
                        Recife - PE
                      </span>
                    </div>
                  </div>
                </div>
                {/* CARD 3 */}
              </a>
              <a href="/ongs">
                <div className="card ml-[15px]">
                  <div className=" cursor-pointer flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                    <div>
                      <Image
                        className=" h-[170px] w-[255px] mt-[7px] rounded-custom6 bg-white"
                        src={OngGatinhus}
                      />
                    </div>
                    <div>
                      <span className=" text-[22px] text-white font-bold ">
                        Gatinhus Urbanos
                      </span>
                    </div>
                    <div className=" text-center text-white p-[3px]">
                      <span>
                        "Projeto independente em Recife, não somos ONG!""
                        <br></br>
                        <br></br>
                        Recife - PE
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              {/* CARD 4 */}
              <a href="/ongs">
                <div className="card ml-[15px]">
                  <div className=" cursor-pointer flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                    <div>
                      <Image
                        className=" h-[170px] w-[255px] mt-[7px] rounded-custom6 bg-white"
                        src={AdoteViraLata}
                      />
                    </div>
                    <div>
                      <span className=" text-[22px] text-white font-bold ">
                        Adote um Vira-Lata
                      </span>
                    </div>
                    <div className=" text-center text-white p-[3px]">
                      <span>
                        "Projeto de extensão da UFPE. Só divulgamos animais
                        castrados e saudáveis" <br></br>
                        Recife - PE
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              {/* CARD 5 */}
              <a href="/ongs">
                <div className="card ml-[15px]">
                  <div className=" cursor-pointer flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green ">
                    <div>
                      <Image
                        className=" h-[170px] w-[255px] mt-[7px] rounded-custom6 bg-white"
                        src={AmorSemFronteiras}
                      />
                    </div>
                    <div>
                      <span className=" text-[22px] text-white font-bold ">
                        Amor sem Fronteiras
                      </span>
                    </div>
                    <div className=" text-center text-white p-[3px]">
                      <span>
                        "Somos um abrigo de cães resgatados!" <br></br>
                        <br></br>
                        Recife - PE
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Botão de passar o slide da direita */}
            <div id="rigth" className="arrows absolute right-[-23px] top-[50%]">
              <button>
                <div className=" h-[60px] w-[60px] bg-yellow rounded-full flex justify-center items-center ">
                  <span className=" text-ligther-purple text-[40px] hover:text-darker-purple">
                    &gt;
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

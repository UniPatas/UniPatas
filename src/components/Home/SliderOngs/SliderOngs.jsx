"use client";
import Image from "next/image";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Slider from "@/components/Home/SliderOngs/Slider";
import "@/app/globals.css"

export function SliderOngs() {
  return (
    <>
      <section className="Slider-ongs">
        <h1 className=" text-center text-[50px] text-darker-purple font-black p-[50px]">
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
              onMouseMove={Slider}
              className=" flex justify-center items-center max-w-[900px] overflow-hidden scroll-smooth"
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

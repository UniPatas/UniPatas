"use client";
import Image from "next/image";
import Slider from "@/components/Home/Sliders/Slider";
import IconPeu from "@/assets/iconpeu.jpeg";
import LinkedIn from "@/assets/icon-linkedin.png";
import Gmail from "@/assets/icon-mail.png";
import GitHub from "@/assets/icon-github.png";
import "@/app/globals.css";

export function SliderMembers() {
  return (
    <>
      <section className="Slider-members">
        <h1 className=" text-center text-[30px] text-darker-purple font-black py-[30px]">
          Membros fundadores
        </h1>

        <div className=" max-w-[1246px] px-[50px] mx-auto ">
          <div
            id="wrapper"
            className=" flex justify-center items-center relative "
          >
            {/* Botão de passar o slide da esquerda */}
            <div
              id="left"
              className="arrowsMembers absolute left-[-23px] top-[50%]"
            >
              <button>
                <div className=" h-[60px] w-[60px] bg-pool-green rounded-full flex justify-center items-center ">
                  <span className=" text-white text-[40px] hover:text-[#414e58]">
                    &lt;
                  </span>
                </div>
              </button>
            </div>
            {/* Div que contém todos os cardMemberss */}
            <div
              id="carouselMembers"
              onMouseMove={() =>
                Slider({
                    carouselId: "carouselMembers",
                    cardClass: "cardMembers",
                    arrowsClass: "arrowsMembers",
                })
              }
              className="flex justify-center max-w-[900px] overflow-hidden scroll-smooth"
            >
              {/* Card member 1 */}
              <div className="cardMembers">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card member 2 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card member 3 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card member 4 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card member 5 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card member 6 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card member 7 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card member 8 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Pedro Cavalcanti
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Fronte-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como futuro
                          profissional que almejo ser."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/pedrocavti/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:peunassau@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
            {/* Botão de passar o slide da direita */}
            <div
              id="rigth"
              className="arrowsMembers absolute right-[-23px] top-[50%]"
            >
              <button>
                <div className=" h-[60px] w-[60px] bg-pool-green rounded-full flex justify-center items-center ">
                  <span className=" text-white text-[40px] hover:text-[#414e58]">
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

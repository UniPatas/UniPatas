"use client";
import Image from "next/image";
import Slider from "@/components/Home/Sliders/Slider";
import IconPeu from "@/assets/iconpeu.jpeg";
import IconAira from "@/assets/iconaira.jpg";
import IconGleice from "@/assets/icongleice.jpg";
import IconMayara from "@/assets/iconmayara.jpg";
import IconDurian from "@/assets/icondurian.jpg";
import IconThiago from "@/assets/iconthiago.jpg";
import IconHelena from "@/assets/iconhelena.jpg";
import IconClara from "@/assets/iconclara.jpg";

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
                      alt="Imagem equipe"
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
                          Desenvolvedor Front-End
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
                      alt="Imagem equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Mayara Melo
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedora Front-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Esse projeto me desafiou a quebrar barreiras e
                          aprendendo a construir coisas que nunca pensei que
                          conseguiria e aqui estou crescendo todos dias e
                          tentando fazer dar certo."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/mayara-melo-4b458320a/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:mayarafr09@hotmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a href="https://github.com/Melferss" target="_blank">
                            <Image src={GitHub} alt="Ícone GitHub" />
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
                      alt="Imagem membro equipe"
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
                          Desenvolvedor Front-End
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
                            href="- www.linkedin.com/in/thiago-pessoa/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:thiagopessoa246@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
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
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Thiago Pessoa
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Front-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Desenvolver softwares, é desenvolver soluções
                          modernas e acessíveis. Parte desse trabalho é pensar
                          nas pessoas que utilizarão, e como isso as impactará."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="- www.linkedin.com/in/thiago-pessoa/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:thiagopessoa246@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SÓ COMEÇA A CONTAR DAQUI */}

              {/* PEU */}

              {/* Card member 4 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconPeu}
                      alt="Imagem membro equipe"
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
                          Desenvolvedor Front-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "A UniPatas é muito mais do que apenas um projeto de
                          conclusão; é toda a minha essência como o futuro
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
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:pedrocavalcanti.it@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/pedroutopia"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAYARA */}

              {/* Card member 5 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconMayara}
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Mayara Melo
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedora Front-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Este desafio me impulsiona a superar limites,
                          aprendendo a criar o inimaginável. Cresço diariamente,
                          buscando o sucesso constante."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/mayara-melo-4b458320a/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:mayarafr09@hotmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a href="https://github.com/Melferss" target="_blank">
                            <Image src={GitHub} alt="Ícone do GitHub" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* THIAGO */}

              {/* Card member 6 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconThiago}
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Thiago Pessoa
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Front-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Criar softwares significa oferecer soluções modernas
                          e acessíveis, considerando o impacto positivo nas
                          pessoas que os utilizarão."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/thiago-da-silva-pessoa-42083822a/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:thiagopessoa246@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/thidspessoa"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AIRA */}

              {/* Card member 7 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconAira}
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Aira Soares
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedora Back-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Contribuir para esse projeto foi gratificante de
                          várias maneiras, observando o progresso da plataforma
                          e seu promissor futuro."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/aira-soares"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:dev.airasoares@gmail.com "
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/Airassilva"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GLEICE */}

              {/* Card member 3 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconGleice}
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Gleice Santos
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedora Back-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Unir-se ao Unipatas é uma alegria indescritível, um
                          encontro de paixões em que o amor pela tecnologia se
                          concretiza."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/gleice-santos0/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:gleicekgregoriosantos@gmail"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/gleicesantosdev"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DURIAN */}

              {/* Card member 3 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconDurian}
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Durian Fernandes
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedor Front-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Desafio-me além das expectativas, cresço diariamente
                          e me comprometo com o sucesso neste projeto
                          profissional."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/durianfernandes/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:durianfernandesr7@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/Durian-Fernandes"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HELANA */}

              {/* Card member 3 */}
              <div className="cardMembers ml-[30px]">
                <div className="">
                  {/* Imagem membro */}
                  <div className="w-[200px] ">
                    <Image
                      src={IconHelena}
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                        Maria Helena
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedora Back-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Minha paixão por tecnologia se funde à missão de criar soluções inovadoras. Cada código contribui para uma causa significativa."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/mhelenab/"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:mhelenabdss@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/mhelenaxz"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
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
                      src={IconClara}
                      alt="Imagem membro equipe"
                      className=" rounded-custom7 bg-cover bg-center"
                    />
                  </div>

                  <div className=" w-[200px] bg-yellow rounded-custom8">
                    {/* Descrição mebro */}
                    <div className=" px-[12px]">
                      <div className=" flex justify-center">
                        <span className=" text-[16px] text-darker-purple font-bold  mt-[5px]">
                          Maria Clara
                        </span>
                      </div>
                      <div className=" flex justify-center">
                        <span className="text-black text-[12px] font-bold ">
                          {" "}
                          Desenvolvedora Back-End
                        </span>
                      </div>
                      <div className="text-[12px] text-justify text-[#414e58] py-[5px] italic">
                        <span>
                          "Paixão pela tecnologia: desafios inspiram-me, erros são oportunidades. Busco desenvolvimento, conexões e aprendizado constante."
                        </span>
                      </div>
                    </div>

                    {/* Redes membro */}

                    <div className=" py-[5px]">
                      <div className=" flex justify-center items-center">
                        <div className=" w-[40px]">
                          <a
                            href="https://www.linkedin.com/in/mari-dev/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                          >
                            <Image src={LinkedIn} alt="Ícone do LinkedIn" />
                          </a>
                        </div>
                        <div className=" w-[40px] mx-[10px]">
                          <form
                            action="mailto:mariaclara8779@gmail.com"
                            method="post"
                            enctype="text/plain"
                            className="flex"
                          >
                            <button type="submit">
                              <Image src={Gmail} alt="Ícone do Gmail" />
                            </button>
                          </form>
                        </div>
                        <div className=" w-[40px]">
                          <a
                            href="https://github.com/mari-devv"
                            target="_blank"
                          >
                            <Image src={GitHub} alt="Ícone do GitHub" />
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

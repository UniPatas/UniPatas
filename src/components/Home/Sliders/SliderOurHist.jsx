"use client";
import Slider from "@/components/Home/Sliders/Slider";
import "@/app/globals.css";
import Image from "next/image";
import Equipe from "@/assets/equipe.jpg";
import Card2 from "@/assets/card2.jpg"
import Card3 from "@/assets/card3.jpg"
import Card4 from "@/assets/card4.jpg"

export function SliderOurHist() {
  return (
    <>
      {/* Slider de notícias */}
      <section id="nossahistoria" className=" pt-[50px]">
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
                className="arrowsOurHist absolute left-[-23px] top-[45%]"
              >
                <button>
                  <div className=" h-[60px] w-[60px] rounded-full flex justify-center items-center ">
                    <span className=" text-ligther-purple text-[60px] hover:text-darker-purple">
                      &lt;
                    </span>
                  </div>
                </button>
              </div>
              {/* Div que contém todos os cards */}
              <div
                id="carouselOurHist"
                onMouseMove={() =>
                  Slider({
                    carouselId: "carouselOurHist",
                    cardClass: "cardOurHist",
                    arrowsClass: "arrowsOurHist",
                  })
                }
                className="flex justify-between max-w-[1050px] overflow-hidden scroll-smooth"
              >
                {/* CARD 1 */}
                <div className="cardOurHist ">
                  {/* DIV MÃE */}
                  <div className=" bg-yellow w-[1050px] flex rounded-custom5 overflow-hidden">
                    {/* LADO ESQUERDO */}
                    <div className=" w-[50%] p-[30px]">
                      {/* TITLE */}
                      <div className=" flex justify-center">
                        <div className=" bg-darker-purple rounded-full mb-[15px] flex justify-center items-center w-[45%]">
                          <h1 className=" text-white font-bold text-[20px] py-[5px] px-[20px]">
                            Nossa história
                          </h1>
                        </div>
                      </div>
                      {/* CORPO DO TEXTO */}
                      <div className="">
                        <div>
                          <p className=" text-darker-purple text-[15px] text-justify mb-[5px]">
                            {
                              " A UniPatas teve sua origem no coração do Instituto PROA, onde uma equipe dedicada de 8 jovens compartilhava uma paixão comum pela causa animal."
                            }
                          </p>
                          <p className=" text-darker-purple text-[15px] text-justify mb-[5px]">
                            {
                              " A UniPatas surgiu como um projeto ambicioso, alimentado pela convicção de que cada ser vivo merece amor, cuidado e um lar seguro. Inspirados por histórias de resiliência e conexão entre humanos e animais, nossa equipe se comprometeu a construir mais do que uma simples plataforma de adoção."
                            }
                          </p>
                          <p className=" text-darker-purple text-[15px] text-justify mb-[5px]">
                            {
                              "Estamos empenhados em criar uma comunidade vibrante, onde amantes de animais podem compartilhar experiências, conhecimentos e apoio mútuo. Com uma abordagem inovadora, a UniPatas não se limita apenas à adoção, mas busca promover a conscientização sobre os direitos dos animais, incentivando práticas sustentáveis e éticas em relação aos nossos companheiros de quatro patas. Estamos empenhados em estabelecer parcerias com organizações de resgate, veterinários e defensores dos direitos animais, criando uma rede sólida para garantir o bem-estar dos animais em todas as fases de suas vidas. "
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* LADO DIREITO */}
                    <div className=" w-[50%] p-[30px] overflow-hidden">
                      <div>
                        <Image src={Equipe}
                        alt="Imagem da visita à Ong Ajinhos 4 Patas" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="cardOurHist ml-[15px]">
                  {/* DIV MÃE */}
                  <div className=" bg-yellow w-[1050px] flex rounded-custom5 overflow-hidden">
                    {/* LADO ESQUERDO */}
                    <div className="  w-[50%] h-auto my-[15%] p-[30px]">
                      {/* TITLE */}
                      <div className=" flex justify-center">
                        <div className=" bg-darker-purple rounded-full mb-[15px] flex justify-center items-center w-[45%]">
                          <h1 className=" text-white font-bold text-[20px] py-[5px] px-[20px]">
                            Visão
                          </h1>
                        </div>
                      </div>
                      {/* CORPO DO TEXTO */}
                      <div className=" ">
                        <div>
                          <p className=" text-darker-purple text-[15px] text-justify mb-[5px]">
                            {
                              " Nossa visão é criar um mundo onde a relação entre humanos e animais seja baseada no respeito, na empatia e no amor. Buscamos ser líderes na promoção do bem-estar animal, utilizando a tecnologia de maneira ética e responsável. Queremos inspirar ações significativas e duradouras, influenciando positivamente a sociedade para construir um futuro mais compassivo."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* LADO DIREITO */}
                    <div className=" w-[50%] p-[30px] overflow-hidden">
                      <div>
                        <Image src={Card2} 
                        alt="Imagem de um cachorro da Ong Anjinho 4 Patas"/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="cardOurHist ml-[15px]">
                  {/* DIV MÃE */}
                  <div className=" bg-yellow w-[1050px] flex rounded-custom5 overflow-hidden">
                    {/* LADO ESQUERDO */}
                    <div className="  w-[50%] h-auto my-[15%] p-[30px]">
                      {/* TITLE */}
                      <div className=" flex justify-center">
                        <div className=" bg-darker-purple rounded-full mb-[15px] flex justify-center items-center w-[45%]">
                          <h1 className=" text-white font-bold text-[20px] py-[5px] px-[20px]">
                            Missão
                          </h1>
                        </div>
                      </div>
                      {/* CORPO DO TEXTO */}
                      <div className=" ">
                        <div>
                          <p className=" text-darker-purple text-[15px] text-justify mb-[5px]">
                            {
                              " A missão da UniPatas é promover a conexão genuína entre humanos e animais, construindo pontes de compaixão e amor. Buscamos criar uma plataforma inclusiva e inovadora, onde a tecnologia e o cuidado se entrelaçam para transformar vidas, fortalecendo a comunidade que compartilha o compromisso de proteger e valorizar todas as formas de vida."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* LADO DIREITO */}
                    <div className=" w-[50%] p-[30px] overflow-hidden">
                      <div>
                        <Image src={Card3} 
                        alt="Imagem de um cachorro da Ong Anjinho 4 Patas"/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="cardOurHist ml-[15px]">
                  {/* DIV MÃE */}
                  <div className=" bg-yellow w-[1050px] flex rounded-custom5 overflow-hidden">
                    {/* LADO ESQUERDO */}
                    <div className="  w-[50%] h-auto my-[15%] p-[30px]">
                      {/* TITLE */}
                      <div className=" flex justify-center">
                        <div className=" bg-darker-purple rounded-full mb-[15px] flex justify-center items-center w-[45%]">
                          <h1 className=" text-white font-bold text-[20px] py-[5px] px-[20px]">
                            Valores
                          </h1>
                        </div>
                      </div>
                      {/* CORPO DO TEXTO */}
                      <div className=" ">
                        <div>
                          <p className=" text-darker-purple text-[15px] text-justify mb-[5px]">
                            {
                              " Na UniPatas, nossos valores são fundamentais para guiar cada passo em direção ao nosso objetivo comum. Valorizamos a compaixão, a inovação, a diversidade e a transparência. Acreditamos que através da colaboração e do respeito mútuo, podemos construir uma comunidade forte e solidária, dedicada a fazer a diferença no mundo."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* LADO DIREITO */}
                    <div className=" w-[50%] p-[30px] overflow-hidden">
                      <div>
                        <Image src={Card4} 
                        alt="Imagem de um cachorro da Ong Anjinho 4 Patas"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Botão de passar o slide da direita */}
              <div
                id="rigth"
                className="arrowsOurHist absolute right-[-23px] top-[45%]"
              >
                <button>
                  <div className=" h-[60px] w-[60px] flex justify-center items-center ">
                    <span className=" text-ligther-purple text-[60px] hover:text-darker-purple">
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

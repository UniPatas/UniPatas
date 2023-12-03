"use client";
import Slider from "@/components/Home/Sliders/Slider";
import "@/app/globals.css";
import Image from "next/image";
import Equipe from "@/assets/equipe.jpg";

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
                        <Image 
                        src={Equipe}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="cardOurHist ml-[15px]">
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
                        <Image 
                        src={Equipe}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="cardOurHist ml-[15px]">
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
                        <Image 
                        src={Equipe}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="cardOurHist ml-[15px]">
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
                        <Image 
                        src={Equipe}
                        />
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

import CardOngs from "./CardsOngs";
import Anjinhos4 from "@/assets/anjinho4patas.jpg";
import CatinhoFilo from "@/assets/ongfilo.png"
import AdoteViraLata from "@/assets/adoteumviralata.jpg"
import AmorSemFronteiras from "@/assets/amorsemfronteiras.jpg"
import OngGatinhus from "@/assets/onggatinhus.jpg"
import OngGatosSandra from "@/assets/onggatossandra.jpg"
import OngLoveAnimals from "@/assets/ongeuamoanimais.jpg"


const LayoutCardsOngs = () => {
  return (
    <>
      <div className=" max-w-[1246px] px-[70px] mx-auto">
        <section className=" flex justify-center py-[50px]">
          <div className="grid grid-cols-3 grid-flow-row gap-[80px]">
            {/* Card 1 */}
            <div>
              <CardOngs
                id="card1"
                OngImg={Anjinhos4}
                OngName="Ajinhos 4 Patas"
                OngInsta="https://www.instagram.com/anjinhos4patas/"
                bgColor="bg-yellow"
              />
            </div>
            {/* Card 2 */}
            <div>
            <CardOngs
                id="card2"
                OngImg={CatinhoFilo} className="bg-white"
                OngName="Cantinho da Filó"
                OngInsta="https://www.instagram.com/cantinhofilo/"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 3 */}
            <div>
            <CardOngs
                id="card3"
                OngImg={AmorSemFronteiras}
                OngName="Amor Sem Fronteiras"
                OngInsta="https://instagram.com/_projetoamorsemfronteiras?igshid=NzZlODBkYWE4Ng=="
                bgColor="bg-yellow"
              />
            </div>
            {/* card 4 */}
            <div>
            <CardOngs
                id="card4"
                OngImg={AdoteViraLata}
                OngName="Adote um Vira-Lata"
                OngInsta="https://instagram.com/adoteumviralata?igshid=NzZlODBkYWE4Ng=="
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 5 */}
            <div>
            <CardOngs
                id="card5"
                OngImg={OngGatinhus}
                OngName="Gatinhus Urbanos"
                OngInsta="https://www.instagram.com/gatinhosurbanos/"
                bgColor="bg-yellow"
              />
            </div>
            {/* Card 6 */}
            <div>
            <CardOngs
                id="card6"
                OngImg={OngGatosSandra}
                OngName="Gatinhos da Sandra"
                OngInsta="https://www.instagram.com/gatinhosdasandra/"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 7 */}
            <div>
            <CardOngs
                id="card7"
                OngImg={OngLoveAnimals}
                OngName="Eu Amo Animais"
                OngInsta="https://www.instagram.com/euamoanimaispe/"
                bgColor="bg-yellow"
              />
            </div>
            {/* Card 8 
            {/* <div>
            <CardOngs
                id="card8"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 9 
            <div>
            <CardOngs
                id="card7"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                bgColor="bg-yellow"
              />
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutCardsOngs;

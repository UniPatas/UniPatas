import CardOngs from "./CardsOngs";
import Anjinhos4 from "@/assets/anjinho4patas.jpg";
import CatinhoFilo from "@/assets/ongfilo.png"
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
                OngPhone="+55"
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
                OngPhone="+5581995338872"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 3 */}
            <div>
            <CardOngs
                id="card3"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                OngPhone="+55"
                bgColor="bg-yellow"
              />
            </div>
            {/* card 4 */}
            <div>
            <CardOngs
                id="card4"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                OngPhone="+55"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 5 */}
            <div>
            <CardOngs
                id="card5"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                OngPhone="+55"
                bgColor="bg-yellow"
              />
            </div>
            {/* Card 6 */}
            <div>
            <CardOngs
                id="card6"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                OngPhone="+55"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 7 */}
            <div>
            <CardOngs
                id="card7"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                OngPhone="+55"
                bgColor="bg-yellow"
              />
            </div>
            {/* Card 8 */}
            <div>
            <CardOngs
                id="card8"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                OngPhone="+55"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 9 */}
            <div>
            <CardOngs
                id="card7"
                OngImg=""
                OngName="Nome Ong"
                OngInsta="#"
                OngPhone="+55"
                bgColor="bg-yellow"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutCardsOngs;

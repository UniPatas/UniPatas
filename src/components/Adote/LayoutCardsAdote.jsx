import CardsAdote from "./CardsAdote";
import Pingo from "@/assets/pingo.jpg"
import Gatinhas from "@/assets/gatinhas.jpg"
import Doguineo from "@/assets/doguineo.jpg"


const LayoutCardsAdote = () => {
  return (
    <>
      <div className=" max-w-[1246px] mx-auto">
        <section className=" flex justify-center py-[50px]">
          <div className="grid grid-cols-3 grid-flow-row gap-[100px]">
            {/* Card 1 */}
            <div>
              <CardsAdote
                id="card1"
                OngImg={Pingo}
                OngName="Pingo"
                OngDesc="Canino, filhote, dócil."
                bgColor="bg-yellow"
              />
            </div>

            {/* Card 2 */}
            <div>
              <CardsAdote
                id="card1"
                OngImg={Gatinhas}
                OngName="Gatinhas irmãs"
                OngDesc="Felina, filhote, amorosas."
                bgColor="bg-pool-green"
              />
            </div>

            {/* Card 3 */}
            <div>
              <CardsAdote
                id="card1"
                OngImg={Doguineo}
                OngName="Doguineo"
                OngDesc="Canino, filhote, medroso."
                bgColor="bg-yellow"
              />
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutCardsAdote;

import CardOngs from "./CardsOngs";
import Anjinhos4 from "@/assets/anjinho4patas.jpg";

const LayoutCardsOngs = () => {
  return (
    <>
      <div className=" max-w-[1246px] px-[70px] mx-auto border border-red-600">
        <section>
          <div className="grid grid-cols-3 grid-flow-row gap-4">
            {/* Card 1 */}
            <div>
              <CardOngs
                id="card1"
                OngImg={Anjinhos4}
                OngName="Ajinhos 4 Patas"
                OngInsta="asdasd"
                OngPhone="asd"
                bgColor="bg-pool-green"
              />
            </div>
            {/* Card 2 */}
            <div>
            <CardOngs
                id="card2"
                OngImg={Anjinhos4}
                OngName="Ajinhos 4 Patas"
                OngInsta="asdasd"
                OngPhone="asd"
                bgColor="bg-pool-green"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutCardsOngs;

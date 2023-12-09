import Image from "next/image";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";

export default function CardOngs() {
  return (
    <>
      <section>
        <div className=" max-w-[1246px] px-[50px] mx-auto ">
            <div className="card ml-0">
              <div className="flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 bg-pool-green">
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
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </span>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Instagram from "@/assets/icon-insta.png";


export default function CardsAdote({ id, OngImg, OngName, OngDesc, bgColor }) {
    const favoritarId = `favoritar-${id}`;
  return (
    <>
      <section>
        <div className=" flex justify-between items-center">
          {/* Card ong */}
          <div className=" relative">
            {/* Botão de favoritar */}
            <div className=" absolute top-[5%] left-[10%]">
            <input type="checkbox" id={favoritarId} className="fav hidden" />
              <label htmlFor={favoritarId} className="group cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 group-[.fav:checked+&]:fill-red-600 transition-all time-200 group-[.fav:checked+&]:scale-125"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </label>
            </div>
            <div
              className={`flex justify-around items-center flex-col h-[355px] w-[285px] rounded-custom5 ${bgColor}`}
            >
              {/* Logo top */}
              <div>
                <Image className=" w-[100px] pt-[7px]" src={Logo} alt="Logo da UniPatas"/>
              </div>
              {/* Imagem da ONG */}
              <div>
                {" "}
                <Image
                  className=" h-[200px] w-[230px] rounded-custom6"
                  src={OngImg} alt="Logo da Ong"
                />
              </div>
              {/* Nome e botão de compartilhar */}
              <div>
                {/* Nome da ong */}
                <div>
                  <span className=" text-[22px] font-bold ">
                    {OngName}
                  </span>
                </div>
              </div>

              {/* Redes e contato */}
              <div>
                <div className=" text-center text-white">
                  <p className=" text-[18px] text-darker-purple font-bold">
                    Características
                  </p>
                </div>
                <div className=" font-bold pb-[8px]">
                  <p>{OngDesc}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

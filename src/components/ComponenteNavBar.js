import Image from "next/image";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Lupa from "@/assets/lupa.png";

export function ComponenteNavBar() {
  return (
    <div>
      <div>
        <div className=" w-full h-[80px]">
          <div className="w-full max-w-[1246px] px-[50px] mx-auto">
            <div className="flex justify-between">
              <div className=" flex justify-between items-center w-[60%] py-[20px]">
                <div>
                  <Image className=" w-[150px] pt-[8px] " src={Logo} alt="Logo" />
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="#"
                    className=" text-darker-purple text-[20px] font-extrabold hover:underline"
                  >
                    ADOTE
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="#"
                    className=" text-darker-purple text-[20px] font-extrabold hover:underline"
                  >
                    ONG's
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="#"
                    className=" text-darker-purple text-[20px] font-extrabold hover:underline"
                  >
                    DOE
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="#"
                    className=" text-darker-purple text-[20px] font-extrabold hover:underline"
                  >
                    SOBRE NÓS
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="#"
                    className=" text-darker-purple text-[20px] font-extrabold hover:underline"
                  >
                    ADOTE
                  </a>
                </div>

              </div>

              <div className="flex justify-between items-center w-[40%] pt-[5px]">
              <div className=" pl-[130px] ">
                  <a
                    href="#"
                    className=" text-darker-purple text-[20px] font-extrabold hover:underline"
                  >
                    LOGIN
                  </a>
                </div>

                <div className="flex">

                <div>
                <Image className=" w-[20px] mr-[5px] mt-[4px] "
                        src={Lupa}
                        alt="Lupa do buscar"
                    />
                </div>
                <input type="text" placeholder="Buscar" className="bg-darker-purple text-white pl-[20px] rounded-full placeholder:text-white">
                    
                    </input>

                <div>

                </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

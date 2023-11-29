import Image from "next/image";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Lupa from "@/assets/lupa.png";

export function NavBar() {
  return (
    <>
      <header>
        <div className=" w-full h-[80px] ">
          <div className="w-full max-w-[1246px] mx-auto ">
            <div className="flex justify-between ">
              <div className=" flex justify-between items-center w-[60%] py-[30px]">
                <div>
                  <a href="/">
                    <Image
                      className=" w-[150px] transition-all ease-in-out duration-200 hover:scale-125"
                      src={Logo}
                      alt="Logo"
                    />
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="/adote"
                    className="text-darker-purple text-[20px] font-extrabold transition-all ease-in-out duration-200 hover:text-white hover:bg-darker-purple px-[15px] py-[5px] rounded-full"
                  >
                    ADOTE
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="/ongs"
                    className="text-darker-purple text-[20px] font-extrabold transition-all ease-in-out duration-200 hover:text-white hover:bg-darker-purple px-[15px] py-[5px] rounded-full"
                  >
                    ONG's
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="/doe"
                    className="text-darker-purple text-[20px] font-extrabold transition-all ease-in-out duration-200 hover:text-white hover:bg-darker-purple px-[15px] py-[5px] rounded-full"
                  >
                    DOE
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="/sobre-nos"
                    className="text-darker-purple text-[20px] font-extrabold transition-all ease-in-out duration-200 hover:text-white hover:bg-darker-purple px-[15px] py-[5px] rounded-full"
                  >
                    SOBRE NÓS
                  </a>
                </div>

                <div className=" pt-[5px]">
                  <a
                    href="/ajuda"
                    className="text-darker-purple text-[20px] font-extrabold transition-all ease-in-out duration-200 hover:text-white hover:bg-darker-purple px-[15px] py-[5px] rounded-full"
                  >
                    AJUDA
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-center w-[40%] pt-[5px]">
                <div className=" pl-[130px] ">
                  <a
                    href="/login"
                    className="text-darker-purple text-[20px] font-extrabold transition-all ease-in-out duration-200 hover:text-white hover:bg-darker-purple px-[15px] py-[5px] rounded-full"
                  >
                    LOGIN
                  </a>
                </div>

                <div className="flex">
                  <div>
                    <button onClick={""} type="submit">
                      <Image
                        className=" w-[20px] mr-[5px] mt-[4px] "
                        src={Lupa}
                        alt="Lupa do buscar"
                      />
                    </button>
                  </div>
                  <input
                    id="buscar"
                    type="text"
                    placeholder="Buscar"
                    className="bg-darker-purple outline-none text-white pl-[20px] rounded-full placeholder:text-white"
                  ></input>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

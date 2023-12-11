import Image from "next/image";
import Pingo from "@/assets/pingo.jpg"
import Gatinhas from "@/assets/gatinhas.jpg"
import Doguineo from "@/assets/doguineo.jpg"

export function DestaqueAdocao() {
    return (
      <div>
        {/* Div que guarda todos os fluid shapes */}
        <div className="flex justify-between w-full max-w-[1246px] pt-[60px] px-[50px] mx-auto">
          {/* 1º fluid shape */}
          <div className=" flex justify-center items-center w-[300px] h-[300px] bg-darker-purple rounded-custom1 transition-all ease-in-out delay-100 duration-700 hover:rounded-custom2">
          <a href="/adote">
              <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-ligther-purple">
                <Image
                className=" rounded-full w-[200px] h-[200px]"
                alt="Animal disponível para adoção."
                src={Pingo}
                />
              </div>
            </a>
          </div>
          {/* 2ª fluid shape */}
          <div className=" flex justify-center items-center w-[300px] h-[300px] bg-darker-purple rounded-custom2 transition-all ease-in-out delay-100 duration-700 hover:rounded-custom3">
          <a href="/adote">
              <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-ligther-purple">
              <Image
                className=" rounded-full w-[200px] h-[200px]"
                alt="Animal disponível para adoção."
                src={Gatinhas}
                />
              </div>
            </a>
          </div>
          {/* 3º fluid shape */}
          <div className=" flex justify-center items-center w-[300px] h-[300px] bg-darker-purple rounded-custom3 transition-all ease-in-out delay-100 duration-700 hover:rounded-custom4" alt="Animal disponível para adoção">
            <a href="/adote">
              <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-ligther-purple">
              <Image
                className=" rounded-full w-[200px] h-[200px]"
                alt="Animal disponível para adoção."
                src={Doguineo}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
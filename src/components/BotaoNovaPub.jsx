import Image from "next/image";
import Plus from "@/assets/plus-button.png"


export function BotaoNovaPub () {

    return (
        <>
            <section>
                <button>
                    <div className=" flex items-center justify-between bg-lighter-green p-[10px] rounded-[10px] border-[3px] border-darker-purple">
                        <div>
                            <Image className=" w-[40px]"
                            src={ Plus }
                            ></Image>
                        </div>
                        <div>
                            <p className="text-[20px] text-white font-black ml-[20px]">Criar publicação</p>
                        </div>
                    </div>
                </button>
            </section>
        </>
    )
}
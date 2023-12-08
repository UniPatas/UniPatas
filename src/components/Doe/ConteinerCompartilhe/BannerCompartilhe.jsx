import Image from "next/image";
import Compartilha from "@/assets/compartilhe.jpeg";

export default function Compartilhe() {
    return (
        <>

            <section className="pt-[150px]">
                <div className="w-full mx-auto">{/*Div pai */}
                    <div className="max-w-[1246px] mx-auto ">
                        <div className=" flex justify-center">
                            <div className=" max-w-[1100px] relative">
                                <Image
                                    src={Compartilha}
                                    alt="Cachorro amarelo" />
                                <div className="absolute bottom-[40px] left-[50px]">
                                    <button type="button" className="bg-[#a110a9] w-[300px] h-[80px] text-[#ffc501] text-3xl rounded-lg font-bold">COMPARTILHE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
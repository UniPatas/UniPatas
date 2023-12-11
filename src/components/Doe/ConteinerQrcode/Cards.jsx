import Image from "next/image";
import Qr from "@/assets/Unipatinhas.jpeg";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Filo from "@/assets/cantinho.png";

export default function Cards() {
    return (

        <>
            <section className="w-[100%]">
                <div className="space-y-16 flex justify-center">{/*Div pai*/}
                    <div className="space-y-16 w-[850px] h-[550px] flex flex-col justify-center">
                        <h1 className="flex items-top justify-center font-bold text-3xl">DOAÇÃO</h1>
                        <div className="bg-white flex justify-center gap-24 w-[100%] h-[200px]"> {/*Div filho*/}
                       
                            <div className="bg-[#33b3a6] rounded-[20px] flex items-center">{/*conteiner do qrcode */} 
                            <div className="flex w-[375px]">
                                <Image
                                    src={Qr}
                                    alt="qrcode da ong"
                                    className="ml-4 w-[40%] " />

                                <div className="">{/*conteiner com hastg e logo unipatas*/}
                                    <Image
                                        src={Logo}
                                        alt="Logo roxa unipatas"
                                        className="w-[75%] ml-4 self-start" />

                                    <h1 className="bg-[#33ba6] text-white m-4 ">@unipatas.plataforma</h1>

                                    <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#33b3a6] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <div className="flex w-[375px]">
                                <Image
                                    src={Qr}
                                    alt="qrcode da ong"
                                    className="ml-4 w-[40%]" />

                                <div className="">{/*conteiner com hastg e logo unipatas*/}
                                    <Image
                                        src={Logo}
                                        alt="Logo roxa unipatas"
                                        className="w-[75%] ml-4 self-start" />

                                    <h1 className="bg-[#33ba6] text-white m-4 ">@unipatas.plataforma</h1>

                                    <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white flex justify-center gap-24 w-[100%] h-[200px]"> {/*Div filho*/}
                            <div className="bg-[#ffc501] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                                <Image
                                    src={Qr}
                                    alt="qrcode da ong"
                                    className="ml-4 w-[40%]" />

                                <div className="">{/*conteiner com hastg e logo unipatas*/}
                                    <Image
                                        src={Logo}
                                        alt="Logo roxa unipatas"
                                        className="w-[75%] ml-4 self-start" />

                                    <h1 className="bg-[#ffc501] text-white m-4">@unipatas.plataforma</h1>

                                    <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                                </div>
                            </div>

                            <div className="bg-[#ffc501] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                                <Image
                                    src={Qr}
                                    alt="qrcode da ong"
                                    className="ml-4 w-[40%]" />

                                <div className="">{/*conteiner com hastg e logo unipatas*/}
                                    <Image
                                        src={Logo}
                                        alt="Logo roxa unipatas"
                                        className="w-[75%] ml-4 self-start" />

                                    <h1 className="bg-[#ffc501] text-white m-4">@unipatas.plataforma</h1>

                                    <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
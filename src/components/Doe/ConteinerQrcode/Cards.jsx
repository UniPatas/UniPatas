import Image from "next/image";
import Qr from "@/assets/Unipatinhas.jpeg";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Filo from "@/assets/cantinho.png";

export default function Cards() {
    return (

        <>
            <section className="w-[100%]">
                <div className="space-y-16">{/*Div pai*/}
                    <div className=" flex items-center justify-center font-bold text-3xl">
                        <h1>DOAÇÃO</h1>
                    </div>

                    <div className="bg-white flex justify-center gap-24 "> {/*Div filho*/}
                        <div className="bg-[#33b3a6]  w-[380px] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <Image
                                src={Filo}
                                alt="qrcode da ong"
                                className="ml-4 w-[40%] " />

                            <div className="">{/*conteiner com hastg e logo unipatas*/}
                                <h1 className="text-brown font-bold m-2 text-2xl">Cantinho da Filó</h1>
                                <h1 className="bg-[#33b3a6] text-white m-4 ">@cantinhodafilo</h1>
                                <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">cantinhodafilo.com.br</h1>
                            </div>
                        </div>

                        <div className="bg-[#33b3a6]  w-[380px] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
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

                    <div className="bg-white flex justify-center gap-24"> {/*Div filho*/}
                        <div className="bg-[#ffc501]  w-[380px] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
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

                        <div className="bg-[#ffc501]  w-[380px] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
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

                    <div className="bg-white flex justify-center gap-24">{/*Conteiner filho*/}
                        <div className="bg-[#33b3a6]  w-[380px] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <Image
                                src={Qr}
                                alt="qrcode da ong"
                                className="ml-4 w-[40%]" />

                            <div className="">{/*conteiner com hastg e logo unipatas*/}
                                <Image
                                    src={Logo}
                                    alt="Logo roxa unipatas"
                                    className="w-[75%] ml-4 self-start" />

                                <h1 className="bg-[#33b3a6] text-white m-4">@unipatas.plataforma</h1>

                                <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                            </div>
                        </div>
                        <div className="bg-[#33b3a6]  w-[380px] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <Image
                                src={Qr}
                                alt="qrcode da ong"
                                className="ml-4 w-[40%]" />

                            <div className="">{/*conteiner com hastg e logo unipatas*/}
                                <Image
                                    src={Logo}
                                    alt="Logo roxa unipatas"
                                    className="w-[70%] ml-4 self-start" />

                                <h1 className="bg-[#33b3a6] text-white m-4">@unipatas.plataforma</h1>

                                <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
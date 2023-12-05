import Image from "next/image";
import Qr from "@/assets/qrcode.png";
import Qrs from "@/assets/qrcodeyellow.png";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Hast from "@/assets/Tag1.png";
import Hast1 from "@/assets/Tag.png";

export default function Cards() {
    return (

        <>
            <section className="">
                <div className="space-y-16">{/*Div pai*/}
                    <div className=" flex items-center justify-center font-bold text-3xl">
                        <h1>DOAÇÃO</h1>
                    </div>

                    <div className="bg-white flex justify-center gap-24"> {/*Div filho*/}
                        <div className="bg-[#33b3a6]  w-[20%] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <Image
                                src={Qr}
                                alt="qrcode da ong"
                                className="ml-4 w-[48%]" />

                            <div className="">{/*conteiner com hastg e logo unipatas*/}
                                <Image
                                    src={Logo}
                                    alt="Logo roxa unipatas"
                                    className="w-[75%] ml-4 self-start" />

                                <Image
                                    src={Hast}
                                    alt="Hastg"
                                    className="w-[75%] mt-4 ml-4" />

                                <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                            </div>
                        </div>

                        <div className="bg-[#33b3a6]  w-[20%] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <Image
                                src={Qr}
                                alt="qrcode da ong"
                                className="ml-4 w-[48%]" />

                            <div className="">{/*conteiner com hastg e logo unipatas*/}
                                <Image
                                    src={Logo}
                                    alt="Logo roxa unipatas"
                                    className="w-[75%] ml-4 self-start" />

                                <Image
                                    src={Hast}
                                    alt="Hastg"
                                    className="w-[75%] mt-4 ml-4" />

                                <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white flex justify-center gap-24"> {/*Div filho*/}
                        <div className="bg-[#ffc501]  w-[20%] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <Image
                                src={Qrs}
                                alt="qrcode da ong"
                                className="ml-4 w-[48%]" />

                            <div className="">{/*conteiner com hastg e logo unipatas*/}
                                <Image
                                    src={Logo}
                                    alt="Logo roxa unipatas"
                                    className="w-[75%] ml-4 self-start" />

                                <Image
                                    src={Hast1}
                                    alt="Hastg"
                                    className="w-[75%] mt-4 ml-4" />

                                <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                            </div>
                        </div>

                        <div className="bg-[#ffc501]  w-[20%] h-[200px] rounded-[20px] flex items-center">{/*conteiner do qrcode */}
                            <Image
                                src={Qrs}
                                alt="qrcode da ong"
                                className="ml-4 w-[48%]" />

                            <div className="">{/*conteiner com hastg e logo unipatas*/}
                                <Image
                                    src={Logo}
                                    alt="Logo roxa unipatas"
                                    className="w-[75%] ml-4 self-start" />

                                <Image
                                    src={Hast1}
                                    alt="Hastg"
                                    className="w-[75%] mt-4 ml-4" />

                                <h1 className="text-[#ffc501] bg-[#a110a9] flex justify-center ml-4 mt-6 w-[130px] font-bold text-[10px] rounded-full">www.unipatas.com </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
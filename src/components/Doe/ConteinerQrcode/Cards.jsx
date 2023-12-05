import Image from "next/image";
import Qr from "@/assets/qrcode.png";
import Qrs from "@/assets/qrcodeyellow.png";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";

export default function Cards() {
    return (

        <>
            <section className="">
                <div className="space-y-12">
                    <div className="font-bold text-3xl ">
                        <h1>DOAÇÃO</h1>
                    </div>
                    <div className="bg-white flex justify-center gap-12">
                        <div className="bg-[#33b3a6]  w-[20%] h-[200px] rounded-[20px] flex items-center">
                            <Image
                                src={Qr}
                                alt="qrcode da ong"
                                className="ml-4 w-[48%]" />        
                            <Image
                            src={Logo}
                            alt="Logo roxa unipatas"
                            className="w-[40%] mt-12 ml-2 self-start"/>    
                        </div>
                        <div className="bg-[#33b3a6]  w-[20%] h-[200px] rounded-[20px]">
                            <Image
                                src={Qr}
                                alt="qrcode da ong"
                                className="mt-6 ml-4 w-[48%]" />
                        </div>
                    </div>
                    <div className="bg-white flex justify-center gap-12">
                        <div className="bg-[#ffc501]  w-[20%] h-[200px] rounded-[20px]">
                            <Image
                                src={Qrs}
                                alt="qrcode da ong"
                                className="mt-4 ml-4 w-[48%]" />
                        </div>
                        <div className="bg-[#ffc501]  w-[20%] h-[200px] rounded-[20px]">
                            <Image
                                src={Qrs}
                                alt="qrcode da ong"
                                className="mt-4 ml-4 w-[48%]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
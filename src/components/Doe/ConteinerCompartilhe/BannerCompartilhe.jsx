import Image from "next/image";
import Compartilha from "@/assets/compartilhe.jpeg";
import Link from "next/link";

export default function Compartilhe() {
    return (
        <>

            <section className="pt-[150px]">
                <div className="w-full mx-auto">{/*Div pai */}
                    <div className="max-w-[1080px] mx-auto">
                        <div className="">
                            <div className=" flex justify-center bg-[url('../assets/compartilhe.jpeg')] h-[424px] bg-no-repeat">
                                <div className="flex items-center w-[1100px] pl-16 pt-64">
                                    <Link href={"/"}>
                                    <button type="button" className="flex justify-center items-center bg-[#a110a9] w-[300px] h-[80px] text-[40px] rounded-md text-[#ffc501] font-bold">Compartilhe</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
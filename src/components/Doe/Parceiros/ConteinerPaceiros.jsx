import Link from "next/link";

export default function Paceiros() {
    return (
        <>
            <section className="pt-[100px]">
                <div className="flex justify-center">{/*Conteiner pai*/}
                    <div className="flex flex-col gap-24">
                        <div className="w-[650px] space-y-14">
                            <h1 className="text-3xl font-bold text-center ">
                                APADRINHE UMA CAUSA
                            </h1>
                            <h1>teste</h1>
                            <p className="indent-12 text-xl text-slate-600 font-bold tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate,
                                eligendi earum sunt natus laboriosam animi dolorem perspiciatis aliquam, et cum.
                                Nemo at quae exercitationem ut aspernatur, repellat neque possimus!
                            </p>
                            <div className="flex justify-center"><Link href={"/"} className="flex bg-[#ffc501] text-[#a110a9] font-bold w-[250px] h-[30px] justify-center text-[18px]">Entre em contato</Link></div>
                        </div>
                        <div className="w-[650px] space-y-12">
                            <h1 className="text-3xl font-bold text-center ">
                                SEJA UMA EMPRESA PARCEIRA
                            </h1>
                            <p className="indent-12 text-xl text-slate-600 font-bold tracking-wide">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate,
                                eligendi earum sunt natus laboriosam animi dolorem perspiciatis aliquam, et cum.
                                Nemo at quae exercitationem ut aspernatur, repellat neque possimus!
                            </p>
                            <div className="flex justify-center "><Link href={"/"} className="flex bg-[#ffc501] text-[#a110a9] font-bold w-[250px] h-[30px] justify-center text-[18px] mb-12">Entre em contato</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
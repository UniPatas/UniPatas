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
                            <p className="indent-12 text-xl text-slate-600 font-bold tracking-wide">
                            Seja o herói que um amigo peludo espera encontrar! Ao apadrinhar um animal na UniPatas, você não apenas oferece um lar temporário amoroso, mas também cria uma conexão única que transforma vidas.
                             Torne-se um padrinho ou madrinha e faça parte dessa jornada de amor e cuidado.
                            </p>
                            <div className="flex justify-center"><Link href={"/"} className="flex bg-[#ffc501] text-[#a110a9] font-bold w-[250px] h-[30px] justify-center text-[18px] rounded-md">Entre em contato</Link></div>
                        </div>
                        <div className="w-[650px] space-y-12">
                            <h1 className="text-3xl font-bold text-center">
                                SEJA UMA EMPRESA PARCEIRA
                            </h1>
                            <p className="indent-12 text-xl text-slate-600 font-bold tracking-wide">
                            Junte-se a nós como uma empresa parceira comprometida com o bem-estar animal! Ao unir forças com a UniPatas, sua empresa não apenas fortalece sua imagem socialmente responsável, mas também faz a diferença real na vida de animais necessitados.
                             Seja uma voz para os sem voz e promova a adoção responsável. Juntos, podemos criar um impacto duradouro!
                            </p>
                            <div className="flex justify-center "><Link href={"/"} className="flex bg-[#ffc501] text-[#a110a9] font-bold w-[250px] h-[30px] justify-center text-[18px] mb-12 rounded-md">Entre em contato</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
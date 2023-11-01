import Image from "next/image";

import ImgAnuncio from '@/assets/anuncie-aqui.png'


export function ComponenteAnuncio () {

    return (

        <div>

            <div className=" w-full max-w-[1246px] px-[50px] mx-auto">
                <Image className="py-[30px]"
                    src={ImgAnuncio}
                    alt="Anúncio."
                />
            </div>

        </div>

    )
}
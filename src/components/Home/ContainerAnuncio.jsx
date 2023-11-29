import Image from "next/image";
import ImgAnuncio from "@/assets/anuncie-aqui.png";

export function ContainerAnuncio() {
  return (
    <>
    {/* Componente de anuncio de parceiro */}
      <section>
        <div className=" w-full max-w-[1246px] px-[50px] mx-auto">
          <a href="#" target="_blank">
            <Image className="py-[30px]" src={ImgAnuncio} alt="Anúncio." />
          </a>
        </div>
      </section>
    </>
  );
}

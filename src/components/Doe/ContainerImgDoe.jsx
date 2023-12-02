import Image from "next/image";

export default function ContainerImgDoe({ img, alt }) {
  return (
    <>
      <section className="py-[30px]">
        <div className="w-full mx-auto">
          <div className="max-w-[1246px] mx-auto ">
            {/* Centralizar imagem */}
            <div className=" flex justify-center">
              <div className=" max-w-[1100px] ">
                <Image className="h-[100%]" src={img} alt={alt} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

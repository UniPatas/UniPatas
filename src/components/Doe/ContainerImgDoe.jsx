import Image from "next/image";

export default function ContainerImgDoe({img}) {
  return (
    <>
      <section className="py-[30px]">
        <div className="w-full mx-auto">
          <div className="max-w-[1246px] mx-auto">
            <div>
                <Image className="h-[100%]"
                src={img}
                alt=""
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
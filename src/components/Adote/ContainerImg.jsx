import Image from "next/image";
import BannerAdote from "@/assets/banneradote.png"

export function ContainerImg() {
  return (
    <>
      <section className="py-[30px]">
        <div className="w-full max-w-[1246px] mx-auto">
          <div className="max-w-[1246px] mx-auto px-[50px]">
            <div>
                <Image className="h-[100%]"
                src={BannerAdote}
                alt=""
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

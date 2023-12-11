import Image from "next/image";
import Exemplo from "@/assets/exemplo.png"

export function ContainerImg() {
  return (
    <>
      <section className="py-[30px]">
        <div className="w-full mx-auto">
          <div className="max-w-[1246px] mx-auto">
            <div>
                <Image className="h-[100%]"
                src={Exemplo}
                alt=""
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

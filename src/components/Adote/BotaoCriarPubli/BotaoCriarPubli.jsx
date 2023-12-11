"use client";
import Image from "next/image";
import Plus from "@/assets/plus-button.png";
import Modal from "./ModalPubli";
import { useState } from "react";

export function BotaoCriarPubli() {

  const [OpenModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="pb-[30px] ">
        <div className="max-w-[1246px] mx-auto ">
          <button onClick={() => setOpenModal(true)}>
            <div className=" flex items-center justify-between bg-pool-green p-[10px] rounded-[10px] border-[3px] border-ligther-green hover:bg-lighter-green hover:border-pool-green text-[20px] text-white font-black hover:text-darker-purple">
              <div>
                <Image className=" w-[40px]" src={Plus} alt="botao de criar publicacao de adote"></Image>
              </div>
              <div className=" ml-[10px]">
                <p>Criar publicação</p>
              </div>
            </div>
          </button>
          <div>
            <Modal isVisible={OpenModal} onClose={() => setOpenModal(false)}/>
          </div>
        </div>
      </section>
    </>
  );
}

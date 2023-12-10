"use client";
import Image from "next/image";
import Logo from "@/assets/Logo-UniPatas-Vector-roxa.png";
import Dog from "@/assets/dog-adote.png";
import Cat from "@/assets/cat-adote.png";
import Fem from "@/assets/sexo-feminino.png";
import Mach from "@/assets/sexo-masculino.png";
import { useState } from "react";

const ModalPubli = ({ isVisible, onClose }) => {

  
  if (!isVisible) return null;

  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  }

  function handleUpLoad() {
    const formData = new formData();
    formData.append("file", file);
    fetch("url", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("success", result);
      })
      .catch((error) => {
        console.group("Error:", error);
      });
  }

  return (
    <>
      {/* MODELO DE MODAL */}

      <div className=" fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50	">
        <div className=" bg-white w-[50%] h-[95%] rounded-[50px] p-[30px] shadow-box1">
          <form onSubmit={handleUpLoad}>
            {/* BOTÃO FECHAR MODAL */}
            <div>
              <div className="flex justify-end">
                <button
                  className="w-[40px] h-[40px] bg-red-600 text-[20px] text-center rounded-[50px] flex items-center justify-center absolute hover:text-white"
                  onClick={() => onClose()}
                >
                  X
                </button>
              </div>
            </div>
            {/* CONTEÚDO DO MODAL AQUI */}

            {/* LOGO */}
            <div className=" flex justify-center items-center mb-[20px] ">
              <a className="flex justify-center items-center w-[20%]" href="/">
                <Image
                  className=" transition-all ease-in-out duration-200 hover:scale-[1.10]"
                  src={Logo}
                  alt="Logo da UniPatas"
                />
              </a>
            </div>

            {/* MAIN CONTENT */}
            <div className=" flex flex-col items-center">
              <div>
                <div className=" flex flex-wrap justify-between">
                  <div className=" w-[48.5%] mb-[10px]">
                    <p className=" text-[18px] mb-[10px]">Nome do animal:</p>
                    <input
                      type="text"
                      className=" w-[100%] h-[40%] bg-yellow p-[22px] rounded placeholder:text-black" placeholder="Digite o nome do animal..."
                    ></input>
                  </div>

                  {/* Espécio do animal */}

                  <div className=" mb-[10px] w-[45%]">
                    <p className=" text-[18px] mb-[10px]">
                      Espécie do animal:{" "}
                    </p>
                    <div className=" flex justify-between">
                      <div className=" bg-yellow p-[10px] h-[40%] w-[40%] rounded mr-[20px]">
                        <label
                          for="canino"
                          className="flex items-center justify-center cursor-pointer"
                        >
                          <Image className=" w-[20%] mr-[5px]" src={Dog} />{" "}
                          <span className=" font-bold">Canino</span>
                          <input
                            type="radio"
                            name="especie"
                            id="canino"
                            className="ml-[5px] cursor-pointer"
                          ></input>
                        </label>
                      </div>

                      <div className=" bg-yellow p-[10px] h-[40%] w-[40%] rounded">
                        <label
                          for="felino"
                          className="flex items-center justify-center cursor-pointer"
                        >
                          <Image className=" w-[20%] mr-[5px]" src={Cat} />{" "}
                          <span className=" font-bold">Felino</span>
                          <input
                            type="radio"
                            name="especie"
                            id="felino"
                            className="ml-[5px] cursor-pointer"
                          ></input>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Porte do animal */}

                  <div className="w-[50%] mb-[10px]">
                    <p className=" text-[18px] mb-[10px]">Porte do animal: </p>
                    <div className="flex justify-between">
                      {/* DIV's PORTES DA RAÇA */}
                      <div className="bg-yellow p-[10px] h-[40%] w-[33.33%] rounded mr-[20px]">
                        <label
                          for="pequeno"
                          className="flex items-center justify-between cursor-pointer"
                        >
                          {" "}
                          <span className=" font-bold">Pequeno</span>
                          <input
                            type="radio"
                            name="porte"
                            id="pequeno"
                            className="ml-[5px] cursor-pointer"
                          ></input>
                        </label>
                      </div>

                      <div className="bg-yellow p-[10px] h-[40%] w-[33.33%] rounded mr-[20px]">
                        <label
                          for="medio"
                          className="flex items-center justify-between cursor-pointer"
                        >
                          {" "}
                          <span className=" font-bold">Médio</span>
                          <input
                            type="radio"
                            name="porte"
                            id="medio"
                            className="ml-[5px] cursor-pointer"
                          ></input>
                        </label>
                      </div>

                      <div className="bg-yellow p-[10px] h-[40%] w-[33.33%] rounded mr-[20px]">
                        <label
                          for="grande"
                          className="flex items-center justify-between cursor-pointer"
                        >
                          {" "}
                          <span className=" font-bold">Grande</span>
                          <input
                            type="radio"
                            name="porte"
                            id="grande"
                            className="ml-[5px] cursor-pointer"
                          ></input>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* SEXO DO ANIMAL */}

                  <div className=" w-[45%] mb-[30px]">
                    <p className=" text-[18px] mb-[10px]">Sexo: </p>
                    <div className=" flex justify-between">
                      <div className=" bg-darker-purple p-[10px] h-[40%] w-[40%] rounded mr-[20px]">
                        <label
                          for="fem"
                          className="flex items-center justify-center cursor-pointer"
                        >
                          <Image className=" w-[20%] mr-[5px]" src={Fem} />{" "}
                          <span className=" font-bold">Fêmea</span>
                          <input
                            type="radio"
                            name="sexo"
                            id="fem"
                            className="ml-[5px] cursor-pointer"
                          ></input>
                        </label>
                      </div>

                      <div className=" bg-pool-green p-[10px] h-[40%] w-[40%] rounded">
                        <label
                          for="mach"
                          className="flex items-center justify-center cursor-pointer"
                        >
                          <Image className=" w-[20%] mr-[5px]" src={Mach} />{" "}
                          <span className=" font-bold">Macho</span>
                          <input
                            type="radio"
                            name="sexo"
                            id="mach"
                            className="ml-[5px] cursor-pointer"
                          ></input>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* CARACTERÍSTICA DO ANIMAL */}
              <div className=" w-[45%] h-[100%]">
                <div className=" mb-[10px]">
                  <h1 className=" text-center text-[18px]">Características:</h1>
                </div>
                <div className=" mb-[10px] bg-yellow p-[10px] rounded">
                <div className=" grid grid-rows-2 grid-flow-col">
                  <div className=" flex justify-center items-center p-[10px]">
                    <label
                      for="agitado"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      {" "}
                      <input
                        type="radio"
                        name="comportamento"
                        id="agitado"
                        className="mr-[5px] cursor-pointer"
                      ></input>
                      <span className=" font-bold">Agitado</span>
                    </label>
                  </div>
                  <div className=" flex justify-center items-center p-[10px]">
                    <label
                      for="amoroso"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      {" "}
                      <input
                        type="radio"
                        name="comportamento"
                        id="amoroso"
                        className="mr-[5px] cursor-pointer"
                      ></input>
                      <span className=" font-bold">Amoroso</span>
                    </label>
                  </div>
                  <div className=" flex justify-center items-center p-[10px]">
                    <label
                      for="calmo"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      {" "}
                      <input
                        type="radio"
                        name="comportamento"
                        id="calmo"
                        className="mr-[5px] cursor-pointer"
                      ></input>
                      <span className=" font-bold">Calmo</span>
                    </label>
                  </div>
                  <div className=" flex justify-center items-center p-[10px]">
                    <label
                      for="brincalhao"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      {" "}
                      <input
                        type="radio"
                        name="comportamento"
                        id="brincalhao"
                        className="mr-[5px] cursor-pointer"
                      ></input>
                      <span className=" font-bold">Brincalhão</span>
                    </label>
                  </div>
                </div>
                <hr className=" my-[5px]"></hr>
                <div className=" flex justify-between">
                <div className=" flex justify-center items-center p-[10px]">
                    <label
                      for="filhote"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      {" "}
                      <input
                        type="radio"
                        name="idade"
                        id="filhote"
                        className="mr-[5px] cursor-pointer"
                      ></input>
                      <span className=" font-bold">Filhote</span>
                    </label>
                  </div>
                  <div className=" flex justify-center items-center p-[10px]">
                    <label
                      for="adulto"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      {" "}
                      <input
                        type="radio"
                        name="idade"
                        id="adulto"
                        className="mr-[5px] cursor-pointer"
                      ></input>
                      <span className=" font-bold">Adulto</span>
                    </label>
                  </div>
                  <div className=" flex justify-center items-center p-[10px]">
                    <label
                      for="idoso"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      {" "}
                      <input
                        type="radio"
                        name="idade"
                        id="idoso"
                        className="mr-[5px] cursor-pointer"
                      ></input>
                      <span className=" font-bold">Idoso</span>
                    </label>
                  </div>
                </div>
                </div>
              </div>

              <div>
                <div className=" mb-[10px]">
                  <h1 className=" text-[18px] text-center ">Descrição:</h1>
                </div>

                <div>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Descreva o animal em poucas palavras..." className=" bg-yellow rounded p-[15px] w-[315px] h-[160px] placeholder:text-black"></textarea>
                </div>
              </div>

                </div>
                {/* FIM FA DIV COM OS AS INFORMAÇÕES DO PET */}
              </div>

              

              {/* IMAGEM DO ANIMAL */}

              <div>
                <p className=" text-center text-[18px] mb-[10px]">
                  Escolha uma foto para o animal:{" "}
                </p>
                <label
                  id="picture"
                  for="pictureinput"
                  // className=" flex items-center justify-center w-[400px] h-[200px] bg-[#ccc] text-[#aaa] border-2 border-dashed border-current cursor-pointer transition-all ease-in-out duration-300 hover:text-[#777] "
                ></label>

                <input
                  onChange={handleFile}
                  className=" "
                  type="file"
                  name="pictureinput"
                  id="pictureinput"
                ></input>
              </div>

              <div className=" mt-[30px]">
                <button className="bg-darker-purple text-white text-[18px] font-bold mb-[10px] rounded p-[10px] w-[200px] hover:bg-pool-green">
                  Publicar
                </button>
              </div>
              {/* FIM DA DIV COM OS CONTENTS */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalPubli;

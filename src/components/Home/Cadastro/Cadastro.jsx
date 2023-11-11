import Image from "next/image";
import Nome from "@/assets/logo-roxa-texto.png";
import Capa from "@/assets/capa.png";
import Logo from "@/assets/logo-unipatas.png";

export default function Cadastro(){
    
    return(
        <>
        <div className=" bg-[#a110a9] w-screen h-screen flex items-center justify-center p-16 align-center ">
            <head>
                <title>
                    Cadastro | UniPatas
                </title>
            </head>
            <div className=" w-96 h-full p-18 rounded-l-lg">
            <div className="flex flex-col items-center pt-8 bg-white">
            {" "}
            {/* conteiner da frase de boas vindas*/}
            <p class="bg-[#ffc501] text-[#a110a9] px-4 py-4 flex justify-center w-64 font-bold text-3xl rounded-full ">
              Bem vindos a
            </p>
            <Image
              src={Nome}
              width={306}
              height={100}
              alt="text-unipatas"
              class="pt-2"
            />
            <Image
              src={Capa}
              width={337}
              height={100}
              alt="Cachorro amarelo de porte médio"
            />
          </div>
        </div>
        <div class="h-full w-96 bg-white rounded-r-lg flex flex-col p-8 ">
          {" "}
          {/*conteiner da logo */}
          <div class="flex justify-center pt-4">
            <Image src={Logo} width={120} height={50} alt="logo-unipatas" />
          </div>
          <form class="p-6 pr-6 flex jutify-center flex-col font-bold">
            {" "}
            {/*formulario do login */}
            <label> CPF </label>
            <input type="email" class="bg-gray-200 h-8 rounded-md " />
            <br />
            <label> Email </label>
            <input type="email" class="bg-gray-200 h-8 rounded-md" />
            <br/>
            <label> Número telefone </label>
            <input type="num" class="bg-gray-200 h-8 rounded-md " />
            <br />
            <label> Login </label>
            <input type="text" class="bg-gray-200 h-8 rounded-md " />
            <br />
            <label> Senha </label>
            <input class="bg-gray-200 h-8 rounded-md " />
            <br />
          </form>

            </div>
        </div>
        </>
    )
}
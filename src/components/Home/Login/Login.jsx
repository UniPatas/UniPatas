'use client';
import Capa from "@/assets/capa.png";
import Image from "next/image";
import Logo from "@/assets/logo-unipatas.png";
import Facebook from "@/assets/facebook.png";
import Google from "@/assets/google.png";
import Nome from "@/assets/logo-roxa-texto.png";
import Link from "next/link";
import '@/app/globals.css'

export default function Login() {

  const backgroundImageStyle = {
    backgroundImage: `url(${Capa})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <>
      <section className=" bg-[#a110a9] h-screen flex items-center justify-center align-center ">
        <div className="w-[768px] h-[676px] flex align-top">

          <div className="flex w-[384px] bg-[url('../assets/capa.png')] bg-no-repeat bg-cover bg-center bg-origin-content rounded-md">
            <div className="flex h-[38%]">
              <div className="flex flex-col place-self-end">
                <div className="bg-[#ffc501] flex w-[286px]  h-[65px] pt-2 justify-center font-bold rounded-full self-center">
                  <h1 className=" text-[#a110a9] text-4xl rounded-full">Bem vindos a </h1>
                </div>

                <Link href={"/"}>
                  <Image
                    src={Nome}
                    alt="Nome'Unipatas'"
                    className="w-[90%] h-[100px]  self-center ml-8"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-r-lg items-center flex flex-col w-[384px] h-[676px] gap-6 bottom-9] ">

            {/*conteiner da logo */}
            <div className="flex justify-center pt-20 ">
              <Image src={Logo} width={120} height={50} alt="logo-unipatas" />
            </div>

            <div className="gap-28">
              <form className=" flex jutify-center flex-col font-bold w-72 gap-2"> {/*formulario do login */}
                <label> Login </label>
                <input type="email" className="bg-gray-200 h-8 rounded-md " />
                <br />
                <label> Senha </label>
                <input type="password" className="bg-gray-200 h-8 rounded-md" />
              </form>
            </div>

            <div className="flex justify-around space-x-20"> {/* conteiner dos botões*/}
              <button className="bg-[#a110a9] h-6 w-16 px-2 rounded-md text-white font-bold text-xs hover:bg-fuchsia-600 active:bg-fuchsia-400 focus:ring focus:ring-black">
                Entrar
              </button>

              <Link href="/cadastro" className="bg-gray-200 h-6 w-18 rounded-md px-2 pt-1 font-bold text-xs hover:bg-slate-300 active:bg-slate-300 focus:ring focus:ring-black">
                Cadastre-se
              </Link>

            </div>
            <p className="flex justify-center items-center text-xs font-bold">
              Esqueceu a senha?
            </p>


            <div className="flex justify-center text-xs"> {/* conteiner google-facebook*/}

              <Image src={Google} width={20} height={50} alt="logo-google" />
              <button>Entrar com o Google</button>
            </div>

            <div className="flex justify-center">
              <Image
                src={Facebook}
                width={50}
                height={10}
                alt="logo-facebook"
                className=" rounded-l-lg"
              />
              <button className="h-8 w-36 rounded-r-lg bg-[#2b78e4] text-white text-xs">
                Entrar com o Facebook
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

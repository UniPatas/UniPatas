import "./globals.css"

export default function Home() {
  return (
    
       <div class="w-screen h-screen flex items-center justify-center p-16  ">
        <head>
          <title>Login | UniPatas</title>
        </head>

        <div>
        <Image src="/image/login-imagem.png" width= "484" height= "700" alt='mascote-caramelo' class="rounded-l-lg"/> {/* Imagem principal */}
        </div>

        <div class= "h-full	bg-white rounded-r-lg flex flex-col p-8">

          <div class="flex justify-center p-4 align-items-self-end">
          <Image src="/image/logo-unipatas.png" width="120" height="40" alt="logo-unipatas" />      
         </div>
        
          <form class="p-8 flex jutify-end flex-col ">    {/* formulario do login */}
            <label> Login </label>
            <input type="email" class="input-unipatas"/>
            <br/>
            <label> Senha </label>
            <input type="password" class="input-unipatas"/>
          </form>
         
          <div class="pt-2 flex justify-around"> {/* conteiner dos botões*/}
            <button class="bg-[#a110a9] h-6 w-16 rounded-md text-white">Entrar</button>         
            <button class="bg-gray-200 h-6 w-18 rounded-md px-2 "> Cadastre-se</button>
          </div>

          <a class="pt-2 flex justify-center items-center text-xs">Esqueceu a senha?</a>
          <br/>

          <div class=" buttom-facebook-google	"> 
            <Image src="/image/google.png" width="30" height="10" alt="logo-google"/>
            <button class="w-36 font-nova">Entrar com o Google</button>
          </div>

          <div class=" buttom-facebook-google	">
            <Image src="/image/facebook.png" width="50" height="30" alt="logo-facebook" class="rounded-l-lg"/>
            <button class="h-8 w-36 rounded-r-lg bg-[#2b78e4] text-white">Entrar com o Facebook</button>
          </div>
        </div>
      </div> 
  
  )
}

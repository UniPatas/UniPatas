export default function Login() {
  return (
    
       <div class=" bg-[#a110a9] w-screen h-screen flex items-center justify-center p-16 align-center "> {/* conteiner principal*/}
        <head>
          <title>Login | UniPatas</title>
        </head>

        <div class=" w-96 h-full bg-cover p-18 bg-[url('./assets/capa.png')] rounded-l-lg  alt= Cachorro de porte médio amarelo ">{/* conteiner do mascote*/}
        
        <div class="flex flex-col items-center pt-14">  {/* conteiner da frase de boas vindas*/}
        <a class="bg-[#ffc501] text-[#a110a9] px-4 py-4 flex justify-center  w-64 font-bold text-3xl rounded-full ">Bem vindos a</a>  
        <a class="flex justify-center text-[#a110a9] font-bold text-6xl pt-2">UniPatas</a>
        </div>
        </div>

         <div class= "h-full w-96 bg-white rounded-r-lg flex flex-col p-8 ">
          <div class="flex justify-center p-4 align-items-self-end">
         </div>
        
          <form class="p-8 pr-8 flex jutify-center flex-col ">  {/*formulario do login */}
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

          <a class="pt-4 flex justify-center items-center text-xs">Esqueceu a senha?</a>
          <br/>

          <div> 
            <button>Entrar com o Google</button>
          </div>

          <div >
            <button class="h-8 w-36 rounded-r-lg bg-[#2b78e4] text-white">Entrar com o Facebook</button>
          </div>

        </div>
      </div> 
  
  )
}

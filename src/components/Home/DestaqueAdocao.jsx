export function DestaqueAdocao() {
    return (
      <div>
        {/* Div que guarda todos os fluid shapes */}
        <div className="flex justify-between w-full max-w-[1246px] p-[50px] mx-auto">
          {/* 1º fluid shape */}
          <div className=" flex justify-center items-center w-[300px] h-[300px] bg-darker-purple rounded-custom1 transition-all ease-in-out delay-100 duration-700 hover:rounded-custom2">
          <a href="/adote">
              <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-ligther-purple">
                <span className=" flex text-white"><img className=" rounded-full" src="https://img.freepik.com/fotos-gratis/cao-feliz-sorridente-isolado-fundo-branco-retrato-2_1562-691.jpg" alt="Animal disponível para adoção"></img></span>
              </div>
            </a>
          </div>
          {/* 2ª fluid shape */}
          <div className=" flex justify-center items-center w-[300px] h-[300px] bg-darker-purple rounded-custom2 transition-all ease-in-out delay-100 duration-700 hover:rounded-custom3">
          <a href="/adote">
              <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-ligther-purple">
                <span className=" flex text-white"><img className=" rounded-full" src="https://www.universodasaudeanimal.com.br/wp-content/uploads/sites/57/2021/07/Cacho-e-gato-juntos-no-chao-posando-pra-foto.jpg" alt="Animal disponível para adoção"></img></span>
              </div>
            </a>
          </div>
          {/* 3º fluid shape */}
          <div className=" flex justify-center items-center w-[300px] h-[300px] bg-darker-purple rounded-custom3 transition-all ease-in-out delay-100 duration-700 hover:rounded-custom4" alt="Animal disponível para adoção">
            <a href="/adote">
              <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-ligther-purple">
                <span className=" flex text-white"><img className=" rounded-full" src="https://ogimg.infoglobo.com.br/in/24649523-8a0-224/FT1086A/88249115.jpg"></img></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
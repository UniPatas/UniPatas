export function Relatos() {
  return (
    <>
      <section className=" pt-[30px]">
        <div className="w-full mx-auto">
          <div className="max-w-[1246px] mx-auto">
            {/* Cabeçalho */}
            <div>
              <h1 className="text-center font-bold text-[30px] text-darker-purple">
                Relatos
              </h1>
            </div>
            {/* Relatos*/}

            <div className=" flex justify-around">
              {/* Relato 1  */}
              <div className=" pt-[20px] flex justify-between relative">
                {/* Borda */}
                <div className=" bg-pool-green w-[350px] h-[250px] relative flex justify-center items-center">
                  {/* Retângulo meio centro */}
                  <div className=" bg-white w-[320px] h-[220px] relative flex justify-center items-center">
                    {/* Retângulo separador */}
                    <div className=" bg-white w-[210px] h-[250px] relative"></div>
                  </div>
                </div>
                {/* Texto */}
                <div className=" absolute ml-[25px] mt-[10px]">
                  <div className="  pb-[5px]">
                    <p className=" text-[18px] ml-[100px] text-black italic">
                      Usuário 236:
                    </p>
                  </div>
                  <div>
                    <p className=" absolute text-[12px] w-[300px] text-justify text-gray-500 italic">
                      {" "}
                      Nós estávamos procurando um gato para adotar quando vimos
                      a história de Tico no canal no site da Unipatas. Tico era
                      um gatinho que foi encontrado pela equipe da ONG pataxpata
                      em uma situação perigosa. Ele estava preso em uma árvore
                      alta e não conseguia descer. A equipe resgatou Tico e o
                      levou para a clínica para um check-up. Nós decidimos levar
                      Tico para casa. Agora, Tico tem um lar seguro e amoroso
                      conosco, e nós temos um novo membro em nossa família.
                    </p>
                  </div>
                </div>
                {/* texto ends */}
              </div>

              {/* Relato 2  */}
              <div className=" pt-[20px] flex justify-between relative">
                {/* Borda */}
                <div className=" bg-pool-green w-[350px] h-[250px] relative flex justify-center items-center">
                  {/* Retângulo meio centro */}
                  <div className=" bg-white w-[320px] h-[220px] relative flex justify-center items-center">
                    {/* Retângulo separador */}
                    <div className=" bg-white w-[210px] h-[250px] relative"></div>
                  </div>
                </div>
                {/* Texto */}
                <div className=" absolute ml-[25px] mt-[10px]">
                  <div className="  pb-[5px]">
                    <p className=" text-[18px] ml-[100px] text-black italic">
                      Usuário 222:
                    </p>
                  </div>
                  <div>
                    <p className=" absolute text-[12px] w-[300px] text-justify text-gray-500 italic">
                      {" "}
                      Eu e minha esposa estávamos procurando um novo membro para
                      a nossa família quando nos deparamos com a história de
                      Belinha no canal de divulgação da Unipatas. Belinha era
                      uma cadela de rua que vivia em condições precárias. Ela
                      estava desnutrida e tinha vários ferimentos. Nós nos
                      apaixonamos por Belinha e decidimos adotá-la. Agora ela
                      têm um lar seguro conosco, e nós temos uma nova amiga
                      leal.
                    </p>
                  </div>
                </div>
                {/* texto ends */}
              </div>

              {/* Relato 3  */}
              <div className=" pt-[20px] flex justify-between relative">
                {/* Borda */}
                <div className=" bg-pool-green w-[350px] h-[250px] relative flex justify-center items-center">
                  {/* Retângulo meio centro */}
                  <div className=" bg-white w-[320px] h-[220px] relative flex justify-center items-center">
                    {/* Retângulo separador */}
                    <div className=" bg-white w-[210px] h-[250px] relative"></div>
                  </div>
                </div>
                {/* Texto */}
                <div className=" absolute ml-[25px] mt-[10px]">
                  <div className="  pb-[5px]">
                    <p className=" text-[18px] ml-[100px] text-black italic">
                      Usuário 904:
                    </p>
                  </div>
                  <div>
                    <p className=" absolute text-[12px] w-[300px] text-justify text-gray-500 italic">
                      {" "}
                      Eu tenho 78 anos, vivia sozinha e estava procurando uma
                      companhia para os meus dias, quando vi a história de Mimi
                      no canal de divulgação da Unipatas. Mimi era uma gatinha
                      que foi encontrada em uma situação precária. Ela estava
                      desnutrida e precisava de cuidados médicos. Eu decidi
                      adotar Mimi. Agora, Mimi tem uma nova casa comigo e eu
                      tenho uma companhia amorosa até o resto de meus dias.
                    </p>
                  </div>
                </div>
                {/* texto ends */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function BarraHomeAdote() {
  return (
    <>

      <section className="pt-[30px]">
        <div className="w-full mx-auto bg-darker-purple">
          <div className="max-w-[1246px] mx-auto">
            <div className="flex justify-center items-center h-[60px]">
              <div className="text-white">
                <p className="text-[20px] font-bold">
                  <span className="hover:underline">
                    <a href="/">
                      Home
                    </a>
                  </span>{" "}
                  <span className="text-[px]">&nbsp;&gt;&nbsp;</span>{" "}
                  <a href="/adote" className="underline" >
                    Adote
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

 
}

import { useEffect } from "react";

const MultiStepForm = ({ stepDone }) => {
      
      useEffect(() => {
        console.log(stepDone)
        const stepElement = document.getElementById(stepDone);
  
        if (stepElement) {
          stepElement.classList.remove('bg-[#299b90]');
          stepElement.classList.add('bg-white');
        }
      }, [stepDone]);

      return (
        <div className="">
              <div className="w-[126.4%] h-28 flex flex-col teste shrink">
                <div className="flex text-center justify-center">
                  <div className="flex font-bold w-[80%] justify-between">
                    <span> ONG</span>
                    <span className="pl-7"> Redes </span>
                    <span> Concluído</span>
                  </div>
                </div>
                
                <div className="bg-[#33b3a6] text-center h-[60px] text-white w-full font-bold text-3xl rounded-l-full flex justify-center items-center">
                  <div className="w-[76%] h-[24px] flex justify-between">
                    <div id="1" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                    <div id="2" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                    <div id="3" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                  </div>
                </div>
              </div>
        </div>
      );
    };
    
export default MultiStepForm;

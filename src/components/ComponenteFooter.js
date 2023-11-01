import Image from "next/image";

import Linkedin from '@/assets/icons8-linkedin-100.png'
import Facebook from '@/assets/icons8-facebook-100.png'
import TwitterX from '@/assets/icons8-twitterx-100.png'
import Instagram from '@/assets/icon-insta.png'
import LogoBranca from '@/assets/Logo-UniPatas-Vector-branca.png'
import LogoRoxa from '@/assets/Logo-UniPatas-Vector-roxa.png'

export function ComponenteFooter () {

    return(

        <div>

            <div className=" w-full h-[45px] bg-yellow"></div>

            <div>
                <div className="w-full h-[300px] bg-darker-purple">
                    <div className=" flex justify-between w-full max-w-[1246px] px-[100px] mx-auto pt-[50px]">
                        <div className=" max-w-[35%] ">
                            <div>
                                <a href="">
                                    <Image className="w-[230px]"
                                        src={LogoBranca}
                                        alt="Logo da UniPatas na cor branca."
                                    />
                                </a>
                                
                            </div>
                            <div className=" pt-[20px]">
                                <p className=" text-white ">Somos 8 estudantes de tecnologia do Instituto PROA. O projeto dessa plataforma foi pensada com muito carinho e empatia, pensando em resolver um problema da nossa comunidade.</p>
                            </div>
                        </div>

                        <div>
                            <div>
                            <h1 className="text-[30px] font-black text-white pb-[10px] mt-[10px]">Mais informações</h1>
                            </div>
                            <div className="flex flex-col gap-[15px] pt-[25px] text-white">    
                                <div><a href="" className="hover:underline">SOBRE NÓS</a></div>
                                <div><a href="" className="hover:underline">FALE CONOSCO</a></div>
                                <div><a href="" className="hover:underline">TERMOS DE PRIVACIDADE</a></div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h1 className="text-[30px] font-black text-white pb-[10px] mt-[10px]">Nos siga</h1>
                            </div>
                            <div className=" flex gap-[15px] pt-[20px]">
                                <div>
                                    <a href="#">
                                        <Image className="w-[40px]"
                                            src={Linkedin}
                                            alt="Ícone do LinkedIn"
                                        />
                                    </a>
                                </div>

                                <div>
                                    <a href="#">
                                        <Image className="w-[40px]"
                                            src={Facebook}
                                            alt="Ícone do LinkedIn"
                                        />
                                    </a>
                                </div>

                                <div>
                                    <a href="#">
                                        <Image className="w-[40px]"
                                            src={TwitterX}
                                            alt="Ícone do LinkedIn"
                                        />
                                    </a>
                                </div>

                                <div>
                                    <a href="#">
                                        <Image className="w-[40px]"
                                            src={Instagram}
                                            alt="Ícone do LinkedIn"
                                        />
                                    </a>
                                </div>

                                
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" w-full h-[45px] bg-yellow"></div>

        </div>

    )

}
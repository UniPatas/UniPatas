'use client';
import Link from "next/link";
import Image from "next/image";
import Nome from "@/assets/logo-roxa-texto.png";
import Capa from "@/assets/capa.png";
import Logo from "@/assets/logo-unipatas.png";
import '../../../app/globals.css'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Cadastro() {

    // redirecionar para outra pagina
    const router = useRouter();
    const redirecionarParaLogin = () => {
        router.push('/login');
    };

    // objeto usuario, usado nos inputs para obter os dados e montar em um objeto para enviar pro back-end
    const [usuario, setUsuario] = useState({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        login: '',
        senha: '',
        opcoesDeContato: 0,
        larTemporario: 0,
    });

    
    // funcao assincrona que efetua o cadastro do usuario, enviando os dados para o back
    const cadastrarUsuario = async (event) => {
        event.preventDefault();
        
        // valida a existencia e se os campos nao estao vazios
        if(!usuario.nome || !usuario.cpf || !usuario.email || !usuario.login || !usuario.telefone || !usuario.senha) {
            toast('Preencha todos os campos..!', { hideProgressBar: true, autoClose: 2000, type: 'warning', position:'bottom-center' })
            return;
        }

        // usa-se um try catch, para tentar fazer o POST, e se não der, cai no erro.
        try {
            // usa o fetch, pra poder enviar via body a requisição pra rota.
            const response = await fetch('http://127.0.0.1:8080/user/cadastro', {
                // metodo
                method: 'POST',
                // headers - tipo de dados que estamos enviando pro backend
                headers: {
                    'Content-Type': 'application/json',
                },
                // body - corpo da requisicao, o que vai se renviado/recebido pelo back-end
                body: JSON.stringify(usuario)
            });
            
            // se o a resposta for 200 ou ok, entao mostra um alerta success com uma mensagem, após isso, redireciona pro login
            if (response.ok) {
                toast('Cadastro efetuado com sucesso!!', { hideProgressBar: true, autoClose: 2000, type: 'success', position:'bottom-center' })                
                setTimeout(() => {
                    redirecionarParaLogin();
                }, 2000);
            // se nao for, retorna um alert error, e quebra o codigo
            } else {
                toast('Erro ao fazer o cadastro..!', { hideProgressBar: true, autoClose: 2000, type: 'warning' })
                return;
            }
            
            // catch error - erro de servidor... envio com sucesso, porém, o erro acontece do lado do servidor.
        } catch(error) {
            toast('Erro ao fazer o cadastro..!', { hideProgressBar: true, autoClose: 2000, type: 'warning' })
        }

    };

    return (
        <>
            <ToastContainer />
            <section className="bg-[#a110a9] align-center h-screen flex items-center justify-center ">
                <div className=" w-[768px] h-[700px] flex">

                    <div className="flex flex-col w-[384px] ">
                        <Image
                            src={Capa}
                            alt="Cachorro amarelo de porte médio"
                            className="rounded-l-lg h-[700px]"
                        />
                        <div className="fixed top-[200px] ml-10">
                            <h1 className="bg-[#ffc501] text-[#a110a9] px-4 py-4 flex justify-center w- font-bold text-3xl rounded-full">Faça parte da</h1>

                            <Image
                                src={Nome}
                                alt="Nome'Unipatas'"
                                className="w-[280px] h-[100px]"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-r-lg items-center flex flex-col w-[384px] h-[700px] gap-1 ">

                        <div className="flex justify-center pt-2"> {/*conteiner da logo */}
                            <Image src={Logo} width={100} height={50} alt="logo-unipatas" />
                        </div>

                        <div>
                            <h2 className="flex justify-center font-bold text-xl">Cadastro</h2>
                            <h2 className="flex justify-center font-bold text-sm" >Que tipo de perfil deseja?</h2>
                        </div>

                        <div className="flex justify-center space-x-4 gap-px">
                            <Link href={"#"} className="bg-[#a110a9] h-8 w-18 rounded-full px-4 pt-2 font-bold text-xs text-center text-white">Usuario</Link>
                            <Link href={"/cadastro-ongs"} className="bg-[#33b3a6] h-8 w-18 rounded-full px-4 pt-2 font-bold text-xs text-center text-white">ONG</Link>
                        </div>

                        <form onSubmit={cadastrarUsuario} className="text-sm/[11px] flex jutify-center flex-col font-bold w-72 gap-1"> {/*formulario do cadastro */}
                            <label> Nome </label>
                            <input required type="text" onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })} value={usuario.nome} className="bg-gray-200 h-8 rounded-md p-2 mb-2" />

                            <label> CPF </label>
                            <input required type="text" onChange={(e) => setUsuario({ ...usuario, cpf: e.target.value })} value={usuario.cpf} className="bg-gray-200 h-8 rounded-md p-2 mb-2" />

                            <label> Email </label>
                            <input type="email" required onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} value={usuario.email} className="bg-gray-200 h-8 rounded-md p-2 mb-2" />

                            <label> Número telefone </label>
                            <input required type="num" onChange={(e) => setUsuario({ ...usuario, telefone: e.target.value })} value={usuario.telefone} className="bg-gray-200 h-8 rounded-md p-2 mb-2" />

                            <label> Login </label>
                            <input required type="text" onChange={(e) => setUsuario({ ...usuario, login: e.target.value })} value={usuario.login} className="bg-gray-200 h-8 rounded-md p-2 mb-2" />

                            <label> Senha </label>
                            <input required type="password" onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })} value={usuario.senha} className="bg-gray-200 h-8 rounded-md p-2 mb-2" />

                            <div className="text-xs p-1 flex-col w-full">  {/*Conteiner checkbox */}
                                <div className="flex items-center w-78 gap-2">
                                    <input
                                        type="checkbox"
                                        name="opcoesDeContato"
                                        id="opcoesDeContato"
                                        checked={usuario.opcoesDeContato}
                                        onChange={() => setUsuario({ ...usuario, opcoesDeContato: !usuario.opcoesDeContato })}
                                    />
                                    <label className="cursor-pointer" htmlFor="opcoesDeContato"> Permito exibir minhas opções de contato no perfil</label>
                                </div>
                                <br />
                                <div className="flex items-center w-78 gap-2">
                                    <input
                                        type="checkbox"
                                        name="larTemporario"
                                        id="larTemporario"
                                        checked={usuario.larTemporario}
                                        onChange={() => setUsuario({ ...usuario, larTemporario: !usuario.larTemporario })}
                                    />
                                    <label className="cursor-pointer" htmlFor="larTemporario">Lar temporário/voluntário</label>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-5 justify-between items-center">
                                <Link className="flex justify-center items-center bg-[#a110a9] w-2/4 h-8 rounded-md text-white font-bold text-xs " href={"/login"}> Voltar </Link>
                                {/* botao que aciona a funcao de cadastro de usuario */}
                                <button className="bg-[#a110a9] w-2/4 h-8 w-24 rounded-md text-white font-bold text-xs "> Cadastre-se 😍 </button>
                            </div>
                        </form>
                        <br />



                    </div>
                </div>
            </section >
        </>
    )
}
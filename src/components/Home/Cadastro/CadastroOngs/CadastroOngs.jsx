'use client'
import Image from "next/image"
import Link from "next/link";
import ImagemLado from "@/assets/imagemSideBarCadastro.png"
import { useState, useContext, useEffect } from "react";
import { CadastroContext } from "@/contexts/CadastroContext";
import "@/app/globals.css"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function CadastroOngs() {

    const [ong, setOng] = useState({
        nome_ong: '',
        nome_responsavel: '',
        numero_contato: '',
        cpf_responsavel: '',
        cep: '',
        cidade: '',
        uf: '',
        endereco: '',
        
        lar_acolhimento: false,
        lar_temporario: false,
        terapia_infantil: false,

        foco_cachorro: false,
        foco_gato: false,

        instagram_link: '',
        facebook_link: '',
        doacao_link: '',
    });
    
    const [step, setStep] = useState(0);

    const changeStep = (novoStep) => {
        setStep(novoStep);
    };

    const changeFocus = (type) => {
        setOng((prevOng) => {
            let updatedOng;
            if (type === 'cachorro') {
                updatedOng = {
                    ...prevOng,
                    foco_cachorro: true,
                    foco_gato: false,
                };
            } else if (type === 'gato') {
                updatedOng = {
                    ...prevOng,
                    foco_cachorro: false,
                    foco_gato: true,
                };
            } else if (type === 'ambos') {
                updatedOng = {
                    ...prevOng,
                    foco_cachorro: true,
                    foco_gato: true,
                };
            }    
            return updatedOng;
        });
    }

    const getCep = async (cep) => {

        if(cep.length < 8) {
            setOng((prevOng) => ({
                ...prevOng,
                cidade: '',
                uf: '',
                endereco: '',
            }));
            return;
        }

        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          response.json()
            .then(data => {
                setOng((prevOng) => ({
                    ...prevOng,
                    cidade: data.localidade,
                    uf: data.uf,
                    endereco: data.logradouro,
                }));
            })
        })

    }

    // redirecionar para outra pagina
    const router = useRouter();
    const redirecionarParaLogin = () => {
        router.push('/login');
    };

    const cadastrarOng = async () => {

        // valida a existencia e se os campos nao estao vazios
        if(
            ong.nome_ong == '' ||
            ong.nome_responsavel == '' ||
            ong.numero_contato == '' ||
            ong.cpf_responsavel == '' ||
            ong.cep == '' ||
            ong.cidade == '' ||
            ong.uf == '' ||
            ong.endereco == '' ||
            ong.instagram_link == '' ||
            ong.facebook_link == '' ||
            ong.doacao_link == ''
        ) {
            toast('Preencha todos os campos..!', { hideProgressBar: true, autoClose: 2000, type: 'warning', position:'bottom-center' })
            return;
        }

        // valida o foco da ong, se ambos estiverem vazios, retorna um erro
        if(!ong.foco_cachorro && !ong.foco_gato) {
            toast('Selecione um foco da ong..!', { hideProgressBar: true, autoClose: 2000, type: 'warning', position:'bottom-center' })
            return;
        }

        // usa-se um try catch, para tentar fazer o POST, e se não der, cai no erro.
        try {
            // usa o fetch, pra poder enviar via body a requisição pra rota.
            const response = await fetch('http://127.0.0.1:8080/ong/cadastro', {
                // metodo
                method: 'POST',
                // headers - tipo de dados que estamos enviando pro backend
                headers: {
                    'Content-Type': 'application/json',
                },
                // body - corpo da requisicao, o que vai se renviado/recebido pelo back-end
                body: JSON.stringify(ong)
            });
            
            // se o a resposta for 200 ou ok, entao mostra um alerta success com uma mensagem, após isso, redireciona pro login
            if (response.ok) {
                toast('Cadastro de ONG efetuado com sucesso!!', { hideProgressBar: true, autoClose: 2000, type: 'success', position:'bottom-center' })                
                setTimeout(() => {
                    redirecionarParaLogin();
                }, 2000);
            // se nao for, retorna um alert error, e quebra o codigo
            } else {
                toast('Erro ao fazer o cadastro!', { hideProgressBar: true, autoClose: 2000, type: 'warning' })
                return;
            }
            
            // catch error - erro de servidor... envio com sucesso, porém, o erro acontece do lado do servidor.
        } catch(error) {
            toast('Erro ao fazer o cadastro!', { hideProgressBar: true, autoClose: 2000, type: 'warning' })
        }

    };

    return (
        <>
            <ToastContainer />

            <section className="box-border h-screen flex">
                <div className="flex w-screen h-[97%] self-center">

                    <div className="w-[542px] h-auto flex flex-col justify-center arredondado-r-lg"> {/*container esquerdo */}
                        <Image src={ImagemLado} className="h-full arredondado-r-lgl" alt="" />
                    </div>

                    <div id="containerPai" className="w-[1580px] h-auto flex flex-col items-center"> {/*Container que armazena o forms */}

                        <div className="h-auto w-full">
                            <div className="w-[100%]">
                                <div className="h-28 flex flex-col shrink">
                                    <div className="flex text-center justify-center">
                                    <div className="flex font-bold w-[80%] justify-between">
                                        <span> ONG</span>
                                        <span className="pl-7"> Redes </span>
                                        <span> Concluído</span>
                                    </div>
                                    </div>
                                    
                                    <div className="bg-[#33b3a6] text-center h-[60px] text-white w-full font-bold text-3xl rounded-l-full flex justify-center items-center">
                                        {step === 0 && (
                                            <div className="w-[76%] h-[24px] flex justify-between">
                                                <div id="1" className="bg-[#fff] rounded-full w-[25px] h-[24px]"></div>
                                                <div id="2" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                                                <div id="3" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                                            </div>
                                        )}
                                        {step === 1 && (
                                            <div className="w-[76%] h-[24px] flex justify-between">
                                                <div id="1" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                                                <div id="2" className="bg-[#fff] rounded-full w-[25px] h-[24px]"></div>
                                                <div id="3" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                                            </div>
                                        )}
                                        {step === 2 && (
                                            <div className="w-[76%] h-[24px] flex justify-between">
                                                <div id="1" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                                                <div id="2" className="bg-[#299b90] rounded-full w-[25px] h-[24px]"></div>
                                                <div id="3" className="bg-[#fff] rounded-full w-[25px] h-[24px]"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {step === 0 && (

                            <div id="containerFilho" className="w-[642px] self-center"> {/*Formulário com todos os inputs */}

                                <div className=" h-[80%] flex w-full"> {/*Container dos inputs */}

                                    <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 1*/}

                                        <div className="flex flex-col gap-2"> {/*Input do nome da ONG */}
                                            <div>
                                                <label className="" htmlFor="nomeOng">Nome da ong</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, nome_ong: e.target.value })} value={ong.nome_ong} className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeOng" name="nomeOng"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input do numero de contato */}
                                            <div>
                                                <label className="" htmlFor="numeroContato">Número de contato</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, numero_contato: e.target.value })} value={ong.numero_contato} name="telefone" className="bg-gray-200 h-8 rounded-md w-[180px] text-center" type="text" id="telefone"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input do CEP */}
                                            <div>
                                                <label className=" " htmlFor="cep">CEP</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => {
                                                    setOng({ ...ong, cep: e.target.value });
                                                    getCep(e.target.value);
                                                }} value={ong.cep} type="text" name="cep" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" id="cep"></input>
                                            </div>
                                        </div>

                                        <div className="flex gap-6"> {/*Input da Cidade e uf */}
                                            <div className="flex flex-col gap-2">
                                                <label className="block" htmlFor="cidade">Cidade</label>
                                                <input disabled onChange={(e) => setOng({ ...ong, cidade: e.target.value })} value={ong.cidade} required name="cidade" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" type="text" id="cidade"></input>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="block" htmlFor="uf">UF</label>
                                                <input disabled onChange={(e) => setOng({ ...ong, uf: e.target.value })} value={ong.uf} required name="uf" className="bg-gray-200 h-8 rounded-md w-[30px] text-center" type="text" id="uf"></input>
                                            </div>
                                        </div>

                                        <div className=" flex flex-col gap-2"> {/*Input do Endereço */}

                                            <div>
                                                <label className="block" htmlFor="endereço">Endereço</label>
                                            </div>
                                            <div className="">
                                                <input onChange={(e) => setOng({ ...ong, endereco: e.target.value })} value={ong.endereco} required name="endereco" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="endereco"></input>
                                            </div>
                                        </div>

                                    </div> {/*Final Coluna 1*/}

                                    
                                    <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 2*/}

                                        <div className="justify-self-end self-start place-self-start flex flex-col gap-2"> {/*Input do nome do responsavel */}
                                            <div className="">
                                                <label className="" htmlFor="nomeResponsavel">Nome do responsável</label>                                            
                                            </div>
                                            <div className=""> 
                                                <input onChange={(e) => setOng({ ...ong, nome_responsavel: e.target.value })} value={ong.nome_responsavel} name="nomeResponsavel" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeResponsavel"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">  {/*Input do CPF */}
                                            <div className="">
                                                <label className="" htmlFor="cpfResponsavel">CPF do responsável</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, cpf_responsavel: e.target.value })} value={ong.cpf_responsavel} name="cpf" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="cpf"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Opções de foco da ong */}
                                            <div className="flex gap-6">
                                                <p className=" ">Foco da ONG</p>
                                            </div>

                                            <ul className="flex justify-around gap-6">

                                                <span onClick={() => changeFocus('cachorro')}
                                                    
                                                    className={`cursor-pointer rounded-lg text-white flex items-center justify-center text-center py-2 px-4 placeholder:text-center placeholder:text-white ${
                                                        ong.foco_cachorro && !ong.foco_gato ? 'bg-[#A110A9]' : 'bg-[#33b3a6]'
                                                    }`}
                                                
                                                name="cachorro" id="cachorro" disabled placeholder="Cachorro"> Cachorro</span>


                                                <span onClick={() => changeFocus('gato')}
                                                    className={`cursor-pointer rounded-lg text-white flex items-center justify-center text-center py-2 px-4 placeholder:text-center placeholder:text-white ${
                                                        ong.foco_gato && !ong.foco_cachorro ? 'bg-[#A110A9]' : 'bg-[#33b3a6]'
                                                    }`}
                                                name="gato" id="gato">Gatos</span>

                                                <span onClick={() => changeFocus('ambos')}
                                                    className={`cursor-pointer rounded-lg text-white flex items-center justify-center text-center py-2 px-4 placeholder:text-center placeholder:text-white ${
                                                        ong.foco_gato && ong.foco_cachorro ? 'bg-[#A110A9]' : 'bg-[#33b3a6]'
                                                    }`}
                                                name="ambos" id="ambos" >Ambos</span>

                                            </ul>
                                        </div>

                                        {/*Seleção da categoria da ong*/}
                                        <div className="flex flex-col gap-2 self-end">
                                            <div className=""> 
                                                <p className=" " >Categorias</p>
                                            </div>
                                            <ul className="flex flex-col gap-2  ">

                                                <div className="flex gap-2 checkbox_row">
                                                    <input hidden type="checkbox" name="lar_acolhimento" id="lar_acolhimento"
                                                        checked={ong.lar_acolhimento}
                                                        onChange={() => setOng({ ...ong, lar_acolhimento: !ong.lar_acolhimento })}
                                                    />
                                                    <label className="w-3 h-3 checkbox_person_item" htmlFor="lar_acolhimento"></label>
                                                    <label htmlFor="lar_acolhimento">Lar de Acolhimento</label>
                                                </div>

                                                <div className="flex gap-2 checkbox_row">
                                                    <input hidden type="checkbox" name="lar_temporario" id="lar_temporario"
                                                        checked={ong.lar_temporario}
                                                        onChange={() => setOng({ ...ong, lar_temporario: !ong.lar_temporario })}
                                                    />
                                                    <label className="w-3 h-3 checkbox_person_item" htmlFor="lar_temporario"></label>
                                                    <label htmlFor="lar_temporario">Lar Temporário</label>
                                                </div>

                                                <div className="flex gap-2 checkbox_row">
                                                    <input hidden type="checkbox" name="terpia_infantil" id="terpia_infantil"
                                                        checked={ong.terapia_infantil}
                                                        onChange={() => setOng({ ...ong, terapia_infantil: !ong.terapia_infantil })}
                                                    />
                                                    <label className="w-3 h-3 checkbox_person_item" htmlFor="terpia_infantil"></label>
                                                    <label htmlFor="terpia_infantil">Terapia Infantil com Animais</label>
                                                </div>

                                            </ul>
                                        </div>



                                    </div> {/*Final Coluna 2*/}

                                </div>

                                <div className="text-sm font-bold flex justify-center mt-[4em]"> {/*Botões inferiores*/}
                                    <div className="h-auto w-[70%] flex justify-between text-center items-center"> 
                                        <Link href={'/cadastro'} className="text-sm flex gap-1 hover:underline">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                        </svg>
                                            Voltar para cadastro de usuário
                                        </Link>
                                        <button onClick={() => changeStep(1)}className="bg-[#33b3a6] h-8 w-24 rounded-md text-white font-bold text-xs flex justify-center items-center">Proximo</button>                                    
                                    </div>
                                </div>



                            </div>

                        )}

                        {step === 1 && (

                            <div id="containerFilho" className="w-[642px] h-[90%]  mt-[8em] "> {/*Formulário com todos os inputs */}

                                <div className="flex w-full justify-center"> {/*Container dos inputs */}

                                    <div className="h-auto w-auto flex-col justify-between flex-wrap space-y-10"> {/*Coluna 1*/}

                                        <div className="flex flex-col gap-2"> {/*Input do nome do link do instagram*/}
                                            <div>
                                                <label className="" htmlFor="instagram">Instagram da Ong (Link)</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, instagram_link: e.target.value })} value={ong.instagram_link} required className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="instagram" name="instagram"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input do link do facebook*/}
                                            <div>
                                                <label className="" htmlFor="Facebook">Facebook da Ong (Link)</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, facebook_link: e.target.value })} value={ong.facebook_link} required name="facebook" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="facebook"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input da chave pix ou meio de doacao */}
                                            <div>
                                                <label className=" " htmlFor="doacao">Link de doação (chavePix e afins..) </label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, doacao_link: e.target.value })} value={ong.doacao_link} required type="text" name="doacao" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" id="doacao"></input>
                                            </div>
                                        </div>

                                    </div> {/*Final Coluna 1*/}

                                </div>

                                <div className="text-sm font-bold flex justify-center mt-[4em]"> {/*Botões inferiores*/}
                                    <div className="h-auto w-[50%] flex justify-between text-center items-center"> 
                                        <button  onClick={() => changeStep(0)} className="text-sm flex gap-1 hover:underline"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                        </svg>
                                        Voltar para dados
                                        </button>
                                        <button onClick={() => changeStep(2)} className="bg-[#33b3a6] h-8 w-24 rounded-md text-white font-bold text-xs flex justify-center items-center">Proximo</button>
                                    </div>
                                </div>



                            </div>
                        )}
                    
                        {step === 2 && (

                            <div id="containerFilho" className="w-[642px] self-center"> {/*Formulário com todos os inputs */}

                                <div className=" h-[80%] flex w-full"> {/*Container dos inputs */}

                                    <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 1*/}

                                        <div className="flex flex-col gap-2"> {/*Input do nome da ONG */}
                                            <div>
                                                <label className="" htmlFor="nomeOng">Nome da ong</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, nome_ong: e.target.value })} value={ong.nome_ong} disabled className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeOng" name="nomeOng"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input do numero de contato */}
                                            <div>
                                                <label className="" htmlFor="numeroContato">Número de contato</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, numero_contato: e.target.value })} value={ong.numero_contato} disabled name="telefone" className="bg-gray-200 h-8 rounded-md w-[180px] text-center" type="text" id="telefone"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input do CEP */}
                                            <div>
                                                <label className=" " htmlFor="cep">CEP</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, cep: e.target.value })} value={ong.cep} disabled type="text" name="cep" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" id="cep"></input>
                                            </div>
                                        </div>

                                        <div className="flex gap-6"> {/*Input da Cidade e uf */}
                                            <div className="flex flex-col gap-2">
                                                <label className="block" htmlFor="cidade">Cidade</label>
                                                <input onChange={(e) => setOng({ ...ong, cidade: e.target.value })} value={ong.cidade} disabled name="cidade" className="bg-gray-200 h-8 rounded-md w-[150px] text-center" type="text" id="cidade"></input>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="block" htmlFor="uf">UF</label>
                                                <input onChange={(e) => setOng({ ...ong, uf: e.target.value })} value={ong.uf} disabled name="uf" className="bg-gray-200 h-8 rounded-md w-[30px] text-center" type="text" id="uf"></input>
                                            </div>
                                        </div>

                                        <div className=" flex flex-col gap-2"> {/*Input do Endereço */}

                                            <div>
                                                <label className="block" htmlFor="endereço">Endereço</label>
                                            </div>
                                            <div className="">
                                                <input onChange={(e) => setOng({ ...ong, endereco: e.target.value })} value={ong.endereco} disabled name="endereco" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="endereco"></input>
                                            </div>
                                        </div>

                                    </div> {/*Final Coluna 1*/}

                                    
                                    <div className="h-auto w-[50%] justify-between flex-col flex-wrap space-y-10"> {/*Coluna 2*/}

                                        <div className="justify-self-end self-start place-self-start flex flex-col gap-2"> {/*Input do nome do responsavel */}
                                            <div className="">
                                                <label className="" htmlFor="nomeResponsavel">Nome do responsável</label>                                            
                                            </div>
                                            <div className=""> 
                                                <input onChange={(e) => setOng({ ...ong, nome_responsavel: e.target.value })} value={ong.nome_responsavel} disabled name="nomeResponsavel" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="nomeResponsavel"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">  {/*Input do CPF */}
                                            <div className="">
                                                <label className="" htmlFor="cpfResponsavel">CPF do responsável</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, cpf_responsavel: e.target.value })} value={ong.cpf_responsavel} disabled name="cpf" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="cpf"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input do nome do link do instagram*/}
                                            <div>
                                                <label className="" htmlFor="instagram">Instagram da Ong (Link)</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, instagram_link: e.target.value })} value={ong.instagram_link} disabled className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="instagram" name="instagram"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input do link do facebook*/}
                                            <div>
                                                <label className="" htmlFor="Facebook">Facebook da Ong (Link)</label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, facebook_link: e.target.value })} value={ong.facebook_link} disabled name="facebook" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" type="text" id="facebook"></input>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2"> {/*Input da chave pix ou meio de doacao */}
                                            <div>
                                                <label className=" " htmlFor="doacao">Link de doação (chavePix e afins..) </label>
                                            </div>
                                            <div>
                                                <input onChange={(e) => setOng({ ...ong, doacao_link: e.target.value })} value={ong.doacao_link} disabled type="text" name="doacao" className="bg-gray-200 h-8 rounded-md w-[250px] text-center" id="doacao"></input>
                                            </div>
                                        </div>

                                    </div> {/*Final Coluna 2*/}

                                </div>

                                <div className="text-sm font-bold flex justify-center mt-[4em]"> {/*Botões inferiores*/}
                                    <div className="h-auto w-[70%] flex justify-between text-center items-center"> 
                                        <button onClick={() => changeStep(1)} className="text-sm flex gap-1 hover:underline"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                        </svg>
                                        Voltar para redes
                                        </button>
                                        <button onClick={() => cadastrarOng()} className="bg-[#33b3a6] h-8 w-24 rounded-md text-white font-bold text-xs flex justify-center items-center">Finalizar</button>                                    
                                    </div>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </section>

            <style jsx>{`
                .checkbox_person_item {
                    width: 18px;
                    height: 18px;
                    background: none;
                    transition: .3s;
                    cursor: pointer;
                    border-radius: 4px;
                    border: 1px solid #a1a1a1;
                }

                .checkbox_row input:checked ~ .checkbox_person_item {
                    background: #42c9aa;
                    border: 1px solid #42c9aa;
                }

                .checkbox_row label {
                    transition: .3s;
                    cursor: pointer;
                }



            `}</style>

        </>
    )
}

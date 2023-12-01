"use client";

import React, { createContext, useContext, useState } from 'react';

export const CadastroContext = createContext(); //Exporta o contexto, envocando a função importada acima, com a exportação do nome do contexto
// Diz que é possível pegar esse contexto em algum lugar


export const CadastroContextProvider = ({children}) => {
//children serve para encapsular elementos e continuar imprimindo o conteudo deles dentro de um outro componente 

    //Declara o useState para cada valor de input
    const [nomeOng, setNome] = useState(''); //Nome de ong
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCPF] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [endereco, setEndereco] = useState('');

    const contextValue = { //Objeto que é passado dentro do context, armazena os valores dos inputs e os setters
        nomeOng,
        setNome,
        nomeResponsavel,
        setNomeResponsavel,
        telefone,
        setTelefone,
        cpf,
        setCPF,
        cep,
        setCep,
        cidade,
        setCidade,
        uf,
        setUf,
        endereco,
        setEndereco
      };



    return (
        // O componente que chamamos para encapsular os componentes
        // Passamos os valores que serão enviados dentro do "componente", podemos enviar os valores tanto de consumo(nome, telefone etc... ) ou os sets 
        // Isso porque o contexto pode não ser só de consumo, mas também de alteração do valor 
        <CadastroContext.Provider   value={contextValue}> {/*É necessário passar um objeto em value= */}
            {children}
        </CadastroContext.Provider>

    )

}



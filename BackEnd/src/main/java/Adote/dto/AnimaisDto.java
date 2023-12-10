package Adote.dto;

import Adote.entity.*;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AnimaisDto { //o que o usuario visualiza

    private Integer id; // long permite intervalo de valores e o ID é a chave primária
    private String nomeAnimal, foto;
    private TipoAnimal tipoAnimal;
    private Sexo sexo;
    private FaixaEtaria faixaEtaria;
    private Caracteristicas caracteristicas;
    private Porte porte;
    private String descricao;
    private Usuarios usuarios;

}

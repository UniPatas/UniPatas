package Adote.entity;

import Adote.dto.UsuariosDto;
import Adote.entity.*;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

import java.util.List;

@Entity
@NoArgsConstructor
public class Usuarios { // atributos e dependencia com o banco de dados
    @Id //mapea o banco
    @GeneratedValue(strategy = GenerationType.IDENTITY) // automatiza
    private Integer id; //identificação do usuário
    private String nome;


    @OneToMany(mappedBy = "usuarios") // parte de um de muitos p/ um
    List<Animais> AnimaisList; //array list do objeto tipo animal
    
    //construtor que converte dto para usuario
    public Usuarios(UsuariosDto usuarioDto ) {
        this.id = usuarioDto.getId();
        this.nome = usuarioDto.getNome();
    }

    // getters e setters
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
}

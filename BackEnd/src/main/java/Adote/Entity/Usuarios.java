package Adote.Entity;

import jakarta.persistence.*;

@Entity
public class Usuarios { // atributos e dependencia com o banco de dados

    @Id //mapea o banco
    @GeneratedValue(strategy = GenerationType.AUTO) // automatiza
    private Long id; //identificação do usuário
    private String nome;
    @ManyToOne // muitos-p/-um
    private Tipo tipo; // tipo de usuario


    // construtores
    public Usuarios(Long id) {
        this.id = id;
    }

    public Usuarios(String nome) {
        this.nome = nome;
    }

    public Usuarios(Tipo tipo) {
        this.tipo = tipo;
    }

    // getters e setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }
}

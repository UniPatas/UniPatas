package Adote.Entity;

import jakarta.persistence.Entity;

@Entity
public class TipoAnimal { // aqui se refere ao tipo de animal
    private Long id;
    private String nome;

    //construtores
    public TipoAnimal(Long id) {
        this.id = id;
    }

    public TipoAnimal(String nome) {
        this.nome = nome;
    }

    //getters e setters
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
}



package Adote.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ItemFav { // Esta tabela registra os tipos de itens que podem ser favoritados pelos usuários, como animais ou ONGs.
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;

    //construtores

    public ItemFav(Long id) {
        this.id = id;
    }

    public ItemFav(String nome) {
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

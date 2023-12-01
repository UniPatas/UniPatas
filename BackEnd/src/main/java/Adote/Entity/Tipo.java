package Adote.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tipo { // aqui se refere ao tipo de usuário
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // usada com id para indicar valor a chave primária que deve ser gerado automaticamente
    private Long id; // id de identificacao do usuario ou ong
    private String nome; // nome = Cão ou gato

    //construtores
    public Tipo(Long id) {
        this.id = id;
    }

    public Tipo(String nome) {
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

package Adote.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;

@Entity
public class Caracteristicas { // atributos e variaveis
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private long id;
   private String nome;

   // construtores
    public Caracteristicas(long id) {
        this.id = id;
    }

    public Caracteristicas(String nome) {
        this.nome = nome;
    }

    //getters e setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}

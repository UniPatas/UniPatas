package Adote.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Sexo {  // atributos e dependencia pro banco
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private boolean femea, macho;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isFemea() {
        return femea;
    }

    public void setFemea(boolean femea) {
        this.femea = femea;
    }

    public boolean isMacho() {
        return macho;
    }

    public void setMacho(boolean macho) {
        this.macho = macho;
    }
}

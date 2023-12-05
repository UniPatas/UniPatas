package Adote.entity;

import jakarta.persistence.Entity;

@Entity
public class TipoAnimal { // aqui se refere ao tipo de animal
    private Long id;
    private boolean canino, felino;

    //construtores
    public TipoAnimal(Long id, boolean canino, boolean felino) {
        this.setId(id);
        this.setCanino(canino);
        this.setFelino(felino);
    }

    //getters e setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isCanino() {
        return canino;
    }

    public void setCanino(boolean canino) {
        this.canino = canino;
    }

    public boolean isFelino() {
        return felino;
    }

    public void setFelino(boolean felino) {
        this.felino = felino;
    }
}





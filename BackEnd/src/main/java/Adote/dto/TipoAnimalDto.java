package Adote.dto;

import  Adote.entity.*;
import Adote.entity.TipoAnimal;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class TipoAnimalDto {


    private Integer id;
    private boolean canino, felino;

    public TipoAnimalDto( TipoAnimal tipoAnimal) {
        this.id = tipoAnimal.getId();
        this.canino = tipoAnimal.isCanino();
        this.felino = tipoAnimal.isFelino();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

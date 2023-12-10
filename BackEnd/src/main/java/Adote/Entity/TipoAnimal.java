package Adote.entity;

import Adote.dto.TipoAnimalDto;
import jakarta.persistence.*;

import java.util.List;


@Entity
public class TipoAnimal { // aqui se refere ao tipo de animal
    @OneToMany (mappedBy = "tipoAnimal") // parte de um de muitos p/ um

    private List <Animais> AnimaisList; //array list do objeto tipo animal

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean canino, felino;

    //construtores
    public TipoAnimal( TipoAnimalDto tipoAnimal) {
        this.id = tipoAnimal.getId();
        this.canino = tipoAnimal.isCanino();
        this.felino = tipoAnimal.isFelino();
    }
    //getters e setters
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





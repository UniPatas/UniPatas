package Adote.entity;

import Adote.dto.SexoDto;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Sexo {  // atributos e dependencia pro banco
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean femea;
    private boolean macho;


    @OneToMany(mappedBy = "sexo") // parte de um de muitos p/ um
     List<Animais> AnimaisList ; //array list do objeto tipo animal

    //construtor que converte dto para sexo
    public Sexo(SexoDto sexoDto ) {
        this.id = sexoDto.getId();
        this.femea = sexoDto.isFemea();
        this.macho = sexoDto.isMacho();
    }

    //getters e setters
    public Integer getId() {
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

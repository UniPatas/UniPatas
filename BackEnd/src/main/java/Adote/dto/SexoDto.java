package Adote.dto;

import  Adote.entity.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class SexoDto {
    private int id;
    private boolean femea ;
    private boolean macho ;

    //construtor que converte dto para sexo
    public SexoDto(Sexo sexo ) {
        this.id = sexo.getId();
        this.femea = sexo.isFemea();
        this.macho = sexo.isMacho();
    }

    //getters e setters
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

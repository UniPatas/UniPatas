package Adote.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CaracteristicasDto {

    private Integer id;
    private boolean agitado, calmo, amoroso, brincalhao;

    public CaracteristicasDto(Integer id, boolean agitado, boolean calmo, boolean amoroso, boolean brincalhao) {
        this.id =  getId();
        this.agitado = agitado;
        this.calmo = calmo;
        this.amoroso = amoroso;
        this.brincalhao = brincalhao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isAgitado() {
        return agitado;
    }

    public void setAgitado(boolean agitado) {
        this.agitado = agitado;
    }

    public boolean isCalmo() {
        return calmo;
    }

    public void setCalmo(boolean calmo) {
        this.calmo = calmo;
    }

    public boolean isAmoroso() {
        return amoroso;
    }

    public void setAmoroso(boolean amoroso) {
        this.amoroso = amoroso;
    }

    public boolean isBrincalhao() {
        return brincalhao;
    }

    public void setBrincalhao(boolean brincalhao) {
        this.brincalhao = brincalhao;
    }
}

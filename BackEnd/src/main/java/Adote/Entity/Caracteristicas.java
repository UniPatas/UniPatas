package Adote.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;

@Entity
public class Caracteristicas { // atributos e variaveis
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private boolean agitado, calmo, amoroso, brincalhao;

    // construtores
    public Caracteristicas(long id, boolean agitado, boolean calmo, boolean amoroso, boolean brincalhao) {
        this.id = id;
        this.agitado = agitado;
        this.calmo = calmo;
        this.amoroso = amoroso;
        this.brincalhao = brincalhao;
    }

    //getters e setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

package Adote.entity;


import Adote.dto.CaracteristicasDto;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Caracteristicas { // atributos e variaveis
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean agitado, calmo, amoroso, brincalhao;

    @OneToMany(mappedBy = "caracteristicas") // parte de um de muitos p/ um
    List<Animais> AnimaisList; //array list do objeto tipo animal

    //construtor que converte dto para sexo
    public Caracteristicas(CaracteristicasDto caracteristicasDto) {
        this.id = caracteristicasDto.getId();
        this.agitado = caracteristicasDto.isAgitado();
        this.amoroso = caracteristicasDto.isAmoroso();
        this.calmo = caracteristicasDto.isCalmo();
        this.brincalhao = caracteristicasDto.isBrincalhao();
    }

    //getters e setters
    public long getId() {
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

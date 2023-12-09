package Adote.entity;


import Adote.dto.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.criteria.CriteriaBuilder;

import org.springframework.data.annotation.Id;

@Entity
public class Caracteristicas { // atributos e variaveis
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean agitado, calmo, amoroso, brincalhao;

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

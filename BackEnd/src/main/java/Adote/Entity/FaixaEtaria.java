package Adote.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FaixaEtaria {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private boolean filhote, adulto, idoso;

    //construtor
    public FaixaEtaria(Long id, boolean filhote, boolean adulto, boolean idoso) {
        this.id = id;
        this.filhote = filhote;
        this.adulto = adulto;
        this.idoso = idoso;
    }

    //getters e setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isFilhote() {
        return filhote;
    }

    public void setFilhote(boolean filhote) {
        this.filhote = filhote;
    }

    public boolean isAdulto() {
        return adulto;
    }

    public void setAdulto(boolean adulto) {
        this.adulto = adulto;
    }

    public boolean isIdoso() {
        return idoso;
    }

    public void setIdoso(boolean idoso) {
        this.idoso = idoso;
    }
}


package Adote.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Porte {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private boolean peque, medio, grande;

    //construtor
    public Porte(Long id, boolean peq, boolean med, boolean grande) {
        this.id = id;
        this.peque = peque;
        this.medio = medio;
        this.grande = grande;
    }

    //getters e setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isPeque() {
        return peque;
    }

    public void setPeque(boolean peque) {
        this.peque = peque;
    }

    public boolean isMedio() {
        return medio;
    }

    public void setMedio(boolean medio) {
        this.medio = medio;
    }

    public boolean isGrande() {
        return grande;
    }

    public void setGrande(boolean grande) {
        this.grande = grande;
    }
}
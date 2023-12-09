package Adote.entity;

import Adote.dto.PorteDto;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Porte {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private boolean peque, medio, grande;

    @OneToMany(mappedBy = "porte_ID") // parte de um de muitos p/ um

    private List<Animais> PorteList; //array list do objeto tipo animal

    //construtor
    public Porte(PorteDto porteDto) {
        this.id = porteDto.getId();
        this.peque = porteDto.isPeque();
        this.medio = porteDto.isMedio();
        this.grande = porteDto.isGrande();
    }

    //getters e setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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
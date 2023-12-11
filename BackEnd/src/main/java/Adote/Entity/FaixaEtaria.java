package Adote.entity;

import Adote.dto.FaixaEtariaDto;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class FaixaEtaria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean filhote, adulto, idoso;

    @OneToMany(mappedBy = "faixaEtaria") // parte de um de muitos p/ um
    private List<Animais> AnimaisList; //array list do objeto tipo animal

    //construtor
    public FaixaEtaria(FaixaEtariaDto faixaEtariaDto) {
        this.id = faixaEtariaDto.getId();
        this.filhote = faixaEtariaDto.isFilhote();
        this.adulto = faixaEtariaDto.isAdulto();
        this.idoso = faixaEtariaDto.isIdoso();
    }

    //getters e setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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


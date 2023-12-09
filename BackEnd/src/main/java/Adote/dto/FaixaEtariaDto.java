package Adote.dto;
import Adote.entity.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FaixaEtariaDto {
    private Integer id;
    private boolean filhote, adulto, idoso;

    //construtor
    public FaixaEtariaDto(FaixaEtariaDto faixaEtariaDto) {
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

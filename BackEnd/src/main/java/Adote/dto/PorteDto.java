package Adote.dto;
import  Adote.entity.*;

public class PorteDto {

    private Integer id;
    private boolean peque, medio, grande;

    public PorteDto(Porte porte) {
        this.id = porte.getId();
        this.peque = porte.isPeque();
        this.medio = porte.isMedio();
        this.grande = porte.isGrande();
    }

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

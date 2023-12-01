package Adote.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity // a classe que será mapeada no banco de dados
public class Animais  {
   private long id; // long permite intervalo de valores e o ID é chave primária
   private String nomeAnimal, foto;
   @ManyToOne // relação de muitos-p/-um em animais e TipoAnimal
    private TipoAnimal tipoAnimal;
   @ManyToOne
    private Sexo sexo;
   @ManyToOne
    private FaixaEtaria faixaEtaria;
   @ManyToOne
    private Usuarios usuarios;
   @ManyToOne
    private Caracteristicas caracteristicas;
   @ManyToOne
    private Favoritos favoritos;

   //construtores
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    //getters e setters
    public String getNomeAnimal() {
        return nomeAnimal;
    }
    public void setNomeAnimal(String nomeAnimal) {
        this.nomeAnimal = nomeAnimal;
    }
    public String getFoto() {
        return foto;
    }
    public void setFoto(String foto) {
        this.foto = foto;
    }
    public TipoAnimal getTipoAnimal() {
        return tipoAnimal;
    }
    public void setTipoAnimal(TipoAnimal tipoAnimal) {
        this.tipoAnimal = tipoAnimal;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }

    public FaixaEtaria getFaixaEtaria() {
        return faixaEtaria;
    }

    public void setFaixaEtaria(FaixaEtaria faixaEtaria) {
        this.faixaEtaria = faixaEtaria;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }

    public Caracteristicas getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Caracteristicas caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Favoritos getFavoritos() {
        return favoritos;
    }

    public void setFavoritos(Favoritos favoritos) {
        this.favoritos = favoritos;
    }
}

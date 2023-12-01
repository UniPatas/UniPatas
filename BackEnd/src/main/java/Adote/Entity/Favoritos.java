package Adote.Entity;

import jakarta.persistence.*;

import java.util.Date;


@Entity
public class Favoritos {//atributos
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    private Usuarios usuarios; // chave estrangeria, ou seja, a entendidade qual ele esta relacionado
    @ManyToOne
    private ItemFav itemFav;
    private Date dataFavoricao;

    //construtores

    public Favoritos(Long id) {
        this.id = id;
    }

    public Favoritos(Usuarios usuarios) {
        this.usuarios = usuarios;
    }

    public Favoritos(ItemFav itemFav) {
        this.itemFav = itemFav;
    }

    public Favoritos(Date dataFavoricao) {
        this.dataFavoricao = dataFavoricao;
    }

    //getters e setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ItemFav getItemFav() {
        return itemFav;
    }

    public void setItemFav(ItemFav itemFav) {
        this.itemFav = itemFav;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }

    public Date getDataFavoricao() {
        return dataFavoricao;
    }

    public void setDataFavoricao(Date dataFavoricao) {
        this.dataFavoricao = dataFavoricao;
    }
}

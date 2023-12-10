package Adote.entity;
import lombok.*;
import org.springframework.beans.BeanUtils;


import jakarta.persistence.*;

@NoArgsConstructor
@Entity // a classe que será mapeada no banco de dados
public class Animais{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // estrategia de identificação única
   private Integer id; // long permite intervalo de valores e o ID é a chave primária
   private String nomeAnimal, foto;

   @ManyToOne (fetch = FetchType.EAGER) // organiza a ordem de execução dos arquivos para não sobrecarregar
   @JoinColumn (name = "tipo_AnimalID") // refere-se a chave estrangeira para verificação da coluna pelo JPA
    private TipoAnimal tipoAnimal;

   @ManyToOne //relação de muitos p/um em animais e TipoAnimal
   @JoinColumn (name = "sexo_ID")
    private Sexo sexo;

   @ManyToOne
   @JoinColumn (name = "faixaEtaria_ID")
    private FaixaEtaria faixaEtaria;

   @ManyToOne
   @JoinColumn (name = "caracteristicas_ID")
    private Caracteristicas caracteristicas;

    @ManyToOne
    @JoinColumn (name = "porte_ID")
    private Porte porte;
    private String descricao;

    @ManyToOne
    @JoinColumn (name = "perfil_ID")
    private Usuarios usuarios;


   //construtores
    public Animais(Integer id, String nomeAnimal, String foto, TipoAnimal tipoAnimal, Sexo sexo, FaixaEtaria faixaEtaria, Usuarios usuarios, Caracteristicas caracteristicas) {
        this.id = id;
        this.nomeAnimal = nomeAnimal;
        this.foto = foto;
        this.tipoAnimal = tipoAnimal;
        this.sexo = sexo;
        this.faixaEtaria = faixaEtaria;
        this.usuarios = usuarios;
        this.caracteristicas = caracteristicas;
    }

    public Animais (Animais animais){
        BeanUtils.copyProperties(animais, this);
    }


    //getters e setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public Caracteristicas getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Caracteristicas caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Porte getPorte() {
        return porte;
    }

    public void setPorte(Porte porte) {
        this.porte = porte;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }
}

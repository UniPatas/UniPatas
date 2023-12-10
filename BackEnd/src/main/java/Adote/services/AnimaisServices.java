package Adote.services;

import Adote.dto.CaracteristicasDto;
import Adote.entity.Animais;
import Adote.entity.*;
import Adote.repository.AnimaisRepository;
import Adote.dto.AnimaisDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service //diz ao spring que é um servico e permite a injecao de autowired
public class AnimaisServices {

    @Autowired
    AnimaisRepository repository;

    // as caracteristicas do animais são:  agitado, calmo, amoroso, brincalhao;
    public Animais adotarAnimais(Animais objDTO) {
        objDTO.setId(0);
        Animais novoAnimais = new Animais(objDTO);
        novoAnimais.setId(0); //cria um novo animal a partir do objeto animais

        repository.save(novoAnimais);
        return novoAnimais;
    }


}
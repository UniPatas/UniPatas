package Adote.services;

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


    public Animais adotarAnimais(Animais objDTO) {
            Animais novoAnimais = new Animais(objDTO);
        novoAnimais.setId(0);
        

            return newObj;
    }

    //getters e setters
    public AnimaisRepository getRepository() {
        return repository;
    }

    public void setRepository(AnimaisRepository repository) {
        this.repository = repository;
    }
}
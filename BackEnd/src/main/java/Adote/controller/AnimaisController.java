package Adote.controller;

import Adote.entity.Animais;
import Adote.services.AnimaisServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RequestMapping(value = "/animais") //recebe o valor para acesso de servicos animaisController
@RestController
public class AnimaisController {

    @Autowired
    AnimaisServices service;

    @PostMapping("/User/Animais") // rota do adote
    Animais publicacaoAdote(@RequestBody Animais publi) { // retorna requisição do publi
        System.out.println("Publicação do adote" + publi);
                return publi;
    }

    @PostMapping(value = "/create") //cria novo objeto, pega a ação
    public ResponseEntity<Animais> create(@RequestBody Animais objDTO) {
        Animais newObj = service.adotarAnimais(objDTO);
        return ResponseEntity.ok(new Animais(newObj));
    }
}
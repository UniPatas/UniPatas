package Adote.controller;

import Adote.entity.Animais;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnimaisController {

    @PostMapping("/User/Animais") // rota do adote
    Animais publicacaoAdote(@RequestBody Animais publi) { // retorna requisição do publi
        System.out.println("Publicação do adote" + publi);
                return publi;
    }
}
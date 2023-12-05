package Adote.controller;
// importar

import Adote.Model.Adote;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnimaisController {

    @PostMapping("/User/Adote") // rota do adote
     Adote publicacaoAdote(@RequestBody Adote publi) { // retorna requisição do publi
        System.out.println("Publicação do adote" + publi);
                return publi;
    }
}
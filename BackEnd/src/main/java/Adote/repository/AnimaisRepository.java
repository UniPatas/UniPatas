package Adote.repository;  //responsavel por fazer alterações

import Adote.entity.Animais;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface AnimaisRepository extends JpaRepository<Animais, Integer> {

   // Optional<Animais> findByNomeAnimal(String proa);
}

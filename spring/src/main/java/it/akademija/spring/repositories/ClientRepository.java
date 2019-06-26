package it.akademija.spring.repositories;

import it.akademija.spring.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository <Client, Long> {
    Client findClientByName(String name);

    void deleteClientByName(String name);
}

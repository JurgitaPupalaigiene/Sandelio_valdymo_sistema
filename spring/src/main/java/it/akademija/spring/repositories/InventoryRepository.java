package it.akademija.spring.repositories;

import it.akademija.spring.entities.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface InventoryRepository extends JpaRepository<Inventory, String> {
        Inventory findInventoryByTitle(String title);

        void deleteInventoryByTitle(String title);
}

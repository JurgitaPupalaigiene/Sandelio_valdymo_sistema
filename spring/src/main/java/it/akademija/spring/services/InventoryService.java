package it.akademija.spring.services;

import it.akademija.spring.dto.InventoryDTO;
import it.akademija.spring.entities.Inventory;
import it.akademija.spring.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventoryService {
    @Autowired
        private InventoryRepository inventoryRepository;

        public InventoryService() {
        }

        public InventoryService(InventoryRepository inventoryRepository) {
            this.inventoryRepository = inventoryRepository;
        }

        @Transactional(readOnly = true)
        public List<InventoryDTO> getAllInventory() {
            return inventoryRepository.findAll().stream().map(inventory ->
                    new InventoryDTO(
                            inventory.getTitle(),
                            inventory.getWeight(),
                            inventory.getSector(),
                            inventory.getDateOfArrival())).collect(Collectors.toList());
        }
        @Transactional(readOnly = true)
        public InventoryDTO findInventoryByTitle(String title) {

            Inventory currentInventory = inventoryRepository.findInventoryByTitle(title);
            InventoryDTO inventoryToController = new InventoryDTO(
                    currentInventory.getTitle(),
                    currentInventory.getWeight(),
                    currentInventory.getSector(),
                    currentInventory.getDateOfArrival());
            return inventoryToController;
        }

        @Transactional
        public void createInventory(Long id, String title, String weight, String sector,
                                 String dateOfArrival) {
            Inventory newInventory = new Inventory(id, title, weight, sector, dateOfArrival);
            inventoryRepository.save(newInventory);

        }

        @Transactional
        public void updateInventory(String currentTitle, String title,
                                 String weight, String sector, String dateOfArrival) {
            Inventory inventoryToUpdate =
                    inventoryRepository.findInventoryByTitle(currentTitle);
            inventoryToUpdate.setTitle(title);
            inventoryToUpdate.setWeight(weight);
            inventoryToUpdate.setSector(sector);
            inventoryToUpdate.setDateOfArrive(dateOfArrival);
        }

        @Transactional
        public void deleteInventory(String title) {

            inventoryRepository.deleteInventoryByTitle(title);
        }

}

package it.akademija.spring.services;

import it.akademija.spring.dto.ClientDTO;
import it.akademija.spring.entities.Client;
import it.akademija.spring.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public ClientService() {
    }

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Transactional(readOnly = true)
    public List<ClientDTO> getAllClients() {
        return clientRepository.findAll().stream().map(client ->
                new ClientDTO(
                        client.getName(),
                        client.getSurname(),
                        client.getPhoneNumber(),
                        client.getType())).collect(Collectors.toList());
    }
//Viena svente
    @Transactional(readOnly = true)
    public ClientDTO findClientByName(String name) {

        Client currentClient = clientRepository.findClientByName(name);
        ClientDTO clientToController = new ClientDTO(
                currentClient.getName(),
                currentClient.getSurname(),
                currentClient.getPhoneNumber(),
                currentClient.getType());
        return clientToController;
    }

    @Transactional
    public void createClient(Long id, String name, String surname, String dateOfBirth,
                             String phoneNumber, String type) {
        Client newClient = new Client(id, name, surname, dateOfBirth, phoneNumber, type);
        clientRepository.save(newClient);

    }

    @Transactional
    public void updateClient(String currentName, String name,
                               String surname, String dateOfBirth,
                               String phoneNumber, String type) {
        Client clientToUpdate =
                clientRepository.findClientByName(currentName);
        clientToUpdate.setName(name);
        clientToUpdate.setSurname(surname);
        clientToUpdate.setDateOfBirth(dateOfBirth);
        clientToUpdate.setPhoneNumber(phoneNumber);
        clientToUpdate.setType(type);
        clientRepository.save(clientToUpdate);
    }

    @Transactional
    public void deleteClient(String name) {

        clientRepository.deleteClientByName(name);
    }

}


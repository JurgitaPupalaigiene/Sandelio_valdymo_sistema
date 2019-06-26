package it.akademija.spring.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import it.akademija.spring.dto.ClientDTO;
import it.akademija.spring.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Api(value = "Clients controller")
@RequestMapping(value = "/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    public ClientController() {
    }

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    @ApiOperation(value = "Get all clients", notes = "Returns list of clients")
        public List<ClientDTO> getAllClients(){

        return clientService.getAllClients();
    }

    @GetMapping(path = "/{client}")
    @ApiOperation(value = "Gets client", notes="Returns desired client")
        public ClientDTO getClientByName(
                @ApiParam(value = "Clients name", required = true)
                @Valid
                @PathVariable final String name){
        return clientService.findClientByName(name);
    }


    @PostMapping
    @ApiOperation(value = "Create and add new client",
                  notes = "Creates new client")
        public void createClient(
                @ApiParam(value = "Clients data", required = true)
                @RequestBody final CreatingClient creatingClient) {
        clientService.createClient(
                creatingClient.getId(),
                creatingClient.getName(),
                creatingClient.getSurname(),
                creatingClient.getDateOfBirth(),
                creatingClient.getPhoneNumber(),
                creatingClient.getType());
    }

     @PutMapping(path = "/{oldTitle}")
     @ResponseStatus(HttpStatus.OK)
     @ApiOperation(value = "Update client", notes = "Edit selected client")
        public void updateClient(
                @ApiParam(value = "Client's id",required = true)
                //@Valid
                @PathVariable final String oldTitle,
                @RequestBody final CreatingClient creatingClient){
        clientService.updateClient(
                creatingClient.getName(),
                creatingClient.getName(),
                creatingClient.getSurname(),
                creatingClient.getDateOfBirth(),
                creatingClient.getPhoneNumber(),
                creatingClient.getType());
        }

     @DeleteMapping(path = "/{name}")
     //@ResponseStatus(HttpStatus.NO_CONTENT)
     @ApiOperation(value = "Delete client", notes = "Deletes selected client")
        public void deleteClient(@PathVariable final String name){

        clientService.deleteClient(name);
     }

}

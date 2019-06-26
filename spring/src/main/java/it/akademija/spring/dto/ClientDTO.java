package it.akademija.spring.dto;

public class ClientDTO {
    private String name;
    private String surname;
    private String phoneNumber;
    private String type;


    public ClientDTO() {
    }

    public ClientDTO(String name, String surname, String phoneNumber, String type) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

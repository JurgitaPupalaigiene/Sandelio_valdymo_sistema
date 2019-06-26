package it.akademija.spring.controller;

import org.hibernate.validator.constraints.Length;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;

public class CreatingClient {

    @Id
    private Long id;
    @NotNull
    @Length(min=1, max=30)
    private String name;
    @NotNull
    @Length(min=1, max=30)
    private String surname;
    @NotNull
    @Length(min=10, max=30)
    private String dateOfBirth;
    @NotNull
    @Length(min=8, max=30)
    private String phoneNumber;
    @NotNull
    @Length(min=1, max=30)
    private String type;

    public CreatingClient() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
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

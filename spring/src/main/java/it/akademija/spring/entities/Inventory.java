package it.akademija.spring.entities;

import javax.persistence.*;

@Entity
public class Inventory {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private Long id;

        @Column(name = "title")
        private String title;

        @Column
        private String weight;

        @Column
        private String sector;

        @Column
        private String dateOfArrival;


    public Inventory() {
    }

    public Inventory(Long id, String title, String weight, String sector, String dateOfArrival) {
        this.id = id;
        this.title = title;
        this.weight = weight;
        this.sector = sector;
        this.dateOfArrival = dateOfArrival;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getDateOfArrival() {
        return dateOfArrival;
    }

    public void setDateOfArrive(String dateOfArrival) {
        this.dateOfArrival = dateOfArrival;
    }
}

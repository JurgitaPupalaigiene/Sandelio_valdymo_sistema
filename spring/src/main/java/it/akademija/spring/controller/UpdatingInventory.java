package it.akademija.spring.controller;

public class UpdatingInventory {
    private String oldTitle;
    private String title;
    private String weight;
    private String dateOfArrival;
    private String sector;


    public UpdatingInventory() {
    }

    public UpdatingInventory(String oldTitle, String title, String weight, String dateOfArrival, String sector) {
        this.oldTitle = oldTitle;
        this.title = title;
        this.weight = weight;
        this.dateOfArrival = dateOfArrival;
        this.sector = sector;
    }


    public String getOldTitle() {
        return oldTitle;
    }

    public void setOldTitle(String oldTitle) {
        this.oldTitle = oldTitle;
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

    public String getDateOfArrival() {
        return dateOfArrival;
    }

    public void setDateOfArrival(String dateOfArrival) {
        this.dateOfArrival = dateOfArrival;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }
}
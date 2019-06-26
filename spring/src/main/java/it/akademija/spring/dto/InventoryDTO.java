package it.akademija.spring.dto;

public class InventoryDTO {
    private String title;
    private String weight;
    private String sector;
    private String dateOfArrival;



    public InventoryDTO() {
    }

    public InventoryDTO(String title, String weight, String sector, String dateOfArrival) {
        this.title = title;
        this.weight = weight;
        this.sector = sector;
        this.dateOfArrival = dateOfArrival;
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

    public void setDateOfArrival(String dateOfArrival) {
        this.dateOfArrival = dateOfArrival;
    }
}

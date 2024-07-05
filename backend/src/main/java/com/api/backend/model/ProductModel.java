package com.api.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "product")
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String unit;
    private String description;

    @ManyToOne
    private ProviderModel supplier;

    // Constructors, getters, and setters
    public ProductModel() {
    }

    public ProductModel(String name, String unit, String description, ProviderModel supplier) {
        this.name = name;
        this.unit = unit;
        this.description = description;
        this.supplier = supplier;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ProviderModel getSupplier() {
        return supplier;
    }

    public void setSupplier(ProviderModel supplier) {
        this.supplier = supplier;
    }
}

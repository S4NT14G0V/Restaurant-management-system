package com.api.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "invoice")
public class InvoiceModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private TableModel mesa;

    @ManyToOne
    private ClientModel client;

    private String fechaExpedicion;

    // Constructors, getters, and setters
    public InvoiceModel() {
    }

    public InvoiceModel(TableModel mesa, ClientModel client, String fechaExpedicion) {
        this.mesa = mesa;
        this.client = client;
        this.fechaExpedicion = fechaExpedicion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public TableModel getMesa() {
        return mesa;
    }

    public void setMesa(TableModel mesa) {
        this.mesa = mesa;
    }

    public ClientModel getClient() {
        return client;
    }

    public void setClient(ClientModel client) {
        this.client = client;
    }

    public String getFechaExpedicion() {
        return fechaExpedicion;
    }

    public void setFechaExpedicion(String fechaExpedicion) {
        this.fechaExpedicion = fechaExpedicion;
    }
}
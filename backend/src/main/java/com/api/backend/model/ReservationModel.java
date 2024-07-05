package com.api.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name= "reservation")
public class ReservationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private ClientModel client;

    @ManyToOne
    @JoinColumn(name = "table_id")
    private TableModel mesa;

    private LocalDateTime reservedDate;

    // Constructors, getters, and setters
    public ReservationModel() {
    }

    public ReservationModel(ClientModel client, TableModel mesa, LocalDateTime reservedDate) {
        this.client = client;
        this.mesa = mesa;
        this.reservedDate = reservedDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ClientModel getClient() {
        return client;
    }

    public void setClient(ClientModel client) {
        this.client = client;
    }

    public TableModel getMesa() {
        return mesa;
    }

    public void setMesa(TableModel mesa) {
        this.mesa = mesa;
    }

    public LocalDateTime getReservedDate() {
        return reservedDate;
    }

    public void setReservedDate(LocalDateTime reservedDate) {
        this.reservedDate = reservedDate;
    }
}

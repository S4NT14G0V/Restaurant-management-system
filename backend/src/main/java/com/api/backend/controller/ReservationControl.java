package com.api.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.backend.model.ReservationModel;
import com.api.backend.services.ReservationService;

@RestController
@RequestMapping("/reservation")
public class ReservationControl {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/getAll")
    public List<ReservationModel> obtainReservationList() {
        return reservationService.obtainReservationList();
    }

    @PostMapping("/create")
    public ReservationModel createReservation(@RequestBody ReservationModel reservation) {
        return reservationService.createReservation(reservation);
    }

    @PutMapping("/edit/{id}")
    public ReservationModel updateReservation(@PathVariable int id, @RequestBody ReservationModel reservation) {
        reservation.setId(id);
        return reservationService.updateReservation(reservation);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteReservation(@PathVariable int id) {
        reservationService.deleteReservation(id);
    }
}

package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.ReservationModel;
import com.api.backend.repository.ReservationRepo;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepo reservationRepo;

    public List<ReservationModel> obtainReservationList() {
        return reservationRepo.findAll();
    }

    public ReservationModel createReservation(ReservationModel reservation) {
        return reservationRepo.save(reservation);
    }

    public ReservationModel updateReservation(ReservationModel reservation) {
        return reservationRepo.save(reservation);
    }

    public void deleteReservation(int id) {
        reservationRepo.deleteById(id);
    }
}


package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.model.ReservationModel;

@Repository
public interface ReservationRepo extends JpaRepository<ReservationModel, Integer> {
}

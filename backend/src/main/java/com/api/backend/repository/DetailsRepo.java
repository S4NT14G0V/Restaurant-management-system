package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.model.DetailsModel;

@Repository
public interface DetailsRepo extends JpaRepository<DetailsModel, Integer> {
}

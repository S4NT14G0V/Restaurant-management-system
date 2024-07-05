package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.model.InventoryModel;

@Repository
public interface InventoryRepo extends JpaRepository<InventoryModel, Integer> {
}


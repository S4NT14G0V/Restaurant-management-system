package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.model.ProviderModel;

@Repository
public interface ProviderRepo extends JpaRepository<ProviderModel, Integer> {
}

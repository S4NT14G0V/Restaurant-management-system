package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.model.InvoiceModel;

@Repository
public interface InvoiceRepo extends JpaRepository<InvoiceModel, Integer> {
}

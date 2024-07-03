package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.model.TableModel;

@Repository
public interface TableRepo extends JpaRepository<TableModel, Integer>{
    
}


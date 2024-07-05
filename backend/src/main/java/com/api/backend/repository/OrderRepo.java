package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.model.OrderModel;

@Repository
public interface OrderRepo extends JpaRepository<OrderModel, Integer> {
}

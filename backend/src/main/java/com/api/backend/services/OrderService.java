package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.OrderModel;
import com.api.backend.repository.OrderRepo;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;

    public List<OrderModel> obtainOrderList() {
        return orderRepo.findAll();
    }

    public OrderModel createOrder(OrderModel order) {
        return orderRepo.save(order);
    }

    public OrderModel updateOrder(OrderModel order) {
        return orderRepo.save(order);
    }

    public void deleteOrder(int id) {
        orderRepo.deleteById(id);
    }
}


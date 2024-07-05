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

import com.api.backend.model.OrderModel;
import com.api.backend.services.OrderService;

@RestController
@RequestMapping("/order")
public class OrderControl {

    @Autowired
    private OrderService orderService;

    @GetMapping("/getAll")
    public List<OrderModel> obtainOrderList() {
        return orderService.obtainOrderList();
    }

    @PostMapping("/create")
    public OrderModel createOrder(@RequestBody OrderModel order) {
        return orderService.createOrder(order);
    }

    @PutMapping("/edit/{id}")
    public OrderModel updateOrder(@PathVariable int id, @RequestBody OrderModel order) {
        order.setId(id);
        return orderService.updateOrder(order);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteOrder(@PathVariable int id) {
        orderService.deleteOrder(id);
    }
}

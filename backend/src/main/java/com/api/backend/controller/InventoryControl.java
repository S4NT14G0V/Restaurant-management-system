package com.api.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.api.backend.model.InventoryModel;
import com.api.backend.services.InventoryService;

@RestController
@RequestMapping("/inventory")
public class InventoryControl{

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/getAll")
    public List<InventoryModel> obtainInventoryList() {
        return inventoryService.obtainInventoryList();
    }

    @PostMapping("/create")
    public InventoryModel createInventory(@RequestBody InventoryModel inventory) {
        return inventoryService.createInventory(inventory);
    }

    @PutMapping("/edit/{id}")
    public InventoryModel updateInventory(@PathVariable int id, @RequestBody InventoryModel inventory) {
        inventory.setId(id);
        return inventoryService.updateInventory(inventory);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteInventory(@PathVariable int id) {
        inventoryService.deleteInventory(id);
    }
}


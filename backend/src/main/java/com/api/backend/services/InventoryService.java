package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.InventoryModel;
import com.api.backend.repository.InventoryRepo;

@Service
public class InventoryService {

    @Autowired
    private InventoryRepo inventoryRepo;

    public List<InventoryModel> obtainInventoryList() {
        return inventoryRepo.findAll();
    }

    public InventoryModel createInventory(InventoryModel inventory) {
        return inventoryRepo.save(inventory);
    }

    public InventoryModel updateInventory(InventoryModel inventory) {
        return inventoryRepo.save(inventory);
    }

    public void deleteInventory(int id) {
        inventoryRepo.deleteById(id);
    }
}

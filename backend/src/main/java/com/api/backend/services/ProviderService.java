package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.ProviderModel;
import com.api.backend.repository.ProviderRepo;

@Service
public class ProviderService {

    @Autowired
    private ProviderRepo providerRepo;

    public List<ProviderModel> obtainProviderList() {
        return (List<ProviderModel>) providerRepo.findAll();
    }

    public ProviderModel createProvider(ProviderModel supplier) {
        return providerRepo.save(supplier);
    }

    public ProviderModel updateProvider(ProviderModel supplier) {
        return providerRepo.save(supplier);
    }

    public void deleteProvider(int id) {
        providerRepo.deleteById(id);
    }
}


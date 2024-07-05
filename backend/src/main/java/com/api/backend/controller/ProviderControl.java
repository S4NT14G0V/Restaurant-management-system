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

import com.api.backend.model.ProviderModel;
import com.api.backend.services.ProviderService;

@RestController
@RequestMapping("/provider")
public class ProviderControl {

    @Autowired
    private ProviderService providerService;

    @GetMapping("/getAll")
    public List<ProviderModel> obtainProviderList() {
        return providerService.obtainProviderList();
    }

    @PostMapping("/create")
    public ProviderModel createprovider(@RequestBody ProviderModel provider) {
        return providerService.createProvider(provider);
    }

    @PutMapping("/edit/{id}")
    public ProviderModel updateProvider(@PathVariable int id, @RequestBody ProviderModel provider) {
        provider.setId(id);
        return providerService.updateProvider(provider);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProvider(@PathVariable int id) {
        providerService.deleteProvider(id);
    }
}

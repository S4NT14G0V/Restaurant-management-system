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

import com.api.backend.model.DetailsModel;
import com.api.backend.services.DetailsService;

@RestController
@RequestMapping("/details")
public class DetailsControl {

    @Autowired
    private DetailsService detailsService;

    @GetMapping("/getAll")
    public List<DetailsModel> obtainDetailsList() {
        return detailsService.obtainDetailsList();
    }

    @PostMapping("/create")
    public DetailsModel createDetails(@RequestBody DetailsModel details) {
        return detailsService.createDetails(details);
    }

    @PutMapping("/edit/{id}")
    public DetailsModel updateDetails(@PathVariable int id, @RequestBody DetailsModel details) {
        details.setId(id);
        return detailsService.updateDetails(details);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDetails(@PathVariable int id) {
        detailsService.deleteDetails(id);
    }
}

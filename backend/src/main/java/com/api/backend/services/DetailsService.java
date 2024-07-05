package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.DetailsModel;
import com.api.backend.repository.DetailsRepo;

@Service
public class DetailsService {

    @Autowired
    private DetailsRepo detailsRepo;

    public List<DetailsModel> obtainDetailsList() {
        return (List<DetailsModel>) detailsRepo.findAll();
    }

    public DetailsModel createDetails(DetailsModel details) {
        return detailsRepo.save(details);
    }

    public DetailsModel updateDetails(DetailsModel details) {
        return detailsRepo.save(details);
    }

    public void deleteDetails(int id) {
        detailsRepo.deleteById(id);
    }
}

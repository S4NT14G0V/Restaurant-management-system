package com.api.backend.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.TableModel;
import com.api.backend.repository.TableRepo;

@Service
public class TableService {

    @Autowired
    TableRepo tableRepo;

    public List<TableModel> ObtainTableList(){
        return (List<TableModel>) tableRepo.findAll();
    }

    public TableModel CreateTable(TableModel table){
        return tableRepo.save(table);
    }
}

package com.api.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.backend.model.TableModel;
import com.api.backend.services.TableService;




@RestController
@RequestMapping("/table")
public class TableControl {
    @Autowired
    TableService tableService;

    @GetMapping("/getAll")
    public List<TableModel> ObtainTableList(){
        return tableService.ObtainTableList();
    }
    
    @PostMapping("/create")
    public TableModel CreateTable(@RequestBody TableModel table){
        return this.tableService.CreateTable(table);
    }
    
}

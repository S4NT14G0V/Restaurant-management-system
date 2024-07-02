package com.api.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.backend.model.EmployeeModel;
import com.api.backend.services.EmployeeService;




@RestController
@RequestMapping("/employee")
public class EmployeeControl {
    @Autowired
    EmployeeService employeeService;

    @GetMapping()
    public List<EmployeeModel> ObtainEmployeList(){
        return employeeService.ObtainEmployeList();
    }
    
    @PostMapping()
    public EmployeeModel CreateEmploye(@RequestBody EmployeeModel employee){
        return this.employeeService.CreateEmploye(employee);
    }
    
}

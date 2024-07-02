package com.api.backend.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.EmployeeModel;
import com.api.backend.repository.EmployeeRepo;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;

    public List<EmployeeModel> ObtainEmployeList(){
        return (List<EmployeeModel>) employeeRepo.findAll();
    }

    public EmployeeModel CreateEmploye(EmployeeModel employee){
        return employeeRepo.save(employee);
    }
}

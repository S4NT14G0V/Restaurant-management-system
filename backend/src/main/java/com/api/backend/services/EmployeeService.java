package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.EmployeeModel;
import com.api.backend.repository.EmployeeRepo;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    public List<EmployeeModel> obtainEmployeeList() {
        System.out.println((List<EmployeeModel>) employeeRepo.findAll());
        return (List<EmployeeModel>) employeeRepo.findAll();
    }

    public EmployeeModel createEmployee(EmployeeModel employee) {
        return employeeRepo.save(employee);
    }

    public EmployeeModel updateEmployee(EmployeeModel employee) {
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(int id) {
        employeeRepo.deleteById(id);
    }
}

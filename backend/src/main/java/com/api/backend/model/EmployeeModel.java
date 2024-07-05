package com.api.backend.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "employee")
public class EmployeeModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(unique=true, nullable = false)
    private int id;
    private Long identification;
    private String name;
    private Long phone;
    private String job;
    private Double salary;
    private String horary; 

    public EmployeeModel() {
    }
    
    public EmployeeModel(String horary, int id, Long identification, String job, String name, Long phone, Double salary) {
        this.horary = horary;
        this.id = id;
        this.identification = identification;
        this.job = job;
        this.name = name;
        this.phone = phone;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Long getIdentification() {
        return identification;
    }

    public void setIdentification(Long identification) {
        this.identification = identification;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public String getHorary() {
        return horary;
    }

    public void setHorary(String horary) {
        this.horary = horary;
    }


    
}

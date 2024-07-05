package com.api.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.ProductModel;
import com.api.backend.repository.ProductRepo;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<ProductModel> obtainProductList() {
        return (List<ProductModel>) productRepo.findAll();
    }

    public ProductModel createProduct(ProductModel product) {
        return productRepo.save(product);
    }

    public ProductModel updateProduct(ProductModel product) {
        return productRepo.save(product);
    }

    public void deleteProduct(int id) {
        productRepo.deleteById(id);
    }
}


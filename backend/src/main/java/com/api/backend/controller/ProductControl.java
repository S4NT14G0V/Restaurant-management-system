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

import com.api.backend.model.ProductModel;
import com.api.backend.services.ProductService;

@RestController
@RequestMapping("/product")
public class ProductControl {

    @Autowired
    private ProductService productService;

    @GetMapping("/getAll")
    public List<ProductModel> obtainProductList() {
        return productService.obtainProductList();
    }

    @PostMapping("/create")
    public ProductModel createProduct(@RequestBody ProductModel product) {
        return productService.createProduct(product);
    }

    @PutMapping("/edit/{id}")
    public ProductModel updateProduct(@PathVariable int id, @RequestBody ProductModel product) {
        product.setId(id);
        return productService.updateProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }
}

package com.spring.react.shop.service;

import com.spring.react.shop.entity.Product;

import java.util.List;
import java.util.Set;

public interface ProductService {
    List<Product> getAllProducts();

    void saveProduct(Product product);

    Product getProduct(int id);

    void deleteProduct(int id);

    Product updateProduct(int id, Product prod);

    public List<Product> getProductsById(Set<Integer> ids);
}


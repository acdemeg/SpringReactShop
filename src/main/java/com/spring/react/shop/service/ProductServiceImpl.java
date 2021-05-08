package com.spring.react.shop.service;

import com.spring.react.shop.dao.ProductDAO;
import com.spring.react.shop.entity.Product;
import com.spring.react.shop.exception_handling.NoSuchModelException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductDAO productDAO;

    @Override
    @Transactional
    public List<Product> getAllProducts() {
        return productDAO.getAllProducts();
    }

    @Override
    @Transactional
    public void saveProduct(Product product) {
        productDAO.saveProduct(product);
    }

    @Override
    @Transactional
    public Product getProduct(int id) {
        return productDAO.getProduct(id);
    }

    @Override
    @Transactional
    public void deleteProduct(int id) {
        productDAO.deleteProduct(id);
    }

    @Override
    @Transactional
    public Product updateProduct(int id, Product prod) {
        Product product = this.getProduct(id);

        if(product == null){
            throw new NoSuchModelException("There is no product with ID = " + id + " in Database");
        }

        product.setNameProduct(prod.getNameProduct());
        product.setDescription(prod.getDescription());
        product.setCount(prod.getCount());
        product.setPrice(prod.getPrice());
        return product;
    }

    @Override
    @Transactional
    public List<Product> getProductsById(Set<Integer> ids) {
        return productDAO.getProductsById(ids);
    }
}

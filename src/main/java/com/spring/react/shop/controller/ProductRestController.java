package com.spring.react.shop.controller;

import com.spring.react.shop.entity.Product;
import com.spring.react.shop.exception_handling.NoSuchModelException;
import com.spring.react.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductRestController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> showAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable int id){
        Product product = productService.getProduct(id);

        if(product == null){
            throw new NoSuchModelException("There is no product with ID = " + id + " in Database");
        }
        return product;
    }

    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable int id){
        Product product = productService.getProduct(id);

        if(product == null){
            throw new NoSuchModelException("There is no product with ID = " + id + " in Database");
        }
        productService.deleteProduct(id);
        return "Product with ID = " + id + " was deleted";
    }

    @PostMapping("/products")
    public Product addNewProduct(@RequestBody Product product){
        productService.saveProduct(product);
        return product;
    }

    @PatchMapping("/products/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product prod){
        return productService.updateProduct(id, prod);
    }
}

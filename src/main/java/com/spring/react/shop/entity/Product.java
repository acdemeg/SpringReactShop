package com.spring.react.shop.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="\"Products\"")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="\"nameProduct\"")
    private String nameProduct;

    @Column(name="description")
    private String description;

    @Column(name="count")
    private int count;

    @Column(name="price")
    private double price;

    @Column(name="\"pathImage\"")
    private String pathImage;

    @Column(name="category")
    private String category;

    @Column(name="\"detailInfo\"")
    private String detailInfo;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="\"productId\"")
    private List<ProductsInOrder> productsInOrders;

    public Product(){}

    public Product(String nameProduct, String description, int count, double price, String pathImage, String category, String detailInfo) {
        this.nameProduct = nameProduct;
        this.description = description;
        this.count = count;
        this.price = price;
        this.pathImage = pathImage;
        this.category = category;
        this.detailInfo = detailInfo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPathImage() {
        return pathImage;
    }

    public void setPathImage(String pathImage) {
        this.pathImage = pathImage;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDetailInfo() {
        return detailInfo;
    }

    public void setDetailInfo(String detailInfo) {
        this.detailInfo = detailInfo;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", nameProduct=" + nameProduct +
                ", description='" + description + '\'' +
                ", count=" + count +
                ", price=" + price +
                ", pathImage='" + pathImage + '\'' +
                ", category='" + category + '\'' +
                ", detailInfo='" + detailInfo + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return id == product.id && nameProduct == product.nameProduct && count == product.count && Double.compare(product.price, price) == 0 && Objects.equals(description, product.description) && Objects.equals(pathImage, product.pathImage) && Objects.equals(category, product.category) && Objects.equals(detailInfo, product.detailInfo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nameProduct, description, count, price, pathImage, category, detailInfo);
    }
}

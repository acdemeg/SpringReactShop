package com.spring.react.shop.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="\"Product_in_Orders\"")
public class ProductInOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="count")
    private int count;

    @Column(name="\"productId\"")
    private int productId;

    @Column(name="\"orderId\"")
    private int orderId;

    public ProductInOrder(){}

    public ProductInOrder(int count, int productId, int orderId) {
        this.count = count;
        this.productId = productId;
        this.orderId = orderId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    @Override
    public String toString() {
        return "ProductsInOrder{" +
                "id=" + id +
                ", count=" + count +
                ", productId=" + productId +
                ", orderId=" + orderId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductInOrder that = (ProductInOrder) o;
        return id == that.id && count == that.count && productId == that.productId && orderId == that.orderId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, count, productId, orderId);
    }
}

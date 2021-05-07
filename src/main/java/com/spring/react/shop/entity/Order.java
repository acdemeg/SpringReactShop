package com.spring.react.shop.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="\"Orders\"")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="\"userId\"")
    private int userId;

    @Column(name="total")
    private double total;

    @Column(name="status")
    private String status;

    @Column(name="\"orderCode\"")
    private String orderCode;

    public Order(){}

    public Order(int userId, double total, String status, String orderCode) {
        this.userId = userId;
        this.total = total;
        this.status = status;
        this.orderCode = orderCode;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", userId=" + userId +
                ", total=" + total +
                ", status='" + status + '\'' +
                ", orderCode='" + orderCode + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return id == order.id && userId == order.userId && Double.compare(order.total, total) == 0 && Objects.equals(status, order.status) && Objects.equals(orderCode, order.orderCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, total, status, orderCode);
    }
}

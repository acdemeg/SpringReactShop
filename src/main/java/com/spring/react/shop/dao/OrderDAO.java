package com.spring.react.shop.dao;

import com.spring.react.shop.entity.Order;

import java.util.List;

public interface OrderDAO {
    List<Order> getAllOrders();

    List<Order> getAllOrdersByUserId(int id);

    void saveOrder(Order order);

    Order getOrder(int id);

    void deleteOrder(int id);
}

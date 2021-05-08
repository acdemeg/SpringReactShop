package com.spring.react.shop.service;

import com.spring.react.shop.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();

    List<Order> getAllOrdersByUserId(int id);

    void saveOrder(Order order);

    Order getOrder(int id);

    void deleteOrder(int id);

    Order updateOrder(int id, Order ord);
}


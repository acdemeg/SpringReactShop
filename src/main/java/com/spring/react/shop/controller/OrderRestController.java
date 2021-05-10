package com.spring.react.shop.controller;

import com.spring.react.shop.entity.Order;
import com.spring.react.shop.exception_handling.NoSuchModelException;
import com.spring.react.shop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderRestController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    public List<Order> showAllOrders(){
        return orderService.getAllOrders();
    }

    @GetMapping("/orders/{id}")
    public Order getOrder(@PathVariable int id){
        Order order = orderService.getOrder(id);

        if(order == null){
            throw new NoSuchModelException("There is no order with ID = " + id + " in Database");
        }
        return order;
    }

    @GetMapping("/users/{id}/orders")
    public List<Order> getOrdersByUserId(@PathVariable int id){
       return orderService.getAllOrdersByUserId(id);
    }

    @DeleteMapping("/orders/{id}")
    public String deleteOrder(@PathVariable int id){
        Order order = orderService.getOrder(id);

        if(order == null){
            throw new NoSuchModelException("There is no order with ID = " + id + " in Database");
        }
        orderService.deleteOrder(id);
        return "Order with ID = " + id + " was deleted";
    }

    @PostMapping("/orders")
    public Order addNewOrder(@RequestBody Order order){
        orderService.saveOrder(order);
        return order;
    }

    @PatchMapping("/orders/{id}")
    public Order updateOrder(@PathVariable int id, @RequestBody Order order){
        return orderService.updateOrder(id, order);
    }
}

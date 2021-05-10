package com.spring.react.shop.service;

import com.spring.react.shop.dao.OrderDAO;
import com.spring.react.shop.entity.Order;
import com.spring.react.shop.entity.Product;
import com.spring.react.shop.entity.ProductInOrder;
import com.spring.react.shop.exception_handling.NoSuchModelException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderDAO orderDAO;
    @Autowired
    private ProductService productService;

    @Override
    @Transactional
    public List<Order> getAllOrders() {
        return orderDAO.getAllOrders();
    }

    @Override
    @Transactional
    public List<Order> getAllOrdersByUserId(int id) {
        return orderDAO.getAllOrdersByUserId(id);
    }

    @Override
    @Transactional
    public void saveOrder(Order order) {
        String orderCode = this.generateOrderCode();
        int id =  Math.abs(UUID.randomUUID().hashCode());

        order.setOrderCode(orderCode);
        order.setId(id);
        //setting orderId
        order.getProductsInOrder().forEach(ord -> ord.setOrderId(id));

        Map<Integer,Integer> mapProdIdCount = order.getProductsInOrder().stream()
                .collect(Collectors.toMap(ProductInOrder::getProductId, ProductInOrder::getCount));
        //get product from order
        List<Product> products = productService.getProductsById(mapProdIdCount.keySet());
        //convert to map
        Map<Integer, Product> mapIdProduct = products.stream()
                .collect(Collectors.toMap(Product::getId, product -> product));

        //decrease count products
        mapProdIdCount.forEach((key, value) -> {
            Product product = mapIdProduct.get(key);
            product.setCount(product.getCount() - value);
        });

        orderDAO.saveOrder(order);
    }

    @Override
    @Transactional
    public Order getOrder(int id) {
        return orderDAO.getOrder(id);
    }

    @Override
    @Transactional
    public void deleteOrder(int id) {
        orderDAO.deleteOrder(id);
    }

    @Override
    @Transactional
    public Order updateOrder(int id, Order ord) {
        Order order = this.getOrder(id);

        if(order == null){
            throw new NoSuchModelException("There is no order with ID = " + id + " in Database");
        }
        order.setStatus(ord.getStatus());
        return order;
    }

    private String generateOrderCode(){
        String codeStr = new Date().toString();
        codeStr = codeStr.substring(0, codeStr.length() - 8);
        String salt = Double.valueOf(Math.random() * 899 + 100).toString();
        salt = salt.substring(0, 3);
        return codeStr + salt;
    }
}

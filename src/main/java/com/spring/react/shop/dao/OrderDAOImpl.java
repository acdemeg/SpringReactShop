package com.spring.react.shop.dao;

import com.spring.react.shop.entity.Order;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class OrderDAOImpl implements OrderDAO{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    @Transactional
    public List<Order> getAllOrders() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from Order", Order.class).getResultList();
    }

    @Override
    @Transactional
    public List<Order> getAllOrdersByUserId(int id) {
        Session session = sessionFactory.getCurrentSession();
        Query<Order> query = session.createQuery("from Order where userId =: id", Order.class);
        query.setParameter("id", id);
        return query.getResultList();
    }

    @Override
    @Transactional
    public void saveOrder(Order order) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(order);
    }

    @Override
    @Transactional
    public Order getOrder(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Order.class, id);
    }

    @Override
    @Transactional
    public void deleteOrder(int id) {
        Session session = sessionFactory.getCurrentSession();
        Query<Order> query = session.createQuery("delete from Order where id =: orderId" );
        query.setParameter("orderId", id);
        query.executeUpdate();
    }
}

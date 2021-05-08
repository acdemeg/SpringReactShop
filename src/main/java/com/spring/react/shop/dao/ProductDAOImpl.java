package com.spring.react.shop.dao;

import com.spring.react.shop.entity.Product;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Repository
public class ProductDAOImpl implements ProductDAO{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    @Transactional
    public List<Product> getAllProducts() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from Product", Product.class).getResultList();
    }

    @Override
    @Transactional
    public void saveProduct(Product product) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(product);
    }

    @Override
    @Transactional
    public Product getProduct(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Product.class, id);
    }

    @Override
    @Transactional
    public List<Product> getProductsById(Set<Integer> ids) {
        Session session = sessionFactory.getCurrentSession();
        Query<Product> query = session.createQuery("from Product where id in (:ids)");
        query.setParameterList("ids", ids);
        return query.getResultList();
    }

    @Override
    @Transactional
    public void deleteProduct(int id) {
        Session session = sessionFactory.getCurrentSession();
        Query<Product> query = session.createQuery("delete from Product where id =: productId");
        query.setParameter("productId", id);
        query.executeUpdate();
    }
}

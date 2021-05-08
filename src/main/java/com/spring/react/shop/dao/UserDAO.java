package com.spring.react.shop.dao;

import com.spring.react.shop.entity.User;

import java.util.List;

public interface UserDAO {
    List<User> getAllUsers();

    void saveUser(User user);

    User getUser(int id);

    User userLogin(User user);

    void deleteUser(int id);
}

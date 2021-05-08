package com.spring.react.shop.service;

import com.spring.react.shop.entity.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    void saveUser(User user);

    User getUser(int id);

    User userLogin(User user);

    void deleteUser(int id);

    User updateUser(int id, User usr);
}

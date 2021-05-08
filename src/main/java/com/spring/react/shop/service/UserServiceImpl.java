package com.spring.react.shop.service;

import com.spring.react.shop.dao.UserDAO;
import com.spring.react.shop.entity.User;
import com.spring.react.shop.exception_handling.NoSuchModelException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDAO userDAO;

    @Override
    @Transactional
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    @Override
    @Transactional
    public void saveUser(User user) {
        userDAO.saveUser(user);
    }

    @Override
    @Transactional
    public User getUser(int id) {
        return userDAO.getUser(id);
    }

    @Override
    @Transactional
    public User updateUser(int id, User usr) {
        User user = this.getUser(id);

        if(user == null){
            throw new NoSuchModelException("There is no user with ID = " + id + " in Database");
        }

        user.setName(usr.getName());
        user.setPhone(usr.getPhone());
        user.setEmail(usr.getEmail());
        user.setBalance(usr.getBalance());
        user.setImagePath(usr.getImagePath());
        return user;
    }

    @Override
    @Transactional
    public void deleteUser(int id) {
        userDAO.deleteUser(id);
    }
}

package com.spring.react.shop.controller;

import com.spring.react.shop.entity.User;
import com.spring.react.shop.exception_handling.NoSuchModelException;
import com.spring.react.shop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRestController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> showAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable int id){
        User user = userService.getUser(id);

        if(user == null){
            throw new NoSuchModelException("There is no user with ID = " + id + " in Database");
        }
        return user;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable int id){
        User user = userService.getUser(id);

        if(user == null){
            throw new NoSuchModelException("There is no user with ID = " + id + " in Database");
        }
        userService.deleteUser(id);
        return "User with ID = " + id + " was deleted";
    }

    @PostMapping("/users")
    public User addNewUser(@RequestBody User user){
        userService.saveUser(user);
        return user;
    }

    @PatchMapping("/users/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User usr){
        return userService.updateUser(id, usr);
    }
}

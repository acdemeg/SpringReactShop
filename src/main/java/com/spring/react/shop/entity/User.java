package com.spring.react.shop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="\"Users\"")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="phone")
    private String phone;

    @Column(name="email")
    private String email;

    @Column(name="balance")
    private double balance;

    @Column(name="password")
    private String password;

    @Column(name="role", insertable = false, updatable = false)
    private String role;

    @Column(name="\"imagePath\"", updatable = false)
    private String imagePath;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="\"userId\"")
    private List<Order> orders;

    public User() {
    }

    public User(String name, String phone, String email, double balance, String password, String role, String imagePath) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.balance = balance;
        this.password = password;
        this.role = role;
        this.imagePath = imagePath;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @JsonIgnore
    @JsonProperty(value = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", balance=" + balance +
                ", password='" + password + '\'' +
                ", role=" + role +
                ", imagePath='" + imagePath + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id
                && Double.compare(user.balance, balance) == 0
                && Objects.equals(name, user.name)
                && Objects.equals(phone, user.phone)
                && Objects.equals(email, user.email)
                && Objects.equals(password, user.password)
                && Objects.equals(role, user.role)
                && Objects.equals(imagePath, user.imagePath);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, phone, email, balance, password, role, imagePath);
    }
}

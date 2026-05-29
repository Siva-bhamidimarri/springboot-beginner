package com.siva.WebProject.services;

import java.util.*;
import org.springframework.stereotype.Service;
import com.siva.WebProject.model.User;

@Service
public class UserService {

    public List<User> allUsers;

    public UserService() {

        allUsers = new ArrayList<>();

        allUsers.add(new User("Siva", "images/john.png", "Male", 1));
        allUsers.add(new User("Akshay", "images/jane.png", "Female", 2));
    }

    public List<User> getAllUsers() {
        return allUsers;
    }
}
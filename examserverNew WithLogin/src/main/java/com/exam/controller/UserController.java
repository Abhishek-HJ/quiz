package com.exam.controller;


import com.exam.Service.UserService;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        Set<UserRole> roles = new HashSet<>();
        Role role = new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        roles.add(userRole);

        return this.userService.createUSer(user,roles);
    }
    @GetMapping("/{userName}")
    public User getUser(@PathVariable("userName") String userName){

        return  this.userService.getUser(userName);

    }
    @DeleteMapping("/{userId}")
    public  void  deleteUser(@PathVariable("userId") Long userId){
        this.userService.deleteUser(userId);
    }


    @PostMapping("/login/{userName}/{password}")
    public int login(@PathVariable("userName") String userName, @PathVariable("password") String password){
       return this.userService.loginUser(userName ,password);
    }
}

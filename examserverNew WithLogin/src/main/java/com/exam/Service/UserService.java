package com.exam.Service;

import com.exam.model.User;
import com.exam.model.UserRole;

import java.util.Set;


public interface UserService {

    //create user
    public User createUSer(User user , Set<UserRole> roles) throws Exception;

    //get user by userName
    public  User getUser(String userName);

    //delete user

    public void deleteUser(Long userId);


    //login user
    public int loginUser(String userName , String password);



}

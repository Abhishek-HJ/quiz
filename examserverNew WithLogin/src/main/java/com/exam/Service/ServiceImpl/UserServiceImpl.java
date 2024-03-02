package com.exam.Service.ServiceImpl;

import com.exam.Service.UserService;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repo.RoleRepository;
import com.exam.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;


    @Override
    public User createUSer(User user, Set<UserRole> userRoles) throws Exception {

      User local =  this.userRepository.findByUserName(user.getUserName());
        if (local != null){
            System.out.println("User already exists");
            throw new Exception("User already exists");
        }
        else {
            // create user

            //save role
            for(UserRole ur : userRoles){
                roleRepository.save(ur.getRole());
            }

            //save roles to user
            user.getUserRoles().addAll(userRoles);
            //save user
            local = this.userRepository.save(user);
        }
        return local;
    }

    @Override
    public User getUser(String userName) {
        return this.userRepository.findByUserName(userName);
    }
    @Override
    public void deleteUser(Long userId) {
        // Add your implementation to delete the user with the given userId
        // For example:
        // userRepository.deleteById(userId);
    }

    @Override
    public int loginUser(String userName, String password) {
        User fetchedUser = userRepository.findByUserName(userName);

        if (fetchedUser.getUserName().equals(userName) && fetchedUser.getPassword().equals(password) ){
            //login success
            System.out.println("Login Sucess");
            if (fetchedUser.getUserRoles().contains(44) ){
                //admin
                System.out.println("44");

                return 44;
            }else {
                //normal user
                System.out.println("45");
                return 45;
            }
        }            System.out.println("Login Failed");

        return 0;
    }
}


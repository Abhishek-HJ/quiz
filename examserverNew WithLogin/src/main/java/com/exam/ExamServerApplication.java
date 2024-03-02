package com.exam;

import com.exam.Service.UserService;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
 class ExamserverApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;


	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code");

		////create user
		//		User user = new User();
		//		user.setFirstName("Abhi");
		//		user.setLastName("K S");
		//		user.setUserName("thenameisabhi");
		//		user.setPassword("1234");
		//		user.setEmail("abhi@gmail.com");
		//		user.setProfile("abhi.png");
		//
		//		//create role
		//		Role role1 = new Role();
		//		role1.setRoleName("ADMIN");
		//		role1.setRoleId(44L);
		//
		//		//create UserRole
		//		UserRole userRole = new UserRole();
		//		userRole.setRole(role1);
		//		userRole.setUser(user);
		//
		//
		//		//create set of userRole
		//		Set<UserRole> userRoleSet  = new HashSet<UserRole>();
		//		userRoleSet.add(userRole);
		//
		//
		//		//create new user
		//		User user1 = this.userService.createUSer(user,userRoleSet);
		//		System.out.println(user1.getUserName());


	}
}

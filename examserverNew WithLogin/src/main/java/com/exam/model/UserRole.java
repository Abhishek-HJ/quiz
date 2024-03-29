package com.exam.model;

import jakarta.persistence.*;
@Entity
@Table(name = "userRoles")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userRoleId;



    //many UserRoles have only 1 user
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @ManyToOne
    private  Role role;

    public UserRole() {
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Long getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(Long userRoleId) {
        this.userRoleId = userRoleId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

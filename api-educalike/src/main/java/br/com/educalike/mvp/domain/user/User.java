package br.com.educalike.mvp.domain.user;

import jakarta.persistence.OneToOne;

public class User {
    private String login;
    private String password;
    private UserRole role;
    @OneToOne(mappedBy = "user")
    private Account account;
}

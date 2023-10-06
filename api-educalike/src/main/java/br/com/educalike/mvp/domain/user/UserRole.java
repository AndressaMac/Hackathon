package br.com.educalike.mvp.domain.user;

import lombok.Getter;

@Getter
public enum UserRole {
    ONG("ong"),
    STUDENT("student");

    private String role;

    UserRole(String role) {
        this.role = role;
    }


}

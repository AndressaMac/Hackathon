package br.com.educalike.mvp.controller;

import br.com.educalike.mvp.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/{id}")
    public ResponseEntity<Object> getAccountById(@PathVariable Long id) {
        Object account = accountService.getAccountById(id);
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

}

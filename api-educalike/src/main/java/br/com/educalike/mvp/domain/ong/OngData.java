package br.com.educalike.mvp.domain.ong;

import br.com.educalike.mvp.domain.address.DataAddress;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record OngData (
    @NotBlank
    String name,
    @NotBlank
    String document,
    @NotBlank
    @Email
    String email,
    String phoneNumber,
    @Valid
    DataAddress address ) {

}

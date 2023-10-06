package br.com.educalike.mvp.domain.address;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record DataAddress(
        @NotBlank
        String streetAddress,
        @NotBlank
        String neighborhood,
        @NotBlank
        @Pattern(regexp="\\d{8}")
        String postalCode,
        @NotBlank
        String city,
        @NotBlank
        String state,
        String complement,
        String streetNumber
) {
}

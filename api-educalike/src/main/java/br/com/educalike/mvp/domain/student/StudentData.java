package br.com.educalike.mvp.domain.student;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record StudentData(
    @NotBlank
    String name,
    @Min(10)
    Integer age
) {
}

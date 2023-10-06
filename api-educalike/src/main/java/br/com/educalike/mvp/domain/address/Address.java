package br.com.educalike.mvp.domain.address;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private String streetAddress;
    private String neighborhood;
    private String postalCode;
    private String streetNumber;
    private String complement;
    private String city;
    private String state;

    public Address(DataAddress data) {
        this.streetAddress = data.streetAddress();
        this.neighborhood = data.neighborhood();
        this.postalCode = data.neighborhood();
        this.streetNumber = data.streetNumber();
        this.complement = data.complement();
        this.city = data.city();
        this.state = data.state();
    }

}

package br.com.educalike.mvp.domain.ong;

import br.com.educalike.mvp.domain.address.Address;
import br.com.educalike.mvp.domain.course.Course;
import br.com.educalike.mvp.domain.post.Post;
import br.com.educalike.mvp.domain.user.Account;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;


@Table(name="tb_ong")
@Entity(name="ong")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ong extends Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String document;
    private String email;
    private String phoneNumber;
    @Embedded
    private Address address;
    @OneToMany(mappedBy = "ong")
    private List<Course> courses;
    @OneToMany(mappedBy = "ong")
    private List<Post> posts;
    private Boolean isActive;

    public Ong(OngData data) {
        this.isActive = true;
        this.name = data.name();
        this.document = data.document();
        this.email = data.email();
        this.phoneNumber = data.phoneNumber();
        this.address = new Address(data.address());
    }


}

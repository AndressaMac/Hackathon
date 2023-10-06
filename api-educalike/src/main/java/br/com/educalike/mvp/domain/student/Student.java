package br.com.educalike.mvp.domain.student;

import br.com.educalike.mvp.domain.like.Like;
import br.com.educalike.mvp.domain.recommendation.Recommendation;
import br.com.educalike.mvp.domain.user.Account;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Table(name="tb_users")
@Entity(name="user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student extends Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer age;
    @OneToMany(mappedBy = "student")
    private List<Like> likes;
    @OneToMany(mappedBy = "student")
    private List<Recommendation> recommendations;
    @Column(name = "interestAreas", length = 1000)
    private String studentInterestAreas;
    private Boolean isActive;


    public Student(StudentData data) {
        this.isActive = true;
        this.name = data.name();
        this.age = data.age();
    }

    public void addLike(Like like) {
        this.likes.add(like);
    }

    public void addInterestAreas(Like like) {
        String likeTags = like.getPost().getTags();
        this.setStudentInterestAreas(this.studentInterestAreas.concat(likeTags));
    }

    public void addRecommendation(Recommendation recommendation) {
        this.recommendations.add(recommendation);
    }
}

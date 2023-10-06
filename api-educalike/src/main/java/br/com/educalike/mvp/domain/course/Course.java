package br.com.educalike.mvp.domain.course;

import br.com.educalike.mvp.domain.recommendation.Recommendation;
import br.com.educalike.mvp.domain.ong.Ong;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Table(name="tb_courses")
@Entity(name="course")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @ManyToOne
    @JoinColumn(name="ong_id")
    private Ong ong;
    @OneToMany(mappedBy = "course")
    private List<Recommendation> recommendations;
    @Column(name = "tags", length = 1000)
    private String tags;
    private Boolean isActive;

}

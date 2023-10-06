package br.com.educalike.mvp.domain.recommendation;

import br.com.educalike.mvp.domain.course.Course;
import br.com.educalike.mvp.domain.student.Student;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="tb_recommendation")
@Entity(name="recommendation")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Recommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name="student_id")
    private Student student;
    @ManyToOne
    @JoinColumn(name="course_id")
    private Course course;

    public Recommendation(Student student, Course course) {
        this.student = student;
        this.course = course;
    }
}

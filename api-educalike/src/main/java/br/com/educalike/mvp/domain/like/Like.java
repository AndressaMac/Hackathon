package br.com.educalike.mvp.domain.like;

import br.com.educalike.mvp.domain.post.Post;
import br.com.educalike.mvp.domain.student.Student;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="tb_likes")
@Entity(name="like")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name="student_id")
    private Student student;
    @ManyToOne
    @JoinColumn(name="post_id")
    private Post post;

    public Like(Student student, Post post) {
        this.student = student;
        this.post = post;
    }
}

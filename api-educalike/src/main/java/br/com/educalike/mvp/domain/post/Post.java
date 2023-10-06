package br.com.educalike.mvp.domain.post;

import br.com.educalike.mvp.domain.course.ContentType;
import br.com.educalike.mvp.domain.like.Like;
import br.com.educalike.mvp.domain.ong.Ong;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Table(name="tb_videos")
@Entity(name="videos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private ContentType contentType;
    private String link;
    @ManyToOne
    @JoinColumn(name="ong_id")
    private Ong ong;
    @OneToMany(mappedBy = "post")
    private List<Like> likes;
    @Column(name = "tags", length = 1000)
    private String tags;
    private Boolean isActive;

    public void addLike(Like like) {
        this.likes.add(like);
    }
}

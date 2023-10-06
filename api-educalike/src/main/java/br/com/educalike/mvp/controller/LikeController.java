package br.com.educalike.mvp.controller;

import br.com.educalike.mvp.domain.like.Like;
import br.com.educalike.mvp.domain.like.LikeData;
import br.com.educalike.mvp.domain.ong.OngDetail;
import br.com.educalike.mvp.domain.post.Post;
import br.com.educalike.mvp.domain.student.Student;
import br.com.educalike.mvp.repository.LikeRepository;
import br.com.educalike.mvp.repository.PostRepository;
import br.com.educalike.mvp.repository.StudentRepository;
import br.com.educalike.mvp.service.LikeService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/like")
public class LikeController {

//    @Autowired
//    LikeService likeService;
    @Autowired
    PostRepository postRepository;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    LikeRepository likeRepository;


    @PostMapping
    @Transactional
    public ResponseEntity like(@RequestBody LikeData data, UriComponentsBuilder uriBuilder) {
        Post post = postRepository.findById(data.postId()).orElse(null);
        Student student = studentRepository.findById(data.studentId()).orElse(null);

        if (post != null && student != null) {
            Like like = new Like(student, post);
            likeRepository.save(like);
            student.addLike(like);
            student.addInterestAreas(like);
            post.addLike(like);
            studentRepository.save(student);
            postRepository.save(post);
            var uri = uriBuilder.path("/ong/{id}").buildAndExpand(like.getId()).toUri();
            return ResponseEntity.created(uri).body(like);
        }else {
            return ResponseEntity.badRequest().build();
        }
    }

}

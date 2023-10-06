package br.com.educalike.mvp.controller;

import br.com.educalike.mvp.domain.post.Post;
import br.com.educalike.mvp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/post")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping
    public ResponseEntity<Page<Post>> findAll(Pageable pageable) {
        var page = postRepository.findAll(pageable);
        return ResponseEntity.ok(page);
    }
}

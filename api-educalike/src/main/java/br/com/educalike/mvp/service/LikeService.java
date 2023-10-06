package br.com.educalike.mvp.service;

import br.com.educalike.mvp.domain.student.Student;
import br.com.educalike.mvp.repository.PostRepository;
import br.com.educalike.mvp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class LikeService {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    PostRepository postRepository;


}

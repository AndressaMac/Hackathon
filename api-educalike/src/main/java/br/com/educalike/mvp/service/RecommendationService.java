package br.com.educalike.mvp.service;

import br.com.educalike.mvp.domain.student.Student;
import br.com.educalike.mvp.repository.CourseRepository;
import br.com.educalike.mvp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecommendationService {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    CourseRepository courseRepository;
}

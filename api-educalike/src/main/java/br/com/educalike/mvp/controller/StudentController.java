package br.com.educalike.mvp.controller;

import br.com.educalike.mvp.domain.student.Student;
import br.com.educalike.mvp.domain.student.StudentData;
import br.com.educalike.mvp.domain.student.StudentDetail;
import br.com.educalike.mvp.repository.StudentRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1/student")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping
    @Transactional
    public ResponseEntity registration (@RequestBody @Valid StudentData data, UriComponentsBuilder uriBuilder) {
        Student student = new Student(data);
        studentRepository.save(student);
        var uri = uriBuilder.path("/ong/{id}").buildAndExpand(student.getId()).toUri();
        return ResponseEntity.created(uri).body(new StudentDetail(student));
    }
}

package br.com.educalike.mvp.controller;

import br.com.educalike.mvp.domain.course.Course;
import br.com.educalike.mvp.domain.recommendation.Recommendation;
import br.com.educalike.mvp.domain.student.Student;
import br.com.educalike.mvp.repository.CourseRepository;
import br.com.educalike.mvp.repository.RecommendationRepository;
import br.com.educalike.mvp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1/recomendation")
public class RecommendationController {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    RecommendationRepository recommendationRepository;
    @Autowired
    CourseRepository courseRepository;

    @GetMapping("/{id}")
    public ResponseEntity getRecommendation(@PathVariable Long studentId, Pageable pageable) {
        Student student = studentRepository.findById(studentId).orElse(null);
        if (student != null) {
            String[] interestAreas = student.getStudentInterestAreas().replaceAll("\\s+", "").split(",");
            List<Course> courses = courseRepository.findAll();

            for (String interest : interestAreas) {
                for (Course course : courses) {
                    ArrayList<String> tags = new ArrayList<>();
                    String[] strings = course.getTags().replaceAll(" ", "").split(",");

                    tags.addAll(Arrays.asList(strings));
                    boolean match = tags.contains(interest);

                    if (match) {
                        Recommendation recommendation = new Recommendation(student, course);
                        recommendationRepository.save(recommendation);
                        student.addRecommendation(recommendation);
                        studentRepository.save(student);
                    }
                }
            }
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}

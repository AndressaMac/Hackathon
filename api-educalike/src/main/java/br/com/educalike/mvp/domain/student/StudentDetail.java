package br.com.educalike.mvp.domain.student;

import br.com.educalike.mvp.domain.like.Like;
import br.com.educalike.mvp.domain.recommendation.Recommendation;

import java.util.List;

public record StudentDetail(Long id, String name, Integer age, List<Like> likes, List<Recommendation> recommendations) {

    public StudentDetail(Student student) {
        this(student.getId(), student.getName(), student.getAge(), student.getLikes(), student.getRecommendations());
    }
}

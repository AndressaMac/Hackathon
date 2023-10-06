package br.com.educalike.mvp.repository;

import br.com.educalike.mvp.domain.recommendation.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
}

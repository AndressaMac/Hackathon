package br.com.educalike.mvp.repository;

import br.com.educalike.mvp.domain.like.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
}

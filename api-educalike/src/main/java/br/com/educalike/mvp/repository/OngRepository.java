package br.com.educalike.mvp.repository;

import br.com.educalike.mvp.domain.ong.Ong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long> {
}

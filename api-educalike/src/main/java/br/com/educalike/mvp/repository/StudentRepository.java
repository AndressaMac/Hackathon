package br.com.educalike.mvp.repository;

import br.com.educalike.mvp.domain.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}

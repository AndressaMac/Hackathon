package br.com.educalike.mvp.service;

import br.com.educalike.mvp.domain.ong.Ong;
import br.com.educalike.mvp.domain.ong.OngDetail;
import br.com.educalike.mvp.domain.student.Student;
import br.com.educalike.mvp.domain.student.StudentDetail;
import br.com.educalike.mvp.domain.user.Account;
import br.com.educalike.mvp.repository.OngRepository;
import br.com.educalike.mvp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private OngRepository ongRepository;

    public Object getAccountById(Long id) {
        Ong ong = ongRepository.findById(id).orElse(null);
        if (ong != null) {
            return new OngDetail(ong);
        }
        Student student = studentRepository.findById(id).orElse(null);
        if (student != null) {
            return new StudentDetail(student);
        }
        return null;
    }

}

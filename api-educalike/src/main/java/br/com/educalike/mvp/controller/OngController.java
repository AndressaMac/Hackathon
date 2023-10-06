package br.com.educalike.mvp.controller;

import br.com.educalike.mvp.domain.ong.Ong;
import br.com.educalike.mvp.domain.ong.OngData;
import br.com.educalike.mvp.domain.ong.OngDetail;
import br.com.educalike.mvp.repository.OngRepository;
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
@RequestMapping("/api/v1/ong")
public class OngController {

    @Autowired
    private OngRepository ongRepository;

    @PostMapping
    @Transactional
    public ResponseEntity registration (@RequestBody @Valid OngData data, UriComponentsBuilder uriBuilder) {
        Ong ong = new Ong(data);
        ongRepository.save(ong);
        var uri = uriBuilder.path("/ong/{id}").buildAndExpand(ong.getId()).toUri();
        return ResponseEntity.created(uri).body(new OngDetail(ong));
    }
}

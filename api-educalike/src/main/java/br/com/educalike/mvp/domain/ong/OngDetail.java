package br.com.educalike.mvp.domain.ong;

import br.com.educalike.mvp.domain.address.Address;
import br.com.educalike.mvp.domain.post.Post;

import java.util.List;

public record OngDetail(Long id, String name, String document, String email, String phoneNumber, Address address, List<Post> posts) {

    public OngDetail(Ong ong) {
        this(ong.getId(), ong.getName(), ong.getDocument(), ong.getEmail(), ong.getPhoneNumber(), ong.getAddress(), ong.getPosts());
    }
}
